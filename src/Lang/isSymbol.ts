import getTag from '../Internal/_getTag'

/**
 * @param {*} target
 * @returns {Boolean}
 */
const isSymbol = function (target: any): boolean {
  return getTag(target) === '[object Symbol]'
}

export default isSymbol
