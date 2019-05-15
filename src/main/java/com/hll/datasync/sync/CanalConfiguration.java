package com.hll.datasync.sync;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.annotation.Resource;

/**
 * Created by huangll on 2019-05-10
 */
@Configuration
@EnableConfigurationProperties(CanalProperties.class)
public class CanalConfiguration {

    @Resource
    private CanalProperties canalProperties;

    @Bean
    public CanalClient canalClient(){
        return new CanalClient(canalProperties);
    }
}
