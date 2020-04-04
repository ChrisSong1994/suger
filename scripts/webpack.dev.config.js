const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");

// eslint-disable-next-line no-undef
const name = process.env.npm_package_name;

module.exports = merge(baseWebpackConfig, {
  mode: "development",
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "../devserver/"),   // 创建一个临时文件夹存放开发服务编译的代码
    filename: `${name}.js`,
    library: "suger", // 指定类库名,主要用于直接引用的方式(比如使用script 标签)
    libraryTarget: "umd", // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
    globalObject: "this" // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
  },
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  watch: true,
  devServer: {
    // eslint-disable-next-line no-undef
    contentBase: [path.resolve(__dirname, "../devserver/"), path.resolve(__dirname, "../")],
    hot: true,
    inline: true,
    open: true,
    port: 4000,
    proxy: {
      "suger.js": "http://127.0.0.1:4000/devserver/",
    },
  },
});
