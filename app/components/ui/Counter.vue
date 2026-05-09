<script setup lang="ts">
type Stat = { value: number | string; suffix?: string; label: string }

const props = defineProps<{ stat: Stat }>()

const isNumber = typeof props.stat.value === 'number'
const target = isNumber ? (props.stat.value as number) : 0

const { value, el } = useCountUp(target)
</script>

<template>
  <p
    ref="el"
    class="text-4xl md:text-5xl font-bold text-accent tracking-tight tabular-nums"
  >
    <template v-if="isNumber">
      {{ value }}<span class="text-3xl">{{ stat.suffix }}</span>
    </template>
    <template v-else>
      {{ stat.value }}
    </template>
  </p>
</template>
