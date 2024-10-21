## 大文件上传

### 文件上传的方案

1.分片上传 2.断点续传

## 前端实现

```html
<input id="file" type="file" />
<!--用来上传文件-->
```

```js
// 封装切片的方法
const chunksFun = (file, Size = 1024 * 1024 * 4) => {
  const chunks = []; //i+=  意思就是 挨着切
  // file底层是基于blob对象里面slice方法进行切割 存放在数组中 size根据项目需求进行设定
  // file.slice(0, 1024 * 1024 * 4) 0开始 4M结束
  for (let i = 0; i < file.size; i += Size) {
    chunks.push(file.slice(i, i + Size));
  }
  return chunks;
};
// 封装上传分片的的信息
const uploadsFile = (file) => {
  //批量上传  promise.all[请求][请求][请求]
  //上传formData文件格式 file 标识符 随便定
  const list = [];
  for (let i = 0; i < file.length; i++) {
    const formData = new FormData();
    // 文件标识
    formData.append("index", i);
    // 文件名字
    formData.append("fileName", "MV");
    // 文件
    formData.append("file", file[i]); //一定要写在最后
    // 请求
    list.push(
      fetch("http://localhost:3001/upload", {
        method: "POST",
        body: formData,
      })
    );
  }
  Promise.all(list).then((res) => {
    console.log(res);
    // 通知后端合并文件
    fetch("http://localhost:3001/merge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fileName: "MV",
      }),
    });
  });
};

document.querySelector("#files").addEventListener("change", function (e) {
  let file = e.target.files[0]; //files对象 底层是基于blob 需要调用slice方法 进行切割
  const chunks = chunksFun(file);
  uploadsFile(chunks);
  console.log(chunks);
});
```

## 后端实现

```js
import express from "express"; //提供服务
import multer from "multer"; //上传文件处理
import cors from "cors"; //跨域处理
import fs from "node:fs"; //文件操作
import path from "node:path"; //路径操作

// 1.初始化multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); //每个切片存储的目录
  },
  filename(req, file, cb) {
    //  与前端写的index name 保持一致
    cb(null, `${req.body.index}-${req.body.fileName}`);
  },
});
const upload = multer({ storage });
// 创建服务
const app = express();
// 中间件
app.use(cors());
app.use(express.json());
//  /upload 和前端请求的接口要一样
// upload.single("file") 上传单个文件 array 多个文件
// 上传文件地址
app.post("/upload", upload.single("file"), (req, res) => {
  res.send("上传成功");
});

app.post("/merge", (req, res) => {
  //  1.读取目录下的所有切片
  const uploadsDir = path.join(process.cwd(), "uploads");
  //  读取目录下的所有
  const files = fs.readdirSync(uploadsDir);
  //  2.根据文件名排序 为什么要进行排序 因为网络的快慢不同
  files.sort((a, b) => a.split("-")[0] - b.split("-")[0]);
  // process.cwd() 获取当前执行目录
  //拼接切片内容
  const video = path.join(process.cwd(), "video", `${req.body.fileName}.mp4`);
  // 3.合并切片
  files.forEach((item) => {
    //  把切片合并放在文件
    fs.appendFileSync(video, fs.readFileSync(path.join(uploadsDir, item)));
    //   清除文件
    fs.unlinkSync(path.join(uploadsDir, item));
  });
  res.send("合并成功");
});
app.listen(3001, () => {
  console.log(`server is running at http://localhost:3001`);
});
```

思路总结:
前端:1 知道切片如何切分 2.知道如何上传分片给后端 3.知道如何通知后端合并分片
后端:1.写接口知道前端传过来的分片内容 2.然后进行合并 合并有三个点 1.读取目录下的所有切片 2.根据文件名排序 3.合并切片
