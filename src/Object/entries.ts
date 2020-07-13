import keys from './keys'

/**获取对象的键值对数组
 *  @param {Object} obj
 *
 */
const entries = (obj: { [key: string]: any } = {}) => {
  if (Object.entries) {
    return Object.entries(obj)
  }
  let keysArr: string[] = keys(obj)
  let length: number = keysArr.length
  let entries: any[] = Array(length)
  for (let i = 0; i < length; i++) {
    entries[i] = [keysArr[i], obj[keysArr[i]]]
  }
  return entries
}

export default entries

/***********test**************/

console.log(entries({ a: 'a', b: 'b' }))

/***********test**************/
