import getTag from '../Internal/_getTag';
/**
 * @param {*} target
 * @returns {Boolean}
 */
const isString = function (target) {
  return getTag(target) === '[object String]';
};
export default isString;
