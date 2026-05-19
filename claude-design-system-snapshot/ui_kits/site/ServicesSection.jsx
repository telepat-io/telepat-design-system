// Services section — three alternating text/image rows on a deep
// purple-black surface. Headings use Poppins Light 32px to feel
// human-scale rather than imposing.
const SERVICES = [
  {
    title: "AI Software Development Services",
    items: [
      "AI Strategy Development & Use Case Identification",
      "AI-Driven Mobile & Web Application Development",
      "Integration of Pre-Trained Models into existing Applications",
      "AI Model Fine-Tuning and Optimization for specific verticals",
    ],
    image: "../../assets/img-phone.png",
    flip: false,
  },
  {
    title: "AI Visuals & Voice",
    items: [
      "AI Product and e-Com Photography",
      "AI-Generated Video Animations and Commercials",
      "Autonomous, lifelike Virtual Personas for Social Media engagement",
      "Speech Recognition and Synthesis",
    ],
    image: "../../assets/img-ai-character.png",
    flip: true,
  },
  {
    title: "Security & Infrastructure for AI software",
    items: [
      "AI Model Security Audits & Implementation of Security Solutions",
      "AI Compliance with AI Regulations & Data Security Standards",
      "Cloud Infrastructure Setup & AI Model Hosting Management",
      "Cloud-Based AI Solution Deployment",
    ],
    image: "../../assets/img-security.png",
    flip: false,
  },
];

window.ServiceRow = function ServiceRow({ title, items, image, flip }) {
  const TextBlock = (
    <div style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 24,
    }}>
      <h3 style={{
        fontFamily: "var(--font-display)",
        fontWeight: 300,
        fontSize: 32,
        lineHeight: "40px",
        letterSpacing: "0.020em",
        color: "#fff",
        margin: 0,
        textWrap: "balance",
      }}>{title}</h3>
      <ul style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: 0,
        fontFamily: "var(--font-display)",
        fontWeight: 300,
        fontSize: 16,
        lineHeight: "24px",
        color: "rgba(255,255,255,0.88)",
      }}>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );

  const ImageBlock = (
    <div style={{
      width: 400, height: 400,
      borderRadius: 16,
      overflow: "hidden",
      background: "#0D0A19",
      flexShrink: 0,
      position: "relative",
    }}>
      <img src={image} alt="" style={{
        position: "absolute",
        inset: -10,
        width: "calc(100% + 20px)",
        height: "calc(100% + 20px)",
        objectFit: "cover",
        mixBlendMode: "lighten",
      }} />
    </div>
  );

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      gap: 80,
      alignItems: "center",
      justifyContent: "center",
    }}>
      {flip ? ImageBlock : TextBlock}
      {flip ? TextBlock : ImageBlock}
    </div>
  );
};

window.ServicesSection = function ServicesSection() {
  return (
    <section id="services" style={{
      width: "100%",
      background: "#0D0A19",
      padding: "100px 200px 160px",
      display: "flex",
      flexDirection: "column",
      gap: 80,
      boxSizing: "border-box",
    }}>
      <h2 style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 40,
        lineHeight: 1,
        letterSpacing: "0.040em",
        color: "#fff",
        textAlign: "center",
        margin: 0,
      }}>Services</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
        {SERVICES.map(s => <ServiceRow key={s.title} {...s} />)}
      </div>
    </section>
  );
};
