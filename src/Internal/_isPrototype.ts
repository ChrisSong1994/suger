import isObject from '../Lang/isObject'

/**
 * 判断是否是原型
 * @param {*} value .
 * @returns {boolean}
 */
const isPrototype = (value: any): boolean => {
  const Ctor = value && value.constructor
  const proto = (typeof Ctor == 'function' && Ctor.prototype) || Object.prototype
  return value === proto
}

export default isPrototype
