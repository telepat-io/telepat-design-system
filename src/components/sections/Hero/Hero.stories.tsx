import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./Hero";

const meta: Meta<typeof Hero> = {
  title: "Sections/Hero",
  component: Hero,
  parameters: { layout: "fullscreen", backgrounds: { default: "dark" } },
};
export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = { args: {} };
export const Custom: Story = {
  args: {
    title: "Custom Title for Custom Things",
    subtitle: "Subtitle goes here. Edit me from the Controls panel.",
    ctaLabel: "Scroll down",
  },
};
