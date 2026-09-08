<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled || mobileOpen ? 'bg-paper-50/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'"
  >
    <nav class="max-w-6xl mx-auto px-5 md:px-6 py-3 flex items-center justify-between">
      <!-- Wordmark -->
      <a
        href="#top"
        class="flex items-center shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petrol-500 focus-visible:ring-offset-2"
        @click.prevent="goTo('#top')"
      >
        <!-- Logo inklusive Schriftzug direkt aus der Logodatei – kein zusätzlicher Text daneben -->
        <img
          src="/images/logo-lockup.webp"
          alt="Psychotherapeutische Praxis von Loe"
          width="1636"
          height="240"
          class="h-9 sm:h-10 md:h-11 w-auto"
          fetchpriority="high"
        />
      </a>

      <!-- Desktop Nav -->
      <ul class="hidden lg:flex items-center gap-5 xl:gap-7">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="link-underline text-sm font-medium tracking-wide transition-colors py-1"
            :class="activeSection === link.href ? 'text-petrol-600 is-active' : 'text-ink/70 hover:text-petrol-600'"
            @click.prevent="goTo(link.href)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        class="lg:hidden p-2 -mr-2 text-ink hover:text-petrol-600 transition-colors"
        :aria-expanded="mobileOpen"
        :aria-label="mobileOpen ? 'Menü schließen' : 'Menü öffnen'"
        @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="lg:hidden bg-paper-50/98 backdrop-blur-sm border-t border-paper-200 px-5 pb-4"
      >
        <ul class="flex flex-col gap-1 pt-2">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="block py-3 text-base font-medium transition-colors"
              :class="activeSection === link.href ? 'text-petrol-600' : 'text-ink/75 hover:text-petrol-600'"
              @click.prevent="goTo(link.href)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const navLinks = [
  { href: '#angebot', label: 'Angebot' },
  { href: '#ablauf', label: 'Ablauf' },
  { href: '#kosten', label: 'Kosten' },
  { href: '#team', label: 'Über uns' },
  { href: '#raeume', label: 'Räumlichkeiten' },
  { href: '#kontakt', label: 'Kontakt' },
]

const scrolled = ref(false)
const activeSection = ref('')
const mobileOpen = ref(false)

function goTo(href) {
  mobileOpen.value = false
  if (href === '#top') {
    if (route.path !== '/') {
      router.push('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return
  }
  if (route.path !== '/') {
    router.push({ path: '/', hash: href })
  } else {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}

function onScroll() {
  scrolled.value = window.scrollY > 20
  // Scroll-spy: the last section whose top has passed the threshold
  const threshold = 120
  let current = ''
  for (const link of navLinks) {
    const el = document.querySelector(link.href)
    if (el && el.getBoundingClientRect().top <= threshold) {
      current = link.href
    }
  }
  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
