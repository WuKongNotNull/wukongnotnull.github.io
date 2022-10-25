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
      description: "一个非同凡响的博客，集html,css,javascript,vue,java,go,linux,c,c++,Python等众多语言大成，" +
          "碎片化博客 + 飞书知识库 + 云盘海量资源三种形式加持，强烈打造全网最权威的热门技术资源",
    },
  },

  theme,

  shouldPrefetch: false, // 允许预先载入
});
