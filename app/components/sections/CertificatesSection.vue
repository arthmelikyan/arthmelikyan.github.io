<script setup lang="ts">
import { certificates } from '~/data/site'
import SectionHeading from '~/components/ui/SectionHeading.vue'
import CertificateCard from '~/components/ui/CertificateCard.vue'

const { open } = usePhotoSwipe()

const items = computed(() =>
  certificates.map((c) => ({
    src: c.full,
    width: c.width,
    height: c.height,
    alt: c.title,
  }))
)

const handleOpen = (index: number) => {
  open(items.value, index)
}
</script>

<template>
  <section
    id="certificates"
    class="py-14 md:py-20 bg-surface/40 border-y border-border/40"
    aria-labelledby="certificates-heading"
  >
    <div class="container-page">
      <SectionHeading
        eyebrow="Education"
        title="Certificates"
        subtitle="Formal training and self-paced courses I've completed along the way."
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CertificateCard
          v-for="(c, i) in certificates"
          :key="c.id"
          :certificate="c"
          @open="handleOpen(i)"
        />
      </div>
    </div>
  </section>
</template>
