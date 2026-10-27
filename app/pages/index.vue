<script setup lang="ts">
import { portfolios, profile } from '~/data/site'
import { profilePageSchema, siteUrl, socialImage } from '~/utils/profileSeo'
import HeroSection from '~/components/sections/HeroSection.vue'
import SkillsSection from '~/components/sections/SkillsSection.vue'
import ExperienceSection from '~/components/sections/ExperienceSection.vue'
import PortfolioSection from '~/components/sections/PortfolioSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'

const title = `${profile.name} — Senior PHP & Laravel Engineer in Armenia`
const description = 'Arthur Melikyan, senior PHP and Laravel engineer in Gyumri, Armenia. REST APIs, AI integrations and Vue.js. Open to remote roles and relocation.'

useSeoMeta({
  title,
  description,
  author: profile.name,
  ogTitle: title,
  ogDescription: description,
  ogType: 'profile',
  ogUrl: `${siteUrl}/`,
  ogSiteName: profile.name,
  ogLocale: 'en_US',
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

const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: portfolios.map((portfolio, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'CreativeWork',
      name: portfolio.name,
      description: portfolio.description,
      creator: { '@id': `${siteUrl}/#person` },
      url: portfolio.url ? new URL(portfolio.url, siteUrl).href : `${siteUrl}/#portfolio`,
      image: `${siteUrl}${portfolio.cover}`,
    },
  })),
}

useHead({
  titleTemplate: (value) => value ?? profile.name,
  link: [{ rel: 'canonical', href: `${siteUrl}/` }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(profilePageSchema('/', title, description)) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(portfolioSchema) },
  ],
})
</script>

<template>
  <article>
    <HeroSection />
    <SkillsSection />
    <ExperienceSection />
    <PortfolioSection />
    <ContactSection />
  </article>
</template>
