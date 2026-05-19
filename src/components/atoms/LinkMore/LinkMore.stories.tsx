import type { Meta, StoryObj } from "@storybook/react";
import { LinkMore } from "./LinkMore";

const meta: Meta<typeof LinkMore> = {
  title: "Atoms/LinkMore",
  component: LinkMore,
  parameters: { backgrounds: { default: "dark" } },
  decorators: [(Story) => <div style={{ padding: 40, display: "flex", justifyContent: "center" }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof LinkMore>;

export const Default: Story = { args: { children: "View more", href: "#services" } };
