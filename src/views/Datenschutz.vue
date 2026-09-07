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

      <h1 class="font-serif text-4xl font-semibold text-ink mb-3">Datenschutzerklärung</h1>
      <div class="accent-rule mb-10"></div>

      <div class="space-y-8 text-ink/80 leading-relaxed">
        <p class="text-sm text-iris-700 bg-iris-50 border border-iris-100 rounded-lg px-4 py-3">
          Hinweis: Diese Datenschutzerklärung ist eine sorgfältig vorbereitete Vorlage. Bitte
          vor Veröffentlichung rechtlich prüfen lassen.
        </p>

        <section>
          <h2 class="font-serif text-xl font-semibold text-ink mb-2">1. Verantwortlicher</h2>
          <p>
            Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO):<br />
            Psychotherapeutische Praxis von Loe, Dr. Isabelle von Loe &amp; Andreas von Loe,
            Sofienstraße 13, 69115 Heidelberg.<br />
            Kontakt: 0178 5642428, tiefenpsychologie@psychotherapie-vonloe.de bzw.
            verhaltenstherapie@psychotherapie-vonloe.de.
          </p>
        </section>

        <section>
          <h2 class="font-serif text-xl font-semibold text-ink mb-2">2. Hosting</h2>
          <p>
            Diese Website wird bei GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San
            Francisco, CA 94107, USA) gehostet. Beim Aufruf der Seiten verarbeitet der Anbieter
            technisch notwendige Zugriffsdaten (z.&nbsp;B. IP-Adresse, Datum und Uhrzeit des
            Zugriffs, aufgerufene Seite) in Server-Logfiles. Rechtsgrundlage ist unser
            berechtigtes Interesse an einer sicheren und stabilen Bereitstellung der Website
            (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO). Bei einer Übermittlung in die USA stützen
            wir uns auf geeignete Garantien; Einzelheiten sind bei uns erfragbar.
          </p>
        </section>

        <section>
          <h2 class="font-serif text-xl font-semibold text-ink mb-2">3. Schriften (Fonts)</h2>
          <p>
            Wir setzen Schriftarten ein, die lokal auf unserem Server eingebunden sind. Es werden
            hierfür keine Verbindungen zu Servern Dritter (etwa Google Fonts) aufgebaut und keine
            personenbezogenen Daten an Dritte übertragen.
          </p>
        </section>

        <section>
          <h2 class="font-serif text-xl font-semibold text-ink mb-2">4. Cookies und Analyse</h2>
          <p>
            Diese Website verwendet keine Cookies zu Analyse- oder Marketingzwecken und setzt
            keine Tracking- oder Statistik-Dienste ein.
          </p>
        </section>

        <section>
          <h2 class="font-serif text-xl font-semibold text-ink mb-2">5. Kontaktaufnahme</h2>
          <p>
            Wenn Sie uns per Telefon oder E-Mail kontaktieren, verarbeiten wir die von Ihnen
            mitgeteilten Daten zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art.&nbsp;6
            Abs.&nbsp;1 lit.&nbsp;b DSGVO (Anbahnung eines Behandlungsverhältnisses) bzw.
            Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO. Die Daten werden gelöscht, sobald sie für
            die Zweckerreichung nicht mehr erforderlich sind und keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen.
          </p>
        </section>

        <section>
          <h2 class="font-serif text-xl font-semibold text-ink mb-2">6. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft (Art.&nbsp;15), Berichtigung (Art.&nbsp;16), Löschung
            (Art.&nbsp;17), Einschränkung der Verarbeitung (Art.&nbsp;18), Datenübertragbarkeit
            (Art.&nbsp;20) sowie Widerspruch (Art.&nbsp;21 DSGVO). Eine erteilte Einwilligung
            können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
          <p class="mt-3">
            Ihnen steht zudem ein Beschwerderecht bei einer Aufsichtsbehörde zu, etwa beim
            Landesbeauftragten für den Datenschutz und die Informationsfreiheit Baden-Württemberg.
          </p>
        </section>

        <section>
          <h2 class="font-serif text-xl font-semibold text-ink mb-2">7. Datensicherheit</h2>
          <p>
            Diese Website wird über eine verschlüsselte Verbindung (HTTPS/TLS) ausgeliefert, um die
            Übertragung Ihrer Daten zu schützen.
          </p>
        </section>

        <p class="text-sm text-ink/50">Stand: August 2026</p>
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
