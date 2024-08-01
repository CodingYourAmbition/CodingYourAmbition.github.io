---
title: 前端的一些tips(一)
date: 2024-05-11 17:53:38
excerpt: 前端的一些小问题总结
tags: 
  - tips
categories:
  - font
---
1. 为什么要用两个`!!`
```js
    if (!!this.dataSourceModel.dataSourceCode && !!this.dataSourceModel.pluginType){
        this.$refs.initPage.getPluginType();
    }
```
使用两个感叹号 !! 是为了将变量的值强制转换为布尔类型。 在JavaScript中，!! 可以用来将任何值转换为对应的布尔值。
!! 的作用是将一个值转换为其对应的布尔值， 如果值为假值（例如 undefined、null、0、NaN、false、""），则转换为 false，
否则转换为 true。

2. js中的函数操作
```js
    // concat函数 追加数组
    let tempCondi =
        {
            baseDataRefs: [],
            baseDataRefsItem: []
        }
    tempCondi.baseDataRefs = tempCondi.baseDataRefs.concat(tempCondi.baseDataRefsItem);

    // find函数 找到第一个符号条件的元素
    // fliter函数 找到符号条件的多个元素
    // include函数 字符串包含
    var str = "abcde";
    if (str.includes("ab")) {
        console.log("字符串包含 'ab'");
    } else {
        console.log("字符串不包含 'ab'");
    }
```