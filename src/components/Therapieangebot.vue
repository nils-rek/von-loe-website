<template>
  <section id="therapieangebot" class="py-24 md:py-32 bg-white">
    <div class="max-w-6xl mx-auto px-5 md:px-6">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-16" v-bind="headerReveal">
        <p class="text-petrol-600 font-medium tracking-[0.18em] text-xs md:text-sm uppercase mb-3">
          Therapieangebot
        </p>
        <h2 class="text-3xl md:text-4xl font-semibold text-ink leading-snug">
          Zwei Verfahren unter einem Dach
        </h2>
        <div class="accent-rule mx-auto mt-5"></div>
        <p class="mt-6 text-ink/70 leading-relaxed">
          Wir bieten psychologische Psychotherapie für Erwachsene an – als Einzel- und als
          Gruppentherapie. Welches Verfahren zu Ihnen passt, finden wir gemeinsam in einem
          ersten Gespräch heraus.
        </p>
      </div>

      <!-- Approach cards -->
      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <article
          v-for="(a, i) in approaches"
          :key="a.title"
          v-bind="cardReveals[i]"
          class="group bg-paper-50 rounded-2xl p-8 border border-paper-200 border-t-2 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          :class="a.borderClass"
        >
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
            :class="a.iconWrap"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" v-html="a.icon"></svg>
          </div>
          <h3 class="font-serif text-xl font-semibold text-ink mb-2">{{ a.title }}</h3>
          <p class="text-xs font-medium tracking-wide uppercase mb-3" :class="a.tagClass">{{ a.tag }}</p>
          <p class="text-ink/65 leading-relaxed text-[0.95rem]">{{ a.text }}</p>
        </article>
      </div>

      <!-- Behandlungsspektrum -->
      <div class="bg-paper-50 rounded-2xl p-8 md:p-10 border border-paper-200" v-bind="spectrumReveal">
        <div class="md:flex md:items-baseline md:justify-between mb-6">
          <h3 class="font-serif text-2xl font-semibold text-ink">Behandlungsspektrum</h3>
          <p class="text-sm text-ink/55 mt-1 md:mt-0">Auszug – sprechen Sie uns gern auf Ihr Anliegen an.</p>
        </div>
        <ul class="grid sm:grid-cols-2 gap-x-10 gap-y-3">
          <li v-for="item in conditions" :key="item" class="flex items-start gap-3">
            <svg class="w-5 h-5 text-moss-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span class="text-ink/75">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

const { reveal } = useScrollReveal()
const headerReveal = reveal()
const cardReveals = [reveal({ delay: 0 }), reveal({ delay: 90 }), reveal({ delay: 180 })]
const spectrumReveal = reveal({ delay: 60 })

const approaches = [
  {
    title: 'Tiefenpsychologisch fundierte Psychotherapie',
    tag: 'Dr. Isabelle von Loe',
    text: 'Wir schauen gemeinsam auf innere Konflikte und wiederkehrende Beziehungsmuster, die häufig hinter Beschwerden stehen. Ziel ist, deren Ursprung zu verstehen, neue Bewältigungsmechanismen zu entwickeln und mehr Handlungsspielraum zu gewinnen.',
    borderClass: 'border-t-moss-400',
    iconWrap: 'bg-moss-50 text-moss-600 group-hover:bg-moss-500 group-hover:text-white',
    tagClass: 'text-moss-600',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />',
  },
  {
    title: 'Verhaltenstherapie & Schematherapie',
    tag: 'Andreas von Loe',
    text: 'Ein konkreter, gegenwartsbezogener Ansatz: hilfreiche Denk- und Verhaltensweisen erarbeiten und einüben. Die Schematherapie ergänzt dies um die Arbeit an tief verankerten Beziehungsmustern.',
    borderClass: 'border-t-petrol-400',
    iconWrap: 'bg-petrol-50 text-petrol-600 group-hover:bg-petrol-600 group-hover:text-white',
    tagClass: 'text-petrol-600',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />',
  },
  {
    title: 'Gruppentherapie',
    tag: 'Verhaltenstherapeutisch',
    text: 'In der verhaltenstherapeutischen Gruppentherapie lernen Sie mit und von anderen. Der geschützte Rahmen macht erfahrbar, dass Sie mit Ihren Themen nicht allein sind.',
    borderClass: 'border-t-iris-400',
    iconWrap: 'bg-iris-50 text-iris-600 group-hover:bg-iris-500 group-hover:text-white',
    tagClass: 'text-iris-600',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />',
  },
]

const conditions = [
  'Ängste, Panik und Phobien',
  'Depressionen und Erschöpfung',
  'Essstörungen',
  'Psychosomatische Beschwerden',
  'Chronische Schmerzen',
  'Stress, Burnout und Mobbing',
  'Zwangsstörungen',
  'Persönlichkeitsstörungen',
  'Postpartale und peripartale Belastungen',
  'Trauer und Verlust',
  'Lebens-, Sinn- und Übergangskrisen',
  'Belastungen in Beruf, Partnerschaft und Familie',
  'Psychoonkologische Belastungen',
  'Traumafolgestörungen',
]
</script>
