import { checkType } from '../Internal/util'

const isObject = function (target: any): boolean {
  return checkType(target) === 'Object'
}

export default isObject
