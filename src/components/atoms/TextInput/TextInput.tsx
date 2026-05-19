import { InputHTMLAttributes, ReactNode, forwardRef, useId } from "react";
import styles from "./TextInput.module.css";

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: ReactNode;
  /** Marks the label with a violet asterisk. */
  required?: boolean;
  /** Element rendered inside the input on the leading edge. Usually an icon. */
  iconLeft?: ReactNode;
  /** Short string rendered on the trailing edge (e.g. "USD"). */
  suffix?: ReactNode;
  /** Triggers the red error border. */
  error?: boolean;
  /** Helper text below the input. Switches to red when `error` is true. */
  hint?: ReactNode;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  { label, required, iconLeft, suffix, error, hint, id, className, ...rest },
  ref
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const inputCls = [
    styles.input,
    iconLeft && styles.withIcon,
    suffix && styles.withSuffix,
    error && styles.error,
    className,
  ].filter(Boolean).join(" ");

  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.req}>*</span>}
        </label>
      )}
      <div className={styles.wrap}>
        {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
        <input ref={ref} id={inputId} className={inputCls} {...rest} />
        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>
      {hint && (
        <span className={[styles.hint, error && styles.hintErr].filter(Boolean).join(" ")}>{hint}</span>
      )}
    </div>
  );
});
