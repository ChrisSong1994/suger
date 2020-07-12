import { checkType } from '../Internal/util'

const isBoolean = function (target: any): boolean {
  return checkType(target) === 'Boolean'
}

export default isBoolean
