/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
const path = require("path");
module.exports = {
  webpack: {
    // 新增
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure(webpackConfig) {
      if (webpackConfig.mode === "production") {
        // 抽离公共代码，只在生产环境
        if (webpackConfig.optimization == null) {
          webpackConfig.optimization = {};
        }
        webpackConfig.optimization.splitChunks = {
          //optimization.splitChunks 用于抽离公共代码
          chunks: "all", //将所有的代码块都进行拆分 通过抽离公共代码，这些重复的代码只需要被下载和加载一次，可以减小最终构建出的文件的体积，提高页面加载速度。
          cacheGroups: {
            antd: {
              //将包含 "antd" 的模块拆分为一个单独的代码块，命名为 "antd-chunk"，优先级为 100
              name: "antd-chunk",
              test: /antd/,
              priority: 100,
            },
            reactDom: {
              //将包含 "react-dom" 的模块拆分为一个单独的代码块，命名为 "reactDom-chunk"，优先级为 99
              name: "reactDom-chunk",
              test: /react-dom/,
              priority: 99,
            },
            vendors: {
              //将来自 node_modules 目录下的模块拆分为一个单独的代码块，命名为 "vendors-chunk"，优先级为 98
              name: "vendors-chunk",
              test: /node_modules/,
              priority: 98,
            },
          },
        };
      }
      return webpackConfig;
    },
  },
  devServer: {
    //配置开发服务器
    port: 8000, // B 端，前端
    proxy: {
      "/api": "http://localhost:3001", // 我的Mock服务器
    },
  },
};
