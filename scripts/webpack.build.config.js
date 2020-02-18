const merge = require("webpack-merge");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer"); // 包依赖可视化
const baseWebpackConfig = require("./webpack.base.config");

// eslint-disable-next-line no-undef
const name = process.env.npm_package_name;

module.exports = merge(baseWebpackConfig, {
  mode:"production",
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "../dist"),
    filename: name + ".js",
    library: "suger", // 指定类库名,主要用于直接引用的方式(比如使用script 标签)
    libraryTarget: "umd", // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
    globalObject: "this" // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况

  },
  plugins: [
    // 引入清理插件
    new CleanWebpackPlugin(),
    // 模块大小可视化图表
    new BundleAnalyzerPlugin()
  ]
});
