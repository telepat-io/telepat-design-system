import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Atoms/Select",
  component: Select,
  parameters: { backgrounds: { default: "deep-purple" } },
  decorators: [(Story) => <div style={{ width: 320, padding: 24 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Service interest",
    options: [
      { label: "AI Concepts & Software", value: "concepts" },
      { label: "AI Visuals & Voice", value: "visuals" },
      { label: "Security & Infrastructure", value: "security" },
    ],
  },
};
