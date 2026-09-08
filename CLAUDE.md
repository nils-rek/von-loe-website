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
`supporting_docs/Homepage 05.09.26.docx` (iteration 4), amended by the correction list in
`supporting_docs/Homepage 0709.26.docx` (iteration 5) — keep the three in sync.
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

**Iteration 5 refreshed the logo.** The current source is `supporting_docs/logo-neu.png`
(822×564, transparent): the same dandelion, but the wordmark is now uniform — "von Loe" is set
in the same navy grotesque as "Psychotherapeutische Praxis" (previously a green script) and is
flanked by two hairlines. Everything in `public/` is derived from it with Python/Pillow —
regenerate from the source, never by re-cropping a derivative:

| asset | crop of the source | result | used by |
| --- | --- | --- | --- |
| `images/logo-lockup.webp` | mark `(24,26,738,380)` left + wordmark `(36,410,802,536)` right, wordmark at 78 % of the mark height, gap 3 % of the mark width | 1636×240 (6.8:1) | `NavBar`, `FooterSection` |
| `images/logo-wide.webp` | mark only, `(24,26,738,380)`, 2:1 | 714×354 | hero motif, `NotFound` |
| `images/logo-full.webp` | the logo trimmed to its bbox, `(24,26,802,536)` | 778×510 | reserve (print/OG) |
| `favicon.png` (128) + `apple-touch-icon.png` (180) | square crop of the seed head, `(250,100,550,400)` | palette (`P`) | `index.html` |

The icons must be quantized with `Image.quantize(colors=255, method=Image.FASTOCTREE)` on the
**RGBA** crop — that is the only path that keeps the alpha channel in the palette. Going through
`convert('RGB')` first fills the transparent area with black.

**The mark is 2:1 — never put it in a square box, that clips the flying seeds.** The delivered
file stacks mark over wordmark, which makes the wordmark illegible at nav-bar height; hence the
horizontal `logo-lockup`, which is the *only* place the name appears in the header and footer —
**do not typeset the practice name next to the logo again.** The lockup carries a soft white halo
around the wordmark (baked into the source), so the footer keeps it on a `bg-paper-50` plate — on
`petrol-800` both the navy type and the halo would show badly. At `h-9` (36 px) the lockup is
245 px wide and still fits next to the burger button at a 375 px viewport; re-check that if the
lockup is ever regenerated at a different wordmark ratio.

The practice name is **"Psychotherapeutische Praxis von Loe"** everywhere (title, OG tags,
Impressum, Datenschutz); the domain stays `psychotherapie-vonloe.de`. `favicon.svg`,
`images/mark.webp` and `PraxisMark.vue` are gone — the artwork does not vectorize well.

## Pending real-content inputs (`TODO` comments in code)

> **The site is in an „Abstimmungsfassung“ (iteration 5).** Every *visible* placeholder and
> warning box was removed so the page can be deployed and reviewed with the practice owners
> without reading as a construction site. **Nothing below was actually resolved by that** — the
> facts are still unconfirmed, they are just no longer flagged on the page. Before the site is
> really announced, work through this list; the `TODO(...)` comments in the components mark
> every spot. Do not add new user-facing warning boxes — keep open items in `TODO` comments.

- **Kassenzulassung** — the biggest open item. The site states that the practice bills the
  gesetzliche Krankenkassen and mentions Selektivverträge, but this is *planned, not confirmed*.
  `Kosten.vue` carries a `TODO(Kassenzulassung)` comment where the visible Hinweis box used to be;
  `Ablauf.vue` has a matching TODO on the Antragsverfahren wording. Also: which Selektivverträge
  actually apply.
- **Impressum** (`views/Impressum.vue`, `TODO(Impressum)`): the bracket placeholders are gone, but
  two of the three were **assumed, not confirmed** — Aufsichtsbehörde is written as
  „Regierungspräsidium Stuttgart“ (centrally responsible for Approbationen in BW) and the
  § 18 Abs. 2 MStV entry names both owners. The **Berufshaftpflicht section was deleted** because
  insurer and Geltungsbereich are unknown; put it back once they are. The whole Impressum still
  needs a legal check.
- **Datenschutz** (`views/Datenschutz.vue`, `TODO(Datenschutz)`): `Stand: September 2026` is set,
  but the text is an unreviewed template — needs a legal check.
- **Waitlist**: no provider chosen yet, so the section is unmounted. To bring it back, follow the
  instructions in the file header of `Wartelisten.vue` (this also means restoring the "Warteliste"
  section in `views/Datenschutz.vue` — see git history).
- **Anfahrt** (new in iteration 4): the three cards in `Kontakt.vue` are a *draft* — tram/bus line
  numbers, the nearest parking garage by name, and the floor/entrance are all generic. See the
  `TODO(Anfahrt)` comment.
- **Barrierefreiheit**: iteration 5 confirmed **a lift is present** (stated in the "Lage" card).
  Steps at the street entrance and a step-free WC are still unconfirmed — nothing else is claimed.
- **Kontaktformular**: also in the Gliederung, deliberately not built — GitHub Pages has no
  backend, so it needs an external provider (Formspree o. ä.) plus a Datenschutz section.
- **Gruppensitzungen**: duration is phrased vaguely in `Kosten.vue` (`TODO(Gruppensitzung)`).
- **Ausfallregelung**: no Absagefrist/Ausfallhonorar stated (`TODO(Ausfallregelung)` in
  `Kosten.vue`) — add a fifth Rahmenbedingungen card once decided.
- **Room photos**: `therapieraum`, `gruppenraum` and `gruppenraum-weit` are all the *same* room,
  so `Raeumlichkeiten.vue` shows only one of them plus the two hallway shots. More rooms
  (Einzelzimmer, Wartebereich) would let the gallery grow beyond three tiles.

Resolved in iteration 2: address, phone, the two role e-mail addresses
(`tiefenpsychologie@` / `verhaltenstherapie@psychotherapie-vonloe.de`), telefonische
Erreichbarkeit, both professional headshots.
Resolved in iteration 4: the practice name, the Startseite welcome copy and the
overall section structure — all from `supporting_docs/Homepage 05.09.26.docx`.
Resolved in iteration 5 (from `supporting_docs/Homepage 0709.26.docx` and `logo-neu.png`): the
final logo, the full Eingangstext, the Räumlichkeiten copy, the hero photo and the lift.

## Assets / images

Convert new images to WebP before adding (use Python + Pillow; note `convert` on this Windows box is
the OS FS tool, **not** ImageMagick). Keep explicit `width`/`height` on `<img>` to avoid CLS. Large
below-fold photos use `loading="lazy"`; the Team headshots are `loading="eager"` (native lazy was
unreliable there). Both headshots are 640×797 WebP (q82) derived from the 912×1136 originals in
`supporting_docs/` — the 0.8 aspect matches the `w-32 h-40` slot, so `object-cover` crops nothing.
The two were **not shot at the same distance**: `isabelle_headshot.jpg` is used full-frame, while
`andi_headshot.jpg` is cropped `(98,199,850,1136)` before the resize so both heads end up the same
size and at the same height in the card (hair top ≈ 12 %, chin ≈ 58 % of the frame). `object-cover`
cannot fix that — it only pans, it cannot zoom — so re-crop the source if a headshot is replaced.

`images/praxis-gespraech.webp` (576×720, 4:5, q82) is the hero photo added in iteration 5. It comes
from the image embedded in `Homepage 0709.26.docx` (`word/media/image1.jpg`, 1280×720), cropped
**`(0,0,576,720)` — flush with the left edge**, so the out-of-focus patient silhouette in the
foreground stays in frame; a centred crop drops it and the scene reads as a lone portrait. The
uncropped 16:9 frame was tried and rejected: a landscape image beside the long Eingangstext is
either tiny or leaves a large hole under it, and fixing that needed the whole hero restructured.
The portrait keeps the plain side-by-side hero (text left, photo right from `md`, stacked below).
Keep an eye on the fold: at 1440×900 the „Termin anfragen“ button ends at ~871 px, so any extra
copy or type size in the hero pushes the primary CTA out of view. **It is a stock/AI-looking image, not a photo of the practice or of either therapist**
— keep the alt text neutral so it never reads as a therapist or a patient. The former hero photo
`flur-hell.webp` moved into the `Raeumlichkeiten` gallery, which therefore runs
`sm:grid-cols-2 lg:grid-cols-3` with three tiles.

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
