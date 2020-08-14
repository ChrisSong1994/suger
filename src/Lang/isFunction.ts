import { checkType } from '../util'

/**
 * 
 * @param {any} target 
 */

const isFunction = function (target: any): boolean {
  const type = checkType(target)
  return type === 'Function'
}

export default isFunction
