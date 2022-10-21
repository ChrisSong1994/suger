import getTag from '../Internal/_getTag';
/**
 *  @param {any} target
 */
const isBoolean = function (target) {
  return getTag(target) === '[object Boolean]';
};
export default isBoolean;
