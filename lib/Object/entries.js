import keys from "./keys";

/**获取对象的键值对数组
 *  @param {Object} obj 
 * 
 */
const entries = (obj = {}) => {
  if (Object.entries) {
    return Object.entries(obj);
  }
  let keysArr = keys(obj);
  let length = keysArr.length;
  let entries = Array[length];
  for (let i = 0; i < length; i++) {
    entries[i] = [keysArr[i], obj[keysArr[i]]];
  }
  return entries;
};


export default entries;