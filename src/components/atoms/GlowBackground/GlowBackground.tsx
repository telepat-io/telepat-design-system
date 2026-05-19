import { HTMLAttributes, ReactNode, CSSProperties } from "react";
import styles from "./GlowBackground.module.css";

export interface GlowBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether to render the top-right blue glow. Defaults to true. */
  showBlue?: boolean;
  /** Whether to render the bottom-left magenta glow. Defaults to true. */
  showMagenta?: boolean;
  /** Background color behind the glows. Defaults to the brand black. */
  background?: string;
  children?: ReactNode;
}

export function GlowBackground({
  showBlue = true,
  showMagenta = true,
  background,
  className,
  style,
  children,
  ...rest
}: GlowBackgroundProps) {
  const composedStyle: CSSProperties = {
    ...(background ? { background } : null),
    ...style,
  };
  return (
    <div
      className={[
        styles.root,
        showBlue && styles.blue,
        showMagenta && styles.magenta,
        className,
      ].filter(Boolean).join(" ")}
      style={composedStyle}
      {...rest}
    >
      {children}
    </div>
  );
}
