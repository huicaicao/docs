```js

const Progress = document.querySelector('.progress')
// fetch 默认 get 第一个参数请求地址 第二个参数请求配置
// 第一个.then 返回数据格式
// text 文本
// json 返回 js 对象
// blob 二进制数据
// arrayBuffer 二进制数据
// formData 二进制数据
// nodejs 18 以上都可以使用
// 第一点比较简单 第二默认只能使用 get post
// 默认不携带 cookie
// 没有超时时间 没有 timeOut
// 每天 abort 中断请求
// 进度条非常麻烦
const abort = new AbortController()
fetch('/api/users', {
// 中断请求
signal: abort.signal
method: 'delete',
// 携带请求头
headers: {
'Content-Type': 'application/json'
},
// 携带请求体
body: JSON.stringify({

}),
// 携带 cookie
credentials: 'include'
}).then(res => res.text()).then(async res => {
// 获取总进度
const contentLength = res.headers.get('content-length')
//
const response = res.body.clone()
//获取当前进度 如果 fetch 使用了这个流 就没有了 相当于这个返回值就没有了
const progress = await res.body.getReader() //获取响应的流
let current = 0
while (true) {
const { done, value } = progress.read() //读取流
if (done) {
break //done=true 相当于就是说没有了
}
current += value.length || 0
Progress.innerHTML = (current / contentLength \* 100).toFixed(2) + '%'
}
return response.text()
})
// 超时时间
// setTimeout(() => {
// abort.abort()
// }, 1000)
```
