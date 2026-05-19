// Hero — the signature "double-blur" backdrop with topographic line texture.
// Wide tagline + Poppins-Light body. Soft "View more ↓" link sits at the
// bottom edge to invite the scroll.
window.Hero = function Hero() {
  return (
    <section id="home" style={{
      position: "relative",
      width: "100%",
      height: 741,
      overflow: "hidden",
      background: "#000",
      isolation: "isolate",
    }}>
      {/* Topographic line layer */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: 'url("../../assets/hero-bg.png") center/cover no-repeat',
        opacity: 0.7,
        zIndex: 0,
      }} />
      {/* Top-right blue glow */}
      <div style={{
        position: "absolute",
        right: -150, top: -480,
        width: 1329, height: 1329,
        borderRadius: "50%",
        background: "rgba(79,75,255,0.24)",
        zIndex: 1,
      }} />
      {/* Bottom-left magenta glow */}
      <div style={{
        position: "absolute",
        left: -276, bottom: -276,
        width: 894, height: 894,
        borderRadius: "50%",
        background: "rgba(219,75,255,0.16)",
        zIndex: 1,
      }} />

      <Nav />

      <div style={{
        position: "absolute",
        left: "50%",
        top: 162,
        transform: "translateX(-50%)",
        width: 700,
        display: "flex",
        flexDirection: "column",
        gap: 40,
        zIndex: 2,
        textAlign: "center",
      }}>
        {/* Local color disks behind the headline — soft halos */}
        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute",
            left: -100, top: 30,
            width: 330, height: 330, borderRadius: "50%",
            background: "rgba(70,79,255,0.23)",
            zIndex: -1,
          }} />
          <div style={{
            position: "absolute",
            right: -50, top: 0,
            width: 211, height: 213, borderRadius: "50%",
            background: "rgba(191,111,255,0.35)",
            zIndex: -1,
          }} />
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: 64,
            lineHeight: "72px",
            letterSpacing: "0.020em",
            color: "#fff",
            margin: 0,
            textWrap: "balance",
          }}>AI-Powered Software Tailored for Innovators</h1>
        </div>
        <p style={{
          fontFamily: "var(--font-display)",
          fontWeight: 300,
          fontSize: 18,
          lineHeight: "26px",
          letterSpacing: "0.020em",
          color: "#DCDEFF",
          margin: 0,
          textWrap: "balance",
        }}>With over a decade of expertise Telepat is powering leading Silicon Valley startups and Fortune 500 companies with next gen software development.</p>
      </div>

      <a href="#services" style={{
        position: "absolute",
        left: "50%",
        bottom: 48,
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        textDecoration: "none",
        zIndex: 2,
      }}>
        <span style={{
          fontFamily: "var(--font-display)",
          fontWeight: 300,
          fontSize: 14,
          letterSpacing: "0.080em",
          color: "#AEA1FF",
          textTransform: "uppercase",
        }}>View more</span>
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
          <path d="M1 1 L7 7 L13 1" stroke="#AEA1FF" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </a>
    </section>
  );
};
