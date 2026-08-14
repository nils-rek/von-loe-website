<template>
  <section id="team" class="py-24 md:py-32 bg-white">
    <div class="max-w-6xl mx-auto px-5 md:px-6">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-16" v-bind="headerReveal">
        <p class="text-petrol-600 font-medium tracking-[0.18em] text-xs md:text-sm uppercase mb-3">
          Wir
        </p>
        <h2 class="text-3xl md:text-4xl font-semibold text-ink leading-snug">
          Die Menschen hinter der Praxis
        </h2>
        <div class="accent-rule mx-auto mt-5"></div>
        <p class="mt-6 text-ink/70 leading-relaxed">
          Als Paar und als Kolleg:innen bringen wir unterschiedliche Verfahren und viel
          klinische Erfahrung zusammen – mit einem gemeinsamen Anspruch: Sie wirksam und
          menschlich zu begleiten.
        </p>
      </div>

      <!-- Profile cards -->
      <div class="grid md:grid-cols-2 gap-8">
        <article
          v-for="(p, i) in people"
          :key="p.name"
          v-bind="cardReveals[i]"
          class="rounded-2xl border border-paper-200 bg-paper-50 p-7 md:p-8"
        >
          <div class="flex flex-col sm:flex-row gap-6">
            <!-- Portrait or monogram -->
            <div class="shrink-0 mx-auto sm:mx-0">
              <img
                v-if="p.photo"
                :src="p.photo"
                :alt="`Porträt von ${p.name}`"
                width="234"
                height="350"
                class="w-32 h-40 object-cover object-top rounded-xl ring-1 ring-black/5 shadow-sm"
                loading="eager"
              />
              <div
                v-else
                class="w-32 h-40 rounded-xl flex items-center justify-center bg-gradient-to-br from-petrol-100 via-iris-100 to-moss-100 ring-1 ring-black/5"
                role="img"
                :aria-label="`Platzhalter für ${p.name}`"
              >
                <span class="font-serif text-3xl font-semibold text-petrol-700">{{ p.initials }}</span>
              </div>
            </div>

            <!-- Intro -->
            <div>
              <h3 class="font-serif text-2xl font-semibold text-ink leading-tight">{{ p.name }}</h3>
              <p class="text-sm text-ink/55 mt-1">{{ p.credentials }}</p>
              <span
                class="inline-block mt-3 text-xs font-medium tracking-wide uppercase px-3 py-1 rounded-full"
                :class="p.tagClass"
              >
                {{ p.method }}
              </span>
              <p class="mt-4 text-ink/70 leading-relaxed text-[0.95rem]">{{ p.intro }}</p>
            </div>
          </div>

          <!-- Schwerpunkte -->
          <div class="mt-6">
            <h4 class="text-xs font-semibold tracking-wide uppercase text-ink/50 mb-3">Schwerpunkte</h4>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="s in p.focus"
                :key="s"
                class="text-sm text-ink/75 bg-white border border-paper-200 rounded-full px-3 py-1"
              >
                {{ s }}
              </li>
            </ul>
          </div>

          <!-- Werdegang -->
          <div class="mt-6">
            <h4 class="text-xs font-semibold tracking-wide uppercase text-ink/50 mb-3">Werdegang (Auszug)</h4>
            <ul class="space-y-2">
              <li v-for="w in p.cv" :key="w" class="flex items-start gap-3 text-sm text-ink/70">
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" :class="p.dotClass"></span>
                <span>{{ w }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>

      <p class="text-center text-sm text-ink/45 mt-8" v-bind="noteReveal">
        <!-- TODO: Foto von Andreas von Loe unter public/images/andreas-von-loe.webp ergänzen -->
        Ein Foto von Andreas von Loe folgt in Kürze.
      </p>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

const { reveal } = useScrollReveal()
const headerReveal = reveal()
const cardReveals = [reveal({ delay: 0 }), reveal({ delay: 120 })]
const noteReveal = reveal({ delay: 80 })

const people = [
  {
    name: 'Dr. Isabelle von Loe',
    initials: 'IvL',
    credentials: 'M.Sc. Psych., Dr. sc. hum. · Psychologische Psychotherapeutin (Approbation 2021)',
    method: 'Tiefenpsychologisch fundiert',
    tagClass: 'bg-moss-50 text-moss-700',
    dotClass: 'bg-moss-400',
    photo: '/images/isabelle-von-loe.webp',
    intro:
      'Ich arbeite tiefenpsychologisch fundiert und interessiere mich für die Zusammenhänge hinter Ihren Beschwerden – geprägt durch langjährige Tätigkeit in Psychosomatik und Psychiatrie.',
    focus: [
      'Ängste & Depressionen',
      'Psychosomatik',
      'Essstörungen',
      'Chronische Schmerzen',
      'Postpartale Belastungen',
      'Kinderwunsch',
      'Trauer & Lebenskrisen',
    ],
    cv: [
      'Promotion in der Psychosomatik des Universitätsklinikums Heidelberg (AG Prof. Schauenburg), magna cum laude',
      'Stationspsychologin Mutter-Kind-Station, PZN Wiesloch',
      'Psychosomatische Ambulanz & Stationen, Universitätsklinikum Heidelberg',
      'Zuletzt Praxiszentrum Gaisberg, Heidelberg',
    ],
  },
  {
    name: 'Andreas von Loe',
    initials: 'AvL',
    credentials: 'M.Sc. Psych. · Psychologischer Psychotherapeut (Approbation)',
    method: 'Verhaltenstherapie & Schematherapie',
    tagClass: 'bg-petrol-50 text-petrol-700',
    dotClass: 'bg-petrol-400',
    photo: null,
    intro:
      'Ich arbeite verhaltenstherapeutisch und schematherapeutisch – konkret, gegenwartsbezogen und mit Blick auf tief verankerte Muster. Erfahrung sammelte ich in Psychiatrie, Beratung und Praxis.',
    focus: [
      'Ängste & Depressionen',
      'Persönlichkeitsstörungen',
      'Essstörungen',
      'Burnout & Stress',
      'Psychoonkologie',
      'Trauma',
      'Trauer',
    ],
    cv: [
      'Ausbildung zum Psychologischen Psychotherapeuten am ZPP Heidelberg',
      'Psychologischer Psychotherapeut (Sicherstellungsassistenz), Praxis Grau, Heidelberg',
      'Psychologe am Berufsbildungswerk Neckargemünd der SRH',
      'Psychiatrie & Psychosomatik, Universitätsklinikum Heidelberg',
    ],
  },
]
</script>
