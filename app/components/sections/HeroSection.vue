<script setup lang="ts">
import { profile } from '~/data/site'

const { text, cursor } = useTyping({
  strings: ['Welcome to my portfolio', "I'm Arthur", 'I build with Laravel & Vue'],
  typeSpeed: 60,
  backSpeed: 30,
  holdMs: 1600,
  loop: true,
})
</script>

<template>
  <section
    id="hero"
    class="relative isolate overflow-hidden min-h-[100svh] flex items-center"
    aria-labelledby="hero-heading"
  >
    <div class="absolute inset-0 -z-10">
      <NuxtImg
        src="/img/cover_head.jpeg"
        alt=""
        aria-hidden="true"
        width="1600"
        height="900"
        sizes="100vw"
        format="webp"
        quality="40"
        loading="eager"
        preload
        densities="1x"
        class="w-full h-full object-cover opacity-30"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-night/70 via-night/85 to-night"
        aria-hidden="true"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(254,209,54,0.15),transparent_60%)]"
        aria-hidden="true"
      />
    </div>

    <div class="container-page relative pt-32 pb-20 text-center">
      <h1
        id="hero-heading"
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] animate-fade-up"
      >
        <span class="block text-fg">{{ profile.name }}</span>
        <span class="block mt-2 text-accent">{{ profile.role }}</span>
      </h1>

      <p
        class="mt-8 text-base sm:text-lg md:text-xl text-fg-muted max-w-2xl mx-auto animate-fade-up"
        style="animation-delay: 100ms"
      >
        {{ profile.tagline }}
      </p>

      <div
        class="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
        style="animation-delay: 200ms"
      >
        <a
          href="#portfolio"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-on-accent font-semibold hover:bg-accent-bright transition-colors"
        >
          View portfolio
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a
          href="#contact"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-2 text-fg font-semibold border border-border hover:border-accent/50 hover:bg-surface-3 transition-all"
        >
          Get in touch
        </a>
      </div>

      <p
        class="mt-12 text-sm md:text-base font-mono text-fg-muted h-6 animate-fade-up"
        style="animation-delay: 300ms"
        aria-live="polite"
      >
        <span>{{ text }}</span>
        <span
          class="inline-block w-[1px] h-4 bg-accent ml-0.5 align-middle"
          :class="cursor ? 'animate-blink' : 'opacity-0'"
          aria-hidden="true"
        />
      </p>
    </div>

    <a
      href="#skills"
      class="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full text-fg-muted hover:text-accent transition-colors"
      aria-label="Scroll to skills"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-6 h-6 animate-bounce"
        aria-hidden="true"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="19 12 12 19 5 12" />
      </svg>
    </a>
  </section>
</template>
