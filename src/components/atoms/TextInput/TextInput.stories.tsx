import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Atoms/TextInput",
  component: TextInput,
  parameters: { backgrounds: { default: "deep-purple" } },
  decorators: [(Story) => <div style={{ width: 320, padding: 24 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof TextInput>;

const Mail = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7 L12 13 L21 7"/></svg>
);

export const Default: Story = { args: { label: "Name", defaultValue: "Soumya Ranjan" } };
export const WithIcon: Story = { args: { label: "Email", required: true, iconLeft: Mail, placeholder: "you@company.com" } };
export const WithSuffix: Story = { args: { label: "Budget", defaultValue: "50,000", suffix: "USD" } };
export const ErrorState: Story = {
  args: { label: "Password", type: "password", defaultValue: "abc", error: true, hint: "Must be at least 8 characters" },
};
export const Disabled: Story = { args: { label: "Locked field", defaultValue: "Read only", disabled: true } };
