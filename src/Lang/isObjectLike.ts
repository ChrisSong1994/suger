/**
 *
 * @param {any} target 
 */
const isObjectLike = (target: any): boolean => {
  return target != null && typeof target === 'object'
}

export default isObjectLike
