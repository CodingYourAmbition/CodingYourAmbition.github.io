---
title: Hexo博客同步步骤
excerpt: Hexo博客同步步骤
categories:
  - 博客
abbrlink: sync
date: 2024-04-16 13:32:59
---
## 博客同步步骤
1. 在新电脑上拉取[hexosync分支代码](https://github.com/CodingYourAmbition/CodingYourAmbition.github.io.git)
2. 安装nodejs,git
3. 安装Hexo和Git插件
    ```shell
        npm install -g hexo-cli
        npm install hexo-deployer-git --save
        // 永久链接插件
        npm install hexo-abbrlink --save
    ```
4. 根据package.json安装依赖
    ```shell
        npm i
    ```
5. 运行`hexo g`，渲染生成，运行`hexo s`，预览网站
7. 运行`hexo new post`编写新文章，或者修改博客其他内容
8. 将新内容提交推送到Github，并运行`hexo g -d`进行部署
9. 新内容自动部署到Github的main分支， 在`codingyourambition.github.io`查看内容


