import { HTMLAttributes } from "react";
import styles from "./Eyebrow.module.css";

export interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  /** Color theme — light keeps the original 48% black; dark uses 48% white. */
  theme?: "light" | "dark";
}

export function Eyebrow({ theme = "dark", className, children, ...rest }: EyebrowProps) {
  return (
    <span className={[styles.root, styles[theme], className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </span>
  );
}
