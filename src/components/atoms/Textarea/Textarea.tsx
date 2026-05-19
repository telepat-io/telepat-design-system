import { TextareaHTMLAttributes, ReactNode, forwardRef, useId } from "react";
import styles from "./Textarea.module.css";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode;
  required?: boolean;
  error?: boolean;
  hint?: ReactNode;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, required, error, hint, id, className, rows = 3, ...rest },
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
      <textarea ref={ref} id={inputId} rows={rows} className={cls} {...rest} />
      {hint && <span className={[styles.hint, error && styles.hintErr].filter(Boolean).join(" ")}>{hint}</span>}
    </div>
  );
});
