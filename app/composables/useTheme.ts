type Mode = 'light' | 'dark'

const STORAGE_KEY = 'color-mode'

export function useTheme() {
  const mode = useState<Mode>(STORAGE_KEY, () => 'dark')

  const apply = (next: Mode) => {
    mode.value = next
    if (!import.meta.client) return
    document.documentElement.classList.toggle('light', next === 'light')
    try { localStorage.setItem(STORAGE_KEY, next) } catch {}
  }

  const toggle = () => apply(mode.value === 'dark' ? 'light' : 'dark')

  if (import.meta.client) {
    onMounted(() => {
      const stored = (() => {
        try { return localStorage.getItem(STORAGE_KEY) } catch { return null }
      })()
      if ((stored === 'light' || stored === 'dark') && stored !== mode.value) {
        apply(stored)
      }
    })
  }

  return { mode: readonly(mode), toggle, apply }
}
