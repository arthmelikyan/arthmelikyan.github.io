<script setup lang="ts">
import { companies, stats } from '~/data/site'
import SectionHeading from '~/components/ui/SectionHeading.vue'
import CompanyCard from '~/components/ui/CompanyCard.vue'
import Counter from '~/components/ui/Counter.vue'

const { phrase } = useExperience(companies)
</script>

<template>
  <section
    id="experience"
    class="relative py-14 md:py-20 bg-surface/40 border-y border-border/40"
    aria-labelledby="experience-heading"
  >
    <div class="container-page">
      <SectionHeading
        eyebrow="Career"
        :title="phrase"
        subtitle="A track record of shipping production-grade software across teams of every size."
      />

      <ul
        class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        aria-label="Career statistics"
      >
        <li
          v-for="stat in stats"
          :key="stat.label"
          class="p-6 rounded-2xl bg-surface-2/60 border border-border text-center"
        >
          <Counter :stat="stat" />
          <p class="mt-2 text-sm text-fg-muted">{{ stat.label }}</p>
        </li>
      </ul>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <CompanyCard
          v-for="company in companies"
          :key="company.id"
          :company="company"
          :current="company.dateTo === 'Present'"
        />
      </div>
    </div>
  </section>
</template>
