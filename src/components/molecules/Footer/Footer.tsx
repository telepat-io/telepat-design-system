import styles from "./Footer.module.css";
import { Nav, NavItem } from "../Nav/Nav";

export interface FooterProps {
  items?: NavItem[];
  /** Hide the top divider line if false. Defaults true. */
  divider?: boolean;
  className?: string;
}

export function Footer({ items, divider = true, className }: FooterProps) {
  return (
    <footer className={[styles.root, divider && styles.withDivider, className].filter(Boolean).join(" ")}>
      <Nav items={items} />
    </footer>
  );
}
