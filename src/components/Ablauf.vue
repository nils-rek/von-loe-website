<template>
  <section id="ablauf" class="py-24 md:py-32 bg-paper-100">
    <div class="max-w-6xl mx-auto px-5 md:px-6">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-16" v-bind="headerReveal">
        <p class="text-petrol-600 font-medium tracking-[0.18em] text-xs md:text-sm uppercase mb-3">
          Ablauf &amp; Erstgespräch
        </p>
        <h2 class="text-3xl md:text-4xl font-semibold text-ink leading-snug">
          Von der Kontaktaufnahme bis zur Probatorik
        </h2>
        <div class="accent-rule mx-auto mt-5"></div>
        <p class="mt-6 text-ink/70 leading-relaxed">
          Der Weg in eine Therapie ist überschaubarer, als er von außen wirkt. Hier sehen Sie,
          welche Schritte auf Sie zukommen – und was in den ersten Gesprächen tatsächlich
          passiert.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
        <!-- Was in der Sprechstunde passiert -->
        <div v-bind="textReveal">
          <h3 class="font-serif text-2xl font-semibold text-ink mb-4">
            Was passiert in der psychotherapeutischen Sprechstunde?
          </h3>
          <p class="text-ink/70 leading-relaxed mb-4">
            Die Sprechstunde ist der offizielle Einstieg in die ambulante Psychotherapie und
            steht am Anfang jeder Behandlung. Sie dauert in der Regel 50 Minuten und ist noch
            keine Therapie, sondern eine erste Orientierung: Wir hören zu, fragen nach und
            verschaffen uns gemeinsam mit Ihnen ein Bild von Ihrer Situation.
          </p>
          <p class="text-ink/70 leading-relaxed mb-4">
            Am Ende steht eine Einschätzung, ob eine Psychotherapie angezeigt ist – und wenn ja,
            welches Setting zu Ihnen passt: tiefenpsychologisch fundiert oder
            verhaltenstherapeutisch, im Einzelgespräch oder in der Gruppe.
          </p>
          <p class="text-ink/70 leading-relaxed">
            Ist eine andere Hilfe passender – etwa eine Beratungsstelle, eine ärztliche
            Abklärung oder eine stationäre Behandlung –, sagen wir Ihnen das offen und
            unterstützen Sie bei der Orientierung.
          </p>
        </div>

        <!-- Schritte -->
        <div
          class="rounded-2xl bg-white border border-paper-200 p-7 md:p-8"
          v-bind="stepsReveal"
        >
          <h3 class="font-serif text-2xl font-semibold text-ink mb-6">Schritt für Schritt</h3>
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
    title: 'Kontaktaufnahme',
    text: 'Sie melden sich telefonisch zu unseren Sprechzeiten oder per E-Mail. Schreiben Sie gerne an die E-Mail-Adresse des Therapieverfahrens, das Sie persönlich vorrangig anspricht.',
  },
  {
    title: 'Psychotherapeutische Sprechstunden',
    text: 'Erste Gespräche, in denen wir Ihr Anliegen kennenlernen und gemeinsam einschätzen, ob und welche Behandlung sinnvoll ist. Hier erfolgt auch die Indikationsstellung für das passende Setting.',
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
