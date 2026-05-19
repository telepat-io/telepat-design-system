import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Atoms/Slider",
  component: Slider,
  parameters: { backgrounds: { default: "deep-purple" } },
  decorators: [(Story) => <div style={{ width: 320, padding: 24 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = { args: { label: "Team size", min: 1, max: 50, defaultValue: 14 } };
