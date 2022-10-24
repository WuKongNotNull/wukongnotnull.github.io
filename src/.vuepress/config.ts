import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    /* 取消注释后，导航栏的右边会出现 多语言切换*/
/*    "/en/": {
      lang: "en-US",
      title: "WuKongNotNull",
      description: "A blog demo for vuepress-theme-hope",
    },*/
    "/": {
      lang: "zh-CN",
      title: "悟空非空也",
      description: "一个非同凡响的博客，包含html,css,javascript,vue,java,go,linux,c,c++,php,shell等众多语言",
    },
  },

  theme,

  shouldPrefetch: false, // 允许预先载入
});
