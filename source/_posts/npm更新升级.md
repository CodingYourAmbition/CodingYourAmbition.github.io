---
title: npm更新升级
tags:
  - npm
category: nodejs
abbrlink: 45f6034
date: 2024-04-20 22:12:48
---

1.查看`npm`当前版本

```text
npm -v
```

2.清理`npm`缓存数据

```text
npm cache clean --force
```

3.更新到最新版本

```text
npm install -g npm
```

4.更新到指定版本

```text
npm -g install npm@10.4.0
```

或者

```text
npm i npm@10.4.0 -g
```
