```js
// webSockt
// websocket 双工通信后端可以给前端发 前端也可以给后端发
// 实时通信 聊天室 游戏 实时数据
//websocket 后端需要依赖在服务上
// 注意点 不能发送对象 只能发送字符串或者buffer 要发送对象  JSON.stringify({})
// 接受 JSON.parse(e.data)
// 工具库 socket.io
const ws = new WebSocket("ws://localhost:3000/api/ws");
// 接受消息
ws.addEventListener("message", (e) => {
  console.log(e.data);
});
ws.addEventListener("open", () => {
  console.log("连接成功");
});
//  给后端发送消息
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  ws.send("你好");
});
// 关闭连接
ws.addEventListener("close", () => {
  console.log("连接关闭");
});
ws.close();
```
