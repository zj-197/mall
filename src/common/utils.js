// debounce 去抖动，性能服务器优化
export function debounce(func,delay=50) {
  let timer = null
  return function (...args) {
     if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this,args)
    },delay)
  }
}