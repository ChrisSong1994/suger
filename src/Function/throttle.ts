/**防抖函数
 * @param {function} fn  节流处理的函数
 * @param {number}  wait  时间间隔
 *  */
const throttle = (fn, wait: number) => {
  // previous 是上一次执行 fn 的时间
  let previous = 0,
    timer = null
  return (...args) => {
    let now = +new Date()
    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔
    if (now - previous < wait) {
      // 如果小于，则为本次触发操作设立一个新的定时器  定时器时间结束后执行函数 fn
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        previous = now
        fn.apply(this, args)
      }, wait)
    } else {
      // 第一次执行 或者时间间隔超出了设定的时间间隔，执行函数 fn
      previous = now
      fn.apply(this, args)
    }
  }
}

export default throttle
