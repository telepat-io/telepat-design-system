<div align="center">
  <img src="./src/assets/logo-wordmark-white.svg" alt="TELEPAT" height="48" />

  <h1>Telepat Design System</h1>

  A React + TypeScript component library implementing the Telepat brand — dark-first, paired-glow atmospheric design — with full Storybook documentation.
</div>

---

## Visual identity

<table>
  <tr>
    <td width="33%" align="center">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="./src/assets/logo-mark-white.svg" />
        <img src="./src/assets/logo-mark-black.svg" alt="Telepat logomark" width="120" />
      </picture><br/>
      <sub><b>Logomark</b><br/>the spiral glyph</sub>
    </td>
    <td width="33%" align="center">
      <img src="./src/assets/hero-bg.png" alt="Hero topographic backdrop" width="100%" /><br/>
      <sub><b>Hero backdrop</b><br/>topographic lines + paired glow</sub>
    </td>
    <td width="33%" align="center">
      <img src="./src/assets/img-vision-magnetic.png" alt="Vision motif" width="100%" /><br/>
      <sub><b>Vision motif</b><br/>magnetic field + eclipse silhouette</sub>
    </td>
  </tr>
</table>

### The three service pillars

<table>
  <tr>
    <td width="33%" align="center"><img src="./src/assets/img-phone.png" alt="AI Software" width="100%" /></td>
    <td width="33%" align="center"><img src="./src/assets/img-ai-character.png" alt="AI Visuals & Voice" width="100%" /></td>
    <td width="33%" align="center"><img src="./src/assets/img-security.png" alt="Security & Infrastructure" width="100%" /></td>
  </tr>
  <tr>
    <td align="center"><sub><b>AI Software Development</b></sub></td>
    <td align="center"><sub><b>AI Visuals &amp; Voice</b></sub></td>
    <td align="center"><sub><b>Security &amp; Infrastructure</b></sub></td>
  </tr>
</table>

### Surface pairs

| | | | | |
|---|---|---|---|---|
| ![#000000](https://placehold.co/120x60/000000/000000.png) | ![#14102B](https://placehold.co/120x60/14102B/14102B.png) | ![#221949](https://placehold.co/120x60/221949/221949.png) | ![#FFFFFF](https://placehold.co/120x60/FFFFFF/FFFFFF.png) | ![#F6F6F6](https://placehold.co/120x60/F6F6F6/F6F6F6.png) |
| `#000000` bg | `#14102B` bg-deep | `#221949` bg-elevated | `#FFFFFF` bg-light | `#F6F6F6` bg-light-soft |

Telepat is **dark-first** — roughly 80% of the deck and the entire site live on `#000` or `#14102B`. White appears only as the right pane of split-screen deck slides; `#F6F6F6` is reserved for use-case photo tiles. There are no mid-gray surfaces — the system is binary.

---

## Quick start

```bash
npm install telepat-design-system
```

```tsx
import "telepat-design-system/styles.css";
import { Button, TextInput, Nav, TestimonialCard } from "telepat-design-system";
import { Hero, ContactSection } from "telepat-design-system/sections";

export function App() {
  return (
    <>
      <Hero />
      <ContactSection onSubmit={(values) => console.log(values)} />
    </>
  );
}
```

### Fonts

The library bundles **Montserrat Alt1** (the TELEPAT wordmark face). **Poppins** must be loaded by the host application — typically via Google Fonts:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap">
```

---

## What's in the library

### Atoms

`Button` · `TextInput` · `Textarea` · `Select` · `DateInput` · `Checkbox` · `Radio` · `SegmentedControl` · `Toggle` · `Slider` · `Chip` / `Chips` · `Dropzone` · `Logo` · `LinkMore` · `Eyebrow` · `NavLink` · `GlowBackground`

### Molecules

`Nav` · `Footer` · `TestimonialCard` · `TestimonialCarousel` · `ServiceRow` · `ServiceCard` · `ClientGrid`

### Sections

`Hero` · `ServicesSection` · `CustomersSection` · `VisionSection` · `ContactSection`

Sections are published under a **separate entry point** (`telepat-design-system/sections`) so apps that only need atoms don't pull in the bundled section imagery.

```tsx
// Atoms / molecules only — tiny bundle (~12 kB ESM + tokens)
import { Button } from "telepat-design-system";

// Adds page-level sections + their imagery
import { Hero } from "telepat-design-system/sections";
```

---

## Brand principles

- **Dark-first.** Surfaces default to `#000` or `#14102B` deep purple-black.
- **Paired radial glow.** Every dark surface carries a translucent blue disk top-right and a magenta disk bottom-left. Composable via `<GlowBackground />`.
- **No emoji, no exclamation marks, no shadows.** Atmospheric depth comes from glow + `mix-blend-mode: lighten`.
- **Type.** Poppins Light (300) is the default weight; italic is reserved for vision/quote moments. The wordmark uses Montserrat Alt1 Medium with `+0.080em` tracking.

See `src/styles/tokens.css` for the full token set.

---

## Development

```bash
npm install
npm run dev              # Storybook at http://localhost:6006
npm run build            # build the library to dist/
npm run build-storybook  # static Storybook to storybook-static/
npm run typecheck
```

Storybook is the source of truth for browsing every component, every state, and every foundation specimen (Colors / Typography / Spacing / Brand).

---

## Project files

- `src/components/atoms/` — primitives (each: `.tsx` + `.module.css` + `.stories.tsx` + `index.ts`)
- `src/components/molecules/` — composed pieces
- `src/components/sections/` — page-level templates
- `src/stories/Foundations/` — design-token specimens
- `src/styles/tokens.css` — full token set (colors, type, spacing, radii, glow)
- `src/styles/fonts.css` — `@font-face` for Montserrat Alt1
- `src/assets/` — logos, hero PNG, service imagery, magnetic-field PNG, use-case photos
- `vite.config.ts` — library build (ESM + CJS + d.ts, two entry points)

For contributor / agent guidance, see [AGENTS.md](./AGENTS.md).

---

## Caveats

- Client logos in `ClientGrid` are styled-type approximations of T-Mobile, Microsoft, ProSiebenSat.1, Viasat, RH, PagerDuty, Honda, eightTV. Replace with licensed SVGs in production.
- Montserrat Alt1 is licensed — confirm redistribution rights before publishing publicly.
- Hover and press states are extrapolated defaults (not in the source Figma). Adjust to taste.
