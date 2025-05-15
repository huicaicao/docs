import{_ as t,c as a,o as i,a3 as r,j as e,a as o}from"./chunks/framework.Bd41z3wI.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Readme.md","filePath":"Readme.md","lastUpdated":1747300792000}'),l={name:"Readme.md"},s=r(`<h3 id="vitepress" tabindex="-1">vitepress <a class="header-anchor" href="#vitepress" aria-label="Permalink to &quot;vitepress&quot;">​</a></h3><p>前生 vuepress</p><p>vue vitepress 静态站点生成器 ssg 作用于 博客，文档，营销</p><h3 id="怎么用" tabindex="-1">怎么用？ <a class="header-anchor" href="#怎么用" aria-label="Permalink to &quot;怎么用？&quot;">​</a></h3><p>安装 npm vitepress -d</p><h3 id="vitepress-特有的-formatter" tabindex="-1">vitepress 特有的 formatter <a class="header-anchor" href="#vitepress-特有的-formatter" aria-label="Permalink to &quot;vitepress 特有的 formatter&quot;">​</a></h3><p>规则必须是三个- 必须写在头部</p><hr><p>prev： text：&#39;上一页：prev&#39; link：&#39;/markdown-examples.html&#39;</p><hr><hr><p>next： text：&#39;下一页：next&#39; link：&#39;/markdown-examples.html&#39;</p><hr><pre><code>config 配置项 docFooter

docFooter: {
  prev: &quot;上一页&quot;,
  next: &quot;下一页&quot;,
},
</code></pre><h3 id="seo-搜索引擎优化" tabindex="-1">SEO(搜索引擎优化) <a class="header-anchor" href="#seo-搜索引擎优化" aria-label="Permalink to &quot;SEO(搜索引擎优化)&quot;">​</a></h3><p>面试回答 TDK (title, description, keywords) 爬虫机器人会抓取这三个值 h1 标签只能出现一个 main 标签只能出现一个 img alt 必须写 title 必须有值 a 标签 href 里面写的东西很多 提升 seo</p><h3 id="怎么写" tabindex="-1">怎么写 <a class="header-anchor" href="#怎么写" aria-label="Permalink to &quot;怎么写&quot;">​</a></h3><ul><li><ul><li>meta</li></ul></li><li>name: description</li><li>content: &#39;This page demonstrates usage of some of the runtime APIs provided by VitePress.&#39;</li><li><ul><li>meta</li></ul></li><li>name: keywords</li><li>content: &#39;VitePress, API, Runtime&#39;</li></ul><h3 id="怎么写-1" tabindex="-1">怎么写 <a class="header-anchor" href="#怎么写-1" aria-label="Permalink to &quot;怎么写&quot;">​</a></h3><p>head:</p><ul><li><ul><li>meta</li><li>name: title content: VitePress Runtime API Examples</li></ul></li><li><ul><li>meta</li><li>name: keywords content: VitePress Runtime</li></ul></li></ul><h3 id="最后修改的时间-这个必须配合-git-一起用才能修改-git-提交的时间就是最后修改的时间" tabindex="-1">最后修改的时间 这个必须配合 git 一起用才能修改 git 提交的时间就是最后修改的时间 <a class="header-anchor" href="#最后修改的时间-这个必须配合-git-一起用才能修改-git-提交的时间就是最后修改的时间" aria-label="Permalink to &quot;最后修改的时间 这个必须配合 git 一起用才能修改 git 提交的时间就是最后修改的时间&quot;">​</a></h3><pre><code>lastUpdated: {
  text: &quot;最后更新时间&quot;,
  formatOptions: {
    dateStyle: &quot;short&quot;,
    timeStyle: &quot;short&quot;,
  },
},
</code></pre><h2 id="搜索" tabindex="-1">搜索 <a class="header-anchor" href="#搜索" aria-label="Permalink to &quot;搜索&quot;">​</a></h2><pre><code>search: {
  provider: &quot;local&quot;,
},
</code></pre><h2 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h2><p>1.点击 GitHub 仓库的 Seting 2.点击 Pages 3.点击 Branch 4.选择分支 docs 5. 点击 Save</p><h2 id="如何访问" tabindex="-1">如何访问 <a class="header-anchor" href="#如何访问" aria-label="Permalink to &quot;如何访问&quot;">​</a></h2>`,28),n=e("p",{gitHub:"","的名称.github.io项目名称":""},[e("a",{href:"https://huicaicao.github.io",target:"_blank",rel:"noreferrer"},"https://huicaicao.github.io"),o("./docs/")],-1),h=[s,n];function d(c,p,u,m,q,_){return i(),a("div",null,h)}const x=t(l,[["render",d]]);export{b as __pageData,x as default};
