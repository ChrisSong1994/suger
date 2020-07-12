/** 防抖函数
 * @param {function} fn  传入的函数
 * @param {number} wait  间隔时间
 * @param {boolean} immediate  是否立即执行参数
 *  */

const debounce = function (fn: () => void, wait: number, immediate: boolean) {
  let timer: any = null
  return function (...args: any[]): void {
    if (timer) clearTimeout(timer)

    if (immediate && !timer) {
      fn.apply(this, args) // this 指向调用防抖函数的对象
    }

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}

export default debounce
