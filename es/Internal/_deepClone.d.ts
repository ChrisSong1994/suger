/** 深拷贝
 * @param {*} value
 * @param {WeekMap} hash  存放已经引用的对象
 * @returns {*}
 */
declare const deepClone: (value: any, hash?: WeakMap<object, any>) => any;
export default deepClone;
