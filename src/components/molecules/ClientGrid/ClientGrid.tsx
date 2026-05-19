import { ReactNode } from "react";
import styles from "./ClientGrid.module.css";

export interface ClientLogoSpec {
  name: string;
  /** Visual representation (text fragment or SVG/img). */
  display: ReactNode;
}

export interface ClientGridProps {
  /** Override the default client list. */
  clients?: ClientLogoSpec[];
  /** Grid columns. Defaults to 4 (matches the source 4×2 grid for 8 clients). */
  columns?: number;
  /** Opacity applied to the whole grid. The source uses 0.72. */
  opacity?: number;
  className?: string;
}

const DEFAULT_CLIENTS: ClientLogoSpec[] = [
  {
    name: "T-Mobile",
    display: <span style={{ fontFamily: "var(--font-mark)", fontWeight: 700, fontSize: 22, letterSpacing: "0.06em" }}>T···Mobile</span>,
  },
  {
    name: "Microsoft",
    display: <span style={{ fontWeight: 600, fontSize: 26 }}>Microsoft</span>,
  },
  {
    name: "ProSiebenSat.1",
    display: (
      <>
        <span style={{ color: "#FF0033", fontWeight: 800, fontSize: 28, marginRight: 6 }}>7</span>
        <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.01em" }}>ProSiebenSat.1</span>
      </>
    ),
  },
  {
    name: "Viasat",
    display: <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: "0.05em" }}>VIASAT</span>,
  },
  {
    name: "RH",
    display: <span style={{ fontFamily: "var(--font-mark)", fontWeight: 700, letterSpacing: "0.08em", fontSize: 28 }}>RH</span>,
  },
  {
    name: "PagerDuty",
    display: <span style={{ color: "#06AC38", fontWeight: 700, fontSize: 20 }}>PagerDuty</span>,
  },
  {
    name: "Honda",
    display: <span style={{ color: "#cc0000", fontWeight: 800, fontSize: 28, letterSpacing: "-0.04em" }}>HONDA</span>,
  },
  {
    name: "eightTV",
    display: (
      <span
        style={{
          background: "linear-gradient(#01FFF0, #29B6CA)",
          color: "#053F40",
          borderRadius: 14,
          fontWeight: 700,
          fontSize: 22,
          padding: "4px 14px",
        }}
      >
        eightTV
      </span>
    ),
  },
];

export function ClientGrid({ clients = DEFAULT_CLIENTS, columns = 4, opacity = 0.72, className }: ClientGridProps) {
  return (
    <div
      className={[styles.grid, className].filter(Boolean).join(" ")}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, opacity }}
      role="list"
      aria-label="Selected clients"
    >
      {clients.map((c) => (
        <div key={c.name} role="listitem" aria-label={c.name} className={styles.cell}>
          {c.display}
        </div>
      ))}
    </div>
  );
}
