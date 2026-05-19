import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Spacing",
  parameters: { layout: "padded", backgrounds: { default: "dark" } },
};
export default meta;
type Story = StoryObj;

const Row = ({ label, value, children }: { label: string; value: string; children: React.ReactNode }) => (
  <div style={{ display: "grid", gridTemplateColumns: "120px 80px 1fr", alignItems: "center", gap: 16, color: "#fff", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
    <div style={{ font: "500 12px var(--font-display)", letterSpacing: "0.04em", color: "rgba(255,255,255,0.7)" }}>{label}</div>
    <div style={{ font: "300 13px var(--font-display)", color: "rgba(255,255,255,0.5)" }}>{value}</div>
    {children}
  </div>
);

export const Scale: Story = {
  render: () => (
    <div style={{ padding: 24, maxWidth: 760 }}>
      {[
        ["space-1", 4],
        ["space-2", 8],
        ["space-3", 16],
        ["space-4", 24],
        ["space-5", 32],
        ["space-6", 48],
        ["space-7", 56],
        ["space-8", 72],
        ["space-9", 100],
        ["space-10", 160],
      ].map(([name, px]) => (
        <Row key={String(name)} label={String(name)} value={`${px}px`}>
          <div style={{ height: 8, width: Number(px), background: "var(--color-quote-violet)", borderRadius: 4 }} />
        </Row>
      ))}
    </div>
  ),
};

export const Radii: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24, padding: 24 }}>
      {[
        { name: "radius-input", val: 8 },
        { name: "radius-card", val: 16 },
        { name: "radius-button", val: 16 },
        { name: "radius-pill", val: 500 },
      ].map((r) => (
        <div key={r.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <div style={{ width: 96, height: 96, background: "var(--color-bg-elevated)", borderRadius: r.val, border: "1px solid rgba(255,255,255,0.16)" }} />
          <div style={{ font: "300 12px var(--font-display)", color: "#fff" }}>{r.name}</div>
          <div style={{ font: "300 11px var(--font-display)", color: "rgba(255,255,255,0.5)" }}>{r.val}px</div>
        </div>
      ))}
    </div>
  ),
};

export const Lines: Story = {
  render: () => (
    <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 24, color: "#fff", maxWidth: 600 }}>
      <div>
        <div style={{ font: "300 14px var(--font-display)", marginBottom: 12, color: "rgba(255,255,255,0.72)" }}>line · 1px / 16% white</div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.16)" }} />
      </div>
      <div>
        <div style={{ font: "300 14px var(--font-display)", marginBottom: 12, color: "rgba(255,255,255,0.72)" }}>line-strong · 1px / 28% white</div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.28)" }} />
      </div>
      <div style={{ background: "#fff", padding: 16, borderRadius: 8 }}>
        <div style={{ font: "300 14px var(--font-display)", marginBottom: 12, color: "rgba(0,0,0,0.6)" }}>line-light · 2px / 14% black</div>
        <div style={{ borderTop: "2px solid rgba(0,0,0,0.14)" }} />
      </div>
    </div>
  ),
};

export const GlassPanel: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <div style={{
        width: 480,
        borderRadius: 16,
        padding: "32px 36px",
        background: `
          linear-gradient(rgba(33,26,61,0.80) 0%, rgba(15,2,25,0.80) 29%, rgba(15,2,25,0.80) 67%, rgba(41,35,67,0.80) 100%),
          rgba(255,255,255,0.20)
        `,
        backdropFilter: "blur(50px)",
        color: "#fff",
      }}>
        <div style={{ font: "300 14px var(--font-display)", color: "rgba(255,255,255,0.65)", marginBottom: 8 }}>Glass panel (testimonial container)</div>
        <div style={{ font: "italic 300 22px/30px var(--font-display)" }}>
          “Quadruple-stop gradient + 50px backdrop blur. The only frosted-glass treatment in the system.”
        </div>
      </div>
    </div>
  ),
};

export const GlowMotif: Story = {
  render: () => (
    <div style={{ position: "relative", width: 700, height: 360, background: "#000", overflow: "hidden", borderRadius: 16 }}>
      <div style={{ position: "absolute", right: -100, top: -180, width: 600, height: 600, borderRadius: "50%", background: "rgba(79,75,255,0.24)" }} />
      <div style={{ position: "absolute", left: -120, bottom: -120, width: 400, height: 400, borderRadius: "50%", background: "rgba(219,75,255,0.16)" }} />
      <div style={{ position: "relative", padding: 40, color: "#fff" }}>
        <div style={{ font: "500 11px/1 var(--font-display)", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>Glow motif</div>
        <h3 style={{ font: "300 32px var(--font-display)", margin: "12px 0 0" }}>
          Top-right blue · Bottom-left magenta
        </h3>
        <p style={{ font: "300 14px/22px var(--font-display)", color: "rgba(255,255,255,0.85)", marginTop: 12 }}>
          Solid translucent circles, no GPU blur. Visible on every dark surface.
        </p>
      </div>
    </div>
  ),
};
