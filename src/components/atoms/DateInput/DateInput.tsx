import { InputHTMLAttributes, ReactNode, forwardRef, useId } from "react";
import styles from "./DateInput.module.css";

export interface DateInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: ReactNode;
  required?: boolean;
  error?: boolean;
  hint?: ReactNode;
}

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(function DateInput(
  { label, required, error, hint, id, className, ...rest },
  ref
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const cls = [styles.input, error && styles.error, className].filter(Boolean).join(" ");
  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.req}>*</span>}
        </label>
      )}
      <input ref={ref} id={inputId} type="date" className={cls} {...rest} />
      {hint && <span className={[styles.hint, error && styles.hintErr].filter(Boolean).join(" ")}>{hint}</span>}
    </div>
  );
});
