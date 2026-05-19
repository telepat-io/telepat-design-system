import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Colors",
  parameters: { layout: "padded", backgrounds: { default: "dark" } },
};
export default meta;
type Story = StoryObj;

const Swatch = ({ value, name, sub, light = false }: { value: string; name: string; sub?: string; light?: boolean }) => (
  <div style={{ width: 168, display: "flex", flexDirection: "column", gap: 8 }}>
    <div style={{
      height: 96,
      borderRadius: 12,
      background: value,
      border: light ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(255,255,255,0.08)",
    }} />
    <div>
      <div style={{ font: "500 13px/1.4 var(--font-display)", color: light ? "#000" : "#fff" }}>{name}</div>
      <div style={{ font: "300 11px/1.5 var(--font-display)", color: light ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.55)" }}>{sub ?? value}</div>
    </div>
  </div>
);

const Group = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ marginBottom: 48 }}>
    <h3 style={{ font: "300 20px var(--font-display)", letterSpacing: "0.04em", color: "#fff", margin: "0 0 20px" }}>{title}</h3>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>{children}</div>
  </section>
);

export const All: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <Group title="Surfaces">
        <Swatch value="#000000" name="bg" sub="#000 — hero, deck title" />
        <Swatch value="#14102B" name="bg-deep" sub="#14102B — services" />
        <Swatch value="#221949" name="bg-elevated" sub="#221949 — cards" />
        <Swatch value="#FFFFFF" name="bg-light" sub="#FFFFFF — split slides" light />
        <Swatch value="#F6F6F6" name="bg-light-soft" sub="#F6F6F6 — photo tile" light />
      </Group>

      <Group title="Brand — electric haze">
        <Swatch value="#4F4BFF" name="brand-blue" sub="hero left blur" />
        <Swatch value="#5A3ECC" name="brand-violet" sub="Send CTA" />
        <Swatch value="#DB4BFF" name="brand-pink" sub="hero right blur" />
        <Swatch value="#FD30E3" name="brand-magenta" sub="pop accent" />
        <Swatch value="#ED008C" name="brand-hot" sub="logomark gradient end" />
      </Group>

      <Group title="Soft purples — quotation & vision">
        <Swatch value="#AEA1FF" name="quote-violet" sub='"View more" link' />
        <Swatch value="#BFA0FF" name="quote-pink" sub="vision italic 1" />
        <Swatch value="#E1A0FF" name="quote-pinker" sub="vision italic 2" />
        <Swatch value="#C7A7FF" name="quote-soft" />
        <Swatch value="#8EA7FF" name="quote-blue" />
        <Swatch value="#F8A7FF" name="quote-rose" />
        <Swatch value="#DCDEFF" name="text-on-glow" sub="hero subtitle" />
      </Group>

      <Group title="Glow tints (rgba)">
        <Swatch value="rgba(79,75,255,0.24)" name="glow-blue" sub="0.24 alpha" />
        <Swatch value="rgba(70,79,255,0.23)" name="glow-blue-soft" sub="0.23 alpha" />
        <Swatch value="rgba(219,75,255,0.16)" name="glow-pink" sub="0.16 alpha" />
        <Swatch value="rgba(191,111,255,0.35)" name="glow-violet-bright" sub="0.35 alpha" />
      </Group>

      <Group title="Neutrals & lines">
        <Swatch value="rgba(255,255,255,0.16)" name="line" sub="hairline on dark" />
        <Swatch value="rgba(255,255,255,0.28)" name="line-strong" sub="card hover border" />
        <Swatch value="rgba(0,0,0,0.14)" name="line-light" sub="divider on light" light />
        <Swatch value="#C4C4C4" name="line-input" sub="dashed dropzone" light />
        <Swatch value="#E3E3E3" name="line-border" sub="light input border" light />
      </Group>

      <Group title="Semantic">
        <Swatch value="#06AC38" name="success" sub="Sent ✓" />
        <Swatch value="#FF5C8D" name="danger" sub="error border" />
      </Group>
    </div>
  ),
};
