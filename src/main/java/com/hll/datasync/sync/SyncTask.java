package com.hll.datasync.sync;

import com.alibaba.otter.canal.protocol.CanalEntry;
import com.hll.datasync.yaml.Database;
import com.hll.datasync.yaml.Task;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.util.List;
import java.util.Map;

/**
 * Created by huangll on 2019-05-13
 */
@ToString
@Data
@Builder
public class SyncTask {

    private CanalEntry.EventType eventType;

    private List<CanalEntry.Column> sourceColumns;

    private Task task;

    private Map<String, Database> dbMap;
}
