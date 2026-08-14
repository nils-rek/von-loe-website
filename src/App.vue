<template>
  <a
    href="#hauptinhalt"
    class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-petrol-700 focus:shadow-lg focus:ring-2 focus:ring-petrol-500"
  >
    Zum Hauptinhalt springen
  </a>
  <NavBar />
  <main id="hauptinhalt">
    <router-view />
  </main>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>
