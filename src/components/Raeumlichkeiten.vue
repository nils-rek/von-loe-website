<template>
  <section id="raeume" class="py-24 md:py-32 bg-white">
    <div class="max-w-6xl mx-auto px-5 md:px-6">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-16" v-bind="headerReveal">
        <p class="text-petrol-600 font-medium tracking-[0.18em] text-xs md:text-sm uppercase mb-3">
          Räumlichkeiten
        </p>
        <h2 class="text-3xl md:text-4xl font-semibold text-ink leading-snug">
          Ein Ort, an dem Sie zu sich kommen können
        </h2>
        <div class="accent-rule mx-auto mt-5"></div>
        <p class="mt-6 text-ink/70 leading-relaxed">
          Unsere Praxis liegt in der Sofienstraße in Heidelberg, wenige Schritte vom
          Verkehrsknotenpunkt Bismarckplatz entfernt.
        </p>
      </div>

      <!-- Text + Hauptbild -->
      <div class="grid md:grid-cols-2 gap-10 md:gap-14 items-center mb-12">
        <figure v-bind="imageReveal">
          <!-- Der Verlaufs-Glow bleibt im inneren Wrapper, damit er nicht unter die Bildunterschrift läuft. -->
          <div class="relative">
            <div class="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-petrol-100 to-moss-100 opacity-60 blur-sm"></div>
            <img
              src="/images/therapieraum.webp"
              alt="Heller Therapieraum mit Stuhlkreis, Fischgrätparkett und hohen Fenstern"
              width="1066"
              height="1600"
              class="w-full h-72 md:h-[26rem] object-cover rounded-2xl shadow-lg shadow-petrol-900/5 ring-1 ring-black/5"
              loading="lazy"
            />
          </div>
          <figcaption class="mt-3 text-sm text-ink/55">Gruppentherapieraum</figcaption>
        </figure>

        <div v-bind="textReveal">
          <h3 class="font-serif text-2xl font-semibold text-ink mb-4">
            Räume für Einzel- und Gruppengespräche
          </h3>
          <p class="text-ink/70 leading-relaxed mb-4">
            In den hellen Altbauräumen können Sie in Ruhe über Ihre Anliegen sprechen. Neben
            den Behandlungszimmern für die Einzeltherapie steht ein großzügiger Gruppenraum
            zur Verfügung.
          </p>
          <p class="text-ink/70 leading-relaxed">
            Uns ist ein wertschätzender, unaufgeregter Umgang wichtig. Sie bestimmen das Tempo
            – wir bringen unsere fachliche Expertise ein.
          </p>
        </div>
      </div>

      <!-- Galerie -->
      <div class="grid sm:grid-cols-2 gap-6" v-bind="galleryReveal">
        <figure v-for="p in gallery" :key="p.src">
          <img
            :src="p.src"
            :alt="p.alt"
            :width="p.width"
            :height="p.height"
            class="w-full h-56 md:h-64 object-cover rounded-2xl ring-1 ring-black/5 shadow-sm"
            :class="p.objectClass"
            loading="lazy"
          />
          <figcaption class="mt-3 text-sm text-ink/55">{{ p.caption }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

const { reveal } = useScrollReveal()
const headerReveal = reveal()
const imageReveal = reveal({ delay: 60 })
const textReveal = reveal({ delay: 120 })
const galleryReveal = reveal({ delay: 60 })

// Von den gelieferten Praxisfotos zeigen therapieraum / gruppenraum / gruppenraum-weit
// denselben Raum. Das große Bild oben ist als „Gruppentherapieraum“ beschriftet, deshalb
// bleiben hier nur die beiden Flurmotive – sobald weitere Räume fotografiert sind
// (Einzelzimmer, Wartebereich), kann die Galerie wieder wachsen (dann auch lg:grid-cols-3).
const gallery = [
  {
    src: '/images/flur-hell.webp',
    alt: 'Heller Flur der Praxis mit Fischgrätparkett und hohen Decken',
    caption: 'Flur',
    width: 1066,
    height: 1600,
  },
  {
    src: '/images/flur-kurve.webp',
    alt: 'Geschwungener Flur der Praxis mit Fischgrätparkett und Tageslicht',
    caption: 'Eingangsbereich',
    width: 1066,
    height: 1600,
    // Hochformat: mittiger Zuschnitt zeigt nur Wand – Ausschnitt nach unten verschieben
    objectClass: 'object-[center_85%]',
  },
]
</script>
