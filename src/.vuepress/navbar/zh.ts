import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",//首页
  {
    text: "博客",
    icon: "discover",
    prefix: "/blog/",
    children: [
      {
        text: "科学上网",
        icon: "discover",
        link: "https://github.com/WuKongNotNull/awesome-free-vpn"
      },
      {
        text: "好物分享",
        icon: "discover",
        link: "https://github.com/WuKongNotNull/awesome-free-vpn"
      },
      {
        text: "程序人生",
        icon: "discover",
        link: "https://github.com/WuKongNotNull/awesome-free-vpn"
      },
      {
        text: "随笔",
        icon: "discover",
        link: "https://github.com/WuKongNotNull/awesome-free-vpn"
      },
    ]
  },
  /*
  {
    text: "编程导航",
    icon: "edit",
    link: "https:/nav-code.com"
  },*/

  {
    text: "Go",
    icon: "edit",
    link: "https:/nav-code.com"
  },
  {
    text: "Java",
    icon: "edit",
   // prefix: "/java/",
    children: [
      {
        text: "Java 基础",
        icon: "edit",
      //  prefix: "javabasic/",
        children: [
          { text: "JavaSE", icon: "edit", link: "https://wukongnotnull.feishu.cn/wiki/space/7045999411425001476" },
          { text: "JavaWeb", icon: "edit", link: "https://wukongnotnull.feishu.cn/wiki/space/7045480536587894788" },
        ],
      },
      {
        text: "Java 框架",
        icon: "edit",
        //prefix: "banana/",
        children: [
          {
            text: "SSM",
            icon: "edit",
            link: "https://wukongnotnull.feishu.cn/wiki/space/7045608622167965700",
          },
          {
            text: "MyBatis Plus",
            icon: "edit",
            link: "https://wukongnotnull.feishu.cn/wiki/space/7081943894585245697",
          },
          {
            text: "SpringBoot",
            icon: "edit",
            link: "https://wukongnotnull.feishu.cn/wiki/space/7045985944117198849",
          },
          {
            text: "SpringCloud",
            icon: "edit",
            link: "https://wukongnotnull.feishu.cn/wiki/space/7045837441919369220",
          }
        ],
      },
      {
        text: "Java 深入",
        icon: "edit",
        //prefix: "banana/",
        children: [
          {
            text: "JVM",
            icon: "edit",
            link: "https://wukongnotnull.feishu.cn/wiki/space/7085310304468615170",
          },
          {
            text: "Java 设计模式",
            icon: "edit",
            link: "https://wukongnotnull.feishu.cn/wiki/space/7085294147543859201",
          }
        ],
      },

    ],
  },
  {
    text: "Python",
    icon: "discover",
    //prefix: "/python/",
    children: [
      {
        text: "Python 基础",
        icon: "discover",
        link: "https://wukongnotnull.feishu.cn/wiki/space/7156606223557656580"
      },
      {
        text: "Djanggo",
        icon: "discover",
        link: "https://wukongnotnull.feishu.cn/wiki/space/7156613535852724226"
      },
      {
        text: "网络爬虫",
        icon: "discover",
        link: "https://wukongnotnull.feishu.cn/wiki/space/7156618826224795650"
      },
      {
        text: "数据分析",
        icon: "discover",
        link: "https://wukongnotnull.feishu.cn/wiki/space/7156620236941164548"
      },
      {
        text: "人工智能",
        icon: "discover",
        link: "https://wukongnotnull.feishu.cn/wiki/space/7156622447502950401"
      },
    ]
  },
  {
    text: "数据库",
    icon: "discover",
    prefix: "/blog/",
    children: [
      {
        text: "MySQL",
        icon: "discover",
        link: "#"
      },
      {
        text: "Oracle",
        icon: "discover",
        link: "#"
      },
      {
        text: "Redis",
        icon: "discover",
        link: "#"
      },
      {
        text: "MongoDB",
        icon: "discover",
        link: "#"
      },
    ]
  },
  {
    text: "大前端",
    icon: "edit",
    // prefix: "/java/",
    children: [
      {
        text: "前端基础",
        icon: "edit",
        //  prefix: "javabasic/",
        children: [
          { text: "H5Css3", icon: "edit", link: "https://wukongnotnull.feishu.cn/wiki/space/7045221249240334338" },
          { text: "JavaScript", icon: "edit", link: "https://wukongnotnull.feishu.cn/wiki/space/7040766992365682716" },
          { text: "ES 6", icon: "edit", link: "#" },
          { text: "TypeScript", icon: "edit", link: "#" },
        ],
      },
      {
        text: "主流框架",
        icon: "edit",
        //prefix: "banana/",
        children: [
          {
            text: "jQuery",
            icon: "edit",
            link: "#",
          },
          {
            text: "Vue 2",
            icon: "edit",
            link: "https://wukongnotnull.feishu.cn/wiki/space/7153036568511414273",
          },
          {
            text: "Vue 3",
            icon: "edit",
            link: "#",
          },
          {
            text: "Uni-App",
            icon: "edit",
            link: "#",
          },

        ],
      },
      {
        text: "JavaScript 深入",
        icon: "edit",
        children: [
          {
            text: "JavaScript 设计模式",
            icon: "edit",
            link: "#",
          }
        ],
      },

    ],
  },
  {
    text: "算法",
    icon: "discover",
    prefix: "/blog/",
    children: [
      {
        text: "数据结构与算法",
        icon: "discover",
        link: "#"
      },
     /* {
        text: "好物分享",
        icon: "discover",
        link: "https://github.com/WuKongNotNull/awesome-free-vpn"
      },
      {
        text: "程序人生",
        icon: "discover",
        link: "https://github.com/WuKongNotNull/awesome-free-vpn"
      },
      {
        text: "随笔",
        icon: "discover",
        link: "https://github.com/WuKongNotNull/awesome-free-vpn"
      },*/
    ]
  },
  {
    text: "面试",
    icon: "discover",
    prefix: "/interview/",
    children: [
      {
        text: "C 开发岗",
        icon: "discover",
        link: "#"
      },
      {
        text: "Java 开发岗",
        icon: "discover",
        link: "#"
      },
      {
        text: "Python 开发岗",
        icon: "discover",
        link: "#"
      },
      {
        text: "Go 开发岗",
        icon: "discover",
        link: "#"
      },
      {
        text: "人事爱问",
        icon: "discover",
        link: "#"
      },
    ]
  },
  {
    text: "运维",
    icon: "edit",
    // prefix: "/java/",
    children: [
      {
        text: "环境与平台",
        icon: "edit",
        //  prefix: "javabasic/",
        children: [
          { text: "网络", icon: "edit", link: "#" },
          { text: "Linux", icon: "edit", link: "#" },
          { text: "Docker", icon: "edit", link: "#" },
        ],
      },
      {
        text: "工具",
        icon: "edit",
        //prefix: "banana/",
        children: [
          {
            text: "Git",
            icon: "edit",
            link: "#",
          },
         /* {
            text: "MyBatis Plus",
            icon: "edit",
            link: "https://wukongnotnull.feishu.cn/wiki/space/7081943894585245697",
          },
          {
            text: "SpringBoot",
            icon: "edit",
            link: "https://wukongnotnull.feishu.cn/wiki/space/7045985944117198849",
          },
          {
            text: "SpringCloud",
            icon: "edit",
            link: "https://wukongnotnull.feishu.cn/wiki/space/7045837441919369220",
          }*/
        ],
      },


    ],
  },
  {
    text: "我",
    icon: "note",
    link: "https://wukongnotnull.feishu.cn/docs/doccnKSb9Ir0g0z40UDztRi2PpW",
  },
]);
