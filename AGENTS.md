# AGENTS.md

Guidance for AI coding agents working in this repository. Skim the whole file before making changes.

## What this repo is

`telepat-design-system` is a React + TypeScript component library implementing the **Telepat** brand (an AI software studio). It's distributed as an npm package and developed/documented inside Storybook.

- The visual system was reconstructed from `telepat-LP.fig` and ported into this library. Every value (color, spacing, radius, glow geometry) traces back to that source. **Don't redesign.** When a design decision is ambiguous, lift it verbatim from the original.
- The library is **dark-first** with a signature **paired radial glow** motif (translucent blue disk top-right, translucent magenta disk bottom-left). No drop shadows anywhere — depth comes from glow + `mix-blend-mode: lighten`.
- **No emoji, no exclamation marks.** Anywhere — including code comments and stories.

## Common commands

```bash
npm install
npm run fetch-fonts      # downloads Montserrat Alternates (OFL 1.1) into src/fonts/
npm run dev              # Storybook dev server at :6006
npm run typecheck        # tsc --noEmit
npm run build            # tsc -p tsconfig.build.json && vite build → dist/
npm run build-storybook  # static Storybook → storybook-static/
```

Run `npm run typecheck` and `npm run build` before declaring work done. The Vite build emits ESM, CJS, `.d.ts`, hashed image assets, fonts, and CSS — `npm run build` is the integration test.

**Fonts are not committed.** `src/fonts/*.ttf` and `src/fonts/OFL.txt` are `.gitignore`d. The `fetch-fonts` script downloads them from the official Google Fonts repository on demand and runs automatically as a `pre*` hook for `dev`, `build`, and `build-storybook`. If you're working offline, drop your own Montserrat-family TTFs in `src/fonts/` named `MontserratAlt1-<Weight>.ttf` and the script will skip the download.

## Project layout

```
src/
├── index.ts                       ← public surface for atoms + molecules
├── sections.ts                    ← secondary entry — page-level sections
├── components/
│   ├── atoms/<Name>/
│   │   ├── <Name>.tsx
│   │   ├── <Name>.module.css
│   │   ├── <Name>.stories.tsx
│   │   └── index.ts               ← re-exports the component + its TS types
│   ├── molecules/<Name>/          (same shape)
│   └── sections/<Name>/           (same shape)
├── stories/
│   ├── Introduction.mdx
│   ├── Foundations/               ← Colors/Typography/Spacing/Brand specimens
│   └── FullLandingPage.stories.tsx
├── styles/
│   ├── tokens.css                 ← CSS vars — single source of truth
│   ├── fonts.css                  ← @font-face for Montserrat Alt1
│   ├── reset.css                  ← optional baseline
│   └── index.css                  ← convenience: tokens + fonts + reset
├── assets/                        ← logos, hero/vision PNGs, service imagery
├── fonts/                         ← Montserrat Alt1 .ttf files (9 weights)
└── types/declarations.d.ts        ← ambient types for CSS Modules + assets
```

The `dist/` shape mirrors `src/`: the build emits `dist/index.{js,cjs,d.ts}`, `dist/sections.{js,cjs,d.ts}`, `dist/styles.css`, `dist/tokens.css`, `dist/fonts.css`, and hashed assets under `dist/assets/`.

## Two entry points (important)

The public surface is split:

- **`telepat-design-system`** (the root export) — atoms + molecules. Stays small (~12 kB ESM).
- **`telepat-design-system/sections`** — page-level sections. Pulls in section imagery (hero backdrop, magnetic-field PNG, service images).

This is enforced by `package.json#exports` and by `src/index.ts` *not* re-exporting from `components/sections`. **When adding new sections, export them from `src/sections.ts`, never from `src/index.ts`.** When adding atoms or molecules, export from `src/index.ts` via the atom/molecule barrel.

## Adding a new component

1. Create a directory under the right level: `src/components/atoms/<Name>/`, `molecules/<Name>/`, or `sections/<Name>/`.
2. Author four files:
   - **`<Name>.tsx`** — the component. `forwardRef` if it wraps a native input. TypeScript interfaces named `<Name>Props`, exported.
   - **`<Name>.module.css`** — CSS Module. Classes named `.root`, `.label`, `.input`, etc. Reference tokens via `var(--token-name)` — never hard-code colors that exist as tokens.
   - **`<Name>.stories.tsx`** — at least a `Default` story plus one story per variant or significant state. Use `argTypes` so the Controls panel works.
   - **`index.ts`** — `export { Name } from "./Name"; export type { NameProps } from "./Name";`
3. Add the export to the level's barrel (`atoms/index.ts`, `molecules/index.ts`, or `sections/index.ts`).
4. Run `npm run typecheck` and `npm run build`.

## Styling conventions

- **CSS Modules per component.** Class names are scoped at build time (`tp-<Name>-module_<class>__<hash>`).
- **All design tokens are CSS variables** declared in `src/styles/tokens.css`. Use them. New foundational values (a new color stop, a new radius) belong in `tokens.css`, not inline in a component.
- **No inline `style={{}}` for design tokens** — inline styles are fine for one-off positioning in section components (the original Figma uses pixel-precise absolute positioning), but colors/type/spacing should be tokens via CSS Modules.
- **Hover / press / focus** — use `:hover`, `:active`, `:focus-visible` in CSS Modules. Don't reach for `onMouseEnter`. The original prototype JSX uses event handlers because it was a Babel-loaded mock; we use real CSS.
- **No drop shadows.** This is a brand rule — atmospheric depth is glow + `mix-blend-mode: lighten`, never `box-shadow`.

## Asset handling

Static assets (PNG, JPG, SVG) live in `src/assets/`. The Vite build, plus `@laynezh/vite-plugin-lib-assets`, emits them as hashed files in `dist/assets/` and rewrites references in both JS and CSS.

- **Import as URL:** `import heroBg from "../../../assets/hero-bg.png";` — gets a URL string.
- **In CSS Modules**, reference via `url("../../../assets/...")` (e.g. Logo's mask-image). The build rewrites the relative path.
- The library does **not** inline images as base64. Without `@laynezh/vite-plugin-lib-assets`, Vite library mode would inline by default — keep the plugin in `vite.config.ts`.

## Component conventions

- **Props** — interfaces named `<Name>Props`, extending the underlying HTML element's props when applicable (`InputHTMLAttributes<HTMLInputElement>` etc.). Always export the props type.
- **Controlled vs uncontrolled** — components with internal state (Toggle, Chips, TestimonialCarousel) accept both `value` (controlled) and `defaultValue` (uncontrolled). The pattern is:
  ```ts
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue ?? initial);
  const current = isControlled ? value : internal;
  ```
- **forwardRef** for any component wrapping a native form input.
- **`useId`** for label-for-input pairing when no `id` prop is provided.
- **Don't add error handling for impossible cases.** Trust internal callers; only validate at the public surface (props that came from a consumer).

## Storybook conventions

- Story titles follow the directory tier: `Atoms/Button`, `Molecules/Nav`, `Sections/Hero`, `Foundations/Colors`.
- `parameters.layout`:
  - `fullscreen` for sections and the Nav/Footer
  - `centered` for cards
  - `padded` (default) for atoms and foundations
- `parameters.backgrounds.default` should be set explicitly per story (`"dark"`, `"deep-purple"`, `"light"`) — the brand has multiple legitimate surface contexts.
- Foundation stories use plain React (not the components) to render specimen cards. They're documentation, not regression coverage of the components.

## Token catalog (high-frequency values)

```
--color-bg              #000000   — hero, deck title
--color-bg-deep         #14102B   — services
--color-bg-elevated     #221949   — cards
--color-bg-light        #FFFFFF
--color-bg-light-soft   #F6F6F6

--color-brand-blue      #4F4BFF   — hero left blur
--color-brand-pink      #DB4BFF   — hero right blur
--color-brand-violet    #5A3ECC   — primary CTA fill
--color-brand-magenta   #FD30E3   — pop accent
--color-brand-hot       #ED008C   — logomark gradient end

--color-quote-violet    #AEA1FF   — "View more", hover state, mono logo
--color-quote-pink      #BFA0FF   — vision italic 1
--color-quote-pinker    #E1A0FF   — vision italic 2

--glow-blue             rgba(79,75,255,0.24)
--glow-pink             rgba(219,75,255,0.16)
--glow-violet-bright    rgba(191,111,255,0.35)

--font-display          Poppins, system-ui, ...
--font-mark             "Montserrat Alt1", Montserrat, system-ui, ...

--radius-input          8px       — text fields, outline buttons
--radius-card           16px      — testimonial card, image tiles
--radius-button         16px      — primary pill
--radius-pill           500px     — avatar circle
```

See `src/styles/tokens.css` for the full set.

## Things to avoid

- Inventing new colors when an existing token fits. Check `tokens.css` first.
- Hand-drawing SVG icons. The brand uses fewer than 10 icon shapes total; reach for Lucide (`stroke-width: 1.5`, `currentColor`) and **flag the substitution** if you add one.
- Adding box-shadows.
- Adding emoji or exclamation marks (this includes in code comments and stories).
- Re-exporting sections from `src/index.ts`.
- Inlining assets in the build (verify `@laynezh/vite-plugin-lib-assets` is still in `vite.config.ts`).
- Cross-importing between sibling component folders. Atoms can be imported from molecules and sections; molecules from sections; never the reverse. If you need shared logic, put it in a helper at the appropriate tier.

## Tests / verification

There's no Jest/Vitest suite yet. Verification is:

1. `npm run typecheck` — no errors.
2. `npm run build` — successful, with sane sizes (`sections.js` should be ~10 kB, not 23 MB).
3. `npm run dev` and visually compare the affected stories against the originals in `/tmp/design-extract/telepat-design-system/project/preview/*.html` and `ui_kits/site/index.html` (if still extracted).
4. For new components, open the story and step through every variant — verify hover, focus, error, disabled, etc. behave as documented.

## Source materials (read these when in doubt)

The original design handoff bundle is the source of truth for visual decisions. Key files inside `/tmp/design-extract/telepat-design-system/project/` (when the bundle is still extracted locally):

- `README.md` — voice/tone, visual foundations, iconography
- `colors_and_type.css` — the token block we lifted into `src/styles/tokens.css`
- `preview/*.html` — pixel specimens for every atom (33 cards)
- `preview/_forms.css` — production-quality CSS for all form atoms (basis of the atom styles)
- `ui_kits/site/*.jsx` — the section components in Babel-loaded prototype form

If the bundle isn't extracted, the bundled handoff is at `https://api.anthropic.com/v1/design/h/WBd-gwCdJmejSrjb8NOCQQ` (gzip tarball).

## Licensing — what to know before touching it

- The repo is **MIT** (`LICENSE` at the root). Don't add code under a more restrictive license without flagging it.
- The font is **SIL OFL 1.1** (`src/fonts/OFL.txt` after `fetch-fonts` runs). Don't commit `.ttf` files — they're gitignored. The OFL travels with the fonts into `dist/fonts/OFL.txt` so consumers always get attribution.
- Brand assets in `src/assets/` are Telepat's property and ship for design-reference purposes only. If you swap them for new generative imagery during development, note the substitution.
