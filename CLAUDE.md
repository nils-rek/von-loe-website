# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

## Project Overview

Website for **Psychotherapeutische Praxis von Loe** — a practice for psychological psychotherapy at
Sofienstraße 13, 69115 Heidelberg, run by **Dr. Isabelle von Loe** (tiefenpsychologisch fundiert)
and **Andreas von Loe** (Verhaltenstherapie & Schematherapie). Audience: Privatpatienten,
Beihilfeberechtigte, Selbstzahler. **The "Privatpraxis" framing was dropped in iteration 2 and
came back in iteration 7**, after the application for a Kassensitz failed — see the Kassenzulassung
note under "Pending" for the flag that parks the GKV content.
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
- `src/config/praxis.js` — build-time flags for facts that can change (currently only
  `KASSENZULASSUNG`, see "Pending" below). Components import the flag and pick between two text
  variants; nothing is commented out.
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

- **Kassenzulassung — resolved for now: the application for a Kassensitz was unsuccessful
  (September 2026), so the site runs as a Privatpraxis.** All GKV content is *parked behind a
  flag*, not deleted: `KASSENZULASSUNG` in `src/config/praxis.js`. Flipping it to `true` brings
  back the hero headline without „Privat", the „Gesetzlich Versicherte" and „Selektivverträge"
  cards in `Kosten.vue` and the Krankenkassen-Antrag as step 4 in `Ablauf.vue` — both text
  variants live side by side in those files. Everything that does *not* hang on the flag and has
  to be pulled back by hand — `index.html` meta/OG description, `FooterSection.vue` subtitle, the
  parked `Wartelisten.vue`, the „Erstgespräch" wording that replaced the GKV term
  „psychotherapeutische Sprechstunde" in `Ablauf.vue`/`Therapieangebot.vue`, and the 4 px hero
  spacing trim that keeps the CTA above the fold with the now two-line headline — is listed as a
  checklist in the doc comment of `praxis.js`; keep it current. Still open when the flag ever
  flips: which Selektivverträge actually apply (`TODO(Selektivvertraege)`).
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
- **Room photos**: `therapieraum`, `gruppenraum` and `gruppenraum-weit` are all the *same* room.
  Iteration 6 captions the large `therapieraum` shot „Gruppentherapieraum“ and therefore dropped
  the redundant `gruppenraum-weit` tile from the gallery (the file stays in `public/images/`), so
  the gallery is down to the two hallway shots. More rooms (Einzelzimmer, Wartebereich) would let
  it grow again.

Resolved in iteration 2: address, phone, the two role e-mail addresses
(`tiefenpsychologie@` / `verhaltenstherapie@psychotherapie-vonloe.de`), telefonische
Erreichbarkeit, both professional headshots.
Iteration 6 added a third mailbox, `gruppentherapie@psychotherapie-vonloe.de` — it appears in
`Kontakt.vue` and as Andreas' second address in `Team.vue`, but **deliberately not** on the
Gruppentherapie card in `Therapieangebot.vue` (addresses belong in Kontakt, not in the Angebot
cards) and not in Impressum or Datenschutz, which keep the two personal addresses.
Resolved in iteration 4: the practice name, the Startseite welcome copy and the
overall section structure — all from `supporting_docs/Homepage 05.09.26.docx`.
Resolved in iteration 5 (from `supporting_docs/Homepage 0709.26.docx` and `logo-neu.png`): the
final logo, the full Eingangstext, the Räumlichkeiten copy, the hero photo and the lift.

## Assets / images

Convert new images to WebP before adding (use Python + Pillow; note `convert` on this Windows box is
the OS FS tool, **not** ImageMagick). Keep explicit `width`/`height` on `<img>` to avoid CLS. Large
below-fold photos use `loading="lazy"`; the Team headshots are `loading="eager"` (native lazy was
unreliable there). Both headshots are 640×797 WebP (q82) derived from the originals in
`supporting_docs/` — the 0.8 aspect matches the `w-32 h-40` slot, so `object-cover` crops nothing.
The two were **not shot at the same distance**: `isabelle_headshot.jpg` (912×1136) is used
full-frame, while `andi_headshot.jpg` is cropped before the resize so both heads end up the same
size and at the same height in the card (hair top ≈ 12 %, chin ≈ 58 % of the frame). `object-cover`
cannot fix that — it only pans, it cannot zoom — so re-crop the source if a headshot is replaced.
`andi_headshot.jpg` was replaced in iteration 6 (same shot, different shirt) and came back at
**864×1152** instead of 912×1136, so the old crop box no longer applied. Don't guess a new one:
measure the dark hair bbox with numpy in the previously published WebP and in the new source, then
solve for the crop that maps one onto the other (`W = 640 * Hw/hw`, `left = Hl - hl*W/640`,
`top = Ht - ht*W/640`, `H = 797*W/640`). For the current file that gives `(88,240,818,1149)` and
lands the head within 1 px of the old framing. The result ships as `images/andreas-von-loe-v2.webp`
— new content, new filename, see the cache-bust note below.

`images/praxis-gespraech-v2.webp` (576×720, 4:5, q82) is the hero photo added in iteration 5. It comes
from the image embedded in `Homepage 0709.26.docx` (`word/media/image1.jpg`, 1280×720), cropped
**`(0,0,576,720)` — flush with the left edge**, so the out-of-focus patient silhouette in the
foreground stays in frame; a centred crop drops it and the scene reads as a lone portrait. The
uncropped 16:9 frame was tried and rejected: a landscape image beside the long Eingangstext is
either tiny or leaves a large hole under it, and fixing that needed the whole hero restructured.
The portrait keeps the plain side-by-side hero (text left, photo right from `md`, stacked below)
— but only **from `md`**. Below that, iteration 6 serves the *uncropped* 16:9 original as
`images/praxis-gespraech-wide.webp` (960×540, q82, plain resize of `supporting_docs/praxis-gespraech.jpg`,
no crop): on a phone the 4:5 portrait sat above the headline and pushed it out of view. The hero
switches between the two with a `<picture>`/`<source media="(min-width: 768px)">` so only one file
is ever downloaded, and the frame carries `aspect-[16/9] md:aspect-[4/5]` so `object-cover` never
crops at either breakpoint. Keep the two in sync: a new crop needs a matching frame ratio.
The decorative `logo-wide` mark floating in the hero background is `hidden md:block` for the same
reason: below `md` the photo band starts right under the nav, so the mark ended up behind it with
only a few clipped seeds sticking out — on a phone the NavBar lockup is the header motif.
The `-v2` in the filename is a cache-bust: on launch day the plain `praxis-gespraech.webp` URL
served three different crops within an hour, and GitHub Pages sends `Cache-Control: max-age=600`,
so visitors kept seeing a stale picture while the server already had the new one. **Give a
published image a new filename whenever its content changes** — overwriting it in place is not
enough.
Keep an eye on the fold: at 1440×900 the „Termin anfragen“ button ends at ~871 px, so any extra
copy or type size in the hero pushes the primary CTA out of view. **It is a stock/AI-looking image, not a photo of the practice or of either therapist**
— keep the alt text neutral so it never reads as a therapist or a patient. The former hero photo
`flur-hell.webp` moved into the `Raeumlichkeiten` gallery, which since iteration 6 runs
`sm:grid-cols-2` with two tiles (see „Room photos“ above) — restore `lg:grid-cols-3` when a third
motif exists.

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
