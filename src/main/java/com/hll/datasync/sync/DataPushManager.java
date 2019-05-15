package com.hll.datasync.sync;

import com.alibaba.otter.canal.protocol.CanalEntry;
import com.google.common.base.Joiner;
import com.hll.datasync.yaml.Column;
import com.hll.datasync.yaml.Database;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.sql.*;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.stream.Collectors;

/**
 * Created by huangll on 2019-05-13
 */
@Slf4j
@Component
public class DataPushManager {

    private ExecutorService syncTaskPool = Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors());

    public void execute(SyncTask syncTask) {
        syncTaskPool.submit(() -> {
            Map<String, String> sourceColumnMap = syncTask.getSourceColumns().stream().collect(Collectors.toMap(CanalEntry.Column::getName, CanalEntry.Column::getValue));
            syncTask.getTask().getTargets().forEach(target -> {
                String targetTable = target.getTargetTable();
                List<Column> columns = target.getColumns();
                Database database = syncTask.getDbMap().get(target.getDb());

                List<String> values = columns.stream().map(column -> sourceColumnMap.get(column.getSourceColumn())).collect(Collectors.toList());
                List<String> fields = columns.stream().map(Column::getTargetColumn).collect(Collectors.toList());
                switch (syncTask.getEventType()) {
                    case DELETE:
                        delete(database, targetTable, target.getTargetTableId(), sourceColumnMap.get(syncTask.getTask().getSourceTableId()));
                        break;
                    case INSERT:
                        insert(database, targetTable, fields, values);
                        break;
                    case UPDATE:
                        update(database, targetTable, target.getTargetTableId(), sourceColumnMap.get(syncTask.getTask().getSourceTableId()), fields, values);
                        break;
                    default:
                }
            });


        });
    }

    private void update(Database database, String targetTable, String targetTableId, String idValue, List<String> fields, List<String> values) {
        try {
            Connection conn = getConnect(database);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < fields.size(); i++) {
                sb.append(fields.get(i)).append(" = ").append("'").append(values.get(i)).append("'").append(",");
            }
            sb.deleteCharAt(sb.lastIndexOf(","));
            String sql = String.format("update  %s set %s where %s = %s", targetTable, sb.toString(), targetTableId, idValue);
            System.out.println(sql);
            Statement statement = conn.createStatement();
            statement.execute(sql);
            statement.close();
            conn.close();
        } catch (Exception e) {
            log.error("同步数据失败:", e);
            log.info("修改数据失败-> 数据库:{}，表:{}，主键:{}，主键值:{}", database, targetTable, targetTableId, idValue);
        }
    }

    private void delete(Database database, String targetTable, String targetTableId, String idValue) {
        try {
            Connection conn = getConnect(database);

            String sql = String.format("delete from %s where %s = %s", targetTable, targetTableId, idValue);
            Statement statement = conn.createStatement();
            statement.execute(sql);
            statement.close();
            conn.close();
        } catch (Exception e) {
            log.error("同步数据失败:", e);
            log.info("删除数据失败-> 数据库:{}，表:{}，主键:{}，主键值:{}", database, targetTable, targetTableId, idValue);
        }
    }

    private void insert(Database database, String targetTable, List<String> fields, List<String> values) {
        try {
            Connection conn = getConnect(database);

            String sql = String.format("insert into %s (%s) values(%s)", targetTable, Joiner.on(",").join(fields), join(values.size()));
            PreparedStatement preparedStatement = conn.prepareStatement(sql);

            for (int i = 0; i < values.size(); i++) {
                preparedStatement.setString(i + 1, values.get(i));
            }
            preparedStatement.execute();
            preparedStatement.close();
            conn.close();

        } catch (Exception e) {
            log.error("同步数据失败:", e);
            log.info("插入数据失败：数据库:{}，表:{}，字段:{}，值:{}", database, targetTable, fields, values);
        }

    }

    private String join(int size) {
        String[] arr = new String[size];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = "?";
        }
        return Joiner.on(",").join(arr);
    }

    private Connection getConnect(Database database) throws SQLException {
        try {
            return DriverManager.getConnection(database.getUrl(), database.getUsername(), database.getPassword());
        } catch (SQLException e) {
            log.error("连接数据库失败", e);
            throw e;
        }
    }

}