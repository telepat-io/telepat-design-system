import { SelectHTMLAttributes, ReactNode, forwardRef, useId } from "react";
import styles from "./Select.module.css";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: ReactNode;
  required?: boolean;
  options?: SelectOption[];
  error?: boolean;
  hint?: ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, required, options, error, hint, id, className, children, ...rest },
  ref
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const cls = [styles.select, error && styles.error, className].filter(Boolean).join(" ");
  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.req}>*</span>}
        </label>
      )}
      <select ref={ref} id={inputId} className={cls} {...rest}>
        {options ? options.map((o) => (
          <option key={o.value} value={o.value} disabled={o.disabled}>{o.label}</option>
        )) : children}
      </select>
      {hint && <span className={[styles.hint, error && styles.hintErr].filter(Boolean).join(" ")}>{hint}</span>}
    </div>
  );
});
