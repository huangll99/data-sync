package com.hll.datasync.yaml;

import lombok.Data;
import lombok.ToString;

import java.util.List;

/**
 * Created by huangll on 2019-05-13
 */
@ToString
@Data
public class DataSyncConfig {

    private List<Database> dbs;

    private List<Task> tasks;
}
