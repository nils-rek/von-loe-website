# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

## Project Overview

Website for **Psychotherapeutische Praxis von Loe** — a practice for psychological psychotherapy at
Sofienstraße 13, 69115 Heidelberg, run by **Dr. Isabelle von Loe** (tiefenpsychologisch fundiert)
and **Andreas von Loe** (Verhaltenstherapie & Schematherapie). Audience: gesetzlich Versicherte,
Selektivverträge, Privatpatienten, Beihilfeberechtigte, Selbstzahler. **The "Privatpraxis" framing
was dropped in iteration 2** — see the Kassenzulassung note under "Pending".
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

- `src/components/` — sections in page order: `NavBar`, `HeroSection`, `Therapieangebot`,
  `Ablauf`, `Kosten`, `Team`, `Raeumlichkeiten`, `Kontakt`, `FooterSection`.
  `Wartelisten.vue` is **parked** — on disk but not mounted; its file header documents how to
  re-mount it once a waitlist provider is chosen.
- `src/views/` — `HomePage`, `Impressum`, `Datenschutz`, `NotFound`
- `src/composables/useScrollReveal.js` — IntersectionObserver fade/slide-in; **skipped under
  `prefers-reduced-motion`**. Usage: `const { reveal } = useScrollReveal()` then
  `<div v-bind="reveal({ delay: 80 })">`.
- `src/router.js` — routes, per-route `meta.title`, hash `scrollBehavior` (80px offset for fixed nav)
- `src/style.css` — Tailwind layers, `.accent-rule`, `.link-underline`, `.scroll-reveal` classes
- `public/images/` — optimized WebP assets
- `supporting_docs/` — source materials (CVs, logo, praxis photos). **Gitignored.**

Section anchor IDs: `#top`, `#angebot`, `#ablauf`, `#kosten`, `#team`, `#raeume`, `#kontakt`.
This structure follows the client's `Gliederung für die Homepage` in
`supporting_docs/Homepage 05.09.26.docx` (iteration 4) — keep the two in sync.
Sections alternate `bg-white` / `bg-paper-100`; keep that rhythm when adding or removing one
(inner card surfaces flip with it).

## Design System

Light mode only. Calm, clean, minimal ("Schlicht, Clean, modern, übersichtlich"). Accents drawn from
the logo's green→violet→blue dandelion. Tokens in `tailwind.config.js`:

- **petrol** (primary blue, CTAs) `600 #3f6fa6` · **moss** (green) `500 #63a05d` ·
  **iris** (violet) `500 #8e6fb3` · **paper** (warm off-white neutrals) · **ink** text `#2b3440`
- Restraint: mostly white + petrol; moss/iris used sparingly. The three Verfahren cards in
  `Therapieangebot` are color-coded moss / petrol / iris; the four Abrechnungs-cards in `Kosten` stay
  uniformly petrol so the section does not compete with them.
- **Fonts**: Cormorant Garamond (serif, headings) + Source Sans 3 (sans, body).
- **Icons**: inline Heroicons (outline) SVGs — no emoji.
- Cards `rounded-2xl`, soft shadows, thin colored top-border accents, `focus-visible` rings.

## Branding note

**Iteration 4 replaced the logo.** The current source is `supporting_docs/logo_transparent.png`
(670×480): a dandelion whose seeds blow to the right, stacked over the wordmark
"Psychotherapeutische Praxis von Loe". Everything in `public/` is derived from it with
Python/Pillow — regenerate from the source, never by re-cropping a derivative:

| asset | crop of the source | used by |
| --- | --- | --- |
| `images/logo-lockup.webp` | mark `(0,2,658,335)` left + wordmark `(28,346,658,479)` right, wordmark at 78 % of the mark height, gap 3 % | `NavBar`, `FooterSection` |
| `images/logo-wide.webp` | mark only, `(0,2,658,335)`, 2:1 | hero motif, `NotFound` |
| `images/logo-full.webp` | the logo as delivered, trimmed to its bbox | reserve (print/OG) |
| `favicon.png` (128) + `apple-touch-icon.png` (180) | square crop of the seed head, `(205,85,465,345)`, palette-quantized | `index.html` |

**The mark is 2:1 — never put it in a square box, that clips the flying seeds.** The delivered
file stacks mark over wordmark, which makes the wordmark illegible at nav-bar height; hence the
horizontal `logo-lockup`, which is the *only* place the name appears in the header and footer —
**do not typeset the practice name next to the logo again.** The footer sets the lockup on a
`bg-paper-50` plate because the wordmark's navy would vanish on `petrol-800`.

The practice name is **"Psychotherapeutische Praxis von Loe"** everywhere (title, OG tags,
Impressum, Datenschutz); the domain stays `psychotherapie-vonloe.de`. `favicon.svg`,
`images/mark.webp` and `PraxisMark.vue` are gone — the artwork does not vectorize well.

## Pending real-content inputs (placeholders marked `[…]` / `TODO` in code)

- **Kassenzulassung** — the biggest open item. The site now states that the practice bills the
  gesetzliche Krankenkassen and mentions Selektivverträge, but this is *planned, not confirmed*.
  `Kosten.vue` carries a `TODO(Kassenzulassung)` comment and a visible iris-colored Hinweis box
  under the cost cards; `Ablauf.vue` has a matching TODO on the Antragsverfahren wording.
  **Confirm before launch and delete the Hinweis box.** Also: which Selektivverträge actually apply.
- **Impressum**: Aufsichtsbehörde, Berufshaftpflicht, verantwortliche Person nach § 18 Abs. 2 MStV
  → `views/Impressum.vue` (the yellow warning box stays until these are filled)
- **Datenschutz**: confirm the `Stand:` date → `views/Datenschutz.vue`
- **Waitlist**: no provider chosen yet, so the section is unmounted. To bring it back, follow the
  instructions in the file header of `Wartelisten.vue` (this also means restoring the "Warteliste"
  section in `views/Datenschutz.vue` — see git history).
- **Anfahrt** (new in iteration 4): the three cards in `Kontakt.vue` are a *draft* — tram/bus line
  numbers, the nearest parking garage by name, and the floor/entrance are all generic. See the
  `TODO(Anfahrt)` comment.
- **Barrierefreiheit**: the client's Gliederung asks for it, but the actual accessibility of
  Sofienstraße 13 is unknown, so nothing is claimed on the page. Add it to the Anfahrt card once
  confirmed.
- **Kontaktformular**: also in the Gliederung, deliberately not built — GitHub Pages has no
  backend, so it needs an external provider (Formspree o. ä.) plus a Datenschutz section.
- **Gruppensitzungen**: duration is phrased vaguely in `Kosten.vue` (`TODO(Gruppensitzung)`).
- **Ausfallregelung**: no Absagefrist/Ausfallhonorar stated (`TODO(Ausfallregelung)` in
  `Kosten.vue`) — add a fifth Rahmenbedingungen card once decided.
- **Room photos**: `therapieraum`, `gruppenraum` and `gruppenraum-weit` are all the *same* room,
  so `Raeumlichkeiten.vue` shows only one of them plus the hallway. More rooms (Einzelzimmer,
  Wartebereich) would let the gallery grow back.

Resolved in iteration 2: address, phone, the two role e-mail addresses
(`tiefenpsychologie@` / `verhaltenstherapie@psychotherapie-vonloe.de`), telefonische
Erreichbarkeit, both professional headshots.
Resolved in iteration 4: the final logo, the practice name, the Startseite welcome copy and the
overall section structure — all from `supporting_docs/Homepage 05.09.26.docx` and
`logo_transparent.png`.

## Assets / images

Convert new images to WebP before adding (use Python + Pillow; note `convert` on this Windows box is
the OS FS tool, **not** ImageMagick). Keep explicit `width`/`height` on `<img>` to avoid CLS. Large
below-fold photos use `loading="lazy"`; the Team headshots are `loading="eager"` (native lazy was
unreliable there). Both headshots are 640×797 WebP (q82) derived from the 912×1136 originals in
`supporting_docs/` — the 0.8 aspect matches the `w-32 h-40` slot, so `object-cover` crops nothing.

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

The script must sit in the **project root** (Node resolves `playwright` from there, not from a
temp dir), and it needs a server to hit — `npm run preview` on a fixed port works well. Delete the
script afterwards so it does not get committed.

## Deployment

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on push to `master`/`main`.
`public/CNAME` = `psychotherapie-vonloe.de`; `base: '/'` (apex domain). To go live: **Settings →
Pages → Source: GitHub Actions**, point DNS at GitHub Pages, enable HTTPS. Note: **the repo is
private** — GitHub Pages on a private repo needs a paid plan; otherwise make it public first.
