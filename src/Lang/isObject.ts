/**
 * @param {any} target
 */
const isObject = function (target: any): boolean {
  const type = typeof target
  return target != null && (type === 'object' || type === 'function')
}

export default isObject
