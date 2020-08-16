/**
 * @param {*} value
 * @returns {Boolean}
 */
const isObjectLike = (value: any): boolean => {
  return value != null && typeof value === 'object'
}

export default isObjectLike
