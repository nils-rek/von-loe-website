<template>
  <section
    id="top"
    class="relative min-h-screen md:min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-paper-100 via-paper-50 to-petrol-50/60"
  >
    <!-- Weiche Farbflächen + die Bildmarke des Logos als Motiv -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute -top-24 -right-24 w-[34rem] h-[34rem] rounded-full bg-petrol-100/50 blur-3xl animate-float-slow"></div>
      <div class="absolute top-1/3 -left-24 w-[26rem] h-[26rem] rounded-full bg-moss-100/40 blur-3xl animate-float"></div>
      <div class="absolute -bottom-20 right-1/4 w-[22rem] h-[22rem] rounded-full bg-iris-100/40 blur-3xl animate-float-delayed"></div>
      <!--
        Nur ab md: darunter steht das Bildband direkt unter der Navigation, die Bildmarke
        würde dahinter verschwinden und nur mit ein paar abgeschnittenen Samen herausragen.
        Auf dem Handy übernimmt das Logo-Lockup der NavBar diese Rolle im Kopfbereich.
      -->
      <img
        src="/images/logo-wide.webp"
        alt=""
        width="714"
        height="354"
        class="hidden md:block absolute top-16 right-10 w-72 lg:w-80 opacity-40 animate-float"
        loading="eager"
      />
    </div>

    <div class="relative max-w-6xl mx-auto px-5 md:px-6 py-24 w-full">
      <div class="grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-16 items-center">
        <!-- Text -->
        <div class="order-2 md:order-1">
          <p class="animate-hero-fade-in text-petrol-600 font-medium tracking-[0.18em] text-xs md:text-sm uppercase mb-3">
            Psychologische Psychotherapie in Heidelberg
          </p>
          <h1 class="animate-hero-fade-in-1 font-serif text-4xl md:text-5xl font-semibold text-ink leading-[1.1] tracking-tight mb-4">
            Willkommen in unserer {{ KASSENZULASSUNG ? 'Praxis' : 'Privatpraxis' }}
          </h1>
          <div class="animate-hero-fade-in-2 accent-rule mb-5"></div>
          <p class="animate-hero-fade-in-2 text-base md:text-lg text-ink/70 leading-relaxed mb-4 max-w-2xl">
            Menschen können in Situationen gelangen, in denen die bisherigen
            Bewältigungsmechanismen, die im Laufe des Lebens entstanden sind, nicht mehr gut
            helfen. Gleichzeitig stehen oft noch keine neuen Wege (i. S. von Fähigkeiten) zur
            Verfügung, was ein äußerst leidvoller Zustand sein kann. Gefühle wie Traurigkeit,
            Ängste aber auch Wut oder schließlich Resignation können vorherrschend sein.
          </p>
          <p class="animate-hero-fade-in-2 text-base md:text-lg text-ink/70 leading-relaxed mb-4 max-w-2xl">
            Sich Hilfe zu suchen und sich für eine Psychotherapie zu entscheiden, ist ein
            mutiger Schritt. Denn Psychotherapie bedeutet die Bereitschaft, sich mit sich
            selbst, seinen Problemen und inneren Konflikten auseinanderzusetzen.
          </p>
          <p class="animate-hero-fade-in-2 text-base md:text-lg text-ink/70 leading-relaxed mb-4 max-w-2xl">
            Die Suche nach psychotherapeutischer Unterstützung ist aber meist mit
            verschiedenen Fragen verbunden. Beispielsweise welches Therapieverfahren ist für
            mich das richtige? Ist eine Einzel- oder Gruppentherapie sinnvoll?
          </p>
          <p class="animate-hero-fade-in-3 text-base md:text-lg text-ink/70 leading-relaxed mb-6 max-w-2xl">
            In unserer Praxis bündeln wir zwei bewährte Therapieformen: tiefenpsychologisch
            fundierte Psychotherapie und kognitive Verhaltenstherapie. Sie müssen nicht im
            Voraus wissen, welcher Weg der richtige für Sie ist. Im Erstgespräch nehmen wir
            uns Zeit für eine sorgfältige Diagnostik und Indikationsstellung. Gemeinsam
            klären wir Ihre Anliegen und finden das Setting, das Sie bestmöglich auf Ihrem
            Weg unterstützt.
          </p>
          <div class="animate-hero-fade-in-3 flex flex-col sm:flex-row gap-4">
            <!--
              TODO(Warteliste): Sobald ein Wartelisten-/Terminanbieter feststeht, führt dieser
              Button dorthin statt zum Kontaktabschnitt (siehe Wartelisten.vue).
            -->
            <a
              href="#kontakt"
              class="inline-flex items-center justify-center px-7 py-3.5 bg-petrol-600 text-white font-medium rounded-lg shadow-sm hover:bg-petrol-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petrol-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-50"
              @click.prevent="scrollTo('#kontakt')"
            >
              Termin anfragen
            </a>
            <a
              href="#angebot"
              class="inline-flex items-center justify-center px-7 py-3.5 border border-petrol-300 text-petrol-700 font-medium rounded-lg hover:bg-petrol-50 hover:border-petrol-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petrol-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-50"
              @click.prevent="scrollTo('#angebot')"
            >
              Unser Angebot ansehen
            </a>
          </div>
        </div>

        <!-- Photo -->
        <div class="order-1 md:order-2 flex justify-center md:justify-end animate-hero-fade-in-4">
          <div class="relative w-full md:w-auto">
            <div class="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-moss-100 via-iris-100 to-petrol-100 opacity-70 blur-sm"></div>
            <!--
              Bis md das ungeschnittene 16:9-Original als flaches Band (ruhigerer mobiler
              Einstieg, die Überschrift bleibt im sichtbaren Bereich), ab md der 4:5-Zuschnitt.
              Die Container-Ratio entspricht je Breakpoint der Bild-Ratio – object-cover
              schneidet daher in keiner Größe etwas weg.
            -->
            <div class="w-full max-w-md md:w-80 md:max-w-none aspect-[16/9] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl shadow-petrol-900/10 ring-1 ring-black/5">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcset="/images/praxis-gespraech-v2.webp"
                  width="576"
                  height="720"
                />
                <img
                  src="/images/praxis-gespraech-wide.webp"
                  alt="Ruhige Gesprächssituation in hellen Praxisräumen"
                  width="960"
                  height="540"
                  class="w-full h-full object-cover"
                  loading="eager"
                  fetchpriority="high"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll cue -->
    <a
      href="#angebot"
      class="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-ink/40 hover:text-petrol-600 transition-colors"
      aria-label="Weiter zum Angebot"
      @click.prevent="scrollTo('#angebot')"
    >
      <span class="text-[0.7rem] tracking-widest uppercase">Mehr</span>
      <svg class="w-5 h-5 animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </a>
  </section>
</template>

<script setup>
import { KASSENZULASSUNG } from '../config/praxis'

function scrollTo(hash) {
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
