import type { Meta, StoryObj } from "@storybook/react";
import { SegmentedControl } from "./SegmentedControl";

const meta: Meta<typeof SegmentedControl> = {
  title: "Atoms/SegmentedControl",
  component: SegmentedControl,
  parameters: { backgrounds: { default: "deep-purple" } },
  decorators: [(Story) => <div style={{ width: 320, padding: 24 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = {
  args: {
    ariaLabel: "Hosting",
    options: [
      { label: "Cloud", value: "cloud" },
      { label: "On-prem", value: "onprem" },
      { label: "Hybrid", value: "hybrid" },
    ],
    defaultValue: "cloud",
  },
};
