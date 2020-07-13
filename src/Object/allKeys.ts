import isObject from '../Lang/isObject'

// 获取对象的所有属性
const allKeys = (obj: object) => {
  if (!isObject(obj)) return []
  let keys = []
  for (let key in obj) keys.push(key)
  return keys
}

export default allKeys
