// Top navigation bar — fixed across the hero on the live site.
// Used both at the top of the page and mirrored in the footer.
window.Nav = function Nav({ light = false }) {
  const links = ["Home", "Services", "Customers", "Vision", "Contact"];
  const color = light ? "#000" : "#fff";
  const markFilter = light ? "invert(1)" : "none";

  return (
    <div style={{
      position: "relative",
      width: "100%",
      padding: "20px 48px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 5,
    }}>
      <a href="#top" style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        textDecoration: "none",
      }}>
        <img src="../../assets/logo-mark-white.svg" alt=""
             style={{ height: 28, filter: markFilter }} />
        <span style={{
          fontFamily: "var(--font-mark)",
          fontWeight: 500,
          fontSize: 23,
          letterSpacing: "0.080em",
          color: color,
          marginLeft: 4,
        }}>TELEPAT</span>
      </a>
      <nav style={{
        display: "flex",
        gap: 56,
        alignItems: "center",
      }}>
        {links.map(label => (
          <a key={label}
             href={"#" + label.toLowerCase()}
             style={{
               fontFamily: "var(--font-display)",
               fontWeight: 300,
               fontSize: 14,
               letterSpacing: "0.040em",
               color: color,
               textDecoration: "none",
               transition: "color 200ms ease",
             }}
             onMouseEnter={e => e.currentTarget.style.color = "#AEA1FF"}
             onMouseLeave={e => e.currentTarget.style.color = color}>
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
};
