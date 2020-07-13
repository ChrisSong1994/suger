/**  判断对象是否包含某个属性
 * @param {object} obj   对象
 * @param {string} prop  属性
 */
const has = (obj: object, prop: string) => {
  return obj !== null && Object.prototype.hasOwnProperty.call(obj, prop)
}

export default has

/***********test**************/

// console.log(has({ a: 'a', b: 'b' }, 'a'))

/***********test**************/
