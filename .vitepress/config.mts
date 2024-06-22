import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  outDir: "docs",
  base: "/docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    // 修改页脚
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    // 最后提交的时间
    lastUpdated: {
      text: "最后更新时间",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
    //全局搜索
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    // 右上角
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
      { icon: "facebook", link: "https://www.facebook.com/" },
    ],
  },
});
