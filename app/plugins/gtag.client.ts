export default defineNuxtPlugin(() => {
  const { initialize } = useGtag()
  const start = () => initialize()
  const idle =
    (window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
    }).requestIdleCallback
  if (typeof idle === 'function') idle(start, { timeout: 3000 })
  else setTimeout(start, 2000)
})
