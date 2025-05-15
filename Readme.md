### vitepress

前生 vuepress

vue vitepress 静态站点生成器 ssg
作用于 博客，文档，营销

### 怎么用？

安装 npm vitepress -d

### vitepress 特有的 formatter

规则必须是三个- 必须写在头部

---

prev：
text：'上一页：prev'
link：'/markdown-examples.html'

---

---

next：
text：'下一页：next'
link：'/markdown-examples.html'

---

    config 配置项 docFooter

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

### SEO(搜索引擎优化)

面试回答 TDK (title, description, keywords)
爬虫机器人会抓取这三个值
h1 标签只能出现一个
main 标签只能出现一个
img alt 必须写 title 必须有值
a 标签 href 里面写的东西很多
提升 seo

### 怎么写

- - meta
- name: description
- content: 'This page demonstrates usage of some of the runtime APIs provided by VitePress.'
- - meta
- name: keywords
- content: 'VitePress, API, Runtime'

### 怎么写

head:

- - meta
  - name: title
    content: VitePress Runtime API Examples
- - meta
  - name: keywords
    content: VitePress Runtime

### 最后修改的时间 这个必须配合 git 一起用才能修改 git 提交的时间就是最后修改的时间

    lastUpdated: {
      text: "最后更新时间",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },

## 搜索

    search: {
      provider: "local",
    },

## 部署

1.点击 GitHub 仓库的 Seting 2.点击 Pages 3.点击 Branch 4.选择分支 docs 5. 点击 Save

## 如何访问
https://huicaicao.github.io./docs/
{gitHub 的名称.github.io/项目名称}
