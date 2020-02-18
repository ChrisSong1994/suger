const merge = require("webpack-merge");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer"); // 包依赖可视化
const UglifyJSPlugin =require("uglifyjs-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.config");

// eslint-disable-next-line no-undef
const name = process.env.npm_package_name;

module.exports = merge(baseWebpackConfig, {
  mode:"production",
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "../dist"),
    filename: name + ".js"
  },
  devtool: "source-map",
  plugins: [
    // 引入清理插件
    new CleanWebpackPlugin(),
    // 脚本压缩
    new UglifyJSPlugin({sourceMap: true }),
    // 模块大小可视化图表
    new BundleAnalyzerPlugin()
  ]
});
