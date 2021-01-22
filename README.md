Typescript Electron Snowpack React Demo
======================================

由于snowpack是一个前端工具，不能很好处理node文件，所以对于electron的启动，还需要借助于ts-node来处理typescript。

然后同时用snowpack启动renderer（前端页面），让electron中载入相应的url。

由于snowpack的支持，使得该react可以很容易的支持fast refresh.

```
npm install
npm demo
```

由于启动顺序不确定，electron中可能出现空白，需要刷新一下
