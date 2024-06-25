## sse

```js
const sse = new EventSource("/api/sse");
// 默认事件是sse 后端可以改 sse是单工通信  后端可以一直发但前端只可以发一次
// 数据大屏
sse.addEventListener("message", (e) => {
  console.log(e.data);
});
```
