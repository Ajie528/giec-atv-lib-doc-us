const htmlModules = require('./config/htmlModules.js');


module.exports = {
  theme: "vdoing", // 使用依赖包主题
  // theme: require.resolve('../../vdoing'), // 使用本地主题 (先将vdoing主题文件下载到本地：https://github.com/xugaoyi/vuepress-theme-vdoing)

  title: "GIEC_ATV_Lib",
  description: "GIEC_ATV_Lib Official documentation",
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",(否则页面将失去样式等文件)
  head: [
    // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ["link", { rel: "icon", href: "/img/favicon.png" }], //favicons，资源放在public文件夹
    ["meta", { name: "theme-color", content: "#11a8cd" }], // 移动浏览器主题颜色
    [
      "script",
      {
        src: "https://cdn.wwads.cn/js/makemoney.js",
        async: true,
        type: "text/javascript",
      },
    ], //wwads
  ],

  // 主题配置
  themeConfig: {
    nav: [
      { text: "🏡Index", link: "/" },
      { text: "📖Guide", link: "/pages/index/" },
      { text: "⏳Changelog", link: "/pages/ChangeLog/" },
      {
        text: "🔁Language switching",
        items: [
          {
            text: "🇨🇳",
            link: "http://192.168.110.197:8080/",
          },
          {
            text: "🇺🇸",
            link: "http://192.168.10.16/gitlab/giec_stb/stb_atv_lib",
          },
        ],
      },
      {
        text: "🏮Warehouse address",
        items: [
          {
            text: "🍎gitlab",
            link: "http://192.168.10.16/gitlab/giec_stb/stb_atv_lib",
          },
        ],
      },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2(显示到h3标题)
    // logo: "https://www.giec.cn/uploadfiles/logo/Top002629_logo.png?VG9wMDAyNjI5X2xvZ28ucG5n", // 导航栏logo
    // repo: 'https://github.com/dromara/hutool', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: "Last update", // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    // docsDir: 'docs', // 编辑的文件夹
    // editLinks: true, // 编辑链接
    // editLinkText: '编辑',

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: "structuring", collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    updateBar: {
      // 最近更新栏
      showToArticle: false, // 显示到文章页底部，默认true
      // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],

    pageStyle: "line", // 页面风格，可选值：'card'卡片 | 'line' 线(未设置bodyBgImg时才生效)， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    // contentBgStyle: 1,

    category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面(在@pages文件夹)。如关闭，则反之。
    tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面(在@pages文件夹)。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面(在@pages文件夹)。如关闭，则反之。

    author: {
      // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: "Ajie", // 必需
      //   href: "https://hutool.cn/", // 可选的
    },
    social: {
      // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: "icon-youjian",
          title: "lihj@giec.cn",
          link: "mailto:lihj@giec.cn",
        },
        {
          iconClass: "icon-github",
          title: "GitLab",
          link: "https://github.com/dromara/hutool",
        },
        // {
        //     iconClass: 'icon-QQ',
        //     title: 'QQ群⑦: 715292493',
        //     link: 'https://qm.qq.com/cgi-bin/qm/qr?k=QtsqXLkHpLjE99tkre19j6pjPMhSay1a&jump_from=webapi'
        // }
      ],
    },
    footer: {
      // 页脚信息
      createYear: 2024, // 博客创建年份
      copyrightInfo: "GIEC | Private", // 博客版权信息，支持a标签
    },
    htmlModules,
  },

  // 插件
  plugins: [
    ["fulltext-search"], // 全文搜索

    /*['thirdparty-search', { // 可以添加第三方搜索链接的搜索框(原官方搜索框的参数仍可用)
          thirdparty: [ // 可选，默认 []
            {
              title: '在Maven中搜索',
              frontUrl: 'https://search.maven.org/search?q=',
            }
          ]
        }],*/

    [
      "vuepress-plugin-baidu-tongji", // 百度统计
      {
        hm: "f2c884fc06fca522c4105429259b8a73",
      },
    ],

    [
      "one-click-copy",
      {
        // 代码块复制按钮
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ], // String or Array
        copyMessage: "Copy successfully", // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      "demo-block",
      {
        // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],

    [
      "vuepress-plugin-zooming", // 放大图片
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)",
        options: {
          bgColor: "rgba(0,0,0,0.6)",
        },
      },
    ],

    [
      "@vuepress/last-updated", // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require("dayjs"); // https://day.js.org/
          return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
        },
      },
    ],
    [
      "sitemap",
      {
        hostname: "https://doc.hutool.cn",
      },
    ],
  ],

  markdown: {
    // lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [".vuepress/config.js", ".vuepress/config/htmlModules.js"],
};
