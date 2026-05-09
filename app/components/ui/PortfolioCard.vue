<script setup lang="ts">
import type { Portfolio } from '~/types/site'

defineProps<{ portfolio: Portfolio }>()
defineEmits<{ open: [] }>()
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-2xl bg-surface-2 border border-border hover:border-accent/50 transition-all duration-300"
  >
    <button
      type="button"
      class="block w-full text-left focus:outline-none"
      @click="$emit('open')"
    >
      <div class="relative aspect-[16/10] overflow-hidden bg-surface-3">
        <NuxtImg
          :src="portfolio.cover"
          :alt="portfolio.name"
          width="640"
          height="400"
          loading="lazy"
          sizes="100vw sm:50vw md:33vw"
          class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-shade/95 via-shade/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />
        <div
          class="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <span
            class="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-accent"
          >
            View case
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-3.5 h-3.5"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </div>
      <div class="p-5">
        <p class="text-xs font-semibold uppercase tracking-wider text-accent">
          {{ portfolio.type }}
        </p>
        <h3 class="mt-2 text-lg font-semibold text-fg leading-snug">
          {{ portfolio.name }}
        </h3>
        <p class="mt-1 text-sm text-fg-muted">
          {{ portfolio.releaseDate }}
        </p>
      </div>
    </button>
  </article>
</template>
