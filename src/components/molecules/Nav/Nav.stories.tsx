import type { Meta, StoryObj } from "@storybook/react";
import { Nav } from "./Nav";

const meta: Meta<typeof Nav> = {
  title: "Molecules/Nav",
  component: Nav,
  parameters: { layout: "fullscreen", backgrounds: { default: "dark" } },
};
export default meta;
type Story = StoryObj<typeof Nav>;

export const Dark: Story = { args: {} };
export const Light: Story = {
  args: { light: true },
  parameters: { backgrounds: { default: "light" } },
};
