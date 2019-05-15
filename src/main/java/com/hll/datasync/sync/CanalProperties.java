package com.hll.datasync.sync;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;

/**
 * Created by huangll on 2019-05-10
 */
@Data
@Order(Ordered.HIGHEST_PRECEDENCE)
@ConfigurationProperties(prefix = "canal")
public class CanalProperties {

    /**
     * canal 服务器地址，默认是本地的环回地址
     */
    private String host = "127.1.1.1";

    /**
     * canal 服务设置的端口，默认 11111
     */
    private int port = 11111;

    /**
     * 过滤规则
     */
    private String filter;


    /**
     * 信息捕获心跳时间
     */
    private long acquireInterval = 1000;

    /**
     * canal实例名
     */
    private String destination;

}
