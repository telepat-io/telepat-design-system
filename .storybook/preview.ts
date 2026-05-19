import type { Preview } from "@storybook/react";
import "../src/styles/tokens.css";
import "./preview-fonts.css";
import "../src/styles/reset.css";

const preview: Preview = {
  parameters: {
    layout: "padded",
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark",         value: "#000000" },
        { name: "deep-purple",  value: "#14102B" },
        { name: "elevated",     value: "#221949" },
        { name: "light",        value: "#FFFFFF" },
        { name: "light-soft",   value: "#F6F6F6" },
      ],
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Foundations",
          ["Colors", "Typography", "Spacing", "Brand"],
          "Atoms",
          "Molecules",
          "Sections",
          ["Full Page"],
        ],
      },
    },
  },
};

export default preview;
