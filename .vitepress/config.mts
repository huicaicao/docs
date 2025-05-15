import { defineConfig } from "vitepress";
import { basicsNav } from "./basics/index";
import { networkNav } from "./network/index";
import { browserNav } from "./browser/index";
import { buildToolsNav } from "./buildTools/index";
import { frameworksNav } from "./frameworks/index";
import { OtherNav } from "./Other/index";
import { InterviewkQNav } from "./InterviewQuestions/index";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小灰灰的博客",
  description: "A VitePress Site",
  outDir: "/docs/",
  base: "/",
  cacheDir: "./.vitepress/cache",
  themeConfig: {
    logo: "/public/img/logo.jpg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      basicsNav,
      networkNav,
      browserNav,
      buildToolsNav,
      frameworksNav,
      OtherNav,
      InterviewkQNav,
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
    // 侧边栏
    sidebar: [
      {
        text: "vitePress",
        items: [{ text: "", link: "" }],
      },
    ],
    // 右上角
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
      { icon: "facebook", link: "https://www.facebook.com/" },
    ],
  },
});
