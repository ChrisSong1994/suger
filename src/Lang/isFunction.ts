import { checkType } from '../Internal/util'

const isFunction = function (target: any): boolean {
  const type = checkType(target)
  return type === 'Function'
}

export default isFunction
