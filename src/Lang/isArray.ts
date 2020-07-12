import { checkType } from '../Internal/util'

/**
 * @param {any} target
 */
const isArray = (target: any) => {
  if (Array.isArray) return Array.isArray(target)
  return checkType(target) === 'Array'
}

export default isArray
