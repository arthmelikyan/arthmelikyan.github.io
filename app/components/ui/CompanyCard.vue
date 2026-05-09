<script setup lang="ts">
import type { Company } from '~/types/site'

defineProps<{ company: Company; current?: boolean }>()
</script>

<template>
  <article
    class="relative flex flex-col items-center justify-between gap-4 p-6 rounded-2xl bg-surface-2/60 border border-border hover:border-accent/40 transition-all duration-300 group"
  >
    <span
      v-if="current"
      class="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-accent/15 text-accent border border-accent/30"
    >
      <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
      Now
    </span>
    <div
      class="logo-chip flex items-center justify-center h-24 w-full px-5 rounded-xl"
    >
      <img
        :src="company.logo"
        :alt="`${company.name} logo`"
        width="160"
        height="96"
        loading="lazy"
        decoding="async"
        class="max-h-16 max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div class="text-center">
      <p class="font-semibold text-fg">{{ company.name }}</p>
      <p v-if="company.role" class="text-xs text-fg-dim mt-0.5">
        {{ company.role }}
      </p>
      <p class="text-xs text-fg-muted mt-2">
        {{ company.dateFrom }} – {{ company.dateTo }}
      </p>
    </div>
  </article>
</template>
