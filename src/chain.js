

const chain = (obj,host) =>{
  // 无论是否 OOP 调用，都会转为 OOP 形式
  // 并且给新的构造对象添加了一个 _chain 属性
  var instance = host(obj);

  // 标记是否使用链式操作
  instance._chain = true;

  // 返回 OOP 对象
  // 可以看到该 instance 对象除了多了个 _chain 属性
  // 其他的和直接 _(obj) 的结果一样
  return instance;
};

export default chain;