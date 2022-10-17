
  /**
   * @license
   * author: undefined
   * suger.js v0.0.1
   * Released under the undefined license.
   */

/**
 * @param {any} target
 */
const isObject = function (target) {
    const type = typeof target;
    return target != null && (type === 'object' || type === 'function');
};

/**  判断对象是否包含某个属性
 * @param {object} obj   对象
 * @param {string} prop  属性
 */
const has = (obj, prop) => {
    return obj !== null && Object.prototype.hasOwnProperty.call(obj, prop);
};
/***********test**************/
// console.log(has({ a: 'a', b: 'b' }, 'a'))
/***********test**************/

const keys = (obj) => {
    if (!isObject(obj))
        return [];
    if (Object.keys)
        return Object.keys(obj);
    let keysArr = [];
    for (let key in obj) {
        if (has(obj, key)) {
            keysArr.push(key);
        }
    }
    return keysArr;
};
/***********test**************/
// console.log(keys({ a: 'a', b: 'b' }))
/***********test**************/

/**获取对象的键值对数组
 *  @param {Object} obj
 *
 */
const entries = (obj = {}) => {
    if (Object.entries) {
        return Object.entries(obj);
    }
    let keysArr = keys(obj);
    let length = keysArr.length;
    let entries = Array(length);
    for (let i = 0; i < length; i++) {
        entries[i] = [keysArr[i], obj[keysArr[i]]];
    }
    return entries;
};
/***********test**************/
console.log(entries({ a: 'a', b: 'b' }));
/***********test**************/

// 获取对象的所有属性
const allKeys = (obj) => {
    if (!isObject(obj))
        return [];
    let keys = [];
    for (let key in obj)
        keys.push(key);
    return keys;
};

/** 防抖函数
 * @param {function} fn  传入的函数
 * @param {number} wait  间隔时间
 * @param {boolean} immediate  是否立即执行参数
 *  */
const debounce = function (fn, wait, immediate) {
    let timer = null;
    return function (...args) {
        if (timer)
            clearTimeout(timer);
        if (immediate && !timer) {
            fn.apply(this, args); // this 指向调用防抖函数的对象
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    };
};

/**防抖函数
 * @param {function} fn  节流处理的函数
 * @param {number}  wait  时间间隔
 *  */
const throttle = (fn, wait) => {
    // previous 是上一次执行 fn 的时间
    let previous = 0;
    let timer = null;
    return (...args) => {
        let now = +new Date();
        // 判断上次触发的时间和本次触发的时间差是否小于时间间隔
        if (now - previous < wait) {
            // 如果小于，则为本次触发操作设立一个新的定时器  定时器时间结束后执行函数 fn
            if (timer)
                clearTimeout(timer);
            timer = setTimeout(() => {
                previous = now;
                fn.apply(undefined, args);
            }, wait);
        }
        else {
            // 第一次执行 或者时间间隔超出了设定的时间间隔，执行函数 fn
            previous = now;
            fn.apply(undefined, args);
        }
    };
};

export { allKeys, debounce, entries, has, keys, throttle };
//# sourceMappingURL=index.js.map
