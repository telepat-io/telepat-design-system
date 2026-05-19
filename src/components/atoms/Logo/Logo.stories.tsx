import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Atoms/Logo",
  component: Logo,
  parameters: { backgrounds: { default: "dark" } },
  argTypes: {
    variant: { control: "inline-radio", options: ["mark", "wordmark", "lockup"] },
    theme: { control: "inline-radio", options: ["white", "black", "gradient", "mono-violet"] },
    size: { control: { type: "range", min: 16, max: 96, step: 2 } },
    divider: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: { variant: "lockup", theme: "white", size: 40, divider: false },
};

export const MarkOnly: Story = {
  args: { variant: "mark", theme: "gradient", size: 64 },
};

export const WordmarkOnly: Story = {
  args: { variant: "wordmark", theme: "white", size: 56 },
};

export const LockupWithDivider: Story = {
  args: { variant: "lockup", theme: "white", size: 56, divider: true },
};

export const AllThemes: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, width: 700 }}>
      <div style={{ background: "#000", padding: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Logo variant="lockup" theme="white" size={56} />
      </div>
      <div style={{ background: "#fff", padding: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Logo variant="lockup" theme="black" size={56} />
      </div>
      <div style={{ background: "linear-gradient(135deg, #1A0F3D, #0D0A19, #1F0E2E)", padding: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Logo variant="lockup" theme="gradient" size={56} />
      </div>
      <div style={{ background: "#000", padding: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Logo variant="lockup" theme="mono-violet" size={56} />
      </div>
    </div>
  ),
};
