<script setup lang="ts">
import { profile } from '~/data/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer
    class="border-t border-border/60 bg-surface/40"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div
      class="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-fg-muted"
    >
      <p class="flex items-center gap-2">
        <span>© {{ year }} {{ profile.name }}</span>
        <span aria-hidden="true">·</span>
        <span class="inline-flex items-center gap-1">
          built with
          <span aria-hidden="true" class="text-red-500 inline-block animate-heartbeat">♥</span>
        </span>
      </p>
      <nav
        class="flex items-center gap-5 text-sm font-semibold"
        aria-label="Footer"
      >
        <NuxtLink
          to="/cv"
          class="text-accent hover:text-accent-bright transition-colors"
        >
          CV
        </NuxtLink>
        <a
          :href="profile.cvPdf"
          target="_blank"
          rel="noopener"
          class="text-accent hover:text-accent-bright transition-colors"
        >
          Download PDF
        </a>
      </nav>
    </div>
  </footer>
</template>
