import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Atoms/Toggle",
  component: Toggle,
  parameters: { backgrounds: { default: "deep-purple" } },
  decorators: [(Story) => <div style={{ width: 320, padding: 24 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: { label: "Status updates", sub: "Weekly progress email", defaultChecked: true },
};

export const Compact: Story = { args: { compact: true, defaultChecked: true } };
export const Disabled: Story = { args: { label: "Locked toggle", disabled: true } };
