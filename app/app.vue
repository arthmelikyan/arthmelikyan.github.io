<script setup lang="ts">
useSeoMeta({
  titleTemplate: (title) => (title ? `${title} — Arthur Melikyan` : 'Arthur Melikyan — PHP / Laravel Developer'),
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
