<script setup lang="ts">
import type { Certificate } from '~/types/site'

defineProps<{ certificate: Certificate }>()
defineEmits<{ open: [] }>()
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-2xl bg-surface-2 border border-border hover:border-accent/40 transition-all duration-300"
  >
    <button
      type="button"
      class="block w-full text-left focus:outline-none"
      :aria-label="`Open larger view of ${certificate.title}`"
      @click="$emit('open')"
    >
      <div class="relative aspect-[4/3] overflow-hidden bg-night">
        <NuxtImg
          :src="certificate.thumb"
          :alt="certificate.title"
          width="640"
          height="480"
          loading="lazy"
          sizes="100vw sm:50vw"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-shade/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />
        <span
          class="absolute bottom-3 right-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-shade/85 text-accent border border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </span>
      </div>
      <div class="p-5">
        <p class="text-xs text-fg-muted">{{ certificate.dates }}</p>
        <h3 class="mt-1 text-base font-semibold text-fg">
          {{ certificate.title }}
        </h3>
      </div>
    </button>
  </article>
</template>
