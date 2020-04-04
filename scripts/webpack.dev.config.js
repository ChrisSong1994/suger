const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.config");

// eslint-disable-next-line no-undef
const name = process.env.npm_package_name;
console.log(name);
module.exports = merge(baseWebpackConfig, {
  mode: "development",
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "../devserver/"),   // 创建一个临时文件夹存放开发服务编译的代码
    publicPath: "/devserver/",
    filename: `${name}.js`,
  },
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      // eslint-disable-next-line no-undef
      template: path.resolve(__dirname, "../static/index.html"),
    }),
  ],
  watch: true,
  devServer: {
    // eslint-disable-next-line no-undef
    contentBase: [path.resolve(__dirname, "../devserver/"), path.resolve(__dirname, "../static/")],
    hot: true,
    inline: true,
    port: 4000,
    proxy: {
      "/devserver/suger.js": "http://127.0.0.1:4000",
    },
  },
});
