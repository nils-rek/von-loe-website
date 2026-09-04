<template>
  <section id="psychotherapie" class="py-24 md:py-32 bg-paper-100">
    <div class="max-w-6xl mx-auto px-5 md:px-6">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-16" v-bind="headerReveal">
        <p class="text-petrol-600 font-medium tracking-[0.18em] text-xs md:text-sm uppercase mb-3">
          Psychotherapie
        </p>
        <h2 class="text-3xl md:text-4xl font-semibold text-ink leading-snug">
          Was Psychotherapie leisten kann
        </h2>
        <div class="accent-rule mx-auto mt-5"></div>
        <p class="mt-6 text-ink/70 leading-relaxed">
          Psychotherapie unterstützt Sie dabei, psychische, körperliche und psychosomatische
          Beschwerden zu verstehen und zu verarbeiten. Ihr eigentliches Mittel ist dabei das
          Gespräch zwischen zwei Menschen.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
        <!-- Was Psychotherapie ist -->
        <div v-bind="textReveal">
          <h3 class="font-serif text-2xl font-semibold text-ink mb-4">
            Worte finden für das, was noch keine hat
          </h3>
          <p class="text-ink/70 leading-relaxed mb-4">
            Vieles, was uns belastet, entzieht sich zunächst der Sprache. In der Therapie geht es
            deshalb darum, miteinander ins Gespräch zu kommen und Worte und Bilder für das zu
            finden, was bisher unverständlich oder sinnlos erschien. Was sich anfangs nur als
            Symptom zeigt, bekommt so nach und nach eine Bedeutung.
          </p>
          <p class="text-ink/70 leading-relaxed mb-4">
            Wir schauen gemeinsam darauf, wie Sie mit sich selbst, mit Ihren Bedürfnissen und mit
            Konflikten im Kontakt mit anderen umgehen – und beziehen die Lebenserfahrungen ein, die Sie
            geprägt haben. Aus dem wachsenden Verständnis entstehen neue Möglichkeiten, anders mit sich und
            mit anderen umzugehen.
          </p>
          <p class="text-ink/70 leading-relaxed">
            Eine Sitzung dauert in der Regel 50 Minuten und findet meist einmal pro Woche im
            Sitzen statt. Wie lange eine Therapie insgesamt dauert, hängt von Ihrem Anliegen ab.
          </p>
        </div>

        <!-- Ablauf -->
        <div
          class="rounded-2xl bg-white border border-paper-200 p-7 md:p-8"
          v-bind="stepsReveal"
        >
          <h3 class="font-serif text-2xl font-semibold text-ink mb-6">So beginnt eine Therapie</h3>
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
const textReveal = reveal({ delay: 60 })
const stepsReveal = reveal({ delay: 120 })

const steps = [
  {
    title: 'Psychotherapeutische Sprechstunde',
    text: 'Ein erstes Gespräch, in dem wir Ihr Anliegen kennenlernen und gemeinsam einschätzen, ob und welche Behandlung sinnvoll ist.',
  },
  {
    title: 'Probatorische Sitzungen',
    text: 'In mehreren Vorgesprächen prüfen wir, ob die Zusammenarbeit trägt. Dabei klären wir die Diagnose und legen gemeinsam die Ziele Ihrer Therapie fest.',
  },
  {
    // TODO(Kassenzulassung): Formulierung zum Antragsverfahren bestätigen, sobald die
    // Abrechnung mit den gesetzlichen Krankenkassen feststeht.
    title: 'Antrag und Therapiebeginn',
    text: 'Anschließend beantragen wir die Kostenübernahme bei Ihrer Krankenkasse bzw. Versicherung. Danach beginnt die eigentliche Therapie – im Einzelsetting oder in der Gruppe.',
  },
]
</script>
