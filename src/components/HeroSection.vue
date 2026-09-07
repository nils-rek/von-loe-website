<template>
  <section
    id="top"
    class="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-paper-100 via-paper-50 to-petrol-50/60"
  >
    <!-- Weiche Farbflächen + die Bildmarke des Logos als Motiv -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute -top-24 -right-24 w-[34rem] h-[34rem] rounded-full bg-petrol-100/50 blur-3xl animate-float-slow"></div>
      <div class="absolute top-1/3 -left-24 w-[26rem] h-[26rem] rounded-full bg-moss-100/40 blur-3xl animate-float"></div>
      <div class="absolute -bottom-20 right-1/4 w-[22rem] h-[22rem] rounded-full bg-iris-100/40 blur-3xl animate-float-delayed"></div>
      <img
        src="/images/logo-wide.webp"
        alt=""
        width="658"
        height="333"
        class="absolute top-16 right-2 md:right-10 w-56 md:w-72 lg:w-80 opacity-40 animate-float"
        loading="eager"
      />
    </div>

    <div class="relative max-w-6xl mx-auto px-5 md:px-6 py-28 md:py-32 w-full">
      <div class="grid md:grid-cols-[1.05fr_0.95fr] gap-12 md:gap-16 items-center">
        <!-- Text -->
        <div class="order-2 md:order-1">
          <p class="animate-hero-fade-in text-petrol-600 font-medium tracking-[0.18em] text-xs md:text-sm uppercase mb-5">
            Praxis für Psychotherapie · Heidelberg
          </p>
          <h1 class="animate-hero-fade-in-1 font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-ink leading-[1.05] tracking-tight mb-6">
            Psychotherapie<br />von&nbsp;Loe
          </h1>
          <div class="animate-hero-fade-in-2 accent-rule mb-7"></div>
          <p class="animate-hero-fade-in-2 text-lg md:text-xl text-ink/70 leading-relaxed mb-8 max-w-xl">
            Psychologische Psychotherapie – tiefenpsychologisch
            fundiert und verhaltenstherapeutisch. Für Erwachsene, in Einzel- und
            Gruppentherapie.
          </p>
          <div class="animate-hero-fade-in-3 flex flex-col sm:flex-row gap-4">
            <a
              href="#kontakt"
              class="inline-flex items-center justify-center px-7 py-3.5 bg-petrol-600 text-white font-medium rounded-lg shadow-sm hover:bg-petrol-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petrol-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-50"
              @click.prevent="scrollTo('#kontakt')"
            >
              Kontakt aufnehmen
            </a>
            <a
              href="#therapieangebot"
              class="inline-flex items-center justify-center px-7 py-3.5 border border-petrol-300 text-petrol-700 font-medium rounded-lg hover:bg-petrol-50 hover:border-petrol-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petrol-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-50"
              @click.prevent="scrollTo('#therapieangebot')"
            >
              Therapieangebot ansehen
            </a>
          </div>
        </div>

        <!-- Photo -->
        <div class="order-1 md:order-2 flex justify-center md:justify-end animate-hero-fade-in-4">
          <div class="relative">
            <div class="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-moss-100 via-iris-100 to-petrol-100 opacity-70 blur-sm"></div>
            <div class="w-64 h-[22rem] sm:w-72 sm:h-[26rem] md:w-80 md:h-[30rem] rounded-2xl overflow-hidden shadow-xl shadow-petrol-900/10 ring-1 ring-black/5">
              <img
                src="/images/flur-hell.webp"
                alt="Heller Flur der Praxis mit Fischgrätparkett und hohen Decken"
                width="1066"
                height="1600"
                class="w-full h-full object-cover"
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll cue -->
    <a
      href="#praxis"
      class="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-ink/40 hover:text-petrol-600 transition-colors"
      aria-label="Weiter zur Praxis"
      @click.prevent="scrollTo('#praxis')"
    >
      <span class="text-[0.7rem] tracking-widest uppercase">Mehr</span>
      <svg class="w-5 h-5 animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </a>
  </section>
</template>

<script setup>
function scrollTo(hash) {
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
