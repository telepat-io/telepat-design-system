import { InputHTMLAttributes, ReactNode, forwardRef, useId } from "react";
import styles from "./Radio.module.css";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { label, id, className, ...rest },
  ref
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <label htmlFor={inputId} className={[styles.root, className].filter(Boolean).join(" ")}>
      <input ref={ref} id={inputId} type="radio" className={styles.input} {...rest} />
      <span className={styles.box} />
      {label && <span className={styles.text}>{label}</span>}
    </label>
  );
});
