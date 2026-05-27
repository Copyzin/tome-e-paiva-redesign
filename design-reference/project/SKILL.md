---
name: tome-e-paiva-design
description: Use this skill to generate well-branded interfaces and assets for Tomé e Paiva Advocacia (escritório de advocacia premium, identidade "autoridade elegante" — dark + ouro bronze), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files: `colors_and_type.css` for tokens, `assets/` for the logo and brand imagery, `ui_kits/website/` for full screen recreations and component JSX, and `preview/` for individual design-system cards.

If creating visual artifacts (slides, mocks, throwaway prototypes, landing pages, etc.), copy assets out of `assets/` and create static HTML files that import `colors_and_type.css`. If working on production code, copy the tokens and read the rules in `README.md` to become an expert in designing with this brand.

Key non-negotiables:

- **Dark theme only** — never light mode. Background `#111111`, surfaces `#151515` / `#1C1C1C`.
- **Ouro bronze (`#A97940`) is an accent, not dominant** — primary buttons, hairlines, icons, hover states. Never large fills.
- **Type:** Montserrat ExtraLight/Light for headlines, Regular for body, Medium UPPERCASE for buttons. Cookie Cutter Culture for the display/logo wordmark (licensed file in `fonts/`).
- **Corner radii ≤ 6px.** Disciplined, rectilinear — no bubbles, no pills.
- **No emoji. No gradient backgrounds (only `var(--gold-gradient)` in thin accents). No bouncing/elastic motion.** Transitions 180–280ms ease-out.
- **Voice:** Brazilian Portuguese, institutional, sober. Sentence case in body, UPPERCASE with open letter-spacing in labels/buttons. No informal slang.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions about audience and scope, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
