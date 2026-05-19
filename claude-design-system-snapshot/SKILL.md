---
name: telepat-design
description: Use this skill to generate well-branded interfaces and assets for Telepat (telepat.io), an AI software studio. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping landing pages, pitch decks, and product surfaces.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

The system is rebuilt from the official Telepat Figma file. Highlights:

- **Dark-first** — pure black or `#0D0A19` deep purple-black is the default surface.
- **Signature motif:** paired translucent solid circles (electric-blue top-right, magenta bottom-left) bleed off the edge of every dark frame. Reach for `.glow-bg` in `colors_and_type.css` to get this for free.
- **Typography:** Poppins everywhere (Light 300 is the default weight), italics only for vision/quote moments. Montserrat-Alt1 Medium for the TELEPAT wordmark — substituted with regular Montserrat + 0.080em tracking on the web.
- **No emoji, no exclamation marks, no shadows.** Atmospheric depth comes from glow disks + `mix-blend-mode: lighten` over imagery, not drop shadows.
- **Assets** in `assets/` are real exports — copy them out, don't redraw the logo or topographic background by hand.
- **UI kits** in `ui_kits/site/` for the marketing site; **deck templates** in `slides/`.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy the assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.
