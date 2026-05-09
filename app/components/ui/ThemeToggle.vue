<script setup lang="ts">
const { mode, toggle } = useTheme()
const isLight = computed(() => mode.value === 'light')
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-2 border border-border text-fg hover:border-accent/40 hover:text-accent transition-colors cursor-pointer"
    :aria-label="isLight ? 'Switch to dark mode' : 'Switch to light mode'"
    :aria-pressed="isLight"
    @click="toggle"
  >
    <ClientOnly>
      <svg
        v-if="isLight"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-5 h-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
      <template #fallback>
        <span class="w-5 h-5" aria-hidden="true" />
      </template>
    </ClientOnly>
  </button>
</template>
