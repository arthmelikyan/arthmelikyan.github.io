<script setup lang="ts">
import { skills } from '~/data/site'
import SectionHeading from '~/components/ui/SectionHeading.vue'
import SkillCard from '~/components/ui/SkillCard.vue'

const visibleSkills = skills.filter((s) => !s.cvOnly)
</script>

<template>
  <section id="skills" class="py-14 md:py-20" aria-labelledby="skills-heading">
    <div class="container-page">
      <SectionHeading
        eyebrow="What I work with"
        title="Skills"
        subtitle="A blend of frontend, backend, infra and DB tooling I reach for daily — and learning never really stops."
      />

      <ul
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        aria-label="Technical skills"
      >
        <SkillCard v-for="skill in visibleSkills" :key="skill.id" :skill="skill" />
      </ul>
    </div>
  </section>
</template>
