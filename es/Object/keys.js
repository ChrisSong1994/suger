import isObject from '../Lang/isObject';
import has from './has';
const keys = (obj) => {
  if (!isObject(obj)) return [];
  if (Object.keys) return Object.keys(obj);
  let keysArr = [];
  for (let key in obj) {
    if (has(obj, key)) {
      keysArr.push(key);
    }
  }
  return keysArr;
};
export default keys;
/***********test**************/
// console.log(keys({ a: 'a', b: 'b' }))
/***********test**************/
