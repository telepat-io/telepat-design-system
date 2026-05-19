import type { Meta, StoryObj } from "@storybook/react";
import { VisionSection } from "./VisionSection";

const meta: Meta<typeof VisionSection> = {
  title: "Sections/VisionSection",
  component: VisionSection,
  parameters: { layout: "fullscreen", backgrounds: { default: "dark" } },
};
export default meta;
type Story = StoryObj<typeof VisionSection>;

export const Default: Story = {};
