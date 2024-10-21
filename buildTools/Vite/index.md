## Vite 源码解读

### packages 核心库

compiler
编译阶段 服务器完成的
runtime
运行时阶段 代码已经在浏览器中跑起来了
浏览器不认识 .vue 文件只认识 html css js json 图片
compiler 作用就是将 sfc(单文件组件.vue)编译成 render 函数 js
compiler-core
提供了功能
生成 AST 抽象语法树->transform 转换->generate 生成代码

- compiler-dom
  提供了浏览器相关的编译代码用于生成 render 函数 依赖于 compiler-core
- compiler-sfc
  提供了单文件组件的编译代码用于生成 render 函数 依赖于 compiler-core

- runtime-core
  提供运行是的核心代码 创建组件 运行 生命周期
- runtime-dom
  提供了运行是浏览器 DOM 的相关的代码,用于处理 DOM 交互的运行时
- reactvity
  响应式代码 响应式都在这里
- shared 跟 common 一样的 工具库

### 拦截.vue 文件 koa

设置 content-type mime 类型 为 js
compiler-sfc 处理成 js

setup 语法糖 也就是 setup 函数
\_createElement 函数(tag,props,value)
params tag 标签名称 div span
params props 属性 id class
params value 值
params flag 静态标记 vue2 没有 vue3 优化 patchFlag 静态标记
vue2 是做全量对比 一个一个查找
vue3 优化 通过 patchFlag 静态标记就知道那个属性变化了 ，直接去替换

### 生成 render 函数

生成 render 函数
render 函数
\_createElement 函数(tag,props,value)
params tag 标签名称
params props 属性
params value 值

### vite 使用 esbuild

面试写上 npm i esbuild
esbuild 是一个快速的打包工具 du
esbuild 是用 go 语言写的 处理高并发
支持多线程打包 代码直接编译成机器码 充分利用多核 cpu 的优势

```js
import esbuild from "esbuild";
import fs from "node:fs";
/*
 * 1.转换 天然支持 ts  只是tree shaking 自动转es5 缺点不支持vue
 *   2.打包
 */
//转换
const code = fs.readFileSync("./src/index.ts", "utf-8");
const content = esbuild.transformSync(code, {
  target: "es2015", //转换的格式
  loader: "ts", //文件的类型
});

// vite esbuild rollup postcss babel 规范全部统一

//webpack插件 是一个带有apply 的类 里面的钩子函数

//自己编写插件
const plugin = {
  name: "env",
  //文件解析触发
  setup(build) {
    build.onResolve({ filter: /^env$/ }, (args) => {
      return {
        path: args.path, //文件路径
        namespace: "env", //自定义的模块名字
      };
    });
    //加载文件的时候触发
    build.onLoad({ filter: /.*/, namespace: "env" }, () => {
      return {
        contents: `${JSON.stringify(process.env)}`, //返回的内容
        loader: "json", //返回的内容类型
      };
    });
  },
};
esbuild.buildSync({
  entryPoints: ["./src/index.ts"], //入口文件
  outfile: "./dist/index.js", //出口 打包的位置
  target: "node14", // 编译之后的产物
  format: "cjs", //输出的格式
  bundle: true,
  platform: "node", //打包的平台
  plugins: [plugin], //插件
});
```
