import type { Meta, StoryObj } from "@storybook/react";
import { GlowBackground } from "./GlowBackground";

const meta: Meta<typeof GlowBackground> = {
  title: "Atoms/GlowBackground",
  component: GlowBackground,
  parameters: { layout: "fullscreen", backgrounds: { default: "dark" } },
};
export default meta;
type Story = StoryObj<typeof GlowBackground>;

export const Default: Story = {
  args: { showBlue: true, showMagenta: true },
  render: (args) => (
    <GlowBackground {...args} style={{ minHeight: 480 }}>
      <div style={{ padding: 48, color: "#fff", fontFamily: "var(--font-display)" }}>
        <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "0.04em", margin: 0 }}>
          Content sits over the glow
        </h2>
        <p style={{ marginTop: 16, opacity: 0.85, fontWeight: 300 }}>
          The two translucent disks bleed off the corners. No actual <code>filter: blur()</code> is used.
        </p>
      </div>
    </GlowBackground>
  ),
};

export const BlueOnly: Story = {
  args: { showBlue: true, showMagenta: false },
  render: Default.render,
};
export const MagentaOnly: Story = {
  args: { showBlue: false, showMagenta: true },
  render: Default.render,
};
