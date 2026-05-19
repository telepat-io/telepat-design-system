import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: { layout: "padded", backgrounds: { default: "dark" } },
};
export default meta;
type Story = StoryObj;

const Sample = ({ label, style, children }: { label: string; style: React.CSSProperties; children: React.ReactNode }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingBottom: 28, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
    <div style={{ font: "500 11px/1 var(--font-display)", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>{label}</div>
    <div style={{ color: "#fff", ...style }}>{children}</div>
  </div>
);

export const Display: Story = {
  render: () => (
    <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 28 }}>
      <Sample label="Hero · 86px · weight 300 · 0.020em" style={{ font: "300 86px/96px var(--font-display)", letterSpacing: "0.02em" }}>
        AI-Powered Software
      </Sample>
      <Sample label="Display · 64px · weight 300 · 0.020em" style={{ font: "300 64px/72px var(--font-display)", letterSpacing: "0.02em" }}>
        Tailored for Innovators
      </Sample>
      <Sample label="H2 · 40px · weight 700 · 0.040em" style={{ font: "700 40px/1 var(--font-display)", letterSpacing: "0.04em" }}>
        Services
      </Sample>
      <Sample label="H3 · 32px · weight 300 · 0.020em" style={{ font: "300 32px/40px var(--font-display)", letterSpacing: "0.02em" }}>
        AI Software Development Services
      </Sample>
      <Sample label="H4 · 24px · weight 500 · 0.040em" style={{ font: "500 24px/1.5 var(--font-display)", letterSpacing: "0.04em" }}>
        Sarah Schaaf
      </Sample>
    </div>
  ),
};

export const Body: Story = {
  render: () => (
    <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 28 }}>
      <Sample label="Body large · 20px · weight 300" style={{ font: "300 20px/1.5 var(--font-display)", letterSpacing: "0.02em" }}>
        With over a decade of expertise Telepat is powering leading Silicon Valley startups.
      </Sample>
      <Sample label="Body · 18px · weight 300" style={{ font: "300 18px/26px var(--font-display)", letterSpacing: "0.02em" }}>
        With over a decade of expertise Telepat is powering leading Silicon Valley startups.
      </Sample>
      <Sample label="Body small · 16px · weight 300" style={{ font: "300 16px/24px var(--font-display)", letterSpacing: "0.02em" }}>
        AI Strategy Development & Use Case Identification
      </Sample>
      <Sample label='Eyebrow · 12px · weight 400 · uppercase · 0.100em' style={{ font: "400 12px/1 var(--font-display)", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.48)" }}>
        Selected Clients
      </Sample>
      <Sample label='Link · 14px · weight 300 · uppercase · 0.080em · violet' style={{ font: "300 14px/1 var(--font-display)", letterSpacing: "0.08em", textTransform: "uppercase", color: "#AEA1FF" }}>
        View more
      </Sample>
    </div>
  ),
};

export const ItalicQuote: Story = {
  render: () => (
    <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 28 }}>
      <Sample label="Quote · 28px · italic · weight 300" style={{ font: "italic 300 28px/38px var(--font-display)" }}>
        “Overall, I would say that we wouldn't have been able to generate this kind of success if Telepat wasn't there.”
      </Sample>
      <Sample label="Vision italic · 41px · weight 300 · soft pink" style={{ font: "italic 300 41px/1 var(--font-display)", letterSpacing: "0.02em", color: "#BFA0FF" }}>
        We aim to build a future where cutting-edge technology and sustainability go hand in hand.
      </Sample>
    </div>
  ),
};

export const Wordmark: Story = {
  render: () => (
    <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
      <Sample label="Canonical · Montserrat Alt1 Medium · 48px · 0.080em" style={{ font: '500 48px/1 var(--font-mark)', letterSpacing: "0.08em" }}>
        TELEPAT
      </Sample>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ font: "500 11px/1 var(--font-display)", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>Weight ramp</div>
        {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((w) => (
          <div key={w} style={{ display: "flex", alignItems: "baseline", gap: 16, color: "#fff" }}>
            <span style={{ font: `${w} 28px var(--font-mark)`, letterSpacing: "0.08em" }}>TELEPAT</span>
            <span style={{ font: "300 12px var(--font-display)", color: "rgba(255,255,255,0.5)" }}>{w}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};
