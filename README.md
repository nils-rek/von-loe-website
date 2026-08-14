# Psychotherapie von Loe – Website

Website der Privatpraxis **Psychotherapie von Loe** (Dr. Isabelle von Loe & Andreas von Loe),
Heidelberg. Statische Single-Page-Website, deployt über **GitHub Pages** unter
`https://psychotherapie-vonloe.de`.

## Tech-Stack

- **Vue 3** (`<script setup>`) + **vue-router 4**
- **Vite 6** (Build)
- **Tailwind CSS 3**
- Selbst-gehostete Schriften via `@fontsource` (DSGVO-konform, keine externen Requests)

## Entwicklung

```bash
npm install
npm run dev        # lokaler Dev-Server (http://localhost:5173)
npm run build      # Produktions-Build nach dist/ (erzeugt auch 404.html)
npm run preview    # Build lokal ansehen
```

## Projektstruktur

```
src/
  components/   Sektionen (Hero, DiePraxis, Therapieangebot, Team, Wartelisten, Kontakt, …)
  views/        HomePage, Impressum, Datenschutz, NotFound
  composables/  useScrollReveal.js
public/
  images/       optimierte WebP-Bilder (Praxis, Porträt, Logo-Marke) + og-image
  CNAME, robots.txt, sitemap.xml, favicon.svg
```

## Noch zu ergänzen (Platzhalter im Code, mit `[…]` bzw. `TODO` markiert)

- **Praxisadresse**, **Telefonnummer**, **E-Mail-Adresse**, telefonische **Sprechzeiten**
  → `src/components/Kontakt.vue`, `src/components/FooterSection.vue`
- **Impressum**: Aufsichtsbehörde, Berufshaftpflicht, verantwortliche Person
  → `src/views/Impressum.vue`
- **Datenschutz**: Warteliste-Dienst benennen, AV-Vertrag, Stand-Datum
  → `src/views/Datenschutz.vue`
- **Wartelisten-Formulare**: bestehende Formular-/Embed-Codes einsetzen
  → `src/components/Wartelisten.vue` (Suche nach `TODO(waitlist embed)` und `data-waitlist-embed`)
- **Foto von Andreas von Loe**: als `public/images/andreas-von-loe.webp` ablegen und in
  `src/components/Team.vue` bei Andreas `photo:` auf den Pfad setzen (aktuell Monogramm-Platzhalter)
- Optional: aktualisiertes **Logo** (die gelieferte Datei trägt den Schriftzug
  „am Bismarckplatz“; aktuell wird nur die Pusteblumen-Marke verwendet)

## Deployment (GitHub Pages)

1. Repository zu GitHub pushen (Branch `master` oder `main`).
2. In den Repo-Einstellungen unter **Settings → Pages** als Source **GitHub Actions** wählen.
   Der Workflow `.github/workflows/deploy.yml` baut und veröffentlicht automatisch bei jedem Push.
3. Custom Domain: `public/CNAME` enthält bereits `psychotherapie-vonloe.de`. Beim Domain-Provider
   die DNS-Einträge auf GitHub Pages setzen (A-Records auf die GitHub-Pages-IPs bzw. `CNAME` auf
   `<user>.github.io`) und in **Settings → Pages** die Domain eintragen. „Enforce HTTPS“ aktivieren.
