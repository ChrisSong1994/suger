import getTag from '../Internal/_getTag';
/**
 *
 * @param {any} target
 */
const isFunction = function (target) {
  return getTag(target) === '[object Function]';
};
export default isFunction;
