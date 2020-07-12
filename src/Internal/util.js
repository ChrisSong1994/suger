"use strict";
exports.__esModule = true;
exports.optimizeCb = exports.result = exports.getLength = exports.shallowProperty = exports.checkType = void 0;
//  内部方法
/**  数据类型检查
 * @param {any} target
 */
exports.checkType = function (target) {
    return Object.prototype.toString.call(target).slice(8, -1);
};
/** 查找对象的属性
 * @param {string} key
 */
exports.shallowProperty = function (key) {
    return function (obj) {
        return obj == null ? void 0 : obj[key];
    };
};
/**  获取对象的 length 属性
 * @param {object}
 */
exports.getLength = exports.shallowProperty('length');
// 判断是否返回opp
exports.result = function (instance, obj, host) {
    return instance._chain ? host(obj).chain() : obj;
};
// 根据 this 指向（context 参数）
// 以及 argCount 参数
// 二次操作返回一些回调、迭代方法
/**
 * @param {Function} func
 * @param {Any} context
 * @param {null | number} argCount
 *
 *
 */
exports.optimizeCb = function (func, context, argCount) {
    // 如果没有指定 this 指向，则返回原函数
    if (context === void 0)
        return func;
    switch (argCount == null ? 3 : argCount) {
        case 1:
            return function (value) {
                return func.call(context, value);
            };
        case 2:
            return function (value, other) {
                return func.call(context, value, other);
            };
        // 如果有指定 this，但没有传入 argCount 参数
        // 则执行以下 case
        // _.each、_.map
        case 3:
            return function (value, index, collection) {
                return func.call(context, value, index, collection);
            };
        // _.reduce、_.reduceRight
        case 4:
            return function (accumulator, value, index, collection) {
                return func.call(context, accumulator, value, index, collection);
            };
    }
    return function () {
        return func.apply(context, arguments);
    };
};
