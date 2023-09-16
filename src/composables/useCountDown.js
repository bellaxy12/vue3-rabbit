import { dayjs } from 'element-plus'
import { ref, computed, onUnmounted } from 'vue'
export const useCountDown = () => {
  let timer = null
  const time = ref(0)
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  const start = (currentTiem) => {
    time.value = currentTiem
    timer = setInterval(() => {
      time.value --
    }, 1000)
  }
  onUnmounted(() => {
    timer && clearInterval(timer)
  })
  return {
    formatTime,
    start
  }
}