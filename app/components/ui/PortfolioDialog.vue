<script setup lang="ts">
import type { Portfolio } from '~/types/site'

const props = defineProps<{ portfolio: Portfolio | null; open: boolean }>()
const emit = defineEmits<{ close: [] }>()

const dialogRef = ref<HTMLDialogElement | null>(null)

watch(
  () => props.open,
  async (isOpen) => {
    await nextTick()
    if (!dialogRef.value) return
    if (isOpen && !dialogRef.value.open) {
      dialogRef.value.showModal()
      dialogRef.value.scrollTop = 0
      document.body.style.overflow = 'hidden'
    } else if (!isOpen && dialogRef.value.open) {
      dialogRef.value.close()
      document.body.style.overflow = ''
    }
  }
)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})

const handleClose = () => emit('close')

const onBackdropClick = (e: MouseEvent) => {
  if (e.target === dialogRef.value) handleClose()
}
</script>

<template>
  <Teleport to="body">
    <dialog
      ref="dialogRef"
      class="portfolio-dialog"
      :aria-label="portfolio?.name ?? undefined"
      @close="handleClose"
      @click="onBackdropClick"
      @cancel.prevent="handleClose"
    >
      <button
        v-if="portfolio"
        type="button"
        class="close-fab inline-flex items-center justify-center w-11 h-11 rounded-full bg-shade/85 backdrop-blur-md border border-border-strong text-white hover:bg-accent hover:text-on-accent hover:border-transparent transition-colors"
        aria-label="Close"
        @click="handleClose"
      >
        <svg
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
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div
        v-if="portfolio"
        class="dialog-card relative bg-surface-2 border border-border rounded-2xl overflow-hidden shadow-2xl text-fg"
      >
        <div class="bg-night flex items-center justify-center">
          <img
            :src="portfolio.full"
            :alt="portfolio.title"
            loading="lazy"
            decoding="async"
            class="block w-full h-auto"
          />
        </div>

        <div class="px-6 md:px-8 pt-6 md:pt-8 pb-10 md:pb-12">
          <p
            class="text-xs font-semibold uppercase tracking-wider text-accent"
          >
            {{ portfolio.type }}
          </p>
          <h3 class="mt-2 text-2xl md:text-3xl font-bold tracking-tight">
            {{ portfolio.title }}
          </h3>
          <p class="mt-2 text-sm text-fg-muted">
            Released: {{ portfolio.releaseDate }}
          </p>

          <p
            v-if="portfolio.url"
            class="mt-3 text-sm text-fg-muted break-words"
          >
            <a
              :href="portfolio.url"
              target="_blank"
              rel="noopener"
              class="text-accent hover:text-accent-bright underline-offset-4 hover:underline"
            >
              {{
                portfolio.url.startsWith('http')
                  ? portfolio.url.replace(/^https?:\/\//, '')
                  : 'View live →'
              }}
            </a>
          </p>

          <p class="mt-6 text-sm leading-relaxed text-fg">
            {{ portfolio.description }}
          </p>

          <div class="mt-6 mb-2">
            <p
              class="text-xs font-semibold uppercase tracking-wider text-fg-muted mb-3"
            >
              Technologies
            </p>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="tech in portfolio.technologies"
                :key="tech"
                class="px-3 py-1 text-xs font-medium rounded-full bg-surface-3 border border-border text-fg-muted"
              >
                {{ tech }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </dialog>
  </Teleport>
</template>

<style scoped>
.portfolio-dialog {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
}

.portfolio-dialog::backdrop {
  background-color: rgba(7, 9, 15, 0.85);
  backdrop-filter: blur(8px);
}

:where(.light) .portfolio-dialog::backdrop {
  background-color: rgba(20, 22, 28, 0.55);
}

.dialog-card {
  width: min(64rem, calc(100vw - 2rem));
  margin: 2rem auto;
}

.close-fab {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 60;
}

.portfolio-dialog[open] .dialog-card {
  animation: dialog-in 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}
@keyframes dialog-in {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
