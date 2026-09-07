<template>
  <footer class="bg-petrol-800 text-paper-100">
    <div class="max-w-6xl mx-auto px-5 md:px-6 py-14 md:py-16">
      <div class="grid gap-10 md:grid-cols-3">
        <!-- Brand -->
        <div>
          <!--
            Der Schriftzug des Logos ist dunkelblau und waere auf dem petrolfarbenen
            Footer nicht lesbar – deshalb steht das Logo hier auf einer hellen Flaeche.
          -->
          <div class="inline-flex mb-5 rounded-xl bg-paper-50 px-3.5 py-2.5">
            <img
              src="/images/logo-lockup.webp"
              alt="Psychotherapeutische Praxis von Loe"
              width="1367"
              height="240"
              class="h-9 w-auto"
              loading="lazy"
            />
          </div>
          <p class="text-sm text-paper-100/70 leading-relaxed max-w-xs">
            Praxis für psychologische Psychotherapie in Heidelberg –
            Dr. Isabelle von Loe &amp; Andreas von Loe.
          </p>
        </div>

        <!-- Quick links -->
        <nav aria-label="Fußzeile" class="text-sm">
          <h2 class="font-serif text-lg font-semibold mb-4 text-white">Übersicht</h2>
          <ul class="space-y-2.5">
            <li v-for="link in links" :key="link.href">
              <a
                :href="link.href"
                class="text-paper-100/75 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white/60 rounded"
                @click.prevent="goTo(link.href)"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Legal + contact -->
        <div class="text-sm">
          <h2 class="font-serif text-lg font-semibold mb-4 text-white">Rechtliches</h2>
          <ul class="space-y-2.5">
            <li>
              <router-link to="/impressum" class="text-paper-100/75 hover:text-white transition-colors">
                Impressum
              </router-link>
            </li>
            <li>
              <router-link to="/datenschutz" class="text-paper-100/75 hover:text-white transition-colors">
                Datenschutz
              </router-link>
            </li>
          </ul>
          <address class="not-italic mt-5 text-paper-100/60 leading-relaxed">
            Sofienstraße 13<br />
            69115 Heidelberg
          </address>
        </div>
      </div>

      <div class="mt-12 pt-6 border-t border-white/10 text-xs text-paper-100/55">
        © {{ year }} Psychotherapeutische Praxis von Loe. Alle Rechte vorbehalten.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const year = new Date().getFullYear()

const links = [
  { href: '#praxis', label: 'Die Praxis' },
  { href: '#psychotherapie', label: 'Psychotherapie' },
  { href: '#therapieangebot', label: 'Therapieangebot' },
  { href: '#team', label: 'Wir' },
  { href: '#kontakt', label: 'Kontakt' },
]

function goTo(href) {
  if (route.path !== '/') {
    router.push({ path: '/', hash: href })
  } else {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
