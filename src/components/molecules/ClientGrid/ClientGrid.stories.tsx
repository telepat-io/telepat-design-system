import type { Meta, StoryObj } from "@storybook/react";
import { ClientGrid } from "./ClientGrid";

const meta: Meta<typeof ClientGrid> = {
  title: "Molecules/ClientGrid",
  component: ClientGrid,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
};
export default meta;
type Story = StoryObj<typeof ClientGrid>;

export const Default: Story = {};
