import { checkType } from '../util'

/**
 * @param {any} target 
*/
const isObject = function (target: any): boolean {
  return checkType(target) === 'Object'
}

export default isObject
