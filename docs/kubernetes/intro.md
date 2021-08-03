# 简介

Kubernetes - 生产级别的容器编排系统。实现自动化的容器部署、伸缩和管理。

特性：

- 基于容器的自动化部署及回滚
- 服务发现及负载均衡
- 存储资源编排
- 秘钥及应用配置管理
- 自动装箱
- 批处理管理
- IPv4/IPv6 双协议栈
- 自我修复能力
- 水平伸缩能力
- 插件机制的扩展性

## 基本架构

![Kubernetes 集群](https://d33wubrfki0l68.cloudfront.net/2475489eaf20163ec0f54ddc1d92aa8d4c87c96b/e7c81/images/docs/components-of-kubernetes.svg)

## 控制平面组件 [Control Plane]

控制平面组件负责集群的管理，一般单独部署在 Master 节点上，不会运行用户容器。

### kube-apiserver

REST API 服务，对外提供用于管理集群的 Kubernetes API；

### etcd

分布式 key-value 数据库，用于存储 k8s 集群数据

### kube-scheduler

Pod 调度组件

### kube-controller-manager

Pod 控制器，包括：`Node Controller` / `Job Controller` / `Endpoints Controller` / `Service Account Controller`

### cloud-controller-manager

第三方云平台供应商接入

## Node 组件

部署在每个 Node 节点即 Worker 节点上。

### kubelet

运行在每个k8s节点上，负责 pod 管理

### kube-proxy

运行在每个k8s节点上，负责每个节点的网络代理

### Container-Runtime 容器运行时

Kubernetes CRI

## 插件 [Addons]

### DNS

### 集群资源监控

### 集群日志
