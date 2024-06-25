````js
const xhr = new XMLHttpRequest();
// ajax发送请求 第一个参数请求方法，2请求地址 3第三个参数是否异步
// 默认是true 异步
xhr.open("get", "/api/users");
// 设置超时时间
xhr.timeout = 10000;
xhr.ontimeout = function () {
  console.log("请求超时");
};
// 请求状态 0 1 2 3 4 的回调 一般会判断4 请求成功
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log(xhr.responseText)
//     }
// }
// onload 就直接判断到4
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
// 进度条
xhr.onprogress = function (e) {
  // 总进度处于当前进度
  progress.innerHTML = ((e.loaded / e.total) * 100).toFixed(2) + "%";
  // 进度条
  console.log((e.loaded / e.total) * 100);
};
// 中断Ajax
xhr.onabort = function () {
  console.log("中断请求");
};
document.querySelector(".btn").onclick = function () {
  xhr.abort();
};
// 监听错误
xhr.onerror = function () {
  console.log("请求失败");
};
// 向后端发送请求
xhr.send(null)```
```;
````
