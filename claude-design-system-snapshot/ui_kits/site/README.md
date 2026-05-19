# Telepat — Site UI Kit

A faithful recreation of the **1280×5310 px landing page** in the Figma (Page-1 / *Viewport - 1280x832*). All sections are factored into small Babel-loaded React components so individual pieces can be reused.

```
index.html              ← entry point; loads each component as <script type="text/babel">
App.jsx                 ← composes the page
Nav.jsx                 ← top nav, mirrored in footer
Hero.jsx                ← topographic backdrop + glow disks + tagline + "View more"
ServicesSection.jsx     ← three alternating text/image rows on #0D0A19
CustomersSection.jsx    ← glass testimonial + carousel + client logo grid
VisionSection.jsx       ← magnetic-field backdrop with moon silhouette + italic copy
ContactSection.jsx      ← 4-field form + violet "Send" pill + bottom nav
```

## Interactive bits in this kit

- **View more →** anchor smoothly scrolls to Services.
- **Nav links** highlight on hover (`#AEA1FF`) and route via anchor.
- **Testimonial carousel** — 3 quotes, click the dots to switch. (Source has only one; the extra two are fabricated to demonstrate the pattern and are clearly labelled as such.)
- **Contact form** — controlled inputs, "Send" button briefly flips to a green "Sent ✓" confirmation for 2.4s; nothing actually submits.

## Faithfulness notes

- The exact T-Mobile / Microsoft / ProSiebenSat.1 / Viasat / RH / PagerDuty / Honda / eightTV logo SVGs are stored in the Figma but not extracted as standalone files. The kit renders styled type approximations of each mark and clearly tags them; replace with the licensed SVGs in production.
- **Hover and press states** are extrapolated from the visual system — the Figma does not specify any.
