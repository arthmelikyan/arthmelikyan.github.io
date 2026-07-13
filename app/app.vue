<script setup lang="ts">
useSeoMeta({
  titleTemplate: (title) => (title ? `${title} — Arthur Melikyan` : 'Arthur Melikyan — Senior PHP / Laravel Engineer'),
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
