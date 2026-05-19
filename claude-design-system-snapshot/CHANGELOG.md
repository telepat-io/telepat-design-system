# Changelog

A flat log of design-system changes. Append a one-liner every time you change a token, asset, or component — Claude Code (or anyone consuming this) can read this to know exactly what drifted.

## 2026-05-19

- Initial design system built from `telepat-LP.fig` (Page-1 landing, Page-2 deck, Page-3 alt titles)
- Added 38 preview cards across Brand / Type / Colors / Spacing / Components
- Built `ui_kits/site/` (5 JSX section components + index) and `slides/` (7-slide deck)
- Loaded full Montserrat Alt1 family locally (Thin → Black) from `fonts/`; replaces the Montserrat Google Fonts substitute
- Logo SVGs baked with literal fills (`#fff` / `#000`); added `logo-mark-black.svg` for use on white surfaces
- Bumped `--color-bg-deep` `#0D0A19` → `#14102B` and `--color-bg-elevated` `#15101F` → `#221949` (more visible step on the dark ramp)
- Bumped `--color-line` opacity `0.10` → `0.16`, `--color-line-light` `0.08` → `0.14` (visibility on 4K displays)
- Split the omnibus form-fields preview into 5 focused cards (text / select / choice / toggle / upload); shared CSS lives in `preview/_forms.css`
- Wordmark preview card now shows the full 9-weight ramp of the licensed face
- Added `SYNC.md` describing how to keep Storybook in sync
