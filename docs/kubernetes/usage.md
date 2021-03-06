# 基本使用

## 创建 k8s 集群

### 使用 kubeadmin 创建

## kubectl 命令行工具使用

- [官方安装说明](https://kubernetes.io/zh/docs/tasks/tools/)
- [官方使用说明](https://kubernetes.io/zh/docs/reference/kubectl/overview/)

**kubectl 配置：**

`kubectl` 配置文件默认存放在 `$HOME/.kube/config`，可通过设置环境变量 `KUBECONFIG` 或者使用配置项 `--kubeconfig` 指定其他目录的 kubeconfig 文件

- `kubectl config view`: 查看当前配置
- `kubectl config get-clusters`: 查看当前配置的所有集群
- `kubectl config get-contexts`: 查看当前配置的所有集群上下文
- `kubectl config use-context $CONTEXT_NAME`: 切换当前管理的集群上下文

关于配置对多集群的访问，这里是[官方文档](https://kubernetes.io/zh/docs/tasks/access-application-cluster/configure-access-multiple-clusters/)。

Kubernetes 采用声明式的 API，大多数变更可通过 `kubectl apply -f $CONFIG_YAML` 完成。

**命名空间：**

- `kubectl apply -f examples/namespace.yml`: 创建/更新命名空间

**无状态应用：**

- `kubectl apply -f examples/stateless-application-deployment.yml -n demo`: 创建/更新无状态应用
- `kubectl get deploy nginx-deployment -n demo`: 查询应用部署情况
- `kubectl describe deployment nginx-deployment -n demo`: 查询应用部署详情
- `kubectl get pods -l app=nginx -n demo`: 查看应用（对应label = nginx）pod 运行情况

*更多关于 Deployment 的[官方文档](https://kubernetes.io/zh/docs/concepts/workloads/controllers/deployment/)*

**有状态应用：**

- `kubectl apply -f examples/stateful-application-configmap.yml`: 创建/更新应用关联的配置信息
- `kubectl apply -f examples/stateful-application-statefulset.yml`: 创建/更新有状态应用
- `kubectl apply -f examples/stateful-application-service.yml`: 创建/更新有状态的服务(headlessService & Service)

**水平伸缩应用程序（horizontal-pod-autoscaler: HPA）：**

- `kubectl apply -f examples/stateless-application-autoscaler.yml`: 创建/更新应用水平伸缩配置信息

*注：*

- *资源指标[Resource]，使用 `metrics.k8s.io` API，metrics-server 以集群插件启动；*
- *自定义指标[Pods/Object], 使用 `custom.metrics.k8s.io` API，由第三方的 Adapter 提供， [官方列出的已知方案](https://github.com/kubernetes/metrics/blob/master/IMPLEMENTATIONS.md#custom-metrics-api)；*
- *拓展指标[External]，使用 `external.metrics.k8s.io` API，也需要由第三方的 Adapter 提供；*
