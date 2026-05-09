<script setup lang="ts">
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-night text-fg flex flex-col">
    <AppHeader />
    <main id="main" class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
