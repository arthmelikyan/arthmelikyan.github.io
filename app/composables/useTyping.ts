type Options = {
  strings: string[]
  typeSpeed?: number
  backSpeed?: number
  holdMs?: number
  loop?: boolean
}

export function useTyping(opts: Options) {
  const text = ref('')
  const cursor = ref(true)

  const reduced =
    import.meta.client &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let stringIdx = 0
  let charIdx = 0
  let phase: 'typing' | 'holding' | 'deleting' = 'typing'
  let timer: ReturnType<typeof setTimeout> | null = null
  let stopped = false

  const tick = () => {
    if (stopped) return

    const current = opts.strings[stringIdx] ?? ''

    if (phase === 'typing') {
      charIdx += 1
      text.value = current.slice(0, charIdx)
      if (charIdx >= current.length) {
        phase = 'holding'
        timer = setTimeout(tick, opts.holdMs ?? 1400)
        return
      }
      timer = setTimeout(tick, opts.typeSpeed ?? 70)
    } else if (phase === 'holding') {
      phase = 'deleting'
      timer = setTimeout(tick, opts.backSpeed ?? 40)
    } else {
      charIdx -= 1
      text.value = current.slice(0, charIdx)
      if (charIdx <= 0) {
        phase = 'typing'
        stringIdx = (stringIdx + 1) % opts.strings.length
        if (!opts.loop && stringIdx === 0) {
          stopped = true
          return
        }
        timer = setTimeout(tick, 250)
        return
      }
      timer = setTimeout(tick, opts.backSpeed ?? 40)
    }
  }

  onMounted(() => {
    if (reduced) {
      text.value = opts.strings[0] ?? ''
      cursor.value = false
      return
    }
    tick()
  })

  onBeforeUnmount(() => {
    stopped = true
    if (timer) clearTimeout(timer)
  })

  return { text, cursor }
}
