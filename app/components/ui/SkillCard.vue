<script setup lang="ts">
import type { Skill } from '~/types/site'

defineProps<{ skill: Skill }>()
</script>

<template>
  <li
    class="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-surface-3/80 border border-border-strong/70 hover:border-accent/50 hover:bg-surface-3 transition-all duration-300 shadow-sm shadow-black/30"
  >
    <span
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-accent/10 to-transparent pointer-events-none"
      aria-hidden="true"
    />
    <span
      class="logo-chip relative flex items-center justify-center w-16 h-16 rounded-xl transition-transform duration-300 group-hover:scale-110"
    >
      <img
        :src="skill.icon"
        :alt="`${skill.title} logo`"
        width="44"
        height="44"
        loading="lazy"
        decoding="async"
        class="w-11 h-11 object-contain"
      />
    </span>
    <span class="text-sm font-medium text-fg text-center">{{ skill.title }}</span>
  </li>
</template>
