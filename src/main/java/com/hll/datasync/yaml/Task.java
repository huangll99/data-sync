package com.hll.datasync.yaml;

import lombok.Data;

import java.util.List;

/**
 * Created by huangll on 2019-05-13
 */
@Data
public class Task {

    private String sourceTable;

    private String sourceTableId;

    private List<Target> targets;
}
