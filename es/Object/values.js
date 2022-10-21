import keys from './keys';
/**
 * @param {Object}  obj
 * @returns {Array} valueArr
 *
 */
const values = (obj = {}) => {
  const keyArr = keys(obj);
  const length = keyArr.length;
  const valueArr = Array(length);
  for (let i = 0; i < length; i++) {
    valueArr[i] = obj[keyArr[i]];
  }
  return valueArr;
};
export default values;
/***********test**************/
console.log(values({ a: 'a', b: 'b' }));
/***********test**************/
