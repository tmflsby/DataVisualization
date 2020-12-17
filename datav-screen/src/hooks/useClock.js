import { ref, onMounted, onUnmounted } from 'vue'

const fillZero = (v) => {
  return v < 10 ? '0' + v : v
}
const dateFilter = (v) => {
  const m = fillZero(v.getMonth() + 1)
  const d = fillZero(v.getDate())
  return `${v.getFullYear()}-${m}-${d}`
}

const timeFilter = (v) => {
  const h = fillZero(v.getHours())
  const m = fillZero(v.getMinutes())
  const s = fillZero(v.getSeconds())
  return `${h}:${m}:${s}`
}

export const clock = () => {
  const now = new Date()
  const date = ref(dateFilter(now))
  const time = ref(timeFilter(now))

  let task
  const start = () => {
    task = setInterval(() => {
      const now = new Date()
      date.value = dateFilter(now)
      time.value = timeFilter(now)
    }, 1000)
  }

  onMounted(start)

  onUnmounted(() => {
    task && clearInterval(task)
  })

  return {
    date,
    time
  }
}
