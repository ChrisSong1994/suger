import getTag from '../Internal/_getTag'

/**
 * @param {*} target
 * @returns {Boolean}
 */
const isFunction = function (target: any): boolean {
  return getTag(target) === '[object Function]'
}

export default isFunction
