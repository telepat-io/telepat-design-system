import { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./NavLink.module.css";

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Active marker — when true, the link uses the hover color permanently. */
  active?: boolean;
  /** Light variant for inverted surfaces (nav over white). */
  light?: boolean;
  children: ReactNode;
}

export function NavLink({ active, light, className, children, ...rest }: NavLinkProps) {
  return (
    <a
      className={[styles.link, light && styles.light, active && styles.active, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </a>
  );
}
