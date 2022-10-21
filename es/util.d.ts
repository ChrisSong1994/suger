/**  数据类型检查
 * @param {any} target
 */
export declare const checkType: (target: any) => string;
/** 查找对象的属性
 * @param {string} key
 */
export declare const shallowProperty: (
  key: string,
) => (obj: { [k: string]: any }) => any;
/**  获取对象的 length 属性
 * @param {object}
 */
export declare const getLength: (obj: { [k: string]: any }) => any;
export declare const result: (instance: any, obj: any, host: any) => any;
/**
 * @param {Function} func
 * @param {Any} context
 * @param {null | number} argCount
 *
 *
 */
export declare const optimizeCb: (
  func: any,
  context: any,
  argCount?: any,
) => any;
