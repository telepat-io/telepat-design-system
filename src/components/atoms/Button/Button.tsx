import { ButtonHTMLAttributes, forwardRef } from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "outline" | "dark";
export type ButtonSize = "md" | "lg";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Sets type="submit" by default for primary, "button" otherwise. Override with this. */
  type?: "button" | "submit" | "reset";
  /** Show a green confirmation state (e.g. "Sent ✓"). */
  success?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "lg", type, success = false, className, children, ...rest },
  ref
) {
  const cls = [
    styles.root,
    styles[variant],
    styles[`size-${size}`],
    success && styles.success,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      ref={ref}
      type={type ?? (variant === "primary" ? "submit" : "button")}
      className={cls}
      {...rest}
    >
      {children}
    </button>
  );
});
