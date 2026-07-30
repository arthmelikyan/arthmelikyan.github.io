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
      <p class="text-xs text-fg-muted mt-2 inline-flex items-center gap-1">
        {{ company.dateFrom }} – {{ company.dateTo }}
        <span v-if="company.note" class="inline-flex group/note">
          <button
            type="button"
            class="peer inline-flex items-center justify-center text-fg-dim hover:text-accent focus-visible:text-accent focus-visible:outline-none rounded-full cursor-help transition-colors"
            :aria-label="`About the ${company.name} role`"
            :aria-describedby="`company-note-${company.id}`"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          </button>
          <span
            :id="`company-note-${company.id}`"
            role="tooltip"
            class="pointer-events-none absolute bottom-full left-3 right-3 z-30 mb-2 rounded-xl border border-border bg-surface-2 p-3 text-left text-xs leading-relaxed text-fg-muted opacity-0 shadow-xl transition-opacity duration-200 group-hover/note:opacity-100 peer-focus:opacity-100"
          >
            {{ company.note }}
          </span>
        </span>
      </p>
    </div>
  </article>
</template>
