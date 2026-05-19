import type { Meta, StoryObj } from "@storybook/react";
import { Chip, Chips } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Atoms/Chip",
  component: Chip,
  parameters: { backgrounds: { default: "deep-purple" } },
  decorators: [(Story) => <div style={{ padding: 24 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Single: Story = { args: { children: "Fintech", active: true } };

export const Group: StoryObj<typeof Chips> = {
  render: () => (
    <Chips
      options={[
        { label: "Fintech", value: "fintech" },
        { label: "Media", value: "media" },
        { label: "Retail", value: "retail" },
        { label: "Health", value: "health" },
        { label: "Logistics", value: "logistics" },
        { label: "Public sector", value: "public" },
      ]}
      defaultValue={["fintech", "media"]}
    />
  ),
};
