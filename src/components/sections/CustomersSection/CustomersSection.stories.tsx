import type { Meta, StoryObj } from "@storybook/react";
import { CustomersSection } from "./CustomersSection";

const meta: Meta<typeof CustomersSection> = {
  title: "Sections/CustomersSection",
  component: CustomersSection,
  parameters: { layout: "fullscreen", backgrounds: { default: "dark" } },
};
export default meta;
type Story = StoryObj<typeof CustomersSection>;

export const Default: Story = {};
