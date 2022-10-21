/**防抖函数
 * @param {function} fn  节流处理的函数
 * @param {number}  wait  时间间隔
 *  */
declare const throttle: (fn: any, wait: number) => (...args: any[]) => void;
export default throttle;
