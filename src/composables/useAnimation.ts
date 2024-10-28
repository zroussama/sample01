import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'

export function useAnimation() {
  const target = ref(null)
  const isVisible = ref(false)

  useIntersectionObserver(target, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true
    }
  })

  return {
    target,
    isVisible
  }
}