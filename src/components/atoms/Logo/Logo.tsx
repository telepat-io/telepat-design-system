import { CSSProperties } from "react";
import styles from "./Logo.module.css";

import markWhite from "../../../assets/logo-mark-white.svg";
import markGradient from "../../../assets/logo-mark-gradient-baked.svg";
import markBlack from "../../../assets/logo-mark-black.svg";
import wordmarkWhite from "../../../assets/logo-wordmark-white.svg";
import wordmarkBlack from "../../../assets/logo-wordmark-black.svg";

export type LogoVariant = "mark" | "wordmark" | "lockup";
export type LogoTheme = "white" | "black" | "gradient" | "mono-violet";

export interface LogoProps {
  /** What to render: just the mark, just the wordmark, or both side-by-side. */
  variant?: LogoVariant;
  /** Color treatment. `gradient` only applies to the mark; wordmark falls back to white. */
  theme?: LogoTheme;
  /** Height of the mark in px (lockup wordmark scales relative to this). */
  size?: number;
  /** Optional thin vertical divider between mark and wordmark (lockup only). */
  divider?: boolean;
  className?: string;
  style?: CSSProperties;
  /** Accessible label, defaults to "Telepat". */
  alt?: string;
}

const markSrc = (theme: LogoTheme): string => {
  if (theme === "gradient") return markGradient;
  if (theme === "black") return markBlack;
  return markWhite;
};
const wordSrc = (theme: LogoTheme): string => {
  if (theme === "black") return wordmarkBlack;
  return wordmarkWhite;
};

export function Logo({
  variant = "lockup",
  theme = "white",
  size = 28,
  divider = false,
  className,
  style,
  alt = "Telepat",
}: LogoProps) {
  const wordHeight = Math.round(size * 0.5);
  const isMono = theme === "mono-violet";

  const markEl = isMono ? (
    <span
      className={styles.maskMark}
      style={{ height: size, width: Math.round(size * 0.93) }}
      aria-hidden
    />
  ) : (
    <img
      src={markSrc(theme)}
      alt={variant === "mark" ? alt : ""}
      style={{ height: size, width: "auto", display: "block" }}
    />
  );

  const wordEl = isMono ? (
    <span
      className={styles.maskWord}
      style={{ height: wordHeight, width: Math.round(wordHeight * 2.85) }}
      aria-hidden
    />
  ) : (
    <img
      src={wordSrc(theme === "gradient" ? "white" : theme)}
      alt={variant === "wordmark" ? alt : ""}
      style={{ height: wordHeight, width: "auto", display: "block" }}
    />
  );

  if (variant === "mark") return <span className={[styles.root, className].filter(Boolean).join(" ")} style={style}>{markEl}</span>;
  if (variant === "wordmark") return <span className={[styles.root, className].filter(Boolean).join(" ")} style={style}>{wordEl}</span>;

  return (
    <span className={[styles.root, styles.lockup, className].filter(Boolean).join(" ")} style={style} role="img" aria-label={alt}>
      {markEl}
      {divider && <span className={styles.divider} style={{ height: Math.max(size - 4, 18) }} aria-hidden />}
      {wordEl}
    </span>
  );
}
