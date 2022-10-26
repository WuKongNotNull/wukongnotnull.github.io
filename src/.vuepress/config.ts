import { defineUserConfig } from "@vuepress/cli";
import docsearchPlugin from "@vuepress/plugin-docsearch";
import theme from "./theme.js";

export default defineUserConfig({
  //dest: "dist",

  head: [
    ["meta", { name: "baidu-site-verification", content: "4H7tszevS8" }],
    ["meta", { name: "baidu-site-verification", content: "nGf5yi0Gec" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/safari-pinned-tab.svg",
        color: "#5c92d1",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "悟空非空也",
      description: "一个非同凡响的博客，集html,css,javascript,vue,java,go,linux,c,c++,Python等众多语言大成，" +
          "碎片化博客 + 飞书知识库 + 云盘海量资源三种形式加持，强烈打造全网最权威的热门技术资源",
    },

   /* "/en/": {
      title: "WuKongNotNull",
      description: "Mr.Hope personal blog",
    },*/
  },

  theme,

  plugins: [
    docsearchPlugin({
      appId: "LDBQGQC8Q9",
      apiKey: "5c3a7145aeba231c3b85b742d24fc24f",
      indexName: "mrhope",
      locales: {
        "/": {
          placeholder: "搜索",
          translations: {
            button: {
              buttonText: "搜索",
              buttonAriaLabel: "搜索",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    }),
  ],

  shouldPrefetch: false,//预加载
});
