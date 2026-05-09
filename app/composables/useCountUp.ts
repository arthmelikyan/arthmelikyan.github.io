export function useCountUp(target: number, duration = 1400) {
  const value = ref(0)
  const el = ref<HTMLElement | null>(null)

  onMounted(() => {
    if (!el.value) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      value.value = target
      return
    }

    let started = false
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true
            io.disconnect()
            const startTs = performance.now()
            const tick = (now: number) => {
              const t = Math.min(1, (now - startTs) / duration)
              const eased = 1 - Math.pow(1 - t, 3)
              value.value = Math.round(target * eased)
              if (t < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el.value)

    onBeforeUnmount(() => io.disconnect())
  })

  return { value, el }
}
