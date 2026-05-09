<script setup lang="ts">
import { profile, socials } from '~/data/site'
import SectionHeading from '~/components/ui/SectionHeading.vue'
import SocialLinkComponent from '~/components/ui/SocialLink.vue'
</script>

<template>
  <section
    id="contact"
    class="relative py-14 md:py-20 isolate overflow-hidden"
    aria-labelledby="contact-heading"
  >
    <div class="absolute inset-0 -z-10" aria-hidden="true">
      <NuxtImg
        src="/img/map-image.png"
        alt=""
        sizes="100vw"
        loading="lazy"
        class="w-full h-full object-cover opacity-[0.07]"
      />
      <div class="absolute inset-0 bg-night/30" />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(254,209,54,0.10),transparent_50%)]"
      />
    </div>

    <div class="container-page">
      <SectionHeading
        eyebrow="Let's talk"
        title="Get in touch"
        subtitle="The fastest way to reach me is via email, but I'm on most platforms — pick whichever you prefer."
      />

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div
          class="lg:col-span-1 p-6 md:p-8 rounded-2xl bg-surface-2/60 border border-border"
        >
          <p class="text-xs font-semibold uppercase tracking-wider text-fg-dim">
            Where I am
          </p>
          <p class="mt-2 text-lg font-semibold text-fg">{{ profile.location }}</p>

          <div class="mt-6">
            <p class="text-xs font-semibold uppercase tracking-wider text-fg-dim">
              Email
            </p>
            <a
              :href="`mailto:${profile.email}`"
              class="mt-2 block text-base font-medium text-accent hover:text-accent-bright break-all"
            >
              {{ profile.email }}
            </a>
          </div>

          <div class="mt-6">
            <p class="text-xs font-semibold uppercase tracking-wider text-fg-dim">
              Phone
            </p>
            <ul class="mt-2 space-y-1">
              <li v-for="phone in profile.phones" :key="phone">
                <a
                  :href="`tel:${phone.replace(/\s|-/g, '')}`"
                  class="text-base text-fg hover:text-accent transition-colors"
                >
                  {{ phone }}
                </a>
              </li>
            </ul>
          </div>

          <a
            :href="profile.cvPdf"
            target="_blank"
            rel="noopener"
            class="mt-8 inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-accent text-on-accent font-semibold hover:bg-accent-bright transition-colors"
          >
            Download CV (PDF)
          </a>
        </div>

        <ul class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 self-start">
          <li v-for="link in socials" :key="link.id">
            <SocialLinkComponent :link="link" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
