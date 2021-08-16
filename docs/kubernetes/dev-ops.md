# 应用运维

DevOps 涉及整个研发体系。包括：CI/CD、健康监测、日志收集、性能监控、链路追踪、服务治理（负载均衡/流量管控/熔断等）

## 集群管理

当前采用 [Rancher](https://github.com/rancher/rancher) 社区版本维护k8s集群

## 持续集成与持续发布(CI/CD)

### 持续集成(CI)

#### 流程（pipeline）

1. 代码提交 - [gitlab & helm]
2. 应用构建 - [docker]
3. 应用单元测试 - [各业务项目自定义，可选: JUnit]
4. 制品仓库推送及代码安全扫描 - [harbor]
5. 应用部署 - [helm & k8s]
6. 自动化测试 - [各业务自定义，接口自动化 & UI自动化]
7. 性能测试 - [各业务自定义, 可选: JMeter]
8. 安全测试 - [待完善]

如有必要：

- 人工验证
- 构建应用最终发布包 - [helm]

### 持续部署(CD)

结合目前生产实际情况及需求，暂不考虑持续部署

一般应用部署流程：

- [开发侧] 提供构建应用最终部署包 & 应用配置管理及必要文档说明 - [helm]
- [运维侧] 发布应用 - [helm & k8s]

## 日志

## 监控

这是选用当前业界广泛采用的 prometheus

### 资源监控（Metric）

### 链路追踪（Tracing）

这里使用 `CNCF` 社区提出的分布式链路追踪规约 [Opentracing](https://opentracing.io/) 的开源实现 [jaeger](https://www.jaegertracing.io)，可同时兼容 Java 技术栈下广泛采用的 [zipkin](https://zipkin.io/) 传输协议；

客户端方面为最好限度保证拓展性采用[opentelemetry](https://opentelemetry.io/)框架下各语言下的集成库；

### 性能监控（APM）

## 发布策略

- 滚动发布
- 蓝绿发布
- 灰度发布
