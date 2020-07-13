import { checkType } from '../util'

const isObject = function (target: any): boolean {
  return checkType(target) === 'Object'
}

export default isObject
