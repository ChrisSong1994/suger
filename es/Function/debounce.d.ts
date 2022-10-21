/** 防抖函数
 * @param {function} fn  传入的函数
 * @param {number} wait  间隔时间
 * @param {boolean} immediate  是否立即执行参数
 *  */
declare const debounce: (
  fn: () => void,
  wait: number,
  immediate: boolean,
) => (...args: any[]) => void;
export default debounce;
