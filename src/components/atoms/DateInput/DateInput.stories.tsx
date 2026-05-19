import type { Meta, StoryObj } from "@storybook/react";
import { DateInput } from "./DateInput";

const meta: Meta<typeof DateInput> = {
  title: "Atoms/DateInput",
  component: DateInput,
  parameters: { backgrounds: { default: "deep-purple" } },
  decorators: [(Story) => <div style={{ width: 280, padding: 24 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof DateInput>;

export const Default: Story = { args: { label: "Engagement start", defaultValue: "2026-06-01" } };
