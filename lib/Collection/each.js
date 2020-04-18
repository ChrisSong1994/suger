import isArrayLike from "lib/Utils/isArrayLike";
import keys from "lib/Object/keys";
import {optimizeCb} from "lib/Utils/_util";

//数组，类数组，对象的 遍历的实现 可以实现中止 callback(key,value)
const each = (obj, iteratee,context) => {
  // 根据 context 确定不同的迭代函数
  iteratee = optimizeCb(iteratee, context);
  
  var i, length;

  // 如果是类数组
  // 默认不会传入类似 {length: 10} 这样的数据
  if (isArrayLike(obj)) {
    // 遍历
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee(obj[i], i, obj);
    }
  } else { // 如果 obj 是对象
    // 获取对象的所有 key 值
    var _keys = keys(obj);

    // 如果是对象，则遍历处理 values 值
    for (i = 0, length = _keys.length; i < length; i++) {
      iteratee(obj[_keys[i]], _keys[i], obj); // (value, key, obj)
    }
  }

  return obj;
};

export default each;