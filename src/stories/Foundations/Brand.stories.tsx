import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "../../components/atoms/Logo";
import heroBg from "../../assets/hero-bg.png";
import visionMagnetic from "../../assets/img-vision-magnetic.png";
import imgPhone from "../../assets/img-phone.png";
import imgCharacter from "../../assets/img-ai-character.png";
import imgSecurity from "../../assets/img-security.png";
import uc1Before from "../../assets/usecase-photo-1-before.jpg";
import uc1After from "../../assets/usecase-photo-1-after.png";
import uc2Before from "../../assets/usecase-photo-2-before.jpg";
import uc2After from "../../assets/usecase-photo-2-after.png";
import uc3Before from "../../assets/usecase-photo-3-before.jpg";
import uc3After from "../../assets/usecase-photo-3-after.png";

const meta: Meta = {
  title: "Foundations/Brand",
  parameters: { layout: "padded", backgrounds: { default: "dark" } },
};
export default meta;
type Story = StoryObj;

const Panel = ({ background, children, label }: { background: string; children: React.ReactNode; label: string }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
    <div style={{ background, padding: 36, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 12, minHeight: 140 }}>
      {children}
    </div>
    <div style={{ font: "300 11px var(--font-display)", color: "rgba(255,255,255,0.6)" }}>{label}</div>
  </div>
);

export const LogoVariants: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, padding: 24, maxWidth: 760 }}>
      <Panel background="#000" label="On black · solid white">
        <Logo variant="lockup" theme="white" size={56} />
      </Panel>
      <Panel background="#FFFFFF" label="On white · gradient + black">
        <Logo variant="lockup" theme="gradient" size={56} />
      </Panel>
      <Panel background="linear-gradient(135deg, #1A0F3D 0%, #0D0A19 60%, #1F0E2E 100%)" label="On purple-black · brand lockup">
        <Logo variant="lockup" theme="gradient" size={56} />
      </Panel>
      <Panel background="#000" label="Mono · soft violet on black">
        <Logo variant="lockup" theme="mono-violet" size={56} />
      </Panel>
    </div>
  ),
};

export const LogoLockup: Story = {
  render: () => (
    <div style={{ padding: 36, background: "#000", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 28 }}>
      <Logo variant="lockup" theme="white" size={64} />
      <span style={{ display: "inline-block", width: 2, height: 68, background: "rgba(255,255,255,0.22)", borderRadius: 1 }} />
      <span style={{ font: "500 28px var(--font-mark)", letterSpacing: "0.08em", color: "#fff" }}>TELEPAT</span>
    </div>
  ),
};

const Hero = ({ src, label, alt }: { src: string; label: string; alt: string }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
    <img src={src} alt={alt} style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 12, background: "#0D0A19" }} />
    <div style={{ font: "300 11px var(--font-display)", color: "rgba(255,255,255,0.6)" }}>{label}</div>
  </div>
);

export const HeroBackground: Story = {
  render: () => (
    <div style={{ padding: 24, maxWidth: 760 }}>
      <Hero src={heroBg} label="hero-bg.png · topographic line backdrop" alt="topographic" />
    </div>
  ),
};

export const VisionMotif: Story = {
  render: () => (
    <div style={{ padding: 24, position: "relative", maxWidth: 700 }}>
      <div style={{ position: "relative", height: 300, borderRadius: 12, overflow: "hidden", background: "#000" }}>
        <img src={visionMagnetic} alt="magnetic field" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 200, height: 200, borderRadius: "50%", background: "rgba(0,0,0,0.88)" }} />
      </div>
      <div style={{ font: "300 11px var(--font-display)", color: "rgba(255,255,255,0.6)", marginTop: 8 }}>
        Magnetic-field PNG with centered black disk = eclipse silhouette
      </div>
    </div>
  ),
};

export const ServiceImagery: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, padding: 24, maxWidth: 760 }}>
      <Hero src={imgPhone} label="img-phone · AI Software" alt="" />
      <Hero src={imgCharacter} label="img-ai-character · Visuals" alt="" />
      <Hero src={imgSecurity} label="img-security · Security" alt="" />
    </div>
  ),
};

export const UseCasePhotos: Story = {
  render: () => (
    <div style={{ background: "#F6F6F6", padding: 24, borderRadius: 12, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, maxWidth: 720 }}>
      {[[uc1Before, uc1After], [uc2Before, uc2After], [uc3Before, uc3After]].map(([before, after], i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <img src={before} alt="before" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: 8 }} />
          <img src={after} alt="after" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: 8 }} />
        </div>
      ))}
    </div>
  ),
};
