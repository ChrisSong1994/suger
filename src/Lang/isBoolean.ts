import { checkType } from '../util'

/**
 *  @param {any} target 
*/
const isBoolean = function (target: any): boolean {
  return checkType(target) === 'Boolean'
}

export default isBoolean
