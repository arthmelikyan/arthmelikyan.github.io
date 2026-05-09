<script setup lang="ts">
import {
  cvExperience,
  education,
  hobbies,
  languages,
  profile,
  skills,
  socials,
} from '~/data/site'
import { useProfileBio } from '~/composables/useProfileBio'

useSeoMeta({
  title: `CV — ${profile.name}`,
  description: `Detailed CV for ${profile.name}: experience, technical skills, education, languages and hobbies.`,
  ogTitle: `${profile.name} — CV`,
  ogDescription: profile.role,
  ogImage: '/img/fbcover.jpg',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://arthmelikyan.github.io/cv' }],
})

const { bio } = useProfileBio()

const linkedIn = computed(
  () => socials.find((s) => s.id === 'linkedin')?.href ?? ''
)
const github = computed(() => socials.find((s) => s.id === 'github')?.href ?? '')
const telegram = computed(
  () => socials.find((s) => s.id === 'telegram')?.href ?? ''
)
</script>

<template>
  <article class="pt-28 pb-16">
    <div class="container-page max-w-4xl">
      <header class="text-center mb-12 print:mb-6">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight">
          {{ profile.name }}
        </h1>
        <p class="mt-2 text-lg text-fg-muted">{{ profile.role }}</p>

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
        <h2 class="text-xl font-bold text-accent mb-4">Objective</h2>
        <p
          v-for="(line, i) in bio"
          :key="i"
          class="text-fg leading-relaxed mb-3"
        >
          {{ line }}
        </p>
        <ul class="mt-4 space-y-2 list-disc pl-6 marker:text-accent text-fg-muted">
          <li v-for="point in profile.highlights" :key="point">
            {{ point }}
          </li>
        </ul>
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
        <ul class="flex flex-wrap gap-2">
          <li
            v-for="skill in skills"
            :key="skill.id"
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-2/60 border border-border text-sm text-fg-muted"
          >
            <img
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
            <span class="text-fg">{{ lang.name }}</span>
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
        <h2 class="text-xl font-bold text-accent mb-4">Hobbies</h2>
        <p class="text-fg-muted">{{ hobbies.join(' · ') }}</p>
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
              :href="linkedIn"
              target="_blank"
              rel="noopener"
              class="ml-2 text-accent hover:text-accent-bright"
              >linkedin.com/in/arthmelikyan</a
            >
          </li>
          <li>
            <span class="font-semibold text-fg">GitHub:</span>
            <a
              :href="github"
              target="_blank"
              rel="noopener"
              class="ml-2 text-accent hover:text-accent-bright"
              >github.com/arthmelikyan</a
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
