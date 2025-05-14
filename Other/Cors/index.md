## 跨域资源共享(CORS)

### 跨域的产生

出于浏览器的同源策略限制,浏览器会拒绝跨域请求

### 同源策略

请求的时候拥有相同的协议 域名 端口 只要有一个不同就会产生跨域

## 解决方案

### 1. JSONP

1.jsonp
原理就是通过 script 标签的 src 属性，发送一个 get 请求，因为 script 标签不受同源策略限制，可以跨域请求资源
缺点：只支持 get 请求，不支持 post 请求，安全性问题
后端返回的是一个函数 但是这个函数是后端定义的，前端无法控制 他会把值注入到这个函数中，然后执行这个函数

```js
// 前端
const jsonp = (name) => {
  let script = document.createElement("script");
  script.src = `http://localhost:3001?/api/jsonp?callback=${name}`;
  document.body.appendChild(script);
  return new Promise((resolve) => {
    window[name] = (data) => {
      resolve(data);
    };
  });
};
jsonp(`callback${new Date().getTime()}`).then((res) => {
  console.log(res);
});
后端;
import express from "express";
const app = express();
app.get("/api/jsonp", (req, res) => {
  // req接受前端传过来的参数
  const { callback } = req.query;
  res.send(`${callback}('16')`);
  // res.setHeader();
});
app.listen(3001, () => console.log("Server is running on port 3000"));
```

## 前端代理

#### vite 配置

安装依赖 npm i vite 创建 vite.config.js

```js
前端
// 前端代理
fetch('/api/jsonp').then(res => res.json()).then(res => console.log(res))
proxy: {
  //代理的名称
  "/api": {
    //代理只对开发环境有效 转发的地址后端
    target: "http://localhost:3001",
    //是否跨域
    changeOrigin: true,
  },
},
```

## 后端设置请求头

```js
app.get("/api/jsonp1", (req, res) => {
  //设置请求头  *允许任何源访问接口不安全可以设置指定IP进行访问
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5174/");
  res.json({ code: 200, data: "16" });
});
```

## nginx

在 nginx 中配置代理，将请求转发到后端服务器，这样就可以避免跨域问题。

### 第一种 Nginx 代理

去 Nginx 官网下载https://nginx.org/
在执行 nginx.exe 文件之前需要配置文件，在 conf 文件夹下找到 nginx.conf 文件，在 http 中添加如下代码：

```js
server {
  listen 80;
  server_name localhost;
  location /api {
    proxy_pass http://localhost:3001;
  }
}
```

### 第二种 Nginx 反向代理

在 default 文件 location 中添加如下代码：

```js
location /api {
    proxy_pass 本机地址IP;

}
```
