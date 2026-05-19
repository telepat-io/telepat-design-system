import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Atoms/Textarea",
  component: Textarea,
  parameters: { backgrounds: { default: "deep-purple" } },
  decorators: [(Story) => <div style={{ width: 420, padding: 24 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: { label: "Project brief", defaultValue: "We need an autonomous agent for our e-com storefront." },
};
export const Empty: Story = { args: { label: "Notes", placeholder: "Tell us more…" } };
