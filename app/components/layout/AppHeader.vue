<script setup lang="ts">
import { profile } from '~/data/site'
import ThemeToggle from '~/components/ui/ThemeToggle.vue'

type NavItem = { id: string; label: string; href?: string; external?: boolean }

const sections: NavItem[] = [
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'portfolio', label: 'Portfolio' },
  // { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

const route = useRoute()
const isHome = computed(() => route.path === '/')

const { active } = useScrollSpy(sections.map((s) => s.id))

const scrolled = ref(false)
const open = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

const handleNav = (e: MouseEvent, id: string) => {
  if (!isHome.value) return
  e.preventDefault()
  open.value = false
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', `#${id}`)
  }
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-[backdrop-filter,background-color,padding] duration-300"
    :class="
      scrolled || !isHome
        ? 'bg-night/80 backdrop-blur-xl border-b border-border/60 py-2'
        : 'bg-transparent py-4'
    "
  >
    <div class="container-page flex items-center justify-between gap-4">
      <NuxtLink
        to="/"
        class="text-lg md:text-xl font-bold tracking-tight text-fg hover:text-accent transition-colors"
      >
        <span class="text-accent">Arthur</span>
        <span class="ml-1.5">Melikyan</span>
      </NuxtLink>

      <nav class="hidden lg:flex items-center gap-1" aria-label="Primary">
        <NuxtLink
          v-if="!isHome"
          to="/"
          class="px-4 py-2 text-sm font-medium text-fg-muted hover:text-fg rounded-full transition-colors"
        >
          Home
        </NuxtLink>
        <a
          v-for="item in sections"
          :key="item.id"
          :href="isHome ? `#${item.id}` : `/#${item.id}`"
          class="px-4 py-2 text-sm font-medium rounded-full transition-colors"
          :class="
            isHome && active === item.id
              ? 'text-accent'
              : 'text-fg-muted hover:text-fg'
          "
          @click="handleNav($event, item.id)"
        >
          {{ item.label }}
        </a>
        <a
          :href="profile.cvPdf"
          target="_blank"
          rel="noopener"
          class="ml-2 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-accent text-on-accent hover:bg-accent-bright transition-colors"
        >
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download CV
        </a>
        <ThemeToggle class="ml-2 hidden lg:inline-flex" />
      </nav>

      <div class="lg:hidden flex items-center gap-2">
        <ThemeToggle />

        <button
          type="button"
          class="inline-flex items-center justify-center w-11 h-11 rounded-full bg-surface-2 border border-border text-fg"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          @click="open = !open"
        >
        <svg
          v-if="!open"
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
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="14" y2="17" />
        </svg>
        <svg
          v-else
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
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </svg>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        id="mobile-menu"
        class="lg:hidden border-t border-border/60 bg-night/95 backdrop-blur-xl"
      >
        <nav
          class="container-page py-4 flex flex-col gap-1"
          aria-label="Mobile primary"
        >
          <NuxtLink
            v-if="!isHome"
            to="/"
            class="px-4 py-3 text-base text-fg-muted hover:text-fg rounded-lg"
            @click="open = false"
          >
            Home
          </NuxtLink>
          <a
            v-for="item in sections"
            :key="item.id"
            :href="isHome ? `#${item.id}` : `/#${item.id}`"
            class="px-4 py-3 text-base rounded-lg transition-colors"
            :class="
              isHome && active === item.id
                ? 'text-accent bg-surface-2'
                : 'text-fg-muted hover:text-fg hover:bg-surface-2'
            "
            @click="handleNav($event, item.id)"
          >
            {{ item.label }}
          </a>
          <a
            :href="profile.cvPdf"
            target="_blank"
            rel="noopener"
            class="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 font-semibold rounded-lg bg-accent text-on-accent hover:bg-accent-bright"
          >
            Download CV
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
