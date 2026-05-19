// Contact section — title + helper + 4-field form + Send pill. Footer
// directly underneath, mirrors the top nav.
window.Field = function Field({ name, label, multiline, value, onChange }) {
  const Tag = multiline ? "textarea" : "input";
  return (
    <label style={{
      display: "flex",
      flexDirection: "column",
      gap: 8,
    }}>
      <span style={{
        fontFamily: "var(--font-display)",
        fontWeight: 300,
        fontSize: 14,
        letterSpacing: "0.020em",
        color: "rgba(255,255,255,0.72)",
      }}>{label}</span>
      <Tag
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
        rows={multiline ? 3 : undefined}
        style={{
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.20)",
          borderRadius: 8,
          padding: "14px 16px",
          fontFamily: "var(--font-display)",
          fontWeight: 300,
          fontSize: 16,
          lineHeight: "24px",
          color: "#fff",
          outline: "none",
          resize: multiline ? "vertical" : "none",
          transition: "border-color 200ms ease",
        }}
        onFocus={e => e.currentTarget.style.borderColor = "rgba(174,161,255,0.6)"}
        onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.20)"}
      />
    </label>
  );
};

window.ContactSection = function ContactSection() {
  const [form, setForm] = React.useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = React.useState(false);

  const update = (k) => (v) => setForm(f => ({ ...f, [k]: v }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2400);
  };

  return (
    <section id="contact" style={{
      width: "100%",
      background: "#000",
      padding: "100px 0 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <div style={{
        width: 700,
        display: "flex",
        flexDirection: "column",
        gap: 48,
        alignItems: "center",
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
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
          }}>Get in touch</h2>
          <p style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: "0.020em",
            color: "rgba(255,255,255,0.80)",
            margin: 0,
            textAlign: "center",
            maxWidth: 360,
          }}>Let's collaborate to turn your vision into reality. Fill out the form below, and we'll get back to you shortly.</p>
        </div>

        <form onSubmit={onSubmit} style={{
          width: 500,
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}>
          <Field name="name"    label="Name"    value={form.name}    onChange={update("name")} />
          <Field name="email"   label="Email"   value={form.email}   onChange={update("email")} />
          <Field name="company" label="Company" value={form.company} onChange={update("company")} />
          <Field name="message" label="Message" multiline value={form.message} onChange={update("message")} />

          <button type="submit" style={{
            alignSelf: "center",
            background: sent ? "#06AC38" : "#5A3ECC",
            color: "#fff",
            border: "none",
            borderRadius: 16,
            padding: "13px 57px",
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: "0.040em",
            cursor: "pointer",
            transition: "background 200ms ease, transform 100ms ease",
          }}
          onMouseDown={e => e.currentTarget.style.transform = "translateY(1px)"}
          onMouseUp={e => e.currentTarget.style.transform = "translateY(0)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
            {sent ? "Sent ✓" : "Send"}
          </button>
        </form>
      </div>

      <div style={{ marginTop: 100, width: "100%", borderTop: "1px solid rgba(255,255,255,0.10)" }}>
        <Nav />
      </div>
    </section>
  );
};
