export type Skill = {
  id: string
  title: string
  icon?: string
  group: 'frontend' | 'backend' | 'database' | 'devops' | 'language' | 'testing'
  cvOnly?: boolean
}

export type Company = {
  id: string
  name: string
  logo: string
  dateFrom: string
  dateTo: string | 'Present'
  role?: string
  note?: string
}

export type Portfolio = {
  id: string
  type: string
  name: string
  url: string | null
  releaseDate: string
  title: string
  description: string
  technologies: string[]
  cover: string
  full: string
}

export type   Certificate = {
  id: string
  title: string
  dates: string
  thumb: string
  full: string
  width: number
  height: number
}

export type SocialLink = {
  id: string
  label: string
  href: string
  icon: string
  display: string
}

export type CvExperience = {
  company: string
  role: string
  location: string
  period: string
  context?: string
  achievements: string[]
  technologies: string
}

export type CvCertification = {
  name: string
  issuer: string
  year: string
}
