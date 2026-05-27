# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout (three tiers — read this first)

- **`site/`** — the real application (Astro). All production code lives here.
- **`design-reference/`** — the original Claude Design package (React-via-Babel HTML/CSS/JSX). It is the **untouched visual baseline** the site is compared against for parity. Do not edit it and do not ship it.
- **`brand-source/`** — original brand assets: `logos/`, `fonts/`, `references/`, and `identity/` (the client identity PDF + `Design.md`, the "Prestige Legal" spec).

## Commands (run inside `site/`)

```bash
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # static output to site/dist/
npm run preview   # serve the built dist/ locally
```

- **There is no test suite and no linter configured.** `npm run build` is the validation gate: it type-checks the content-collection schema, compiles every `.astro`, and fails on bad Markdown frontmatter. Verify UI changes by running `dev`/`preview` and visually comparing against `design-reference/`.
- **Deploy (Hostinger):** `npm run build`, then upload the **contents of `site/dist/`** into `public_html/`. It is a static site — no Node runtime. `site/public/.htaccess` handles HTTPS/caching/404.

## Architecture

- **Astro 6, `output: 'static'`, clean directory URLs.** Pre-rendered HTML; the only client JS is two small inline scripts (see below).
- **CSS is the source of truth and was lifted verbatim from the design.** `site/src/styles/tokens.css` (color/type/spacing/motion CSS vars + `@font-face`) and `site/src/styles/site.css` (all component styles). The `.astro` components only emit markup matching the **existing class names** (`.tp-hero`, `.tp-spec-card`, `.tp-nav`, …). When adding/editing UI, reuse existing classes and CSS vars — never hardcode hex/px/fonts. Add new CSS sparingly and in the same idiom (`site/src/styles/blog.css` for the blog, `site/src/styles/mobile.css` for phones).
- **Mobile is a faithful port of the design's phone mockup** (`design-reference/project/ui_kits/website/mobile-preview.css`), implemented as real `@media (max-width: 640px)` rules in `site/src/styles/mobile.css` (loaded after `site.css`). Notably, on phones the hero **hides the interactive card** (`.tp-hero__visual { display:none }`) and shows a blurred logo **watermark** in a full-height hero with CTAs pinned to the bottom — this is intentional, not a bug; do not "restore" the card on mobile. The cursor-tilt/glow effect is also guarded to fine-pointer + hover devices only (see the `matchMedia` check in `Hero.astro`), so it never runs on touch. `mobile.css` also enforces `overflow-x: hidden` (the watermark bleeds off-screen by design).
- **Components** in `site/src/components/*.astro` are 1:1 ports of `design-reference/project/ui_kits/website/*.jsx`. Most are static. **Interactivity is vanilla `<script>`, not React:**
  - `Navbar.astro` — scroll-glass (`.is-scrolled` at `scrollY > 80`), mobile sheet menu, body scroll-lock. The Especialidades dropdown is pure CSS `:hover`/`:focus-within`.
  - `Hero.astro` — mouse-tracked iridescent lockup card.
- **Single source of truth for the 5 practice areas:** `site/src/data/specialties.ts`. Consumed by the Navbar dropdown, Specialties grid, the `/especialidades` page, and the Footer — edit it once and it propagates everywhere.
- **`BaseLayout.astro`** owns `<head>`: per-page title/description, canonical, OpenGraph/Twitter, JSON-LD `LegalService`, font preconnect, and imports both stylesheets. Site URL is `https://www.tomepaivaadvogados.com.br` (in `astro.config.mjs`).
- **Routing** (`site/src/pages/`): `index.astro` (landing order: Hero → About → Specialties → Team → Contact → LatestArticles → Footer), `especialidades.astro`, `blog/index.astro` + `blog/[...slug].astro`, `404.astro`. Internal links use **Astro paths** — `/`, `/especialidades`, `/blog`, and same-page anchors like `/#contato` — never the legacy `.html` paths still present in `design-reference/`.
- **Blog = Astro content collection.** Markdown in `site/src/content/blog/`, schema in `site/src/content.config.ts` (glob loader; `title`, `description`, `pubDate`, `updatedDate?`, `author`, `cover?`, `tags[]`, `draft`). Listing and the landing teaser hide drafts in prod via `import.meta.env.PROD ? !data.draft : true` and sort newest-first. CMS-ready (Sveltia/Decap) with no code change.
- **Icons:** the 5 specialty icons render via `astro-icon` (`lucide:<name>`); every other SVG (arrows, contact icons, chevron, hamburger) is inlined in the component.
- **Assets/fonts** live in `site/public/` and are referenced web-absolute (`/fonts/…`, `/assets/…`), including inside CSS `url()`s.

## Conventions & gotchas

- **Faithful-first mandate.** `design-reference/` is the approved baseline; preserve parity with it. Do **not** unilaterally change approved brand choices — e.g. the gold-on-dark accents that dip just under WCAG AA contrast (known, accepted; Lighthouse A11y 94 / SEO 100 / Best-Practices 100). Flag such trade-offs for client sign-off instead of "fixing" them.
- **Brand non-negotiables** (from `design-reference/project/SKILL.md` — read before any design work): dark theme only (`#111111`/`#151515`/`#1C1C1C`); ouro bronze `#A97940` is an accent, never a large fill; Montserrat ExtraLight/Light headlines, Regular body, Medium UPPERCASE buttons; corner radii ≤ 6px; no emoji; no full gradient backgrounds (only `var(--gold-gradient)` as thin accents); transitions 180–280ms ease-out.
- **Content voice:** Brazilian Portuguese, institutional and sober — sentence case in body, UPPERCASE with open letter-spacing in labels/buttons, no slang, no emoji. Full guidance + a Use/Avoid vocabulary table live in `design-reference/project/README.md`.
- **Markdown frontmatter:** quote any `title:`/`description:` value containing a colon, or YAML parses it as a nested map — e.g. `title: "Inventário extrajudicial: quando é possível"`.
- **Contact form** submission is a front-end stub only (shows the success state, sends nothing) — see the TODO in `Contact.astro`. A real backend (PHP mail on Hostinger, or a form service) is a pending decision.
