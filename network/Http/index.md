## Http 缓存

### 缓存分类

- 强缓存
- 协商缓存

### 强缓存

强缓存之后则不需要向服务器发送请求，而是从浏览器缓存读取分为（内存缓存）| （硬盘缓存）
memory cache(内存缓存) 内存缓存存储在浏览器内存当中，一般刷新网页的时候会发现很多内存缓存
disk cache(硬盘缓存) 硬盘缓存是存储在计算机硬盘中，空间大，但是读取效率比内存缓存慢

### 设置强缓存

```js
// 动态资源缓存  Expires 强缓存
app.get("/api", (req, res) => {
  // 返回的是 toUTCString() 格式时间
  res.setHeader("Expires", new Date("2024-7-9 00:11:00").toUTCString());
  res.send("hello");
});
```

```js
//  Cache-Control
// public 任何服务器都可以缓存包括代理服务器 例如cdn
// private 只有浏览器可以缓存 不包括代理服务器
// max-age 缓存时间 以秒计算
// Expires Cache-Control 同时出现 max-age优先级高
app.get("/api2", (req, res) => {
  res.setHeader(" Cache-Control", "public", "max-age=100");
  res.send("hello");
});
```

## 协商缓存

协商缓存就是浏览器和服务器之间通过某种方式，来决定资源是否需要更新。
服务器会根据客户端发送的协商缓存字段（如 If-Modified-Since 和 If-None-Match）来判断资源是否发生变化。如果资源未发生修改，服务器会返回状态码 304（Not Modified），通知客户端可以使用缓存的版本。如果资源已经发生变化，服务器将返回最新的资源，状态码为 200。

## 设置协商缓存

### Last-Modified 方式 设置文件的最后修改时间

### Last-Modified 和 If-Modified-Since：服务器通过 Last-Modified 响应头告知客户端资源的最后修改时间。客户端在后续请求中通过 If-Modified-Since 请求头携带该时间，服务器判断资源是否有更新。如果没有更新，返回 304 状态码。

```js
//强缓存和协商缓存同时出现 浏览器优先于强缓存
//解决强缓存和协商缓存同时出现
// no-cache  告诉浏览器走协商缓存
// no-store 不走任何缓存
app.get("/api3", (req, res) => {
  res.setHeader("Cache-Control", "no-cache");
  const getFileModifyTime = () => {
    fs.statSync("index.js").mtime.toISOString();
  };
  const modifyTime = getFileModifyTime();
  //判断请求头有没有字段
  const ifModifiedSince = req.headers["if-modified-since"];
  if (ifModifiedSince === modifyTime) {
    res.statusCode = 304;
    res.end();
    return;
  }
  // 设置请求头字段
  res.setHeader("Last-Modified", modifyTime);
  res.send("hello");
});
```

### ETag 方式 更改文件的内容以及 hash ETag 优先级比 Last-Modified 高

### ETag 和 If-None-Match：服务器通过 ETag 响应头给资源生成一个唯一标识符。客户端在后续请求中通过 If-None-Match 请求头携带该标识符，服务器根据标识符判断资源是否有更新。如果没有更新，返回 304 状态码

```js
app.get("/api3", (req, res) => {
  res.setHeader("Cache-Control", "no-cache");
  // 获取hash值
  const getFileHash = () => {
    return ctypto
      .createHash("sha256")
      .update(fs.readFileSync("index.js"))
      .digest("hex");
  };
  const fileHash = getFileHash();
  const ifModifiedSince = req.headers["if-none-match"];
  if (ifModifiedSince === fileHash) {
    console.log("缓存了");
    res.statusCode = 304;
    res.end();
    return;
  }
  console.log("没有缓存");
  res.setHeader("ETag", fileHash);
  res.send("hellos");
});
```
