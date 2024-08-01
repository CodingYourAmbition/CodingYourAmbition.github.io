---
title: JS中的一些数组技巧（一）
date: 2024-08-01 10:27:40
tags: 
  - JS
---

### 克隆数组（浅拷贝）

```js
const _arr = [0, 1, 2];
const arr = [..._arr];

console.log(arr); // [0, 1, 2]
```

###  合并数组

```js
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
const arr = [...arr1, ...arr2];

console.log(arr); // [0, 1, 2, 3, 4, 5]; 
```

### 去重数组

```js
const arr = [...new Set([0, 1, 1, null, null])];

console.log(arr); // [0, 1, null] 
```

###  混淆数组

```js
const arr = [0, 1, 2, 3, 4, 5].slice().sort(() => Math.random() - 0.5);

console.log(arr); // [3, 4, 0, 5, 1, 2] 
```

### 清空数组

```js
const arr = [0, 1, 2];
arr.length = 0; // []

console.log(arr); // [] 
```

###  截断数组

```js
const arr = [0, 1, 2];
arr.length = 2;

console.log(arr); // [0, 1] 
```

### 交换赋值

```js
let a = 0;
let b = 1;
[a, b] = [b, a];

console.log(a, b); // 1 0 
```

### 过滤空值

> 空值：undefined、null、""、0、false、NaN

```js
const arr = [undefined, null, "", 0, false, NaN, 1, 2].filter(Boolean);

console.log(arr); // [1, 2] 
```

### 数组首部插入成员

```js
let arr = [1, 2]; // 以下方法任选一种
arr.unshift(0); // [0, 1, 2]
arr = [0].concat(arr); // [0, 1, 2]
arr = [0, ...arr]; // [0, 1, 2]

console.log(arr); // [0, 1, 2] 
```

###  数组尾部插入成员

```js
let arr = [0, 1]; // 以下方法任选一种
arr.push(2);
arr.concat(2);
arr[arr.length] = 2;
arr = [...arr, 2];

console.log(arr); // [0, 1, 2] 
```

###  统计数组成员个数

```js
const arr = [0, 1, 1, 2, 2, 2];
const count = arr.reduce((t, v) => {
  t[v] = t[v] ? ++t[v] : 1;
  return t;
}, {});

console.log(count); // { 0: 1, 1: 2, 2: 3 } 
```

###  解构数组成员嵌套

```js
const arr = [0, 1, [2, 3, [4, 5]]];
const [a, b, [c, d, [e, f]]] = arr;

console.log(a, b, c, d, e, f); // 0 1 2 3 4 5 
```

###  解构数组成员别名

```js
const arr = [0, 1, 2];
const { 0: a, 1: b, 2: c } = arr;

console.log(a, b, c); // 0 1 2 
```

###  解构数组成员默认值

```js
const arr = [0, 1, 2];
const [a, b, c = 3, d = 4] = arr;

console.log(a, b, c, d); // 0 1 2 4 
```

###  获取随机数组成员

```js
const arr = [0, 1, 2, 3, 4, 5];
const randomItem = arr[Math.floor(Math.random() * arr.length)];

console.log(randomItem); // 输出随机数 
```

###  创建指定长度数组

```js
const arr = [...new Array(3).keys()];

console.log(arr); // [0, 1, 2] 
```

###  创建指定长度且值相等的数组

```js
const arr = new Array(3).fill(0);

console.log(arr); // [0, 0, 0] 
```

