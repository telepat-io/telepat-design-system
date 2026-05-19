# Telepat Design System

A reusable design system reconstructed from the **telepat-LP.fig** Figma file. Use it to mock landing pages, pitch decks, and product UI that look unmistakably *Telepat*.

> **About Telepat** — Telepat (telepat.io) is an AI software studio. The company tagline is **"AI-Powered Software Tailored for Innovators."** Their copy positions them as a decade-old shop powering "leading Silicon Valley startups and Fortune 500 companies with next-gen software development." Three service pillars repeat across the site and deck:
>
> 1. **AI Concepts & Software** — strategy, mobile/web apps, model integration, fine-tuning
> 2. **AI Visuals & Voice** — generative photography, video, virtual personas, speech
> 3. **Security & Infrastructure for AI software** — audits, compliance, cloud hosting
>
> Named selected clients in the deck and site footer: **T-Mobile, Microsoft, ProSiebenSat.1, Viasat, Honda, PagerDuty, RH (Restoration Hardware), eightTV.** A featured testimonial is from Sarah Schaaf (CEO, Headnote). A secondary internal product surface, "Developer AI Ranking" (a GitHub-profile evaluation tool), appears in working files but is not part of the public LP.

## Source materials

- **Figma:** `telepat-LP.fig` — 3 pages, 250 frames. Mounted at `/Page-1` (workspace + 1280-wide landing), `/Page-2` (1920×1080 pitch deck, 7 slides + variants), `/Page-3` (alternate title slides).
- **Public site:** https://telepat.io (the design here targets the 1280px viewport mock in the Figma).
- **No codebase was provided** — this system is reconstructed from the Figma pseudocode (the `.jsx` files exported from the binary). Where the JSX is ambiguous (per-character text styling, gradient stops on the logo, the topographic line PNG), the embedded PNG/SVG assets are copied straight through rather than redrawn.

---

## Index — what's in this folder

```
/
├── README.md                  ← you are here
├── SKILL.md                   ← agent skill manifest (use this in Claude Code too)
├── colors_and_type.css        ← single source of truth: CSS vars + semantic styles
│
├── assets/                    ← raw brand assets, copy these out to use
│   ├── logo-mark-white.svg        Spiral-glyph mark, white fill
│   ├── logo-wordmark-white.svg    "TELEPAT" wordmark, white fill
│   ├── logo-mark-gradient.svg     Spiral mark — pink→magenta gradient version
│   ├── logo-wordmark-black.svg    "TELEPAT" wordmark, black fill
│   ├── hero-bg.png                Topographic line backdrop (the title slides)
│   ├── img-ai-character.png       AI Concepts service image
│   ├── img-phone.png              AI Visuals service image
│   ├── img-security.png           Security service image
│   ├── img-vision-magnetic.png    Magnetic-field vision panel
│   └── usecase-photo-{1,2,3}-{before,after}.{jpg,png}   AI photoshoot pairs
│
├── preview/                   ← thumbnail cards for the Design System tab
│
├── ui_kits/
│   └── site/                  ← The 1280px marketing site (hero, services, vision, contact)
│       ├── index.html
│       └── *.jsx
│
└── slides/                    ← 16:9 deck templates pulled from Page-2
    ├── index.html
    └── *.jsx (title, service-split, vision, clients, use-case)
```

---

## Content fundamentals

**Voice.** Confident, technical, light-on-marketing-fluff. Telepat talks about *what it builds* rather than how it feels to use. Bullet lists of capabilities are favored over benefit-driven storytelling. There is no "we" / "our" sloganeering except in the vision statement.

**Tone.** Aspirational but grounded — the only italic, almost-poetic moment in the whole system is the vision panel:

> *"Our vision is to lead the way in sustainable development by harnessing the power of AI to create innovative solutions that not only drive technological progress but also promote environmental stewardship and social responsibility."*
>
> *"We aim to build a future where cutting-edge technology and sustainability go hand in hand…"*

Everywhere else, copy is matter-of-fact:

- *AI Strategy Development & Use Case Identification*
- *Integration of Pre-Trained Models into existing Applications*
- *AI Model Fine-Tuning and Optimization for specific verticals*
- *Cloud Infrastructure Setup & AI Model Hosting Management*

**Casing.** Title Case for headings, even very long ones (*"AI-Powered Software Tailored for Innovators"*, *"Security & Infrastructure for AI software"*). The only ALL-CAPS strings are the wordmark **TELEPAT**, eyebrow labels (**SELECTED CLIENTS**) and the **View more** link.

**Pronouns.** "We" + "our" only appears in the vision and contact CTA (*"Let's collaborate to turn your vision into reality"*). Service descriptions are written as noun phrases — no subject.

**No emoji. No exclamation points.** No emoji are used anywhere in the system. No exclamation marks, either. The vibe is composed and technical.

**Ampersands** are used liberally as space-savers in headings: *"AI Concepts & Software"*, *"AI Visuals & Voice"*, *"Security & Infrastructure"*.

**Numerals.** Spelled-out only inside marketing copy ("over a decade"). Digit form everywhere else (75 score, "© Telepat Inc 2024").

**Calls to action.** Two only: a single primary **Send** on the contact form (rounded 16px, deep violet fill), and a soft **View more ↓** link in the hero (light-violet, all-caps, tracked, with a tiny chevron). The product is not selling itself with urgency — it's inviting a conversation.

---

## Visual foundations

### Surfaces
Telepat is a **dark-first** brand. Roughly 80% of the deck and the entire site hero, services section, customers section, and footer live on **#000** or **#0D0A19** (deep purple-black). Light surfaces (white) appear only as the **right pane of split-screen deck slides** and as full white panels in working files. There are no mid-grays as surfaces — it's binary.

### The signature motif: paired radial blurs
Every dark surface in the system carries the same two coloured "glow" disks:

- **Top-right:** ~1329×1329 px circle, `rgba(79,75,255,0.24)` — electric blue
- **Bottom-left:** ~894×894 px circle, `rgba(219,75,255,0.16)` — magenta

These are **NOT blurred via `filter: blur()`** — they are large translucent solid circles bleeding off the edges. The effect reads as atmospheric haze without any GPU blur cost. The helper `.glow-bg` in `colors_and_type.css` reproduces it.

Title slides add a third overlay: the **topographic-line PNG** (`assets/hero-bg.png`) underneath the glow disks. Service slides add a 600×600 rounded-square image with `mix-blend-mode: lighten` on the left half. The vision slide uses a full-bleed magnetic-field PNG masked by a 525px black disk at the centre — a sun-eclipse silhouette.

### Color
- **Brand glow pair:** electric-blue `#4F4BFF` ↔ magenta `#DB4BFF`. The logomark gradient runs from a softer pink `#CF83F4` to hot pink `#E11E8D`.
- **Soft purple text** (`#AEA1FF`, `#BFA0FF`, `#E1A0FF`, `#C7A7FF`, `#F8A7FF`) is reserved for italic vision copy, quotes and the *View more* link — never for body.
- **Pure white** carries body and headings on dark; **pure black** carries them on light. No mid-tone ink.
- Hairlines are `rgba(255,255,255,0.1)` on dark, `rgba(0,0,0,0.08)` on light.

### Typography
- **Poppins** for ~95% of text. Weights in use: **300 Light** (default), **400 Regular**, **500 Medium**, **600 SemiBold**, **700 Bold**. Italic is reserved for vision/quote moments only.
- **Montserrat-Alt1 Medium** for the TELEPAT wordmark in nav and deck logo lock-up — gives the wide-tracked, geometric stencil look. The licensed `.ttf` family (Thin through Black) is loaded from `fonts/`.
- **Inter** appears only in the browser-chrome mock (URL bar, tabs) — kept for fidelity, not part of the brand voice.
- Letter-spacing pattern: **+0.020em** on most display copy, **+0.040em** on section titles, **+0.080em** on the wordmark and "View more", **+0.100em** on uppercase eyebrows.

### Spacing & rhythm
The deck uses an **800/1120 split** for service slides, and the 1280 landing page uses a **200px outer gutter + 880px content column**. Vertical rhythm relies on big values: **48 / 56 / 72 / 100 / 160 px** stacks. Cards inside content use **gap: 80px** between paired text+image. Section padding is **100px top / 160px bottom**.

### Backgrounds & imagery
- **Hero & title:** Topographic line PNG + 2× glow ovals.
- **Service hero images:** 1:1 generative AI imagery, treated with `mix-blend-mode: lighten` over the dark surface so the black background of the asset disappears.
- **Vision:** A grainy magnetic-field PNG with a centered black disk creating a moon/eclipse cutout — the italic copy reads *over* this silhouette.
- **Use-case photoshoot grid:** Before/after pairs alternating on a `#F6F6F6` tile background — apparel/e-com style.
- All generative imagery skews **cool / desaturated** with electric purple-pink highlights. There is no warm, sunny, or beige imagery anywhere.

### Animation
The Figma file has no motion specs, but the vocabulary suggests:
- **Slow fades** (300–500ms ease-out) for the glow disks pulsing.
- **Subtle parallax** on the topographic background on scroll.
- **No bounces, no snaps, no springy interactions.** The brand reads "composed" — keep motion soft and slow.

### Hover & press states (extrapolated; not in Figma)
- **Primary button (deep violet):** hover → `#6B53D6` lift; press → drop 1px, brightness 0.95.
- **Nav links:** hover → opacity 1 + 1px underline in `--color-quote-violet`.
- **Cards:** hover → border `rgba(255,255,255,0.18)` (vs 0.10 default); no scale, no shadow change.
- **"View more" link:** hover → chevron animates 2–4px down with the link color brightening.

### Borders, shadows, corners
- **Border radius scale:** `8px` (inputs / clear buttons), `16px` (primary button, image tiles, glass panels), `24px` (deck-image wrappers), `500px` (testimonial avatar — full pill). The Figma rarely uses anything in between.
- **Borders:** mostly hairlines (`1px solid rgba(255,255,255,0.1)`) for separators, with `1.5px solid #E3E3E3` for light-mode buttons and `1px dashed #C4C4C4` for the upload dropzone.
- **Shadows:** there are essentially **no drop shadows** in the source — the brand uses glow + blur disks for depth instead of conventional shadows. Use restraint when adding any.
- **Glass panel** (testimonial card): a quadruple-stop linear-gradient (`rgba(33,26,61,.8)` → `rgba(15,2,25,.8)` → `rgba(15,2,25,.8)` → `rgba(41,35,67,.8)`) over a 20% white wash with `backdrop-filter: blur(50px)`. This is the only true "frosted glass" treatment.

### Layout rules
- **Fixed top nav** on the landing: 1280 wide, 68 tall, transparent over the hero. Logo left, 5 nav items right with 56px gaps.
- **Footer repeats the nav layout** below the contact form — same 1280×148 strip.
- **Deck slides** are always 1920×1080, always with a logo lock-up at `(90, 72)` in the top-left, and three footer items (Instagram icon / "Contact us" / "© Telepat Inc 2024") at `(537, 996)`.
- The deck never uses page numbers or progress dots.

### Transparency & blur
- `backdrop-filter: blur(50px)` is used **only** on the glass testimonial panel.
- All other "blur" effects are large translucent solid circles (no GPU blur).
- Image blends use `mix-blend-mode: lighten` to drop black backgrounds out of generative imagery on dark surfaces — never on light surfaces.

---

## Iconography

Telepat's design system is **light on iconography**. The Figma has fewer than 10 distinct icon shapes across 250 frames; the brand leans on imagery + type + glow instead of icon language.

- **No icon font and no icon set** is used in the source. The few icons present are inline SVG paths exported from Figma.
- The icons that *do* exist:
    - A **down-chevron** (10×6) under the hero "View more" link
    - A **trash can** outline for the file-upload UI (Developer AI Ranking, internal tool)
    - **GitHub mark** and **Instagram glyph** in the footer
    - A few Chrome-browser chrome icons (back/forward/refresh, more menu, favorite star) — these belong to the *browser bezel*, not the brand
- **No emoji.** Anywhere.
- **No unicode-as-icon** (no checkmarks ✓ / arrows → in body copy).
- **Client logos** are imported as exact SVG (T-Mobile, Microsoft, ProSiebenSat.1, Viasat, Honda, PagerDuty, RH, eightTV).

**Recommendation when you need an icon Telepat doesn't have:** reach for **Lucide** (https://lucide.dev) — same crisp 1.5–2 px stroke, no decorative flourishes, neutral. Set `stroke-width: 1.5` and use `currentColor`. Flag any introduced icon as a substitution.

---

## Quick start

```html
<link rel="stylesheet" href="colors_and_type.css">

<header class="glow-bg" style="min-height: 741px;">
  <nav>
    <span class="wordmark" style="font-size: 23px; color: var(--fg1);">TELEPAT</span>
    …
  </nav>
  <h1 class="h1" style="text-align: center;">
    AI-Powered Software<br/>Tailored for Innovators
  </h1>
  <p class="body" style="color: var(--color-text-on-glow); text-align: center;">
    With over a decade of expertise Telepat is powering leading Silicon Valley
    startups and Fortune 500 companies with next gen software development.
  </p>
  <a class="link-more">VIEW MORE</a>
</header>
```

For richer examples, open `ui_kits/site/index.html` (marketing site) or `slides/index.html` (deck).

---

## Known gaps / asks for the user

- 🚩 The **landing page hover/press states** are not specified in Figma. The values in *Hover & press states* above are reasonable defaults — confirm or override.
- 🚩 Only **one testimonial** (Sarah Schaaf / Headnote) exists in the source. The carousel dot row implies a multi-testimonial pattern but the additional quotes are not in the file.
- 🚩 The internal **"Developer AI Ranking"** product is visually distinct from the marketing brand — it uses pure black/white, no glow, no Poppins-italic. Treat it as a sub-brand, not as the main system. It is **not** included in `ui_kits/`.
