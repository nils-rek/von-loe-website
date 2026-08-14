<template>
  <div class="pt-28 md:pt-32 pb-16 bg-white min-h-screen">
    <div class="max-w-3xl mx-auto px-5 md:px-6">
      <router-link
        to="/"
        class="inline-flex items-center gap-2 text-sm text-petrol-600 hover:text-petrol-700 mb-8"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Zur Startseite
      </router-link>

      <h1 class="font-serif text-4xl font-semibold text-ink mb-3">Impressum</h1>
      <div class="accent-rule mb-10"></div>

      <div class="space-y-8 text-ink/80 leading-relaxed">
        <p class="text-sm text-iris-700 bg-iris-50 border border-iris-100 rounded-lg px-4 py-3">
          Hinweis: Dieses Impressum enthält Platzhalter in eckigen Klammern. Bitte vor
          Veröffentlichung vervollständigen und rechtlich prüfen lassen.
        </p>

        <section>
          <h2 class="font-serif text-xl font-semibold text-ink mb-2">Angaben gemäß § 5 DDG</h2>
          <p>
            Psychotherapie von Loe<br />
            Dr. Isabelle von Loe &amp; Andreas von Loe<br />
            [Praxisadresse]<br />
            69115 Heidelberg
          </p>
        </section>

        <section>
          <h2 class="font-serif text-xl font-semibold text-ink mb-2">Kontakt</h2>
          <p>
            Telefon: [Telefonnummer]<br />
            E-Mail: [E-Mail-Adresse]
          </p>
        </section>

        <section>
          <h2 class="font-serif text-xl font-semibold text-ink mb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>
            Berufsbezeichnung: Psychologische Psychotherapeutin bzw. Psychologischer
            Psychotherapeut (verliehen in der Bundesrepublik Deutschland).
          </p>
          <p class="mt-3">
            Zuständige Kammer: Landespsychotherapeutenkammer Baden-Württemberg,
            Jägerstraße 40, 70174 Stuttgart.
          </p>
          <p class="mt-3">
            Zuständige Approbations- und Aufsichtsbehörde: [zuständige Behörde, z.&nbsp;B.
            Regierungspräsidium Stuttgart].
          </p>
          <p class="mt-3">
            Es gelten insbesondere folgende berufsrechtliche Regelungen: Psychotherapeutengesetz
            (PsychThG), Berufsordnung der Landespsychotherapeutenkammer Baden-Württemberg sowie
            das Fünfte Buch Sozialgesetzbuch (SGB&nbsp;V). Die Regelungen sind einsehbar über die
            Website der Landespsychotherapeutenkammer Baden-Württemberg.
          </p>
        </section>

        <section>
          <h2 class="font-serif text-xl font-semibold text-ink mb-2">Berufshaftpflichtversicherung</h2>
          <p>
            [Name und Sitz des Versicherers]<br />
            Räumlicher Geltungsbereich: [Angabe]
          </p>
        </section>

        <section>
          <h2 class="font-serif text-xl font-semibold text-ink mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            [Name], [Praxisadresse], 69115 Heidelberg
          </p>
        </section>

        <section>
          <h2 class="font-serif text-xl font-semibold text-ink mb-2">Streitschlichtung</h2>
          <p>
            Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2 class="font-serif text-xl font-semibold text-ink mb-2">Haftung für Inhalte und Links</h2>
          <p>
            Die Inhalte dieser Seiten wurden mit größtmöglicher Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr
            übernehmen. Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der
            jeweilige Anbieter oder Betreiber verantwortlich.
          </p>
        </section>

        <section>
          <h2 class="font-serif text-xl font-semibold text-ink mb-2">Urheberrecht</h2>
          <p>
            Die durch die Betreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
            deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
          </p>
        </section>
      </div>
    </div>

    <div class="mt-16">
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import FooterSection from '../components/FooterSection.vue'
</script>
