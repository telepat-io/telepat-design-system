# Syncing this design system into Storybook

Most of the files in this project are documentation artifacts (preview cards, screenshots). Storybook only needs a small subset.

## The sync surface

Copy these into your Storybook repo verbatim. They're the *only* files that affect what Storybook renders:

```
colors_and_type.css      → src/styles/tokens.css        (or imported globally)
fonts/                   → src/styles/fonts/            (referenced by @font-face above)
assets/                  → src/assets/                  (logos, hero bg, imagery)
SKILL.md, README.md      → docs/                        (context for Storybook MDX or the Docs tab)
ui_kits/site/*.jsx       → src/components/site/         (these become your stories)
slides/index.html        → docs/templates/deck.html     (reference, optional)
```

Everything in `preview/` is for review-in-place only and does **not** need to ship to Storybook.

## Recommended workflow

1. **One source of truth.** Treat *this* project as the canonical design system. Storybook *consumes* it; nobody hand-edits tokens in Storybook.
2. **Iterate here**, then run a sync.
3. **Sync mechanism** — pick one:
   - **Git submodule** (best for teams) — push this project to its own repo, add it as a submodule in Storybook, `git submodule update --remote` to pull changes.
   - **npm package** — publish this folder as `@telepat/design-system`; Storybook does `npm update @telepat/design-system`.
   - **Manual copy** — download this project as a zip, replace the files listed above in Storybook. Cheap but error-prone over time.
4. **For each iteration**, hand Claude Code:
   - the new zip, and
   - a single sentence describing what changed (e.g. *"Bumped surface tokens and split the form-fields card into 5 specimens. Update Storybook stories accordingly."*).

## What to log in CHANGELOG.md

Keeping a tiny `CHANGELOG.md` here makes drift impossible to miss. Append a one-line entry every time you change a token, asset, or component. Claude Code can read it to learn what to update.

```
2026-05-19  Bumped --color-bg-deep #0D0A19 → #14102B, --color-bg-elevated #15101F → #221949
2026-05-19  Bumped --color-line opacity 0.10 → 0.16 (visibility on 4K)
2026-05-19  Split components-form.html into 5 focused cards (text/select/choice/toggle/upload)
2026-05-19  Logo SVGs now have literal fills (#fff / #000); added logo-mark-black.svg
2026-05-19  Loaded Montserrat Alt1 family locally (replaces Montserrat substitution)
```

## Files that almost never change

The `slides/deck-stage.js` web component and `preview/_base.css` / `preview/_forms.css` shared styles are infrastructure — copy them once and forget. Token + asset changes are where you'll spend your sync budget.
