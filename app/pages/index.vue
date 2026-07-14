<script setup lang="ts">
import {
  // certificates,
  companies,
  languages,
  portfolios,
  profile,
  skills,
  socials,
} from '~/data/site'
import { useProfileBio } from '~/composables/useProfileBio'
import HeroSection from '~/components/sections/HeroSection.vue'
import SkillsSection from '~/components/sections/SkillsSection.vue'
import ExperienceSection from '~/components/sections/ExperienceSection.vue'
import PortfolioSection from '~/components/sections/PortfolioSection.vue'
// import CertificatesSection from '~/components/sections/CertificatesSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'

const { yearsLabel } = useProfileBio()

useSeoMeta({
  title: `${profile.name} — ${profile.role}`,
  description: () =>
    `Senior PHP / Laravel engineer in ${profile.location} with ${yearsLabel.value} years building AI integrations, high-performance APIs and Laravel backends. Portfolio, experience, skills and CV.`,
  ogTitle: `${profile.name} — ${profile.role}`,
  ogDescription:
    'Senior PHP / Laravel engineer — AI integrations, high-performance APIs and backends. Portfolio, experience and CV.',
  ogType: 'profile',
  ogImage: '/img/fbcover.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: profile.name,
  twitterDescription: profile.role,
  twitterImage: '/img/fbcover.jpg',
})

useHead({
  titleTemplate: (title) => title ?? profile.name,
})

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  description: `Senior PHP / Laravel engineer with ${yearsLabel.value} years building AI integrations, high-performance APIs and backends for consumer products.`,
  email: `mailto:${profile.email}`,
  url: 'https://arthmelikyan.github.io/',
  image: 'https://arthmelikyan.github.io/img/fbcover.jpg',
  address: { '@type': 'PostalAddress', addressLocality: profile.location },
  knowsAbout: skills.map((s) => s.title),
  knowsLanguage: languages.map((l) => l.name),
  hasOccupation: {
    '@type': 'Occupation',
    name: 'PHP / Laravel Engineer',
    occupationLocation: { '@type': 'City', name: profile.location },
    skills: skills.map((s) => s.title).join(', '),
  },
  worksFor: {
    '@type': 'Organization',
    name: companies[companies.length - 1]?.name,
  },
  alumniOf: companies.slice(0, -1).map((c) => ({
    '@type': 'Organization',
    name: c.name,
  })),
  sameAs: socials
    .filter((s) => s.href.startsWith('http'))
    .map((s) => s.href),
}

const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: portfolios.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'CreativeWork',
      name: p.title,
      description: p.description,
      datePublished: p.releaseDate,
      url: p.url ?? `https://arthmelikyan.github.io/#portfolio`,
      image: `https://arthmelikyan.github.io${p.cover}`,
    },
  })),
}

// const certificatesSchema = {
//   '@context': 'https://schema.org',
//   '@type': 'ItemList',
//   itemListElement: certificates.map((c, i) => ({
//     '@type': 'ListItem',
//     position: i + 1,
//     item: {
//       '@type': 'EducationalOccupationalCredential',
//       name: c.title,
//       dateCreated: c.dates,
//       image: `https://arthmelikyan.github.io${c.full}`,
//     },
//   })),
// }

useHead({
  link: [{ rel: 'canonical', href: 'https://arthmelikyan.github.io/' }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(personSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(portfolioSchema) },
    // { type: 'application/ld+json', innerHTML: JSON.stringify(certificatesSchema) },
  ],
})
</script>

<template>
  <article>
    <HeroSection />
    <SkillsSection />
    <ExperienceSection />
    <PortfolioSection />
    <!-- <CertificatesSection /> -->
    <ContactSection />
  </article>
</template>
