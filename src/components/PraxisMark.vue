<!--
  Praxis-Signet: der Punktkreis aus dem Logo (supporting_docs/logo_svg.txt),
  umgefärbt auf die Praxisfarben moss / petrol / iris. Inline statt Bitmap,
  damit die Marke auf jedem Display scharf bleibt.
-->
<template>
  <svg viewBox="0 0 124 124" fill="none" aria-hidden="true">
    <!-- äußerer Kranz -->
    <circle v-for="d in outer" :key="`o-${d.cx}-${d.cy}`" :cx="d.cx" :cy="d.cy" r="5" :fill="d.fill" />
    <!-- innere Punkte -->
    <circle v-for="d in inner" :key="`i-${d.cx}-${d.cy}`" :cx="d.cx" :cy="d.cy" r="4" :fill="d.fill" />
  </svg>
</template>

<script setup>
// Farbwerte aus tailwind.config.js – im SVG als fill nicht über Klassen setzbar
const moss = '#7fb079'
const petrol = '#6e97c4'
const iris = '#a487c0'
const mossDeep = '#4d8548'
const petrolDeep = '#3f6fa6'
const irisDeep = '#7757a0'

const C = 62 // Mittelpunkt

// Koordinaten wie im gelieferten Logo, um den Mittelpunkt verschoben
const outer = [
  [0, -55, moss],
  [38, -38, petrol],
  [55, 0, iris],
  [38, 38, moss],
  [0, 55, petrol],
  [-38, 38, iris],
  [-55, 0, moss],
  [-38, -38, petrol],
].map(([x, y, fill]) => ({ cx: C + x, cy: C + y, fill }))

const inner = [
  [0, -25, petrolDeep],
  [20, -12, mossDeep],
  [22, 10, irisDeep],
  [0, 25, petrolDeep],
  [-20, 8, mossDeep],
].map(([x, y, fill]) => ({ cx: C + x, cy: C + y, fill }))
</script>
