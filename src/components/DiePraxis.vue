<template>
  <section id="praxis" class="py-24 md:py-32 bg-white">
    <div class="max-w-6xl mx-auto px-5 md:px-6">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-16" v-bind="headerReveal">
        <p class="text-petrol-600 font-medium tracking-[0.18em] text-xs md:text-sm uppercase mb-3">
          Die Praxis
        </p>
        <h2 class="text-3xl md:text-4xl font-semibold text-ink leading-snug">
          Ein geschützter Rahmen für Ihr Anliegen
        </h2>
        <div class="accent-rule mx-auto mt-5"></div>
        <p class="mt-6 text-ink/70 leading-relaxed">
          In unserer Praxis in einem hellen Heidelberger Altbau begleiten wir – Dr. Isabelle
          von Loe und Andreas von Loe – erwachsene Menschen in herausfordernden Lebensphasen.
          Wir verbinden zwei anerkannte Psychotherapieverfahren unter einem Dach und nehmen uns
          Zeit, gemeinsam mit Ihnen einen passenden Weg zu finden.
        </p>
      </div>

      <!-- Image + intro -->
      <div class="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-16 md:mb-20">
        <div class="relative" v-bind="imageReveal">
          <div class="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-petrol-100 to-moss-100 opacity-60 blur-sm"></div>
          <img
            src="/images/therapieraum.webp"
            alt="Heller Therapieraum mit Stuhlkreis, Fischgrätparkett und hohen Fenstern"
            width="1066"
            height="1600"
            class="w-full h-72 md:h-[26rem] object-cover rounded-2xl shadow-lg shadow-petrol-900/5 ring-1 ring-black/5"
            loading="lazy"
          />
        </div>

        <div v-bind="textReveal">
          <h3 class="font-serif text-2xl font-semibold text-ink mb-4">
            Raum, der zur Ruhe kommen lässt
          </h3>
          <p class="text-ink/70 leading-relaxed mb-4">
            Große Fenster, viel Licht und eine warme, klare Gestaltung: Unsere Räume sind so
            angelegt, dass Sie sich vom ersten Moment an gut aufgehoben fühlen. Hier ist Platz
            für vertrauensvolle Gespräche – für Einzeltherapie ebenso wie für Therapie in der
            Gruppe.
          </p>
          <p class="text-ink/70 leading-relaxed">
            Uns ist ein wertschätzender, unaufgeregter Umgang wichtig. Sie bestimmen das Tempo;
            wir bringen unsere fachliche Erfahrung und einen sicheren Rahmen mit.
          </p>
        </div>
      </div>

      <!-- Privatpraxis explainer -->
      <div
        class="rounded-2xl bg-paper-100 border border-paper-200 p-8 md:p-10"
        v-bind="cardReveal"
      >
        <div class="max-w-2xl mb-8">
          <h3 class="font-serif text-2xl font-semibold text-ink mb-3">
            Privatpraxis – was das für Sie bedeutet
          </h3>
          <p class="text-ink/70 leading-relaxed">
            Wir sind eine Privatpraxis und rechnen unsere Leistungen direkt mit Ihnen ab. Ein
            Termin lässt sich dadurch oft kurzfristig und flexibel vereinbaren. An wen sich
            unser Angebot richtet:
          </p>
        </div>

        <div class="grid sm:grid-cols-3 gap-6">
          <div
            v-for="item in audiences"
            :key="item.title"
            class="bg-white rounded-xl p-6 border border-paper-200/70"
          >
            <div class="w-11 h-11 rounded-lg bg-petrol-50 flex items-center justify-center mb-4 text-petrol-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" v-html="item.icon"></svg>
            </div>
            <h4 class="font-semibold text-ink mb-2">{{ item.title }}</h4>
            <p class="text-sm text-ink/65 leading-relaxed">{{ item.text }}</p>
          </div>
        </div>

        <p class="mt-7 text-sm text-ink/55 leading-relaxed">
          Bitte klären Sie den Umfang der Kostenerstattung vor Beginn mit Ihrer Versicherung
          bzw. Beihilfestelle. Zu unseren Konditionen und zum Ablauf beraten wir Sie gerne
          persönlich.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

const { reveal } = useScrollReveal()
const headerReveal = reveal()
const imageReveal = reveal({ delay: 60 })
const textReveal = reveal({ delay: 120 })
const cardReveal = reveal({ delay: 60 })

const audiences = [
  {
    title: 'Privat Versicherte',
    text: 'Als privat versicherte Person können Sie sich direkt bei uns anmelden. Die Abrechnung erfolgt nach der Gebührenordnung.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3M3.75 6h16.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5Z" />',
  },
  {
    title: 'Beihilfeberechtigte',
    text: 'Beihilfeberechtigte erhalten in der Regel anteilig Kosten erstattet – im Rahmen der jeweiligen Beihilfevorschriften.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />',
  },
  {
    title: 'Selbstzahler',
    text: 'Auch ohne private Versicherung sind Sie willkommen. Als Selbstzahler tragen Sie die Kosten transparent selbst.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />',
  },
]
</script>
