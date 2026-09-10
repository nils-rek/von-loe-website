<template>
  <section id="kosten" class="py-24 md:py-32 bg-white">
    <div class="max-w-6xl mx-auto px-5 md:px-6">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-16" v-bind="headerReveal">
        <p class="text-petrol-600 font-medium tracking-[0.18em] text-xs md:text-sm uppercase mb-3">
          Kosten &amp; Rahmenbedingungen
        </p>
        <h2 class="text-3xl md:text-4xl font-semibold text-ink leading-snug">
          Damit Sie von Anfang an wissen, woran Sie sind
        </h2>
        <div class="accent-rule mx-auto mt-5"></div>
        <p v-if="KASSENZULASSUNG" class="mt-6 text-ink/70 leading-relaxed">
          Wie eine Behandlung abgerechnet wird, hängt davon ab, wie Sie versichert sind.
          Hier finden Sie einen Überblick über die Abrechnungsmöglichkeiten und die
          organisatorischen Rahmenbedingungen einer Therapie.
        </p>
        <p v-else class="mt-6 text-ink/70 leading-relaxed">
          Unsere Praxis ist eine Privatpraxis. Wie eine Behandlung abgerechnet wird, hängt
          davon ab, wie Sie versichert sind. Hier finden Sie einen Überblick über die
          Abrechnungsmöglichkeiten und die organisatorischen Rahmenbedingungen einer
          Therapie.
        </p>
      </div>

      <!-- Abrechnungsmöglichkeiten -->
      <div
        class="rounded-2xl bg-paper-100 border border-paper-200 p-8 md:p-10 mb-10"
        v-bind="cardReveal"
      >
        <h3 class="font-serif text-2xl font-semibold text-ink mb-8">
          Abrechnungsmöglichkeiten
        </h3>

        <div
          class="grid sm:grid-cols-2 gap-6"
          :class="{ 'lg:grid-cols-4': audiences.length > 2 }"
        >
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

        <div class="mt-7 space-y-3">
          <p v-if="!KASSENZULASSUNG" class="text-sm text-ink/60 leading-relaxed">
            Eine Abrechnung über die gesetzlichen Krankenkassen ist derzeit nicht möglich.
            Gesetzlich Versicherte können die Behandlung als Selbstzahlende in Anspruch
            nehmen.
          </p>
          <p v-if="KASSENZULASSUNG" class="text-sm text-ink/55 leading-relaxed">
            Bitte klären Sie den Umfang der Kostenerstattung vor Beginn mit Ihrer
            Krankenkasse, Versicherung bzw. Beihilfestelle. Zu Konditionen und Ablauf
            beraten wir Sie gerne persönlich.
          </p>
          <p v-else class="text-sm text-ink/55 leading-relaxed">
            Bitte klären Sie den Umfang der Kostenerstattung vor Beginn mit Ihrer
            Versicherung bzw. Beihilfestelle. Zu Konditionen und Ablauf beraten wir Sie
            gerne persönlich.
          </p>
        </div>
      </div>

      <!-- Rahmenbedingungen -->
      <!--
        TODO(Ausfallregelung): Falls ein Ausfallhonorar bzw. eine Absagefrist gelten soll,
        hier als weitere Karte ergänzen – Konditionen sind noch nicht festgelegt.
      -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" v-bind="framesReveal">
        <div
          v-for="f in frames"
          :key="f.title"
          class="rounded-2xl bg-paper-50 border border-paper-200 border-t-2 border-t-petrol-300 p-6"
        >
          <h4 class="font-semibold text-ink mb-2">{{ f.title }}</h4>
          <p class="text-sm text-ink/65 leading-relaxed">{{ f.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import { KASSENZULASSUNG } from '../config/praxis'

const { reveal } = useScrollReveal()
const headerReveal = reveal()
const cardReveal = reveal({ delay: 60 })
const framesReveal = reveal({ delay: 120 })

// Die beiden GKV-Karten hängen an KASSENZULASSUNG (src/config/praxis.js) – sie bleiben
// hier stehen, damit sie mit einem einzigen Schalter zurückkommen.
const gesetzlich = {
  title: 'Gesetzlich Versicherte',
  text: 'Die Praxis rechnet mit den gesetzlichen Krankenkassen ab. Sprechstunde, probatorische Sitzungen und die anschließende Therapie werden übernommen – es genügt Ihre Versichertenkarte.',
  icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3M3.75 6h16.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5Z" />',
}

const selektivvertrag = {
  // TODO(Selektivvertraege): Vor einer Reaktivierung klären, welche Selektivverträge
  // tatsächlich gelten, und sie hier namentlich nennen.
  title: 'Selektivverträge',
  text: 'Einige Kassen ermöglichen über Selektivverträge einen erleichterten Zugang zur Psychotherapie. Häufig lassen sich Termine darüber kurzfristiger vergeben.',
  icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />',
}

const privatBeihilfe = {
  title: 'Private Krankenversicherungen & Beihilfe',
  text: 'Die Abrechnung erfolgt nach der Gebührenordnung (GOÄ/GOP). Beihilfeberechtigte erhalten in der Regel anteilig Kosten erstattet – im Rahmen der jeweiligen Beihilfevorschriften.',
  icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />',
}

const selbstzahlende = {
  title: 'Selbstzahlende',
  text: 'Auch ohne Kostenübernahme sind Sie willkommen. Transparente Kosten, ohne Diagnosemeldung an eine Versicherung.',
  icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />',
}

const audiences = KASSENZULASSUNG
  ? [gesetzlich, selektivvertrag, privatBeihilfe, selbstzahlende]
  : [privatBeihilfe, selbstzahlende]

const frames = [
  {
    // TODO(Gruppensitzung): Konkrete Dauer der Gruppensitzungen ergänzen, sobald festgelegt.
    title: 'Dauer einer Sitzung',
    text: 'Eine Einzelsitzung dauert in der Regel 50 Minuten; Gruppensitzungen sind entsprechend länger.',
  },
  {
    title: 'Frequenz',
    text: 'Termine finden meist einmal pro Woche zu einer festen Zeit statt – im Sitzen, im Gespräch.',
  },
  {
    title: 'Dauer der Therapie',
    text: 'Wie lange eine Therapie insgesamt dauert, hängt von Ihrem Anliegen und dem Verfahren ab. Das klären wir gemeinsam.',
  },
  {
    title: 'Schweigepflicht',
    text: 'Alles, was Sie uns anvertrauen, unterliegt der gesetzlichen Schweigepflicht – auch gegenüber Angehörigen.',
  },
]
</script>
