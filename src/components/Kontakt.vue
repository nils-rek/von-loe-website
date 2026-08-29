<template>
  <section id="kontakt" class="py-24 md:py-32 bg-white">
    <div class="max-w-6xl mx-auto px-5 md:px-6">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-16" v-bind="headerReveal">
        <p class="text-petrol-600 font-medium tracking-[0.18em] text-xs md:text-sm uppercase mb-3">
          Kontakt
        </p>
        <h2 class="text-3xl md:text-4xl font-semibold text-ink leading-snug">
          Wir freuen uns auf Ihre Nachricht
        </h2>
        <div class="accent-rule mx-auto mt-5"></div>
        <p class="mt-6 text-ink/70 leading-relaxed">
          Für ein erstes Kennenlernen oder Fragen zum Ablauf erreichen Sie uns telefonisch
          oder per E-Mail. Schreiben Sie gern direkt an die Kollegin oder den Kollegen, dessen
          Verfahren zu Ihrem Anliegen passt – wir melden uns zeitnah zurück.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-start">
        <!-- Contact details -->
        <div class="space-y-4" v-bind="leftReveal">
          <a
            href="tel:+491785642428"
            class="group flex items-center gap-4 bg-paper-50 rounded-xl p-5 border border-paper-200 hover:border-petrol-300 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petrol-500"
          >
            <span class="w-12 h-12 rounded-full bg-petrol-50 flex items-center justify-center text-petrol-600 group-hover:bg-petrol-600 group-hover:text-white transition-colors shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </span>
            <span>
              <span class="block text-xs text-ink/50">Telefon</span>
              <span class="block font-medium text-ink">0178 5642428</span>
            </span>
          </a>

          <a
            v-for="m in mailboxes"
            :key="m.address"
            :href="`mailto:${m.address}`"
            class="group flex items-center gap-4 bg-paper-50 rounded-xl p-5 border border-paper-200 hover:border-petrol-300 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petrol-500"
          >
            <span class="w-12 h-12 rounded-full bg-petrol-50 flex items-center justify-center text-petrol-600 group-hover:bg-petrol-600 group-hover:text-white transition-colors shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </span>
            <span class="min-w-0">
              <span class="block text-xs text-ink/50">{{ m.label }}</span>
              <span class="block font-medium text-ink break-all">{{ m.address }}</span>
            </span>
          </a>

          <!-- Address + hours -->
          <div class="bg-paper-50 rounded-xl p-5 border border-paper-200">
            <div class="flex items-start gap-4">
              <span class="w-12 h-12 rounded-full bg-petrol-50 flex items-center justify-center text-petrol-600 shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </span>
              <div>
                <span class="block text-xs text-ink/50 mb-1">Praxis</span>
                <address class="not-italic font-medium text-ink leading-relaxed">
                  Sofienstraße 13<br />69115 Heidelberg
                </address>
                <p class="text-sm text-ink/55 mt-3">
                  Telefonische Erreichbarkeit: 5 Minuten vor der vollen Stunde
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Erste Schritte -->
        <div class="rounded-2xl bg-gradient-to-br from-petrol-50 to-paper-100 border border-paper-200 p-7 md:p-8" v-bind="rightReveal">
          <h3 class="font-serif text-2xl font-semibold text-ink mb-6">Erste Schritte</h3>
          <ol class="space-y-6">
            <li v-for="(step, idx) in steps" :key="step.title" class="flex gap-4">
              <span class="shrink-0 w-9 h-9 rounded-full bg-petrol-600 text-white font-semibold flex items-center justify-center">
                {{ idx + 1 }}
              </span>
              <div>
                <h4 class="font-semibold text-ink">{{ step.title }}</h4>
                <p class="text-sm text-ink/65 leading-relaxed mt-1">{{ step.text }}</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

const { reveal } = useScrollReveal()
const headerReveal = reveal()
const leftReveal = reveal({ delay: 60 })
const rightReveal = reveal({ delay: 120 })

const mailboxes = [
  { label: 'E-Mail · Tiefenpsychologie (Dr. Isabelle von Loe)', address: 'tiefenpsychologie@psychotherapie-vonloe.de' },
  { label: 'E-Mail · Verhaltenstherapie (Andreas von Loe)', address: 'verhaltenstherapie@psychotherapie-vonloe.de' },
]

const steps = [
  {
    title: 'Kontakt aufnehmen',
    text: 'Melden Sie sich telefonisch oder per E-Mail. Gern klären wir vorab offene Fragen zu Verfahren und Kosten.',
  },
  {
    title: 'Erstgespräch',
    text: 'Wir vereinbaren ein erstes Kennenlernen und klären, ob und wann ein Therapieplatz frei wird.',
  },
  {
    title: 'Therapie beginnen',
    text: 'In den ersten Sitzungen prüfen wir gemeinsam, ob ein Arbeitsbündnis entstehen kann, und legen die Ziele Ihrer Therapie fest.',
  },
]
</script>
