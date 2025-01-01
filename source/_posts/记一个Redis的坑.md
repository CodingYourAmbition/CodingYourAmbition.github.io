---
title: 记一个Windows下Redis的坑
categories:
  - redis
date: 2024-12-27 14:00:00
abbrlink: problem/redis-1
excerpt: Redis运行为Windows服务并自动启动
---
## 下载Redis
从GitHub下载好[windows平台的Redis压缩包](https://github.com/redis-windows/redis-windows/releases)：

![Redis安装](/images/redis-install.png)

此时就出现问题了,一定要下载`with-service`的包，不然无法安装为windows服务：

![命令行报错](/images/redis-fatal.png)

你会发现`service-insatll`这里总是报错，如果下了不带`with-service`的包，因为不支持Windows service，无法安装为Windows服务，这问题折磨了一个小时:expressionless:

关于Cygwin和MSYS2的选择，MSYS2比Cygwin更现代、更轻量，详见[这里](https://www.zhihu.com/question/22137175/answer/90908473)
## 安装为Windows服务并自动启动
```cmd
// 安装服务
redis-server --service-install redis.conf --loglevel verbose
```
你以为你能运行成功，错了！还是报一样的错误...:satisfied:明明网上搜的方法就是这样，不知道什么原因，以后再补上吧。
下载的包里面本来就有安装和卸载服务的bat文件，直接运行第一个安装服务就好了
![redis目录](/images/redis-zip.png)
![安装redis服务](/images/install-redis-service.png)
win搜索栏搜索service进入，可以看到上面安装的redis服务，并且是自启的
![redis服务](/images/redis-service.png)
## 其他Redis命令（这些命令似乎都作废了）
```cmd
// 安装服务
redis-server --service-install redis.conf --loglevel verbose
// 启动服务
redis-server --service-start
// 停止服务
redis-server --service-stop
// 卸载服务
redis-server --service-uninstall
// 重命名服务
redis-server --service-name name
```
## 12.29日更新
### 上述问题出现的原因
Redis的官方版本并不支持Windows平台。Redis是为类Unix系统（如Linux和macOS）设计的，官方团队没有提供正式的Windows版本。因此，所有 Windows 上的 Redis 都是由社区贡献的移植版本
[这个版本](https://github.com/redis-windows/redis-windows/releases)可以一键安装为Windows服务
[详见](https://www.zhihu.com/question/424272611/answer/2611312760)

### 另一个兼容Windows的Redis版本：Memurai
[Memurai](https://www.memurai.com/)是Windows平台下Redis的兼容实现。它旨在提供企业级Windows环境所需的可靠性和性能。与Redis一样，Memurai使用基于内存的数据结构来大幅提升性能，并且Memurai支持了所有Redis功能，下载后直接安装就可以注册为Windows服务，不过命令和Redis有点不同，需使用memurai-cli，memurai.conf等