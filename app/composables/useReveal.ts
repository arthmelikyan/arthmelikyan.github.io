let sharedObserver: IntersectionObserver | null = null
const callbacks = new WeakMap<Element, () => void>()

function getObserver() {
  if (!import.meta.client) return null
  if (sharedObserver) return sharedObserver

  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const cb = callbacks.get(entry.target)
          cb?.()
          sharedObserver?.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
  )
  return sharedObserver
}

export function useReveal() {
  const reduced =
    import.meta.client &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const reveal = (el: HTMLElement, delay = 0) => {
    if (reduced) {
      el.style.opacity = '1'
      return
    }
    el.style.opacity = '0'
    el.style.transform = 'translateY(18px)'
    el.style.transition = `opacity 600ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 600ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`

    const io = getObserver()
    if (!io) {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
      return
    }
    callbacks.set(el, () => {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
    io.observe(el)
  }

  return { reveal }
}
