# 基本使用

## 创建 k8s 集群

### 使用 kubeadmin 创建

## k8s 命令行工具管理 - kubectl

- [官方安装说明](https://kubernetes.io/zh/docs/tasks/tools/)
- [官方使用说明](https://kubernetes.io/zh/docs/reference/kubectl/overview/)

`kubectl` 配置文件默认存放在 `$HOME/.kube/config`，可通过设置环境变量 `KUBECONFIG` 或者使用配置项 `--kubeconfig` 指定其他目录的 kubeconfig 文件

- 查看当前配置 `kubectl config view`
- 查看当前配置的所有集群 `kubectl config get-clusters`
- 查看当前配置的所有集群上下文 `kubectl config get-contexts`
- 切换当前管理的集群上下文 `kubectl config use-context $CONTEXT_NAME`

关于配置对多集群的访问，这里是[官方文档](https://kubernetes.io/zh/docs/tasks/access-application-cluster/configure-access-multiple-clusters/)。

## 部署应用程序

- 无状态应用

- 有状态应用

## 水平伸缩应用程序

## 更新应用程序
