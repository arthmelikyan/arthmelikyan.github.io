<script setup lang="ts">
import {
  cvCertifications,
  cvExperience,
  cvSummary,
  education,
  languages,
  profile,
  skills,
  socials,
} from '~/data/site'
import { useProfileBio } from '~/composables/useProfileBio'
import { profilePageSchema, siteUrl, socialImage } from '~/utils/profileSeo'

const title = `${profile.name} CV — Senior PHP & Laravel Engineer`
const description = 'Arthur Melikyan’s CV: PHP, Laravel, Vue.js, REST APIs, AI integrations, PostgreSQL and Redis. Experience at Hyperspace.ai and Elite Dev Squad, including an affiliated Lovel.ai assignment.'

useSeoMeta({
  title,
  description,
  author: profile.name,
  ogTitle: title,
  ogDescription: description,
  ogType: 'profile',
  ogUrl: `${siteUrl}/cv`,
  ogSiteName: profile.name,
  ogImage: socialImage,
  ogImageWidth: 480,
  ogImageHeight: 640,
  ogImageAlt: `${profile.name} — ${profile.role}`,
  twitterCard: 'summary',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: socialImage,
  twitterImageAlt: `${profile.name} — ${profile.role}`,
  robots: 'index, follow, max-image-preview:large',
})

useHead({
  titleTemplate: (value) => value ?? profile.name,
  link: [{ rel: 'canonical', href: `${siteUrl}/cv` }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(profilePageSchema('/cv', title, description)) }],
})

const { years } = useProfileBio()
const summary = computed(() => cvSummary.replace('{years}', String(years.value)))

const skillGroups = [
  { label: 'Backend', group: 'backend' as const },
  { label: 'Frontend', group: 'frontend' as const },
  { label: 'Data, cache & search', group: 'database' as const },
  { label: 'Cloud, DevOps & infra', group: 'devops' as const },
  { label: 'Architecture & practices', group: 'architecture' as const },
  { label: 'Testing', group: 'testing' as const },
  { label: 'Other', group: 'language' as const },
]

const groupedSkills = skillGroups
  .map((g) => ({ label: g.label, items: skills.filter((s) => s.group === g.group) }))
  .filter((g) => g.items.length > 0)

const linkedIn = computed(() => socials.find((s) => s.id === 'linkedin'))
const github = computed(() => socials.find((s) => s.id === 'github'))
const telegram = computed(
  () => socials.find((s) => s.id === 'telegram')?.href ?? ''
)
</script>

<template>
  <article class="pt-28 pb-16">
    <div class="container-page max-w-4xl">
      <header class="text-center mb-12 print:mb-6">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight">
          {{ profile.name }} — CV
        </h1>
        <p class="mt-2 text-lg text-fg-muted">{{ profile.role }}</p>
        <p class="mt-1 text-sm font-semibold text-accent">{{ profile.availability }}</p>

        <ul
          class="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-fg-muted"
        >
          <li>
            <a
              :href="`mailto:${profile.email}`"
              class="hover:text-accent transition-colors"
            >
              {{ profile.email }}
            </a>
          </li>
          <li v-for="phone in profile.phones" :key="phone">
            <a
              :href="`tel:${phone.replace(/\s|-/g, '')}`"
              class="hover:text-accent transition-colors"
            >
              {{ phone }}
            </a>
          </li>
          <li>{{ profile.location }}</li>
        </ul>

        <div class="mt-6 flex flex-wrap items-center justify-center gap-3 print:hidden">
          <a
            :href="profile.cvPdf"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-on-accent text-sm font-semibold hover:bg-accent-bright transition-colors cursor-pointer"
          >
            Download PDF
          </a>
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-2 text-fg text-sm font-semibold border border-border hover:border-accent/50 transition-colors cursor-pointer"
          >
            ← Portfolio
          </NuxtLink>
        </div>
      </header>

      <section class="mb-10">
        <h2 class="text-xl font-bold text-accent mb-4">Professional summary</h2>
        <p class="text-fg leading-relaxed">{{ summary }}</p>
      </section>

      <section class="mb-10">
        <h2 class="text-xl font-bold text-accent mb-6">Professional experience</h2>
        <ol class="space-y-8">
          <li
            v-for="job in cvExperience"
            :key="job.company + job.period"
            class="p-6 rounded-2xl bg-surface-2/60 border border-border"
          >
            <header
              class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3"
            >
              <p class="text-lg font-semibold text-fg">
                {{ job.company }}
                <span class="text-fg-muted font-normal">— {{ job.role }}</span>
              </p>
              <p class="text-sm text-fg-muted shrink-0">{{ job.period }}</p>
            </header>
            <p
              v-if="job.context"
              class="mb-3 pl-3 border-l-2 border-accent text-sm italic text-fg-muted"
            >
              {{ job.context }}
            </p>
            <ul
              class="space-y-2 list-disc pl-5 marker:text-accent text-fg-muted text-sm leading-relaxed"
            >
              <li v-for="ach in job.achievements" :key="ach">{{ ach }}</li>
            </ul>
            <p class="mt-4 text-xs leading-relaxed text-fg">
              <span
                class="font-bold uppercase tracking-wider text-accent text-xs mr-1"
              >
                Stack:
              </span>
              <span class="font-semibold">{{ job.technologies }}</span>
            </p>
          </li>
        </ol>
      </section>

      <section class="mb-10">
        <h2 class="text-xl font-bold text-accent mb-4">Technical skills</h2>
        <div class="space-y-5">
          <div v-for="group in groupedSkills" :key="group.label">
            <h3
              class="mb-2 text-xs font-bold uppercase tracking-wider text-fg-muted"
            >
              {{ group.label }}
            </h3>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="skill in group.items"
                :key="skill.id"
                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2/60 border border-border text-sm text-fg-muted"
              >
                <img
                  v-if="skill.icon"
                  :src="skill.icon"
                  :alt="`${skill.title} logo`"
                  width="18"
                  height="18"
                  loading="lazy"
                  decoding="async"
                  class="w-4 h-4"
                />
                {{ skill.title }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mb-10">
        <h2 class="text-xl font-bold text-accent mb-4">Languages</h2>
        <ul class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <li
            v-for="lang in languages"
            :key="lang.id"
            class="flex items-center gap-3 p-3 rounded-xl bg-surface-2/60 border border-border"
          >
            <img
              :src="lang.flag"
              :alt="`${lang.name} flag`"
              width="32"
              height="22"
              loading="lazy"
              class="w-8 h-auto rounded-sm"
            />
            <span class="text-fg"
              >{{ lang.name }}
              <span class="text-fg-muted text-sm">· {{ lang.level }}</span></span
            >
          </li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-xl font-bold text-accent mb-4">Education</h2>
        <ol class="space-y-3">
          <li
            v-for="edu in education"
            :key="edu.period"
            class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 p-4 rounded-xl bg-surface-2/60 border border-border"
          >
            <span class="text-fg">{{ edu.name }}</span>
            <span class="text-sm text-fg-muted shrink-0">{{ edu.period }}</span>
          </li>
        </ol>
      </section>

      <section class="mb-10">
        <h2 class="text-xl font-bold text-accent mb-4">Certifications</h2>
        <ol class="space-y-3">
          <li
            v-for="cert in cvCertifications"
            :key="cert.name"
            class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 p-4 rounded-xl bg-surface-2/60 border border-border"
          >
            <span class="text-fg"
              >{{ cert.name }}
              <span class="text-fg-muted text-sm">· {{ cert.issuer }}</span></span
            >
            <span class="text-sm text-fg-muted shrink-0">{{ cert.year }}</span>
          </li>
        </ol>
      </section>

      <section>
        <h2 class="text-xl font-bold text-accent mb-4">Contact</h2>
        <ul class="space-y-2 text-fg-muted text-sm">
          <li>
            <span class="font-semibold text-fg">Email:</span>
            <a
              :href="`mailto:${profile.email}`"
              class="ml-2 text-accent hover:text-accent-bright"
              >{{ profile.email }}</a
            >
          </li>
          <li>
            <span class="font-semibold text-fg">LinkedIn:</span>
            <a
              :href="linkedIn?.href"
              target="_blank"
              rel="noopener"
              class="ml-2 text-accent hover:text-accent-bright"
              >{{ linkedIn?.display }}</a
            >
          </li>
          <li>
            <span class="font-semibold text-fg">GitHub:</span>
            <a
              :href="github?.href"
              target="_blank"
              rel="noopener"
              class="ml-2 text-accent hover:text-accent-bright"
              >{{ github?.display }}</a
            >
          </li>
          <li>
            <span class="font-semibold text-fg">Telegram:</span>
            <a
              :href="telegram"
              target="_blank"
              rel="noopener"
              class="ml-2 text-accent hover:text-accent-bright"
              >@arthmelikyan</a
            >
          </li>
        </ul>
      </section>
    </div>
  </article>
</template>

<style>
@media print {
  body {
    background: white !important;
    color: black !important;
  }
  .container-page {
    max-width: 100% !important;
  }
}
</style>
