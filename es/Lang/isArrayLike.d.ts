/**
 * 判断是否是 ArrayLike Object
 * 类数组，即拥有 length 属性并且 length 属性值为 Number 类型的元素
 * 包括数组、arguments、HTML Collection 以及 NodeList 等等
 * @param {collection}
 */
declare const isArrayLike: (collection: { [k: string]: any }) => boolean;
export default isArrayLike;
