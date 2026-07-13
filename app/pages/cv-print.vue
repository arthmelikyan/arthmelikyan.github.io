<script setup lang="ts">
import {
  certificates,
  cvExperience,
  education,
  hobbies,
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

const linkedIn = socials.find((s) => s.id === 'linkedin')?.href ?? ''
const github = socials.find((s) => s.id === 'github')?.href ?? ''

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

const cvCerts = certificates.filter((c) =>
  ['stepik-python', 'eduonix-redis'].includes(c.id)
)
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
        <span class="sep" aria-hidden="true">·</span>
        <span v-for="(phone, i) in profile.phones" :key="phone">
          <a :href="`tel:${phone.replace(/\s|-/g, '')}`">{{ phone }}</a
          ><span v-if="i < profile.phones.length - 1" aria-hidden="true">
            /
          </span>
        </span>
        <span class="sep" aria-hidden="true">·</span>
        <span>{{ profile.location }}</span>
        <span class="sep" aria-hidden="true">·</span>
        <a :href="linkedIn" target="_blank" rel="noopener">
          linkedin.com/in/arthmelikyan
        </a>
        <span class="sep" aria-hidden="true">·</span>
        <a :href="github" target="_blank" rel="noopener">
          github.com/arthmelikyan
        </a>
        <span class="sep" aria-hidden="true">·</span>
        <a href="https://arthmelikyan.github.io" target="_blank" rel="noopener">
          arthmelikyan.github.io
        </a>
      </p>
    </header>

    <section class="section">
      <h2>Profile</h2>
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
          <div>
            <h3 class="company">{{ job.company }}</h3>
            <p class="job-role">{{ job.role }}</p>
          </div>
          <p class="job-period">{{ job.period }}</p>
        </header>
        <ul class="bullets">
          <li v-for="ach in job.achievements" :key="ach">{{ ach }}</li>
        </ul>
        <p class="tech">
          <span class="tech-label">Stack</span>
          <span class="tech-list">{{ job.technologies }}</span>
        </p>
      </article>
    </section>

    <section class="section keep-together">
      <h2>Technical Skills</h2>
      <dl class="skill-groups">
        <template v-for="g in groupedSkills" :key="g.label">
          <dt>{{ g.label }}</dt>
          <dd>{{ g.items.map((s) => s.title).join(' · ') }}</dd>
        </template>
      </dl>
    </section>

    <section class="section keep-together">
      <h2>Education</h2>
      <dl class="edu-list">
        <template v-for="edu in education" :key="edu.period">
          <dt>{{ edu.period }}</dt>
          <dd>{{ edu.name }}</dd>
        </template>
      </dl>
    </section>

    <section class="section keep-together">
      <h2>Certifications</h2>
      <dl class="edu-list">
        <template v-for="cert in cvCerts" :key="cert.id">
          <dt>{{ cert.dates }}</dt>
          <dd>{{ cert.title }}</dd>
        </template>
      </dl>
    </section>

    <div class="meta-row">
      <section class="section keep-together meta-block">
        <h2>Languages</h2>
        <p>{{ languages.map((l) => `${l.name} (${l.level})`).join(' · ') }}</p>
      </section>

      <section class="section keep-together meta-block">
        <h2>Hobbies</h2>
        <p>{{ hobbies.join(' · ') }}</p>
      </section>
    </div>
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
  padding: 14mm 18mm;
  font-size: 10.25pt;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
}

/* ---------- Header ---------- */
.cv-header {
  margin: 0 0 14pt;
}
.name {
  margin: 0 0 4pt;
  font-size: 30pt;
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
  color: #b88800;
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
.contact a {
  color: #14161c;
  text-decoration: none;
}
.contact .sep {
  margin: 0 6pt;
  color: #c4c8d2;
}

/* ---------- Sections ---------- */
.section {
  margin-top: 16pt;
}
.section h2 {
  margin: 0 0 10pt;
  padding: 0 0 4pt;
  font-size: 9.5pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: #b88800;
  border-bottom: 0.6pt solid #e0e2e8;
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
  margin: 4pt 0;
  padding-left: 14pt;
  color: #1a1d24;
}
.bullets li::before {
  content: '';
  position: absolute;
  left: 2pt;
  top: 0.55em;
  width: 5pt;
  height: 5pt;
  border-radius: 50%;
  background: #fed136;
}

/* ---------- Job blocks ---------- */
.job {
  margin-top: 12pt;
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
.company {
  margin: 0;
  font-size: 11.5pt;
  font-weight: 700;
  color: #14161c;
  letter-spacing: -0.01em;
}
.job-role {
  margin: 1pt 0 0;
  font-size: 10pt;
  font-weight: 500;
  color: #4a4f5a;
}
.job-period {
  margin: 2pt 0 0;
  font-size: 9.5pt;
  font-weight: 600;
  color: #4a4f5a;
  white-space: nowrap;
  flex-shrink: 0;
}

/* ---------- Stack ---------- */
.tech {
  margin: 8pt 0 0;
  font-size: 9.5pt;
  color: #4a4f5a;
  line-height: 1.55;
}
.tech-label {
  display: inline-block;
  background: #fed136;
  color: #14161c;
  font-size: 7.5pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 2pt 6pt;
  border-radius: 3pt;
  margin-right: 6pt;
  vertical-align: 2pt;
}
.tech-list {
  display: inline;
}

/* ---------- Skills + Education (definition lists) ---------- */
.skill-groups,
.edu-list {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 6pt 16pt;
  margin: 0;
}
.skill-groups dt,
.edu-list dt {
  font-weight: 700;
  text-align: right;
  color: #14161c;
  font-size: 9.5pt;
}
.skill-groups dd,
.edu-list dd {
  margin: 0;
  color: #1a1d24;
}

/* ---------- Two-column meta row ---------- */
.meta-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18pt;
}
.meta-block {
  margin-top: 16pt;
}
.meta-block p {
  margin: 0;
  color: #4a4f5a;
}

.keep-together {
  break-inside: avoid-page;
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
