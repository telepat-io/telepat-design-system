# Telepat Design System

A React + TypeScript component library implementing the Telepat brand: dark-first, paired-glow atmospheric design, with full Storybook documentation.

```bash
npm install telepat-design-system
```

```tsx
import "telepat-design-system/styles.css";
import { Button, TextInput, Nav } from "telepat-design-system";
```

## What's included

- **Atoms** — Button, TextInput, Textarea, Select, DateInput, Checkbox, Radio, SegmentedControl, Toggle, Slider, Chips, Dropzone, Logo, NavLink, LinkMore, Eyebrow, GlowBackground
- **Molecules** — Nav, Footer, TestimonialCard, TestimonialCarousel, ServiceRow, ServiceCard, ClientGrid
- **Sections** — Hero, ServicesSection, CustomersSection, VisionSection, ContactSection
- **Design tokens** — colors, typography, spacing, glow, glass

## Importing only atoms

If you don't need the page-level sections, import them from the dedicated entry point:

```tsx
import { Hero, ServicesSection } from "telepat-design-system/sections";
```

The default root export (`telepat-design-system`) re-exports atoms and molecules only, so consumers who never touch `/sections` won't pull in the heavy section imagery.

## Fonts

The library bundles Montserrat Alt1 (the TELEPAT wordmark face). **Poppins** must be loaded by the host application — typically via Google Fonts in your `<head>`:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap">
```

## Development

```bash
npm install
npm run dev          # Storybook at http://localhost:6006
npm run build        # build library to dist/
npm run build-storybook
```

## Brand reference

See the design source bundle for the full visual specification: dark-first surfaces (`#000`, `#14102B`), the signature paired radial glow (electric blue top-right, magenta bottom-left), Poppins for body, Montserrat-Alt1 for the wordmark. No emoji, no exclamation marks, no drop shadows — atmospheric depth comes from glow + `mix-blend-mode: lighten`.
