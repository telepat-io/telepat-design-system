import type { Meta, StoryObj } from "@storybook/react";
import { NavLink } from "./NavLink";

const meta: Meta<typeof NavLink> = {
  title: "Atoms/NavLink",
  component: NavLink,
  parameters: { backgrounds: { default: "dark" } },
  decorators: [(Story) => <div style={{ padding: 24, display: "flex", gap: 36 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof NavLink>;

export const Default: Story = { args: { children: "Home", href: "#home" } };
export const Active: Story = { args: { children: "Vision", active: true } };

export const All: Story = {
  render: () => (
    <>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#services">Services</NavLink>
      <NavLink href="#customers">Customers</NavLink>
      <NavLink href="#vision" active>Vision</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </>
  ),
};
