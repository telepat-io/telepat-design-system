import type { Meta, StoryObj } from "@storybook/react";
import { ServicesSection } from "./ServicesSection";

const meta: Meta<typeof ServicesSection> = {
  title: "Sections/ServicesSection",
  component: ServicesSection,
  parameters: { layout: "fullscreen", backgrounds: { default: "deep-purple" } },
};
export default meta;
type Story = StoryObj<typeof ServicesSection>;

export const Default: Story = {};
