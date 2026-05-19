#!/usr/bin/env node
// Fetches Montserrat Alternates (SIL OFL 1.1) from the official Google Fonts
// repository, renaming files to "MontserratAlt1-<Weight>.ttf" so the existing
// @font-face declarations and CSS Module mask-image URLs keep working.
//
// Why Montserrat Alternates? The Telepat design uses "Montserrat Alt1", a
// stylistic variant available from commercial sources (e.g. Adobe Fonts).
// "Montserrat Alternates" is the closest visually-equivalent member of the
// Montserrat family that is freely redistributable under SIL OFL 1.1.
//
// Run manually: npm run fetch-fonts
// Auto-runs:    before `npm run dev` and `npm run build` (via predev/prebuild)

import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FONTS_DIR = path.resolve(__dirname, "..", "src", "fonts");

const SOURCE = "https://raw.githubusercontent.com/google/fonts/main/ofl/montserratalternates";

const WEIGHTS = [
  ["Thin",       "MontserratAlternates-Thin.ttf"],
  ["ExtraLight", "MontserratAlternates-ExtraLight.ttf"],
  ["Light",      "MontserratAlternates-Light.ttf"],
  ["Regular",    "MontserratAlternates-Regular.ttf"],
  ["Medium",     "MontserratAlternates-Medium.ttf"],
  ["SemiBold",   "MontserratAlternates-SemiBold.ttf"],
  ["Bold",       "MontserratAlternates-Bold.ttf"],
  ["ExtraBold",  "MontserratAlternates-ExtraBold.ttf"],
  ["Black",      "MontserratAlternates-Black.ttf"],
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "telepat-design-system fetch-fonts" } }, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.resume();
          return resolve(download(res.headers.location, dest));
        }
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode} fetching ${url}`));
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve(undefined)));
        file.on("error", (err) => {
          fs.unlink(dest, () => reject(err));
        });
      })
      .on("error", reject);
  });
}

async function main() {
  fs.mkdirSync(FONTS_DIR, { recursive: true });

  const targets = WEIGHTS.map(([weight]) => path.join(FONTS_DIR, `MontserratAlt1-${weight}.ttf`));
  const oflPath = path.join(FONTS_DIR, "OFL.txt");

  const allPresent = targets.every((p) => fs.existsSync(p)) && fs.existsSync(oflPath);
  if (allPresent) {
    console.log("[fetch-fonts] All font files present; skipping. Delete src/fonts/*.ttf to force re-download.");
    return;
  }

  console.log("[fetch-fonts] Fetching Montserrat Alternates (SIL OFL 1.1) from github.com/google/fonts ...");

  for (let i = 0; i < WEIGHTS.length; i++) {
    const [weight, sourceName] = WEIGHTS[i];
    const dest = targets[i];
    if (fs.existsSync(dest)) {
      console.log(`  · ${weight.padEnd(11)} present, skipping`);
      continue;
    }
    await download(`${SOURCE}/${sourceName}`, dest);
    console.log(`  ✓ ${weight.padEnd(11)} → MontserratAlt1-${weight}.ttf`);
  }

  if (!fs.existsSync(oflPath)) {
    await download(`${SOURCE}/OFL.txt`, oflPath);
    console.log(`  ✓ OFL.txt`);
  }

  console.log("[fetch-fonts] Done. Fonts are loaded under family name \"Montserrat Alt1\" via src/styles/fonts.css.");
}

main().catch((err) => {
  console.error(`[fetch-fonts] Failed: ${err.message}`);
  console.error("If you're offline, drop your own Montserrat-family TTFs into src/fonts/ named MontserratAlt1-<Weight>.ttf.");
  process.exit(1);
});
