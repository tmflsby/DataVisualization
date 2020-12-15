export const debounce = (delay, callback) => {
  let task
  return () => {
    clearTimeout(task)
    task = setTimeout(() => {
      callback.apply(this, arguments)
    }, delay)
  }
}
