"use strict";
// 创建工具库对象
const suger = {};

// 模块属性添加
const packageConfig = require("../package.json");
suger.version = packageConfig.version;
suger.description = packageConfig.description;

// 获取modules下边的所有文件，并扩展原对象,files是一个函数
const requireAll = context => {
  return context.keys().map(context);
};
const modules = require.context("./modules", true, /\.js$/); // 返回 webpackContext 函数
requireAll(modules).forEach((item, i) => {
  const fileName = modules.keys()[i];
  const moduleName = fileName.substring(
    fileName.lastIndexOf("/") + 1,
    fileName.lastIndexOf(".")
  );
  suger[moduleName] = item.default;
});

export default suger;
