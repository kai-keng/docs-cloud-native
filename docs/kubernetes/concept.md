# 概念

## 容器

Kubernetes 通过 Kubernetes CRI（Container Runtime Interface）实现对容器的管理，脱离容器运行时的具体实现。

**容器镜像更新策略 [imagePullPolicy]：**

- `Always`: 没有镜像`tag`或镜像`tag`为 `latest`、 开启 `AlwaysPullImages` 准入控制器；
- `IfNotPresent`: 默认拉取策略；
- `Never`: 需显式设置，不拉取远程镜像、使用本地镜像；

*注：pod 创建后，拉取策略会被设置成确定的值，当镜像 tag 发生变化时，不会依据上面的隐式策略变更拉取策略，如需调整拉取策略需显式设置*

**容器生命周期回调**

- `PostStart`

容器创建之后立即触发，**不保证与容器 entry point 执行调用的顺序**。

- `PreStop`

容器被终止之前触发，回调处理程序执行期，容器会停留在 `Terminating` 状态，直至 `terminationGracePeriodSeconds` 终止宽限周期耗尽，容器会被强制杀死，对于已终止或已完成状态的容器，执行 preStop 回调会失败，所以回调必须在终止宽限周期内执行结束。

## 工作负载

### Pod

### Deployment / ReplicaSet

### StatfulSet

### DaemonSet

### Job / CronJob

## 服务与网络

### Service

### Ingress

## 存储
