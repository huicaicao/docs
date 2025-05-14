# 如何访问VitePress站点

本文档提供了几种让他人访问您的VitePress站点的方法。

## 方法一：通过GitHub Pages访问（推荐）

本仓库已配置GitHub Actions工作流程，可自动部署到GitHub Pages。

1. 确保在GitHub仓库设置中启用了GitHub Pages:
   - 进入仓库 -> Settings -> Pages
   - Source选择"GitHub Actions"
   
2. 每次推送到master分支后，工作流程会自动运行并部署站点

3. 部署后，站点将可通过以下地址访问：
   - https://[你的GitHub用户名].github.io/docs/

## 方法二：本地预览并分享

如果您想快速让局域网内的其他人访问：

1. 运行以下命令启动预览服务器：
   ```bash
   npm run docs:preview -- --host
   ```

2. 服务器会显示一个本地IP地址，局域网内的其他设备可以通过该IP访问您的站点

## 方法三：部署到其他托管服务

您也可以将构建好的站点部署到其他托管服务：

1. 构建站点：
   ```bash
   npm run docs:build
   ```

2. 构建后的文件位于`docs`目录

3. 将该目录部署到您选择的托管服务：
   - Netlify
   - Vercel
   - Cloudflare Pages
   - 任何支持静态网站托管的服务

## 方法四：使用Netlify或Vercel一键部署

这些平台支持直接从GitHub仓库部署：

1. 在Netlify或Vercel注册并连接您的GitHub账户
2. 导入此仓库
3. 构建命令设置为：`npm run docs:build`
4. 输出目录设置为：`docs`
5. 点击部署按钮

这些平台会自动为您的站点分配一个域名，您也可以设置自定义域名。 