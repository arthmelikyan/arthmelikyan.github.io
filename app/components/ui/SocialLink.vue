<script setup lang="ts">
import type { SocialLink as SocialLinkType } from '~/types/site'

defineProps<{ link: SocialLinkType }>()
</script>

<template>
  <a
    :href="link.href"
    :target="link.href.startsWith('http') ? '_blank' : undefined"
    :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
    class="group flex items-center gap-4 p-4 rounded-xl bg-surface-2/60 border border-border hover:border-accent/50 hover:bg-surface-3 transition-all duration-300"
  >
    <span
      class="flex items-center justify-center w-11 h-11 rounded-lg bg-night/60 border border-border group-hover:border-accent/40 transition-colors shrink-0"
    >
      <img
        :src="link.icon"
        :alt="`${link.label} icon`"
        width="24"
        height="24"
        loading="lazy"
        decoding="async"
        class="w-6 h-6"
      />
    </span>
    <span class="flex-1 min-w-0">
      <span class="block text-xs font-semibold uppercase tracking-wider text-fg-dim">
        {{ link.label }}
      </span>
      <span class="block text-sm font-medium text-fg truncate group-hover:text-accent transition-colors">
        {{ link.display }}
      </span>
    </span>
  </a>
</template>
