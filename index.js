"use strict";
// 创建工具库对象
// 需要像underscore 一样支持OOP则suger一定是一个函数可以无new 调用的构造函数
const  _ = obj => {
  if (obj instanceof _) return obj;
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;  // 当new 调用的时候缓存初始值
};

// 模块属性添加
const packageConfig = require("./package.json");
_.version = packageConfig.version;
_.description = packageConfig.description;

// 获取modules下边的所有文件，并扩展到 _ 上
const modules = require.context("./lib", true, /\.js$/); // 返回 webpackContext 函数
const requireAll = context => context.keys().map(context);
requireAll(modules).forEach((item, i) => {
  const fileName = modules.keys()[i];
  const moduleName = fileName.substring(
    fileName.lastIndexOf("/") + 1,
    fileName.lastIndexOf(".")
  );
  _[moduleName] = item.default;
});

// 绑定函数到suger原型对象上;


module.exports = _;
