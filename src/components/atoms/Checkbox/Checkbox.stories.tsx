import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: { backgrounds: { default: "deep-purple" } },
  decorators: [(Story) => <div style={{ padding: 24 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: { label: "Strategy & discovery", defaultChecked: true } };
export const Unchecked: Story = { args: { label: "Security audit" } };
export const Disabled: Story = { args: { label: "Disabled", disabled: true } };

export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Checkbox label="Strategy & discovery" defaultChecked />
      <Checkbox label="Mobile / web build" defaultChecked />
      <Checkbox label="Security audit" />
    </div>
  ),
};
