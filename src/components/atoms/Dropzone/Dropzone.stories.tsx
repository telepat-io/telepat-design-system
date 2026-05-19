import type { Meta, StoryObj } from "@storybook/react";
import { Dropzone } from "./Dropzone";

const meta: Meta<typeof Dropzone> = {
  title: "Atoms/Dropzone",
  component: Dropzone,
  parameters: { backgrounds: { default: "deep-purple" } },
  decorators: [(Story) => <div style={{ width: 420, padding: 24 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Dropzone>;

export const Default: Story = {};
export const Custom: Story = {
  args: {
    label: "Drop your portfolio here",
    sub: "ZIP, max 100MB",
    accept: ".zip",
  },
};
