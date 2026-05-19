// Vision section — the magnetic-field PNG with a centered black disk
// silhouette. Two italic paragraphs in soft purples.
window.VisionSection = function VisionSection() {
  return (
    <section id="vision" style={{
      position: "relative",
      width: "100%",
      height: 812,
      background: "#000",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {/* Magnetic-field full-bleed image */}
      <div style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: 1600,
        height: 984,
        background: 'url("../../assets/img-vision-magnetic.png") center/cover no-repeat',
      }} />
      {/* The black moon-disk that creates the eclipse silhouette */}
      <div style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: 621, height: 621, borderRadius: "50%",
        background: "rgba(0,0,0,0.88)",
      }} />
      {/* Italic copy */}
      <div style={{
        position: "relative",
        width: 700,
        display: "flex",
        flexDirection: "column",
        gap: 72,
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: 28,
          lineHeight: "38px",
          color: "#BFA0FF",
          margin: 0,
          textWrap: "balance",
        }}>Our vision is to lead the way in sustainable development by harnessing the power of AI to create innovative solutions that not only drive technological progress but also promote environmental stewardship and social responsibility.</p>
        <p style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: 28,
          lineHeight: "38px",
          color: "#E1A0FF",
          margin: 0,
          textWrap: "balance",
        }}>We aim to build a future where cutting-edge technology and sustainability go hand in hand, ensuring that growth today doesn't compromise the resources and well-being of tomorrow.</p>
      </div>
    </section>
  );
};
