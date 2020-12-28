// 节流：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
export function debounce(fun: Function, delay: number) {
  let tid: NodeJS.Timeout;
  return function () {
    let args = arguments;
    clearTimeout(tid)
    tid = setTimeout(() => {
      fun.apply(null, args)
    }, delay)
  }
}

// 防抖：规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
export function throttle(fun: Function, delay: number) {
  let last: number, deferTimer: NodeJS.Timeout
  return function () {
    let args = arguments;
    let now = +new Date()
    if (last && now < last + delay) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function () {
        last = now
        fun.apply(null, args)
      }, delay - (last - now))
    } else {
      last = now
      fun.apply(null, args)
    }
  }
}
