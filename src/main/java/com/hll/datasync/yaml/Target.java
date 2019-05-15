package com.hll.datasync.yaml;

import lombok.Data;

import java.util.List;

/**
 * Created by huangll on 2019-05-13
 */
@Data
public class Target {

    private String db;

    private String targetTable;

    private String targetTableId;

    private List<Column> columns;
}
