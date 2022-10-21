/**
 *
 * @param {any} target
 */
const isObjectLike = (target) => {
  return target != null && typeof target === 'object';
};
export default isObjectLike;
