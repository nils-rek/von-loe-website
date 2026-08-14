<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-paper-100 via-paper-50 to-petrol-50/60 px-5">
    <div class="text-center max-w-md">
      <img src="/images/mark.webp" alt="" width="72" height="72" class="w-16 h-16 mx-auto mb-6 opacity-90" />
      <p class="font-serif text-6xl font-semibold text-petrol-700 mb-3">404</p>
      <h1 class="font-serif text-2xl font-semibold text-ink mb-3">Seite nicht gefunden</h1>
      <p class="text-ink/65 leading-relaxed mb-8">
        Die aufgerufene Seite existiert nicht oder wurde verschoben.
      </p>
      <router-link
        to="/"
        class="inline-flex items-center justify-center px-6 py-3 bg-petrol-600 text-white font-medium rounded-lg hover:bg-petrol-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petrol-500 focus-visible:ring-offset-2"
      >
        Zur Startseite
      </router-link>
    </div>
  </div>
</template>
