import isObject from '../Lang/isObject'
import has from './has'

const keys = (obj: object): Array<any> => {
  if (!isObject(obj)) return []
  if (Object.keys) return Object.keys(obj)
  let keysArr = []
  for (let key in obj) {
    if (has(obj, key)) {
      keysArr.push(key)
    }
  }
  return keysArr
}

/***********test**************/

console.log(keys({ a: 'a', b: 'b' }))

/***********test**************/

export default keys
