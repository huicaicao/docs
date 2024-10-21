## monorepo 架构

谁在用
vue 源码 element-plus 源码 react 源码 vite 源码

monorepo 基于
npm 不行 yarn 可以 pnpm 常用
pnpm 对比 npm
npm 非扁平化  
vue react 共用模块 版本一样 在外层安装 node-modules
vue react 共用模块 版本不一样 vue，react 分别安装 node-modules

pnpm 扁平化
全局仓库 .pnpm.store
底层原理 软链接和硬链接
软链接 快捷方式 相同的依赖
硬链接 比作引用类型 不同的依赖

硬链接 去仓库.pnpm-store 拿到依赖 node_modules
软链接 拷贝 查找项目中 能够复用的依赖尽量帮你服用节省磁盘空间，避免重新下载

## monorepo 配合 pnpm 去做

1.配置文件 pnpm-workspace.yaml 切换到根目录 pnpm install 安装依赖 2.共用重复的依赖 去 package.json 里面配置 "name": "@web/xxxx",
使用 pnpm add 公共的模块@web/xxxx --filter @web/xxxx 需要安装依赖 项目里面直接可以用 实时更新
