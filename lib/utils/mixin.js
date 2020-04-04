import functions from "lib/Object/functions";
import each from "lib/Collection/each";
import { result } from "./util";

/** 主要作用是向 Suger 添加方法
 * @param {Object} obj     // 需要扩展的对象
 * @param {Object} hostObj   // 宿主对象
 * */
const mixin = function(obj, host) {
  // 遍历函数
  each(functions(obj), name => {
    const func = obj[name];
    host.prototype[name] = function() {
      // 第一个参数是传入参数
      const args = [this._wrapped, ...arguments];
      // 支持链式操作
      return result(this, func.apply(host, args));
    };
  });
};

export default mixin;
