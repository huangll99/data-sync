package com.hll.datasync.sync;

import com.alibaba.otter.canal.client.CanalConnector;
import com.alibaba.otter.canal.protocol.CanalEntry;
import com.alibaba.otter.canal.protocol.Message;
import com.hll.datasync.yaml.DataSyncConfig;
import com.hll.datasync.yaml.Database;
import com.hll.datasync.yaml.Task;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import org.springframework.util.ResourceUtils;
import org.yaml.snakeyaml.Yaml;

import javax.annotation.Resource;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Executors;

/**
 * Created by huangll on 2019-05-10
 */
@Slf4j
@Component
public class DataPullManager implements ApplicationRunner, Runnable {

    @Resource
    private CanalClient canalClient;

    @Resource
    private DataPushManager dataPushManager;

    private Map<String, Database> dbMap = new HashMap<>();

    private Map<String, Task> taskMap = new HashMap<>();

    @Value("${data.sync.config.file}")
    private String dataSyncConfigFile;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        loadDataSyncConfig();
        Executors.newSingleThreadExecutor().submit(this);
    }

    public void loadDataSyncConfig() throws FileNotFoundException {
        Yaml yaml = new Yaml();
        DataSyncConfig dataSyncConfig = yaml.loadAs(new FileInputStream(ResourceUtils.getFile(dataSyncConfigFile)), DataSyncConfig.class);
        dbMap.clear();
        taskMap.clear();
        dataSyncConfig.getDbs().forEach(database -> dbMap.put(database.getDb(), database));
        dataSyncConfig.getTasks().forEach(task -> taskMap.put(task.getSourceTable(), task));
    }

    @Override
    public void run() {
        System.out.println("---------------start------------------------");
        CanalConnector connector = canalClient.getCanalConnector();
        int batchSize = 1000;
        try {
            connector.connect();
            connector.subscribe(canalClient.getCanalProperties().getFilter());
            connector.rollback();
            while (true) {
                Message message = connector.getWithoutAck(batchSize); // 获取指定数量的数据
                long batchId = message.getId();
                int size = message.getEntries().size();
                if (batchId == -1 || size == 0) {
                    try {
                        Thread.sleep(canalClient.getCanalProperties().getAcquireInterval());
                    } catch (InterruptedException e) {
                    }
                } else {
                    // System.out.printf("message[batchId=%s,size=%s] \n", batchId, size);
                    handleEntry(message.getEntries());
                }

                connector.ack(batchId); // 提交确认
                // connector.rollback(batchId); // 处理失败, 回滚数据
            }

        } catch (Exception e) {
            log.error("连接canal异常", e);
        } finally {
            connector.disconnect();
        }
    }

    private void handleEntry(List<CanalEntry.Entry> entrys) {
        for (CanalEntry.Entry entry : entrys) {
            if (entry.getEntryType() == CanalEntry.EntryType.TRANSACTIONBEGIN || entry.getEntryType() == CanalEntry.EntryType.TRANSACTIONEND) {
                continue;
            }

            CanalEntry.RowChange rowChage = null;
            try {
                rowChage = CanalEntry.RowChange.parseFrom(entry.getStoreValue());
            } catch (Exception e) {
                throw new RuntimeException("ERROR ## parser of eromanga-event has an error , data:" + entry.toString(),
                    e);
            }

            // System.out.println(String.format("================&gt; binlog[%s:%s] , name[%s,%s] , eventType : %s",
            //                entry.getHeader().getLogfileName(), entry.getHeader().getLogfileOffset(),
            //                entry.getHeader().getSchemaName(), entry.getHeader().getTableName(),
            //                eventType));

            CanalEntry.EventType eventType = rowChage.getEventType();
            String sourceTableName = entry.getHeader().getTableName();

            if (!taskMap.containsKey(sourceTableName)) {
                log.info("找不到该表的同步配置：" + sourceTableName);
                return;
            }

            Task task = taskMap.get(sourceTableName);

            List<CanalEntry.Column> sourceColumns;

            for (CanalEntry.RowData rowData : rowChage.getRowDatasList()) {
                if (eventType == CanalEntry.EventType.DELETE) {
                    sourceColumns = rowData.getBeforeColumnsList();
                } else if (eventType == CanalEntry.EventType.INSERT) {
                    sourceColumns = rowData.getAfterColumnsList();
                } else if (eventType == CanalEntry.EventType.UPDATE) {
                    sourceColumns = rowData.getAfterColumnsList();
                } else {
                    continue;
                }

                SyncTask syncTask = SyncTask.builder().eventType(eventType).sourceColumns(sourceColumns).task(task).dbMap(dbMap).build();
                dataPushManager.execute(syncTask);
            }
        }
    }

}
