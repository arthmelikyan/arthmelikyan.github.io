<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <header
    class="mb-10"
    :class="(align ?? 'center') === 'center' ? 'text-center' : 'text-left'"
  >
    <p
      v-if="eyebrow"
      class="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3"
    >
      {{ eyebrow }}
    </p>
    <h2
      class="heading-accent text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="mt-6 text-base md:text-lg text-fg-muted max-w-2xl"
      :class="(align ?? 'center') === 'center' ? 'mx-auto' : ''"
    >
      {{ subtitle }}
    </p>
  </header>
</template>
