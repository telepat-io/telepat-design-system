import { ReactNode } from "react";
import styles from "./Nav.module.css";
import { Logo } from "../../atoms/Logo";
import { NavLink } from "../../atoms/NavLink";

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavProps {
  /** Light variant for inverted (white) surfaces. */
  light?: boolean;
  /** Navigation items. Defaults to the five Telepat sections. */
  items?: NavItem[];
  /** Logo click target. */
  homeHref?: string;
  /** Render slot to the right of the links (e.g. a CTA). */
  trailing?: ReactNode;
  className?: string;
}

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Customers", href: "#customers" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export function Nav({ light = false, items = DEFAULT_ITEMS, homeHref = "#home", trailing, className }: NavProps) {
  return (
    <header className={[styles.root, className].filter(Boolean).join(" ")}>
      <a href={homeHref} className={styles.brand}>
        <Logo variant="lockup" theme={light ? "black" : "white"} size={28} />
      </a>
      <nav className={styles.links}>
        {items.map((it) => (
          <NavLink key={it.label} href={it.href} active={it.active} light={light}>
            {it.label}
          </NavLink>
        ))}
        {trailing}
      </nav>
    </header>
  );
}
