---
title: Git设置Github代理
categories:
  - proxy
  - GitHub
  - Git
excerpt: 国内对操作GitHub上的仓库太慢，经常连接失败
abbrlink: 9e5ded13
date: 2024-12-18 17:16:52
---
## 一、代理设置

### 1、全局代理设置

```
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy https://127.0.0.1:7890
```

这里可以打开clash查看代理设置，查看自己的端口是否为1080，不是的改为对应的端口

### 2、只对GitHub进行代理

如果挂了全局代理，克隆coding之类的国内仓库会变慢，所以我建议使用如下命令，只对GitHub进行代理，对国内的仓库不影响

```
git config --global http.https://github.com.proxy https://127.0.0.1:7890
git config --global https.https://github.com.proxy https://127.0.0.1:7890
```

如果在输入这条命令之前，已经输入全局代理的话，可以按照二、取消代理的方法进行取消

注意：以上两点都是对https协议进行代理设置，也就是仅对`git clone https://www.github.com/xxxx/xxxx.git`这种命令有效。对于SSH协议，也就是`git clone git@github.com:xxxxxx/xxxxxx.git`这种，依旧是无效的

### 3、sock5代理设置

之前说的是http代理，有人反映ss暴露的是socks5。下面附上socks5代理的方法

1、首先查看自己socks5的端口号，假设为：127.0.0.1:7890
2、输入以下命令：
```
git config --global http.https://github.com.proxy socks5://127.0.0.1:7890
git config --global https.https://github.com.proxy socks5://127.0.0.1:7890
```

## 二、取消代理
```
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## 三、查看已有配置
```
git config --global -l
```