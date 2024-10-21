## src 目录下文件

### build.js

```js
//子进程  执行命令
import { execSync } from "child_process";
function runBuild(path) {
  return new Promise((resolve) => {
    execSync("npm run build", {
      cwd: path,
      stdio: "inherit",
    });
    resolve();
  });
}
export default runBuild;
```

### compressFile.js

```js
//编写压缩文件的代码
// npm i archiver -D
import archiver from "archiver";
import fs from "node:fs";
/**
 *
 * @param targetFile 压缩目录的位置 D:ymsdproject/02-JavaScriptXMstudyCICD/vue-demo/dist
 * @param localFile  压缩之后压缩文件的名字 存放node的文件夹中  D:\ymsdproject\02-JavaScript\XMstudy\CICD\CIcd
 */
function compressFile(targetDir, localFile) {
  return new Promise((resolve, reject) => {
    //创建可写流
    const outPut = fs.createWriteStream(localFile);
    const archive = archiver("zip", {
      zlib: { level: 9 }, //压缩等级越高效果越好
    });
    //链接管道
    archive.pipe(outPut); //压缩完的流交给 可写流处理
    // 压缩的文件
    archive.directory(targetDir, "dist"); //压缩的目录
    archive.finalize(); //压缩完成
    archive.on("close", () => {
      console.log((archive.pointer() / 1024 / 1024).toFixed(2) + "MB");
      resolve();
    });
  });
}
export default compressFile;
```

### handleCommand.js

```js
//操作ssh命令的文件
function runCommand(ssh, command, path) {
  return new Promise((resolve) => {
    ssh
      .execCommand(command, {
        cwd: path, //在那个目前下执行命令
      })
      .then(function (result) {
        resolve();
      });
  });
}
export default runCommand;
```

### helper.js

```js
//命令行交互工具 npm i inquirer
import inquirer from "inquirer";
import config from "../config.js";
async function commanderLine() {
  if (process.argv[2]) {
    return config.find((item) => item.value === process.argv[2]);
  } else {
    //手动调用
    const res = await inquirer.prompt([
      {
        type: "list",
        message: "请选择操作",
        name: "project",
        choices: config,
      },
    ]);
    return options;
  }
}

export default commanderLine;
```

### ssh.js

```js
//链接ssh服务器工具 npm i node-ssh
import * as ssh from "node-ssh";
const sshClient = new ssh.NodeSSH();
async function sshConnect(sshConfig) {
  return new Promise((resolve) => {
    sshClient.connect(sshConfig).then(() => {
      console.log("connecting ssh server...");
      resolve();
    });
  });
}
export default {
  sshConnect,
  ssh: sshClient,
};
```

### uploadFile.js

```js
//上传远端服务器的代码
function uploadFile(ssh, config, local) {
  return new Promise((resolve) => {
    //  putFile第一个参数本地文件路径，第二个参数远程文件路径
    ssh.putFile(local, config.deployDir + config.releaseDir).then(() => {
      console.log("upload success");
      resolve();
    });
  });
}
export default uploadFile;
```

## config.js

```js
const config = [
  {
    name: "项目1",
    value: "项目1",
    ssh: {
      host: "8.140.249.87",
      port: 22,
      username: "root",
      password: "asd123456789!",
      passphrase: "", // 如果有密钥的话 没有给个空
    },
    targetDir: "D:/ymsdproject/02-JavaScript/XMstudy/CICD/vue-demo/dist", //本地目录
    targetFile: "dist.zip", //压缩之后的包名
    deployDir: "/home/node_test", //上传服务器目录 随便
    releaseDir: "/web", //上传成功之后   文件夹的名字
  },
  // {
  //   name: "项目2",
  //   value: "项目2",
  //   ssh: {
  //     host: "8.140.249.87",
  //     port: 22,
  //     username: "root",
  //     password: "asd123456789!",
  //     passphrase: "", // 如果有密钥的话 没有给个空
  //   },
  //   targetDir: "D:/ymsdproject/02-JavaScript/XMstudy/CICD/vue-demo/dist", //本地目录
  //   targetFile: "dist.zip", //压缩之后的包名
  //   deployDir: "/home/node_test/", //上传服务器目录 随便
  //   releaseDir: "Web", //上传成功之后   文件夹的名字
  // },
];

//为什么是一个数组
// 有可能是集群部署 配置不同的服务器
export default config;
```

## app.js

```js
import commanderLine from "./src/helper.js";
import compressFile from "./src/compressFile.js";
import servers from "./src/ssh.js";
import uploadFile from "./src/uploadFile.js";
import runCommand from "./src/handleCommand.js";
import runBuild from "./src/build.js";
import path from "path";
async function main() {
  const config = await commanderLine();
  //根目录
  const local = path.join(process.cwd(), config.targetFile); //D:\ymsdproject\02-JavaScript\XMstudy\CICD\CIcd\dist.zip
  // console.log(local);
  runBuild(config.targetDir);
  //压缩文件
  await compressFile(config.targetDir, local);
  //链接ssh
  await servers.sshConnect(config.ssh);
  //编写ssh命令
  await runCommand(
    servers.ssh,
    `rm -rf ${config.releaseDir}`,
    config.deployDir
  ); //删除旧的web目录;
  //上传文件
  await uploadFile(servers.ssh, config, local);
  //解压
  await runCommand(servers.ssh, `unzip ${config.releaseDir}`, config.deployDir);
  //删除web目录;
  await runCommand(
    servers.ssh,
    `rm -rf ${config.releaseDir}`,
    config.deployDir
  );
  await runCommand(
    servers.ssh,
    `mv dist ${config.releaseDir}`,
    config.deployDir
  ); //重命名
  await servers.ssh.dispose(); //断开ssh
}
main();
```
