# Fonts

The TELEPAT wordmark renders in **Montserrat Alt1**, a stylistic variant of
the Montserrat family. The exact "Alt1" file is only distributed via
commercial sources (e.g. Adobe Fonts) and is **not** redistributable here.

Instead, this repo fetches **Montserrat Alternates** from the official Google
Fonts repository — the closest free, OFL-licensed equivalent — and renames
the files to `MontserratAlt1-<Weight>.ttf` so the existing `@font-face`
declarations keep working unchanged.

## How to populate this folder

```bash
npm run fetch-fonts
```

This also runs automatically before `npm run dev` and `npm run build`. The
script is idempotent — it skips weights that are already present.

The download includes the upstream `OFL.txt` (SIL Open Font License 1.1),
which gets copied to `dist/fonts/OFL.txt` as part of the published library.

## If you have authentic Montserrat Alt1 files

Drop them in this directory using the exact filenames
`MontserratAlt1-{Thin,ExtraLight,Light,Regular,Medium,SemiBold,Bold,ExtraBold,Black}.ttf`.
The fetch script will see them and not overwrite. Make sure you have a
license that permits redistribution before publishing the npm package
with those files bundled.

## Attribution

> Montserrat Alternates is Copyright 2011 The Montserrat Project Authors
> (<https://github.com/JulietaUla/Montserrat>) and is licensed under the
> **SIL Open Font License, Version 1.1**.

The full license text ships alongside the fonts as `OFL.txt`.
