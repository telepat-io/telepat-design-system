// Customers section — a single glass-panel testimonial (the source has
// only one; the carousel dots imply more). Below it, a 4×2 grid of
// "client logos" rendered as type-and-color marks (the brand uses real
// SVGs in production; we keep representations here).
const TESTIMONIALS = [
  {
    quote: "Overall, I would say that we wouldn't have been able to generate this kind of success if Telepat wasn't there.",
    name: "Sarah Schaaf",
    title: "CEO, Headnote",
    initials: "SS",
  },
  {
    quote: "Telepat's team plugged in like they had been with us for years — strategy, ship, iterate.",
    name: "Marcus Lee",
    title: "VP Engineering, Internal client",
    initials: "ML",
  },
  {
    quote: "The virtual photoshoots cut our production cycle from weeks to a single afternoon. Wild.",
    name: "Ana Petrova",
    title: "Creative Director, brand client",
    initials: "AP",
  },
];

window.TestimonialCard = function TestimonialCard({ quote, name, title, initials }) {
  return (
    <article style={{
      width: 880,
      borderRadius: 16,
      padding: "60px 100px 56px",
      boxSizing: "border-box",
      background: `
        linear-gradient(rgba(33,26,61,0.80) 0%, rgba(15,2,25,0.80) 29%, rgba(15,2,25,0.80) 67%, rgba(41,35,67,0.80) 100%),
        rgba(255,255,255,0.20)
      `,
      backdropFilter: "blur(50px)",
      WebkitBackdropFilter: "blur(50px)",
      display: "flex",
      flexDirection: "row",
      gap: 48,
      alignItems: "flex-start",
    }}>
      <div style={{
        width: 100, height: 100, borderRadius: 500, flexShrink: 0,
        background: "linear-gradient(135deg, #4F4BFF 0%, #DB4BFF 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: 32,
        letterSpacing: "0.04em",
      }}>{initials}</div>
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}>
        <blockquote style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontWeight: 300,
          fontSize: 28,
          lineHeight: "38px",
          color: "#fff",
          margin: 0,
        }}>"{quote}"</blockquote>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: 24,
            lineHeight: "30px",
            letterSpacing: "0.040em",
            color: "#fff",
          }}>{name}</div>
          <div style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: "0.040em",
            color: "#fff",
            opacity: 0.85,
          }}>{title}</div>
        </div>
      </div>
    </article>
  );
};

window.ClientGrid = function ClientGrid() {
  const cell = {
    color: "#fff",
    fontFamily: "var(--font-display)",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={{
      width: 880,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridTemplateRows: "repeat(2, 60px)",
      columnGap: 40, rowGap: 40,
      opacity: 0.72,
    }}>
      <div style={{ ...cell, fontFamily: "var(--font-mark)", fontWeight: 700, fontSize: 22, letterSpacing: "0.06em" }}>T···Mobile</div>
      <div style={{ ...cell, fontWeight: 600, fontSize: 26 }}>Microsoft</div>
      <div style={cell}>
        <span style={{ color: "#FF0033", fontWeight: 800, fontSize: 28, marginRight: 6 }}>7</span>
        <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.01em" }}>ProSiebenSat.1</span>
      </div>
      <div style={{ ...cell, fontWeight: 700, fontSize: 22, letterSpacing: "0.05em" }}>VIASAT</div>
      <div style={{ ...cell, fontFamily: "var(--font-mark)", fontWeight: 700, letterSpacing: "0.08em", fontSize: 28 }}>RH</div>
      <div style={{ ...cell, color: "#06AC38", fontWeight: 700, fontSize: 20 }}>PagerDuty</div>
      <div style={{ ...cell, color: "#cc0000", fontWeight: 800, fontSize: 28, letterSpacing: "-0.04em" }}>HONDA</div>
      <div style={{
        ...cell,
        background: "linear-gradient(#01FFF0, #29B6CA)",
        color: "#053F40",
        borderRadius: 14,
        fontWeight: 700,
        fontSize: 22,
      }}>eightTV</div>
    </div>
  );
};

window.CustomersSection = function CustomersSection() {
  const [active, setActive] = React.useState(0);
  return (
    <section id="customers" style={{
      width: "100%",
      background: "#000",
      padding: "100px 0 100px",
      display: "flex",
      flexDirection: "column",
      gap: 72,
      alignItems: "center",
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 48,
        alignItems: "center",
      }}>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: 40,
          lineHeight: 1,
          letterSpacing: "0.040em",
          color: "#fff",
          margin: 0,
        }}>Customers</h2>
        <TestimonialCard {...TESTIMONIALS[active]} />
        {/* Carousel dots */}
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i}
                    onClick={() => setActive(i)}
                    aria-label={"Testimonial " + (i + 1)}
                    style={{
                      width: 14, height: 14, borderRadius: "50%",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      background: i === active ? "#fff" : "rgba(255,255,255,0.32)",
                      transition: "background 200ms ease",
                    }} />
          ))}
        </div>
      </div>
      <ClientGrid />
    </section>
  );
};
