<!--
  PARKIERT – diese Sektion ist derzeit nicht in HomePage.vue eingebunden.

  Grund: Isa und Andi haben sich noch nicht auf einen Warteliste-/Formularanbieter
  festgelegt. Sobald das feststeht:
    1. Links bzw. Einbettungscode in die drei data-waitlist-embed-Slots setzen
       (siehe TODO(waitlist embed) weiter unten),
    2. <Wartelisten /> in src/views/HomePage.vue wieder einhängen – zwischen
       <Raeumlichkeiten /> und <Kontakt /> und die Hintergrund-Abfolge der Sektionen
       (weiss / paper-100 im Wechsel) entsprechend nachziehen,
    3. den Menuepunkt "Wartelisten" in NavBar.vue und FooterSection.vue ergaenzen
       sowie den TODO(Warteliste)-Button im Hero (HeroSection.vue) umhaengen,
    4. den Abschnitt "Warteliste" in views/Datenschutz.vue wieder aufnehmen
       (siehe Git-Historie) und den genutzten Dienst dort benennen.

  Hinweis: Die Aufzaehlung des Versicherungsstatus weiter unten ist auf die
  Privatpraxis-Fassung gekuerzt. Kommt die Kassenzulassung (KASSENZULASSUNG in
  src/config/praxis.js), gehoeren "gesetzlich" und "Selektivvertrag" dort wieder hinein.
-->
<template>
  <section id="wartelisten" class="py-24 md:py-32 bg-paper-100">
    <div class="max-w-6xl mx-auto px-5 md:px-6">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-14" v-bind="headerReveal">
        <p class="text-petrol-600 font-medium tracking-[0.18em] text-xs md:text-sm uppercase mb-3">
          Wartelisten
        </p>
        <h2 class="text-3xl md:text-4xl font-semibold text-ink leading-snug">
          Auf die Warteliste eintragen
        </h2>
        <div class="accent-rule mx-auto mt-5"></div>
        <p class="mt-6 text-ink/70 leading-relaxed">
          Die Nachfrage nach Therapieplätzen ist hoch. Damit wir Sie fair und in der
          richtigen Reihenfolge berücksichtigen können, arbeiten wir mit Wartelisten. Bitte
          wählen Sie die passende Liste und tragen sich mit wenigen Angaben ein.
        </p>
      </div>

      <!-- What we ask -->
      <div
        class="max-w-3xl mx-auto mb-12 rounded-xl bg-white border border-paper-200 px-6 py-5"
        v-bind="infoReveal"
      >
        <p class="text-sm text-ink/70 leading-relaxed">
          <span class="font-semibold text-ink">Für die Anmeldung erfassen wir:</span>
          Datum der Anfrage, Telefonnummer, E-Mail-Adresse, Ihren Versicherungsstatus
          (privat / Beihilfe / Selbstzahler) sowie wie Sie auf unsere
          Praxis aufmerksam geworden sind. Hinweise zum Umgang mit Ihren Daten finden Sie in
          unserer
          <router-link to="/datenschutz" class="text-petrol-600 underline underline-offset-2 hover:text-petrol-700">
            Datenschutzerklärung</router-link>.
        </p>
      </div>

      <!-- Waitlist cards -->
      <div class="grid md:grid-cols-3 gap-6">
        <article
          v-for="(w, i) in lists"
          :key="w.title"
          v-bind="cardReveals[i]"
          class="flex flex-col bg-white rounded-2xl border border-paper-200 border-t-2 overflow-hidden"
          :class="w.borderClass"
        >
          <div class="p-7 flex-1 flex flex-col">
            <div
              class="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
              :class="w.iconWrap"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" v-html="w.icon"></svg>
            </div>
            <h3 class="font-serif text-lg font-semibold text-ink leading-snug mb-2">{{ w.title }}</h3>
            <p class="text-sm text-ink/65 leading-relaxed mb-6">{{ w.text }}</p>

            <!-- Embed placeholder: drop the existing waitlist form/iframe in here -->
            <!-- TODO(waitlist embed): replace this block with the <iframe>/embed code for "{{ w.title }}" -->
            <div
              class="mt-auto rounded-xl border border-dashed border-paper-300 bg-paper-50 px-4 py-6 text-center"
              data-waitlist-embed
              :data-waitlist="w.key"
            >
              <p class="text-sm text-ink/50 mb-4">Anmeldeformular wird hier eingebunden.</p>
              <a
                :href="w.link"
                class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-white transition-colors"
                :class="w.buttonClass"
              >
                Zur Warteliste
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>

      <p class="text-center text-sm text-ink/50 mt-10" v-bind="footnoteReveal">
        Sie sind unsicher, welche Liste die richtige ist? Melden Sie sich gern zuerst
        <a href="#kontakt" class="text-petrol-600 underline underline-offset-2 hover:text-petrol-700" @click.prevent="scrollTo('#kontakt')">telefonisch oder per E-Mail</a>.
      </p>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

const { reveal } = useScrollReveal()
const headerReveal = reveal()
const infoReveal = reveal({ delay: 60 })
const cardReveals = [reveal({ delay: 0 }), reveal({ delay: 90 }), reveal({ delay: 180 })]
const footnoteReveal = reveal({ delay: 60 })

function scrollTo(hash) {
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const lists = [
  {
    key: 'tp-einzel',
    title: 'Tiefenpsychologisch fundierte Einzeltherapie',
    text: 'Einzeltherapie im tiefenpsychologisch fundierten Verfahren bei Dr. Isabelle von Loe.',
    link: '#', // TODO: Link/Embed der bestehenden Warteliste einsetzen
    borderClass: 'border-t-moss-400',
    iconWrap: 'bg-moss-50 text-moss-600',
    buttonClass: 'bg-moss-500 hover:bg-moss-600',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />',
  },
  {
    key: 'vt-einzel',
    title: 'Verhaltenstherapeutische Einzeltherapie',
    text: 'Einzeltherapie in Verhaltenstherapie und Schematherapie bei Andreas von Loe.',
    link: '#', // TODO: Link/Embed der bestehenden Warteliste einsetzen
    borderClass: 'border-t-petrol-400',
    iconWrap: 'bg-petrol-50 text-petrol-600',
    buttonClass: 'bg-petrol-600 hover:bg-petrol-700',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />',
  },
  {
    key: 'vt-gruppe',
    title: 'Verhaltenstherapeutische Gruppentherapie',
    text: 'Therapie im geschützten Rahmen einer verhaltenstherapeutischen Gruppe.',
    link: '#', // TODO: Link/Embed der bestehenden Warteliste einsetzen
    borderClass: 'border-t-iris-400',
    iconWrap: 'bg-iris-50 text-iris-600',
    buttonClass: 'bg-iris-500 hover:bg-iris-600',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />',
  },
]
</script>
