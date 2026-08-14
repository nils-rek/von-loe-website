# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

## Project Overview

Website for **Psychotherapie von Loe** — a Privatpraxis for psychological psychotherapy in
Heidelberg run by **Dr. Isabelle von Loe** (tiefenpsychologisch fundiert) and **Andreas von Loe**
(Verhaltenstherapie & Schematherapie). Audience: Privatpatienten, Beihilfeberechtigte, Selbstzahler.
**All content is in German.** Deploys to **psychotherapie-vonloe.de** via GitHub Pages.

This site deliberately mirrors the architecture of the sister site
`github.com/nils-rek/katharina-weweck-website` (live at psychotherapie-weweck.de).

## Tech Stack

- **Vue 3** (`<script setup>`, Composition API)
- **Vue Router 4** (history mode)
- **Vite 6** (dev server + build)
- **Tailwind CSS 3**
- **Self-hosted fonts** via `@fontsource` (imported in `src/main.js`) — DSGVO-safe, no Google CDN.

## Commands

- `npm install` — install deps
- `npm run dev` — dev server (`-- --host` to expose on LAN)
- `npm run build` — production build to `dist/` (a Vite plugin also copies `index.html` → `404.html`)
- `npm run preview` — preview the production build

## Architecture

Single-page scroll design. `src/views/HomePage.vue` assembles the section components vertically;
the NavBar smooth-scrolls to anchor IDs. Only `/impressum` and `/datenschutz` are separate routed
views (plus a catch-all 404). `NavBar`/`FooterSection` links use a `goTo()` helper that navigates to
`/` first when on a sub-page, then scrolls to the hash.

- `src/components/` — sections: `NavBar`, `HeroSection`, `DiePraxis`, `Therapieangebot`, `Team`,
  `Wartelisten`, `Kontakt`, `FooterSection`
- `src/views/` — `HomePage`, `Impressum`, `Datenschutz`, `NotFound`
- `src/composables/useScrollReveal.js` — IntersectionObserver fade/slide-in; **skipped under
  `prefers-reduced-motion`**. Usage: `const { reveal } = useScrollReveal()` then
  `<div v-bind="reveal({ delay: 80 })">`.
- `src/router.js` — routes, per-route `meta.title`, hash `scrollBehavior` (80px offset for fixed nav)
- `src/style.css` — Tailwind layers, `.accent-rule`, `.link-underline`, `.scroll-reveal` classes
- `public/images/` — optimized WebP assets
- `supporting_docs/` — source materials (CVs, logo, praxis photos). **Gitignored.**

Section anchor IDs: `#top`, `#praxis`, `#therapieangebot`, `#team`, `#wartelisten`, `#kontakt`.

## Design System

Light mode only. Calm, clean, minimal ("Schlicht, Clean, modern, übersichtlich"). Accents drawn from
the logo's green→violet→blue dandelion. Tokens in `tailwind.config.js`:

- **petrol** (primary blue, CTAs) `600 #3f6fa6` · **moss** (green) `500 #63a05d` ·
  **iris** (violet) `500 #8e6fb3` · **paper** (warm off-white neutrals) · **ink** text `#2b3440`
- Restraint: mostly white + petrol; moss/iris used sparingly. In sections the three verfahren/
  waitlist cards are color-coded moss / petrol / iris respectively.
- **Fonts**: Cormorant Garamond (serif, headings) + Source Sans 3 (sans, body).
- **Icons**: inline Heroicons (outline) SVGs — no emoji.
- Cards `rounded-2xl`, soft shadows, thin colored top-border accents, `focus-visible` rings.

## Branding note

The supplied logo file reads "Psychotherapie **am Bismarckplatz**", but the site wordmark is
"Psychotherapie **von Loe**" (domain-aligned). Only the dandelion graphic is used
(`public/images/mark.webp` + `public/favicon.svg`); the text wordmark is set in `NavBar`/`Footer`.
An updated logo with the correct wordmark would be ideal.

## Pending real-content inputs (placeholders marked `[…]` / `TODO` in code)

- **Address, phone, email, Sprechzeiten** → `Kontakt.vue`, `FooterSection.vue`
- **Impressum**: Aufsichtsbehörde, Berufshaftpflicht, verantwortliche Person → `views/Impressum.vue`
- **Datenschutz**: name the waitlist service + Stand-Datum → `views/Datenschutz.vue`
- **Andreas's photo** → add `public/images/andreas-von-loe.webp` and set `photo:` in `Team.vue`
  (currently an "AvL" monogram fallback). Isabelle's headshot is low-res 234×350 (from her CV) —
  a higher-res version would sharpen it.
- **Waitlist embeds**: paste the existing form/iframe into the three `data-waitlist-embed` slots in
  `Wartelisten.vue` (search `TODO(waitlist embed)`). The section is an intentional placeholder —
  the therapists already run their own waitlist solution.

## Assets / images

Convert new images to WebP before adding (use Python + Pillow; note `convert` on this Windows box is
the OS FS tool, **not** ImageMagick). Keep explicit `width`/`height` on `<img>` to avoid CLS. Large
below-fold photos use `loading="lazy"`; the small Team headshot is `loading="eager"` (native lazy was
unreliable there).

## Verifying UI changes (screenshots)

There is no saved screenshot tooling (keeps deps minimal). To capture full-page screenshots, install
Playwright without touching `package.json`, emulate reduced-motion (so scroll-reveal content is
visible), scroll to trigger lazy images, then screenshot:

```
npm install --no-save playwright
npx playwright install chromium
# write a short script using chromium.launch(), context({ reducedMotion: 'reduce' }),
# scroll through the page, await document.images, then page.screenshot({ fullPage: true })
npm remove --no-save playwright   # clean up afterwards
```

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on push to `master`/`main`.
`public/CNAME` = `psychotherapie-vonloe.de`; `base: '/'` (apex domain). To go live: **Settings →
Pages → Source: GitHub Actions**, point DNS at GitHub Pages, enable HTTPS. Note: **the repo is
private** — GitHub Pages on a private repo needs a paid plan; otherwise make it public first.
