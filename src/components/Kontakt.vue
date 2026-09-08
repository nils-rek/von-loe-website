<template>
  <section id="kontakt" class="py-24 md:py-32 bg-paper-100">
    <div class="max-w-6xl mx-auto px-5 md:px-6">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-16" v-bind="headerReveal">
        <p class="text-petrol-600 font-medium tracking-[0.18em] text-xs md:text-sm uppercase mb-3">
          Kontakt &amp; Anfahrt
        </p>
        <h2 class="text-3xl md:text-4xl font-semibold text-ink leading-snug">
          Wir freuen uns auf Ihre Nachricht
        </h2>
        <div class="accent-rule mx-auto mt-5"></div>
        <p class="mt-6 text-ink/70 leading-relaxed">
          Für ein erstes Kennenlernen oder Fragen zum Ablauf erreichen Sie uns telefonisch
          oder per E-Mail. Schreiben Sie gerne an die E-Mail-Adresse des Therapieverfahrens,
          das Sie persönlich vorrangig anspricht. Wir melden uns zeitnah zurück.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-start">
        <!-- Contact details -->
        <div class="space-y-4" v-bind="leftReveal">
          <a
            href="tel:+491785642428"
            class="group flex items-center gap-4 bg-white rounded-xl p-5 border border-paper-200 hover:border-petrol-300 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petrol-500"
          >
            <span class="w-12 h-12 rounded-full bg-petrol-50 flex items-center justify-center text-petrol-600 group-hover:bg-petrol-600 group-hover:text-white transition-colors shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </span>
            <span>
              <span class="block text-xs text-ink/50">Telefon</span>
              <span class="block font-medium text-ink">0178 5642428</span>
              <span class="block text-xs text-ink/50 mt-0.5">
                Telefonsprechzeit: 5 Minuten vor der vollen Stunde
              </span>
            </span>
          </a>

          <a
            v-for="m in mailboxes"
            :key="m.address"
            :href="`mailto:${m.address}`"
            class="group flex items-center gap-4 bg-white rounded-xl p-5 border border-paper-200 hover:border-petrol-300 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petrol-500"
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

          <!-- Adresse -->
          <div class="bg-white rounded-xl p-5 border border-paper-200">
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
                  Psychotherapeutische Praxis von Loe<br />
                  Sofienstraße 13<br />69115 Heidelberg
                </address>
              </div>
            </div>
          </div>
        </div>

        <!-- Anfahrt -->
        <!--
          TODO(Anfahrt): Entwurf – bitte vor dem Livegang prüfen und konkretisieren
          (Linien­nummern der Straßenbahnen/Busse, Name und Entfernung des nächstgelegenen
          Parkhauses, Etage/Zugang der Praxis). Der Aufzug ist bestätigt; Stufen am
          Hauseingang und ein barrierefreies WC sind weiterhin offen.
        -->
        <div class="rounded-2xl bg-gradient-to-br from-petrol-50 to-paper-100 border border-paper-200 p-7 md:p-8" v-bind="rightReveal">
          <h3 class="font-serif text-2xl font-semibold text-ink mb-6">Anfahrt</h3>
          <ul class="space-y-6">
            <li v-for="route in routes" :key="route.title" class="flex gap-4">
              <span class="shrink-0 w-11 h-11 rounded-full bg-white flex items-center justify-center text-petrol-600 ring-1 ring-petrol-100">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" v-html="route.icon"></svg>
              </span>
              <div>
                <h4 class="font-semibold text-ink">{{ route.title }}</h4>
                <p class="text-sm text-ink/65 leading-relaxed mt-1">{{ route.text }}</p>
              </div>
            </li>
          </ul>
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

const routes = [
  {
    title: 'Mit öffentlichen Verkehrsmitteln',
    text: 'Der Bismarckplatz ist der zentrale Umsteigepunkt Heidelbergs und von zahlreichen Straßenbahn- und Buslinien angefahren. Von dort erreichen Sie die Praxis in der Sofienstraße in wenigen Gehminuten. Vom Hauptbahnhof fahren Sie mit der Straßenbahn ebenfalls nur wenige Minuten bis zum Bismarckplatz.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />',
  },
  {
    title: 'Mit dem Auto',
    text: 'Über die B37 bzw. die Bergheimer Straße gelangen Sie direkt an den Bismarckplatz. In der Innenstadt gilt überwiegend Bewohnerparken; wir empfehlen daher eines der kostenpflichtigen Parkhäuser rund um den Bismarckplatz.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />',
  },
  {
    title: 'Lage',
    text: 'Die Praxis liegt zentral in unmittelbarer Nähe des Bismarckplatzes und ist auch zu Fuß oder mit dem Rad gut zu erreichen. Ein Aufzug ist vorhanden.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />',
  },
]
</script>
