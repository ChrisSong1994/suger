import isArrayLike from "../../utils/isArrayLike";

//数组，类数组，对象的 遍历的实现 可以实现中止 callback(key,value)
const each = (obj, callback) => {
  let length,
    i = 0;
  if (isArrayLike(obj)) {
    length = obj.length;
    for (; i < length; i++) {
      if (callback.call(obj[i], i, obj[i]) === false) {
        break;
      }
    }
  } else {
    for (i in obj) {
      if (callback.call(obj[i], i, obj[i]) === false) {
        break;
      }
    }
  }
  return obj;
};

export default each;