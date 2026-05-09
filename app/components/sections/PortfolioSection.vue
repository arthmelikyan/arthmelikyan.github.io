<script setup lang="ts">
import { portfolios } from '~/data/site'
import type { Portfolio } from '~/types/site'
import SectionHeading from '~/components/ui/SectionHeading.vue'
import PortfolioCard from '~/components/ui/PortfolioCard.vue'
import PortfolioDialog from '~/components/ui/PortfolioDialog.vue'

const selected = ref<Portfolio | null>(null)
const isOpen = ref(false)

const openCase = (p: Portfolio) => {
  selected.value = p
  isOpen.value = true
}
const closeCase = () => {
  isOpen.value = false
}
</script>

<template>
  <section
    id="portfolio"
    class="py-14 md:py-20"
    aria-labelledby="portfolio-heading"
  >
    <div class="container-page">
      <SectionHeading
        eyebrow="Selected work"
        title="Portfolio"
        subtitle="A curated set of personal and client projects spanning Laravel apps, marketing sites and integrations."
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PortfolioCard
          v-for="p in portfolios"
          :key="p.id"
          :portfolio="p"
          @open="openCase(p)"
        />
      </div>
    </div>

    <PortfolioDialog
      :portfolio="selected"
      :open="isOpen"
      @close="closeCase"
    />
  </section>
</template>
