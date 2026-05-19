import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";
import libAssetsPlugin from "@laynezh/vite-plugin-lib-assets";

export default defineConfig({
  plugins: [
    react(),
    libAssetsPlugin({
      // Emit imported images/fonts as separate hashed files in dist/assets/
      // rather than inlining them as base64 (Vite's lib-mode default).
      outputPath: "assets",
      limit: 1024, // inline only truly small files (<1KB)
    }),
    dts({
      tsconfigPath: "./tsconfig.build.json",
      insertTypesEntry: true,
      exclude: ["**/*.stories.tsx", "**/*.stories.ts", "src/stories/**"],
    }),
    viteStaticCopy({
      targets: [
        { src: "src/fonts/*", dest: "fonts" },
        { src: "src/styles/tokens.css", dest: "." },
        { src: "src/styles/fonts.css", dest: "." },
      ],
    }),
  ],
  css: {
    modules: {
      generateScopedName: "tp-[name]_[local]__[hash:base64:5]",
    },
  },
  build: {
    sourcemap: true,
    cssCodeSplit: false,
    assetsInlineLimit: 0,
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        sections: resolve(__dirname, "src/sections.ts"),
      },
      formats: ["es", "cjs"],
      fileName: (format, entry) =>
        format === "es" ? `${entry}.js` : `${entry}.cjs`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "styles.css";
          return "assets/[name][extname]";
        },
      },
    },
  },
});
