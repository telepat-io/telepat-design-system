import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Atoms/Radio",
  component: Radio,
  parameters: { backgrounds: { default: "deep-purple" } },
  decorators: [(Story) => <div style={{ padding: 24 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = { args: { label: "Proof of concept", name: "demo", defaultChecked: true } };

export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Radio label="Proof of concept" name="scale" defaultChecked />
      <Radio label="Production rollout" name="scale" />
      <Radio label="Long-term partnership" name="scale" />
    </div>
  ),
};
