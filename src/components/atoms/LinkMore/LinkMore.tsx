import { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./LinkMore.module.css";

export interface LinkMoreProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
}

export function LinkMore({ children = "View more", className, ...rest }: LinkMoreProps) {
  return (
    <a className={[styles.link, className].filter(Boolean).join(" ")} {...rest}>
      <span className={styles.text}>{children}</span>
      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" className={styles.chev}>
        <path d="M1 1 L7 7 L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </a>
  );
}
