<script setup lang="ts">
import { profile, socials } from '~/data/site'

definePageMeta({ layout: false })

useSeoMeta({
  title: `Cover Letter - ${profile.name}`,
  robots: 'noindex, nofollow',
})

useHead({
  htmlAttrs: { class: 'cover-letter-print-html' },
  titleTemplate: (title) => title ?? profile.name,
})

const linkedIn = socials.find((social) => social.id === 'linkedin')
const github = socials.find((social) => social.id === 'github')
</script>

<template>
  <main class="page">
    <header class="letterhead">
      <h1>{{ profile.name }}</h1>
      <p>{{ profile.role }}</p>
      <div class="rule" aria-hidden="true" />
      <p class="contact">
        {{ profile.location }} · {{ profile.email }} · {{ profile.phones[0] }}<br>
        arthmelikyan.github.io · {{ linkedIn?.display }} · {{ github?.display }}
      </p>
    </header>

    <section class="letter" aria-label="Cover letter">
      <p>Dear Hiring Team,</p>
      <p>
        I am writing to express my interest in relevant engineering opportunities.
        With more than eight years of web-development experience, I build dependable
        Laravel applications and APIs that stay fast as products, traffic, and
        integrations grow.
      </p>
      <p>
        Most recently at Hyperspace.ai, I improved API response times by 4-5x
        through SQL profiling, Laravel Octane, Redis, Nginx, and queue-worker
        tuning. I also led a unified integration layer for 12+ generative-AI
        providers, giving the product a consistent interface across text, image,
        audio, and voice capabilities.
      </p>
      <p>
        I pair practical delivery with strong engineering discipline: clear,
        maintainable code, SOLID design, PHPUnit and Pest testing, and CI/CD.
        I am comfortable owning work from estimation and architecture through
        production, including diagnosing legacy systems and complex edge cases.
      </p>
      <p>
        I would welcome the opportunity to discuss how I can help your team
        build reliable, high-performing software. Thank you for your time and
        consideration.
      </p>
      <p class="signoff">Best regards,<br><strong>Arthur Melikyan</strong></p>
    </section>
  </main>
</template>

<style>
.cover-letter-print-html,
.cover-letter-print-html body,
.cover-letter-print-html #__nuxt {
  background: #ffffff !important;
  color: #14161c !important;
}

@page { size: A4; margin: 0; }
</style>

<style scoped>
.page {
  box-sizing: border-box;
  width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  padding: 25.4mm;
  color: #14161c;
  background: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
  font-size: 11pt;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}
.letterhead { margin-bottom: 27pt; }
.letterhead h1 { margin: 0 0 3pt; font-size: 22pt; line-height: 1.1; letter-spacing: -0.02em; }
.letterhead > p { margin: 0; color: #4a4f5a; }
.rule { width: 42pt; height: 3pt; margin: 13pt 0 10pt; border-radius: 2pt; background: #fed136; }
.contact { font-size: 9.5pt; line-height: 1.55; }
.letter p { margin: 0 0 15pt; }
.letter .signoff { margin-top: 23pt; }
@media print { a { color: inherit; text-decoration: none; } }
</style>
