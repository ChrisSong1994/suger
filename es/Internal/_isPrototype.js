/**
 * 判断是否是原型
 * @param {*} value .
 * @returns {boolean}
 */
const isPrototype = (value) => {
  const Ctor = value && value.constructor;
  const proto =
    (typeof Ctor == 'function' && Ctor.prototype) || Object.prototype;
  return value === proto;
};
export default isPrototype;
