<script setup lang="ts">
import {
  cvCertifications,
  cvExperience,
  education,
  languages,
  profile,
  skills,
  socials,
} from '~/data/site'
import { useProfileBio } from '~/composables/useProfileBio'

definePageMeta({ layout: false })

useSeoMeta({
  title: `CV — ${profile.name}`,
  robots: 'noindex, follow',
})

useHead({
  htmlAttrs: { class: 'cv-print-html' },
  titleTemplate: (title) => title ?? profile.name,
  link: [{ rel: 'canonical', href: 'https://arthmelikyan.github.io/cv' }],
})

const { bio } = useProfileBio()

const linkedIn = socials.find((s) => s.id === 'linkedin')
const github = socials.find((s) => s.id === 'github')

const skillGroups = [
  { label: 'Frontend', group: 'frontend' as const },
  { label: 'Backend', group: 'backend' as const },
  { label: 'Data & cache', group: 'database' as const },
  { label: 'DevOps & infra', group: 'devops' as const },
  { label: 'Testing', group: 'testing' as const },
  { label: 'Other', group: 'language' as const },
]

const groupedSkills = skillGroups
  .map((g) => ({
    label: g.label,
    items: skills.filter((s) => s.group === g.group),
  }))
  .filter((g) => g.items.length > 0)
</script>

<template>
  <div class="page">
    <header class="cv-header">
      <h1 class="name">{{ profile.name }}</h1>
      <p class="role">{{ profile.role }}</p>
      <p class="availability">{{ profile.availability }}</p>
      <div class="accent-rule" aria-hidden="true" />
      <p class="contact">
        <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        <span class="sep">{{ ' | ' }}</span>
        <a
          v-for="phone in profile.phones"
          :key="phone"
          :href="`tel:${phone.replace(/\s|-/g, '')}`"
          >{{ phone }}</a
        >
        <span class="sep">{{ ' | ' }}</span>
        <span class="nowrap">{{ profile.location }}</span>
        <span class="sep">{{ ' | ' }}</span>
        <a :href="linkedIn?.href" target="_blank" rel="noopener">{{
          linkedIn?.display
        }}</a>
        <span class="sep">{{ ' | ' }}</span>
        <a :href="github?.href" target="_blank" rel="noopener">{{
          github?.display
        }}</a>
        <span class="sep">{{ ' | ' }}</span>
        <a href="https://arthmelikyan.github.io" target="_blank" rel="noopener">
          arthmelikyan.github.io
        </a>
      </p>
    </header>

    <section class="section">
      <h2>Professional Summary</h2>
      <p
        v-for="(line, i) in bio"
        :key="i"
        class="lede"
      >
        {{ line }}
      </p>
      <ul class="bullets">
        <li v-for="point in profile.highlights" :key="point">{{ point }}</li>
      </ul>
    </section>

    <section class="section">
      <h2>Professional Experience</h2>
      <article
        v-for="job in cvExperience"
        :key="job.company + job.period"
        class="job"
      >
        <header class="job-header">
          <h3 class="company-line">
            <span class="company">{{ job.company }}</span>
            <span class="job-role">{{ ' — ' + job.role }}</span>
          </h3>
          <p class="job-period">{{ job.location }} | {{ job.period }}</p>
        </header>
        <p v-if="job.context" class="job-context">{{ job.context }}</p>
        <ul class="bullets">
          <li v-for="ach in job.achievements" :key="ach">{{ ach }}</li>
        </ul>
        <p class="tech">
          <span class="tech-label">Technologies:</span>
          {{ job.technologies }}
        </p>
      </article>
    </section>

    <section class="section keep-together">
      <h2>Technical Skills</h2>
      <p v-for="g in groupedSkills" :key="g.label" class="line">
        <span class="line-label">{{ g.label }}:</span>
        {{ g.items.map((s) => s.title).join(', ') }}
      </p>
    </section>

    <section class="section keep-together">
      <h2>Education</h2>
      <p v-for="edu in education" :key="edu.period" class="line">
        <span class="line-label">{{ edu.name }}</span
        >, {{ edu.period }}
      </p>
    </section>

    <section class="section keep-together">
      <h2>Certifications</h2>
      <p v-for="cert in cvCertifications" :key="cert.name" class="line">
        <span class="line-label">{{ cert.name }}</span
        >, {{ cert.issuer }}, {{ cert.year }}
      </p>
    </section>

    <section class="section keep-together">
      <h2>Languages</h2>
      <p class="line">
        {{ languages.map((l) => `${l.name} (${l.level})`).join(', ') }}
      </p>
    </section>
  </div>
</template>

<style>
.cv-print-html,
.cv-print-html body,
.cv-print-html #__nuxt {
  background: #ffffff !important;
  color: #14161c !important;
}

@page {
  size: A4;
  margin: 0;
}
</style>

<style scoped>
.page {
  font-family:
    'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue',
    Arial, sans-serif;
  color: #14161c;
  background: #ffffff;
  width: 210mm;
  margin: 0 auto;
  padding: 10mm 16mm;
  font-size: 9.8pt;
  line-height: 1.44;
  -webkit-font-smoothing: antialiased;
  font-kerning: none;
  font-variant-ligatures: none;
  box-sizing: border-box;
}

/* ---------- Header ---------- */
.cv-header {
  margin: 0 0 10pt;
}
.name {
  margin: 0 0 4pt;
  font-size: 27pt;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.05;
  color: #14161c;
}
.role {
  margin: 0 0 4pt;
  font-size: 12pt;
  font-weight: 400;
  color: #4a4f5a;
}
.availability {
  margin: 0 0 12pt;
  font-size: 9.5pt;
  font-weight: 600;
  color: #14161c;
}
.accent-rule {
  width: 44pt;
  height: 3pt;
  background: #fed136;
  border-radius: 2pt;
  margin: 0 0 10pt;
}
.contact {
  margin: 0;
  font-size: 9.5pt;
  color: #4a4f5a;
  line-height: 1.6;
}
.contact a,
.contact .nowrap {
  color: #14161c;
  text-decoration: none;
  white-space: nowrap;
}
.contact .sep {
  margin: 0 1pt;
  color: #8c919c;
}

/* ---------- Sections ---------- */
.section {
  margin-top: 9pt;
}
.section h2 {
  margin: 0 0 8pt;
  padding: 0 0 3pt;
  font-size: 9.5pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: normal;
  color: #14161c;
  border-bottom: 1.2pt solid #fed136;
  break-after: avoid-page;
}

.lede {
  margin: 0 0 7pt;
  color: #1a1d24;
}
.lede + .lede {
  margin-top: 5pt;
}

.bullets {
  margin: 6pt 0 0;
  padding-left: 0;
  list-style: none;
}
.bullets li {
  position: relative;
  margin: 2.5pt 0;
  padding-left: 12pt;
  color: #1a1d24;
}
.bullets li::before {
  content: '•';
  position: absolute;
  left: 1pt;
  top: 0;
  color: #14161c;
}

/* ---------- Job blocks ---------- */
.job {
  margin-top: 7.5pt;
}
.job:first-of-type {
  margin-top: 0;
}
.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12pt;
  margin: 0 0 4pt;
  break-after: avoid-page;
}
.company-line {
  margin: 0;
  font-weight: 400;
}
.company {
  font-size: 11.5pt;
  font-weight: 700;
  color: #14161c;
  letter-spacing: -0.01em;
}
.job-role {
  font-size: 10pt;
  font-weight: 500;
  color: #4a4f5a;
}
.job-context {
  margin: 0 0 3pt;
  padding-left: 6pt;
  border-left: 1.5pt solid #fed136;
  font-style: italic;
  color: #4a4f5a;
}
.job-period {
  margin: 2pt 0 0;
  font-size: 9.5pt;
  font-weight: 600;
  color: #4a4f5a;
  text-align: right;
  flex-shrink: 0;
}

/* ---------- Technologies line ---------- */
.tech {
  margin: 5pt 0 0;
  font-size: 9.5pt;
  color: #4a4f5a;
  line-height: 1.5;
}
.tech-label {
  font-weight: 700;
  color: #14161c;
}

/* ---------- Skills / education / certifications / languages ---------- */
.line {
  margin: 0 0 3pt;
  color: #1a1d24;
  line-height: 1.5;
}
.line:last-child {
  margin-bottom: 0;
}
.line-label {
  font-weight: 700;
  color: #14161c;
}

.keep-together {
  break-inside: auto;
}

/* ---------- Print ---------- */
@media print {
  .no-print {
    display: none !important;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
}
</style>
