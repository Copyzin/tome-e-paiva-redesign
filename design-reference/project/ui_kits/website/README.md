# Website UI Kit — Tomé &amp; Paiva

Recreation of the Tomé &amp; Paiva institutional website. Two routes — landing and especialidades — built as React + Babel for editing convenience.

## Routes

- **`index.html`** — landing page (desktop): Hero → Sobre → Especialidades preview → Equipe → Contato → Footer.
- **`especialidades.html`** — full list of practice areas, each with description, scope bullets and an aside card (desktop).
- **`mobile-landing.html`** — same landing page rendered inside an iPhone 16 bezel, with forced mobile layout via `mobile-preview.css`.
- **`mobile-especialidades.html`** — same especialidades page in mobile chrome.

The mobile pages reuse all the same JSX components and `styles.css`. `mobile-preview.css` only forces mobile media-query rules to fire regardless of actual viewport, so the mobile mockup stays in lockstep with any future desktop change.

## Files

| File | Purpose |
|---|---|
| `styles.css` | All component CSS. Composes on top of `../../colors_and_type.css` (tokens). |
| `Navbar.jsx` | Fixed top nav, transparent on top → blurred dark on scroll. Mobile sheet menu. |
| `Hero.jsx` | Headline + lede + CTA pair + logo lockup as visual. |
| `About.jsx` | "O Escritório" institutional copy + Ulpiano quote. |
| `SpecialtyData.jsx` | Single source of truth — 5 specialties (id, num, title, icon, copy, bullets, aside). |
| `Specialties.jsx` | Preview grid of 5 cards + `LucideIcon` helper. |
| `SpecialtyDetail.jsx` | Full row used on `/especialidades`. |
| `Team.jsx` | Partner portrait cards (placeholder portraits with monogram). |
| `Contact.jsx` | Contact info column + form. Real contact data from the business card. |
| `Footer.jsx` | Brand + navigation + areas + contact columns. |
| `Button.jsx` | Primary / secondary / premium / ghost variants + `ArrowRight`. |

## How to extend

- Add a specialty → append an entry to `SPECIALTIES` in `SpecialtyData.jsx`. It's used in both the preview grid (`Specialties.jsx`), the detail page (`especialidades.html`), and the footer.
- Add a section to the landing → write a new `.jsx` next to the others, register `window.MySection = MySection;`, drop a `<script type="text/babel" src="MySection.jsx"></script>` into `index.html`, then mount it inside `<App />`.
- Tokens — never hardcode hex or fonts; everything lives as CSS vars in `../../colors_and_type.css`.

## What is _not_ here

- Real partner portraits (placeholders with monogram letter, awaiting brand photoshoot).
- Real OAB number for the second partner — placeholder shown.
- LGPD / privacy policy page.
- Cookie banner.
- 404 page.
- Analytics / GTM hookup.

## Caveats vs production

This is a UI kit — meant for visual reference and rapid prototyping. Form submission is fake (logs intent, no backend). Routes are plain HTML files, not SPA routing.
