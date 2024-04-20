---
title: nvm&npm更新淘宝镜像源
date: 2024-04-20 21:31:57
tags:
  - nvm
  - 淘宝镜像
category: nodejs
---
> 淘宝原来的npm镜像网站现在已经更换到了[新淘宝镜像站](https://npmmirror.com)，为此，nvm和npm的配置也需要更新：
### nvm目录下settings.txt
```text
node_mirror: http://npmmirror.com/mirrors/node/ 
npm_mirror: http://npmmirror.com/mirrors/npm/
```
### npm设置
```text
// 1. 清空缓存
npm cache clean --force
// 2. 切换新源
npm config set registry https://registry.npmmirror.com
```
### 推荐使用淘宝命令工具cnpm
```text
//安装cnpm
npm install -g cnpm --registry=https://registry.npmmirror.com
//检测是否安装成功
cnpm -v
//安装依赖
cnpm install 你的依赖
```