export function useScrollSpy(ids: string[], topOffset = 96) {
  const active = ref<string | null>(ids[0] ?? null)

  onMounted(() => {
    const visible = new Map<string, number>()

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id
          if (entry.isIntersecting) visible.set(id, entry.intersectionRatio)
          else visible.delete(id)
        }
        let best: string | null = null
        let bestRatio = -1
        for (const id of ids) {
          const ratio = visible.get(id)
          if (ratio !== undefined && ratio > bestRatio) {
            bestRatio = ratio
            best = id
          }
        }
        if (best) active.value = best
      },
      {
        rootMargin: `-${topOffset}px 0px -55% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    }

    onBeforeUnmount(() => io.disconnect())
  })

  return { active }
}
