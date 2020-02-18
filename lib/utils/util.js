/**  数据类型检查
 * @param {*} target  
 */
export const checkType = (target) => {
  return Object.prototype.toString.call(target).slice(8, -1);
};


/** 查找对象的属性
 * @param {string} key
*/
export const  shallowProperty = function(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  };
};

/**  获取对象的 length 属性
 * @param {object} 
 */
export const getLength = shallowProperty("length");