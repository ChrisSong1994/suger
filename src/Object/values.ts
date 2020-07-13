import keys from './keys'

/**
 * @param {Object}  obj
 * @returns {Array} valueArr
 *
 */
const values = (obj: { [key: string]: any } = {}): Array<any> => {
  const keyArr: string[] = keys(obj)
  const length: number = keyArr.length
  const valueArr: any[] = Array(length)

  for (let i = 0; i < length; i++) {
    valueArr[i] = obj[keyArr[i]]
  }
  return valueArr
}

export default values

/***********test**************/

console.log(values({ a: 'a', b: 'b' }))

/***********test**************/
