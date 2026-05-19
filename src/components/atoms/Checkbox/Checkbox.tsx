import { InputHTMLAttributes, ReactNode, forwardRef, useId } from "react";
import styles from "./Checkbox.module.css";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, id, className, ...rest },
  ref
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <label htmlFor={inputId} className={[styles.root, className].filter(Boolean).join(" ")}>
      <input ref={ref} id={inputId} type="checkbox" className={styles.input} {...rest} />
      <span className={styles.box}>
        <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
          <path d="M1 4.5 L4 7.5 L10 1.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {label && <span className={styles.text}>{label}</span>}
    </label>
  );
});
