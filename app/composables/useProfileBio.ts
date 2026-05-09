import { companies, profile } from '~/data/site'

export function useProfileBio() {
  const { years } = useExperience(companies)

  const bio = computed(() =>
    profile.bio.map((line) => line.replace('{years}', String(years.value))),
  )

  const yearsLabel = computed(() => `${years.value}+`)

  return { bio, years, yearsLabel }
}
