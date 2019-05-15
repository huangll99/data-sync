package com.hll.datasync.sync;

import com.alibaba.otter.canal.client.CanalConnector;
import com.alibaba.otter.canal.client.CanalConnectors;

import java.net.InetSocketAddress;

/**
 * Created by huangll on 2019-05-10
 */
public class CanalClient {

    private CanalConnector canalConnector;

    private CanalProperties canalProperties;

    public CanalClient(CanalProperties canalProperties) {
        this.canalProperties = canalProperties;
        this.canalConnector = CanalConnectors.newSingleConnector(new InetSocketAddress(canalProperties.getHost(), canalProperties.getPort())
            , canalProperties.getDestination(), "", "");
    }

    public CanalConnector getCanalConnector(){
        return this.canalConnector;
    }

    public CanalProperties getCanalProperties(){
        return this.canalProperties;
    }
}
