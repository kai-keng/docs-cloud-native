# 容器实现的基础

首先需要强调下是`Linux`容器， Windows 及 MacOS 不适用（Docker容器在非 Linux 环境下的实现实际也是跑在虚拟机上）

## Linux Namespace

容器应用对操作系统来说只是一个普通的应用进程，其隔离能力依赖于 Linux Namespace 机制实现，容器进程在创建时会启用一组 Namespace（包括：PID，MOUNT，UTS，IPC，Network，User），以使容器只能“看”到当前 Namespace 所限定的资源、文件、设备、状态，或者配置。而对于宿主机以及其他不相关的程序，完全看不到了。

- 拓展：[各命名空间的主要用途](https://yeasy.gitbook.io/docker_practice/underly/namespace)

## Linux Cgroups

Namespace 只是对容器进程的外部宿主环境做了屏蔽，使其看起来像在一个独立的操作系统中运行，但其本质只是一个跑在宿主机上的进程，需要对其占用的资源做限制，这里就用到了 linux Cgroups 技术。Linux Cgroups 的全称是 Linux Control Group。它最主要的作用就是限制一个进程组能够使用的资源上限，包括 CPU、内存、磁盘、网络带宽等等。可以在 `/sys/fs/cgroup` 下看到当前系统的 cgroup 配置信息。

## rootfs 与容器镜像

容器进程启动时通过 Mount Namespace 重新挂载进程的整个根目录 "/", 而在这个容器根目录上，用来为容器进程提供隔离后执行环境的文件系统，即 rootfs 根文件系统，也就是所谓的“容器镜像”，通常 rootfs 会包含一个操作系统所拥有的文件、配置和目录等内容，通过这个根文件系统实现了容器最核心要解决的问题「一致性」，需要注意的是同一台机器上的所有容器是共享同一宿主机操作系统内核的，所以容器应用如果对内核进行配置及交互会影响到所有的容器应用。

> 疑问点：宿主机操作内核与容器应用不一致是如何解决的？

## UnionFS

Union File System 联合文件系统。他支持对文件系统的修改作为一次提交来一层层的叠加（类似 git），主要用于实现容器镜像的分层制作，进而实现在基础镜像的基础上制作应用镜像，目前 docker 采用 overlay2 作为默认UnionFS的存储驱动，可以通过 `docker image inspect` 命令看到当前镜像的分层信息。容器镜像包含三层：只读层 / init 层 / 可读写层：
- 只读层： 容器 rootfs 最低层，容器镜像中固有存在的文件
- init 层：中间层，专门用来存放 /etc/hosts、/etc/resolv.conf 等信息。执行 docker commit 时，不会打包进镜像
- 可读写层：最上层，容器做写操作时，以增量的形式在这一层对下层文件做覆盖

## bind mount

docker Volume 机制，允许将宿主机上指定的目录或者文件，挂载到容器里面进行读取和修改操作。这项机制实现的关键是 linux 绑定挂载机制(bind mount)，它可以单独将一个目录或文件（A）挂载到一个指定的目录（B）上，之后对目录B上的操作只会影响目录A上的内容，而原来目录B上的内容会隐藏起来，不受影响。值得注意的 volume 执行的时序是在，mount namespace 执行之后，chroot 根文件系统之前，这样既能保证容器的隔离性又能使 volume 挂载的文件可以被发现。

## 总结

对于一个 docker 容器来说整个启动过程是这样的：

- 启用 Linux Namespace 配置；
- 设置指定的 Cgroups 参数；
- 切换进程的根目录（Change Root）。
- 执行应用启动命令

## 更多

- 关于更多关于 docker 基础实现的细节可以看下 [陈皓-酷壳-docker基础技术系列](https://coolshell.cn/?s=DOCKER%E5%9F%BA%E7%A1%80%E6%8A%80%E6%9C%AF)