/**
 * @param {*} value
 * @returns {string}
 */
const getTag = (value) => {
  return Object.prototype.toString.call(value);
};
export default getTag;
