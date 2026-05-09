import type { Company } from '~/types/site'

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

export function parseMonthYear(label: string): Date {
  if (label === 'Present') return new Date()
  const [month = '', year = ''] = label.split(' ')
  const m = MONTH_NAMES.indexOf(month)
  return new Date(parseInt(year, 10), m < 0 ? 0 : m, 1)
}

type Interval = [start: Date, end: Date]

function mergeIntervals(intervals: Interval[]): Interval[] {
  if (intervals.length === 0) return []
  const sorted = [...intervals].sort((a, b) => a[0].getTime() - b[0].getTime())
  const merged: Interval[] = [sorted[0]!]
  for (let i = 1; i < sorted.length; i++) {
    const [s, e] = sorted[i]!
    const last = merged[merged.length - 1]!

    const adjacencyDate = new Date(last[1].getFullYear(), last[1].getMonth() + 1, 1)
    if (s <= adjacencyDate) {
      last[1] = last[1] > e ? last[1] : e
    } else {
      merged.push([s, e])
    }
  }
  return merged
}

function inclusiveMonths(start: Date, end: Date): number {
  return Math.max(
    0,
    (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth()) +
      1
  )
}

export function useExperience(companies: readonly Company[]) {
  const totalMonths = computed(() => {
    const intervals: Interval[] = companies.map((c) => [
      parseMonthYear(c.dateFrom),
      parseMonthYear(c.dateTo),
    ])
    return mergeIntervals(intervals).reduce(
      (sum, [s, e]) => sum + inclusiveMonths(s, e),
      0
    )
  })

  const years = computed(() => Math.floor(totalMonths.value / 12))
  const months = computed(() => totalMonths.value % 12)

  const phrase = computed(() => {
    const y = years.value
    const m = months.value
    const yPart = `${y} year${y === 1 ? '' : 's'}`
    const mPart = m ? ` & ${m} month${m === 1 ? '' : 's'}` : ''
    return `${yPart}${mPart} of hardworking`
  })

  return { totalMonths, years, months, phrase }
}
