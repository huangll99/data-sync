package com.hll.datasync.api;

import com.gsafety.cloud.common.result.Result;
import com.hll.datasync.sync.DataPullManager;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * Created by huangll on 2019-05-14
 */
@RestController
@RequestMapping("/sync")
public class DataSyncController {

    @Resource
    private DataPullManager dataPullManager;

    @Value("${data.sync.config.file}")
    private String dataSyncConfigFile;

    @GetMapping("/config")
    public Result<String> syncConfig() throws IOException {
        String config = IOUtils.toString(new FileInputStream(ResourceUtils.getFile(dataSyncConfigFile)));
        return Result.<String>builder().success(true).msg("ok").data(config).build();
    }

    @PostMapping("/config")
    public Result updateSyncConfig(@RequestBody SyncConfig syncConfig) throws IOException {
        IOUtils.write(syncConfig.getConfig(), new FileOutputStream(ResourceUtils.getFile(dataSyncConfigFile)));
        dataPullManager.loadDataSyncConfig();
        return Result.builder().success(true).msg("ok").build();
    }

}