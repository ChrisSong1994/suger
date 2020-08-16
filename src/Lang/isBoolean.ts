import getTag from '../Internal/_getTag'

/**
 * @param {*} target
 * @returns {Boolean}
 */
const isBoolean = function (target: any): boolean {
  return getTag(target) === '[object Boolean]'
}

export default isBoolean
