import isObject from '../Lang/isObject'
import isArray from '../Lang/isArray'
import isString from '../Lang/isString'
import { tags } from '../constants'
import getTag from './_getTag'
import cloneRegExp from './_cloneRegExp'
import cloneSymbol from './_cloneSymbol'
import isPrototype from './_isPrototype'

const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * `Boolean`, `Date`,  `Map`, `Number`, `RegExp`, `Set`, or `String`.
 * @param {Object} object
 * @param {string} tag
 * @returns {Object}
 */

const initCloneByTag = (object: any, tag: string): any => {
  // 根据对象构造函数重新创建新的对象
  const Constructor = object.constructor
  switch (tag) {
    case tags['boolTag']:
    case tags['dateTag']:
      return new Constructor(+object)
    case tags['setTag']:
    case tags['mapTag']:
      return new Constructor()
    case tags['numberTag']:
    case tags['stringTag']:
      return new Constructor(object)
    case tags['regexpTag']:
      return cloneRegExp(object)
    case tags['symbolTag']:
      return cloneSymbol(object)
  }
}

// 拷贝数组
const initCloneArray = (array: regExecArray) => {
  const { length } = array
  const result = new Array(array.length)
  //需要考虑正则exec 执行返回的数组结构
  if (length && isString(array[0]) && hasOwnProperty.call(array, 'index')) {
    result.index = array.index
    result.input = array.input
  }
  return result
}

// 拷贝函数
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object)
    ? Object.create(Object.getPrototypeOf(object))
    : {}
}

/**
 * @param {*} value
 * @param {WeekMap} hash  存放已经引用的对象
 * @returns {*}
 */
const deepClone = (value: any, hash = new WeakMap()): any => {
  // 不是复杂类型直接返回
  if (isObject(value)) return value

  let result
  const tag = getTag(value)
  // 根据数据类型创建对象
  if (isArray(value)) {
    result = initCloneArray(value)
  } else {
    result = initCloneByTag(value, tag)
  }

  if (tag === tags['funcTag']) {
    result = initCloneObject(value)
  }

  // 循环引用
  if (hash.has(value)) return hash.get(value)
  hash.set(value, result)

  // set map 赋值
  if (tag == tag['mapTag']) {
    value.forEach((subValue, key) => {
      result.set(key, deepClone(subValue, hash))
    })
    return result
  }

  if (tag == tag['setTag']) {
    value.forEach((subValue) => {
      result.add(deepClone(subValue, hash))
    })
    return result
  }
}

export default deepClone

//---------------------- test--------------------

function Person(pname) {
  this.name = pname
}

const kobe = new Person('kobe')

// 函数
function say() {
  console.log('hi')
}

const oldObj = {
  a: say,
  b: new Array(1),
  c: new RegExp('ab+c', 'i'),
  d: Person,
}

const cloneObject = deepClone(oldObj)

console.log(cloneObject)
