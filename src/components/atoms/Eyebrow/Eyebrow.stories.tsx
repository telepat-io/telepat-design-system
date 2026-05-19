import type { Meta, StoryObj } from "@storybook/react";
import { Eyebrow } from "./Eyebrow";

const meta: Meta<typeof Eyebrow> = {
  title: "Atoms/Eyebrow",
  component: Eyebrow,
  parameters: { backgrounds: { default: "dark" } },
  decorators: [(Story) => <div style={{ padding: 24 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Eyebrow>;

export const Default: Story = { args: { children: "Selected Clients" } };
export const Light: Story = {
  args: { theme: "light", children: "Selected Clients" },
  parameters: { backgrounds: { default: "light" } },
};
