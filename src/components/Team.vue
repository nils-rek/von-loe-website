<template>
  <section id="team" class="py-24 md:py-32 bg-paper-100">
    <div class="max-w-6xl mx-auto px-5 md:px-6">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-16" v-bind="headerReveal">
        <p class="text-petrol-600 font-medium tracking-[0.18em] text-xs md:text-sm uppercase mb-3">
          Über uns
        </p>
        <h2 class="text-3xl md:text-4xl font-semibold text-ink leading-snug">
          Die Menschen hinter der Praxis
        </h2>
        <div class="accent-rule mx-auto mt-5"></div>
        <p class="mt-6 text-ink/70 leading-relaxed">
          Wir integrieren unterschiedliche Verfahren und viel klinische Erfahrung –
          mit einem gemeinsamen Anspruch: Sie wirksam und menschlich zu begleiten.
        </p>
      </div>

      <!-- Profile cards -->
      <div class="grid md:grid-cols-2 gap-8">
        <article
          v-for="(p, i) in people"
          :key="p.name"
          v-bind="cardReveals[i]"
          class="rounded-2xl border border-paper-200 bg-white p-7 md:p-8"
        >
          <div class="flex flex-col sm:flex-row gap-6">
            <!-- Portrait -->
            <div class="shrink-0 mx-auto sm:mx-0">
              <img
                :src="p.photo"
                :alt="`Porträt von ${p.name}`"
                width="640"
                height="797"
                class="w-32 h-40 object-cover object-top rounded-xl ring-1 ring-black/5 shadow-sm"
                loading="eager"
              />
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
              <div class="mt-3 space-y-1.5">
                <div v-for="m in p.emails" :key="m.address">
                  <span class="block text-xs text-ink/50">{{ m.hint }}</span>
                  <a
                    :href="`mailto:${m.address}`"
                    class="link-underline text-sm text-petrol-600 hover:text-petrol-700 break-all"
                  >
                    {{ m.address }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Schwerpunkte -->
          <div class="mt-6">
            <h4 class="text-xs font-semibold tracking-wide uppercase text-ink/50 mb-3">Schwerpunkte</h4>
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="s in p.focus"
                :key="s"
                class="text-sm text-ink/75 bg-paper-50 border border-paper-200 rounded-full px-3 py-1"
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
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

const { reveal } = useScrollReveal()
const headerReveal = reveal()
const cardReveals = [reveal({ delay: 0 }), reveal({ delay: 120 })]

const people = [
  {
    name: 'Dr. Isabelle von Loe',
    credentials: 'M.Sc. Psych. Dr. sc. hum. · Psychologische Psychotherapeutin (Approbation 2021) · Einzeltherapie für Erwachsene',
    method: 'Tiefenpsychologisch fundiert',
    emails: [{ hint: 'Einzeltherapie', address: 'tiefenpsychologie@psychotherapie-vonloe.de' }],
    tagClass: 'bg-moss-50 text-moss-700',
    dotClass: 'bg-moss-400',
    photo: '/images/isabelle-von-loe.webp',
    intro:
      'Ich behandle Erwachsene tiefenpsychologisch fundiert im Einzelsetting und interessiere mich für die Zusammenhänge hinter Ihren Beschwerden – geprägt durch langjährige Tätigkeit in Psychosomatik und Psychiatrie.',
    focus: [
      'Ängste & Depressionen',
      'Psychosomatik',
      'Essstörungen',
      'Postpartale Erkrankungen',
      'Belastung durch unerfüllten Kinderwunsch',
      'Trauer & Lebenskrisen',
    ],
    cv: [
      'Ausbildung am Heidelberger Institut für Psychotherapie (HIP)',
      'Promotion in der Psychosomatik des Universitätsklinikums Heidelberg (AG Prof. Schauenburg)',
      'Privatklinik Dirmstein',
      'Stationspsychologin Mutter-Kind-Station, PZN Wiesloch',
      'Psychosomatische Ambulanz Bergheim, Station Mitscherlich und Abendklinik Psychosomatik, Universitätsklinikum Heidelberg',
      'Praxiszentrum Gaisberg in Heidelberg',
      'Zuletzt Sicherstellungsassistenz in der Praxis von Michael Geldhauser',
    ],
  },
  {
    name: 'Andreas von Loe',
    credentials: 'M.Sc. Psych. · Psychologischer Psychotherapeut (Approbation 2020) · Einzel- und Gruppentherapie für Erwachsene',
    method: 'Kognitive Verhaltenstherapie',
    emails: [
      { hint: 'Einzeltherapie', address: 'verhaltenstherapie@psychotherapie-vonloe.de' },
      { hint: 'Gruppentherapie', address: 'gruppentherapie@psychotherapie-vonloe.de' },
    ],
    tagClass: 'bg-petrol-50 text-petrol-700',
    dotClass: 'bg-petrol-400',
    photo: '/images/andreas-von-loe.webp',
    intro:
      'Ich behandle Erwachsene kognitiv-verhaltenstherapeutisch und schematherapeutisch (aktuell in Schematherapie-Weiterbildung befindlich) – im Einzel- wie im Gruppensetting, konkret und gegenwartsbezogen. Berufserfahrung in Psychiatrie, Beratung und Praxis.',
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
      'Psychiatrie & Psychosomatik, Universitätsklinikum Heidelberg',
      'Psychologe am Berufsbildungswerk Neckargemünd der SRH',
      'Zuletzt Sicherstellungsassistenz in der Praxis von Andrea Grau, Heidelberg',
    ],
  },
]
</script>
