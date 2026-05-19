import { InputHTMLAttributes, ReactNode, forwardRef, useId, useState } from "react";
import styles from "./Slider.module.css";

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: ReactNode;
  /** Show the numeric value to the right of the track. Defaults to true. */
  showValue?: boolean;
  /** Format function for the displayed value. */
  formatValue?: (v: number) => string;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(function Slider(
  { label, showValue = true, formatValue, id, value, defaultValue, onChange, min = 0, max = 100, ...rest },
  ref
) {
  const generated = useId();
  const inputId = id ?? generated;
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState<number>(Number(defaultValue ?? Math.round((Number(min) + Number(max)) / 2)));
  const current = isControlled ? Number(value) : internal;

  return (
    <div className={styles.field}>
      {label && <label htmlFor={inputId} className={styles.label}>{label}</label>}
      <div className={styles.row}>
        <input
          ref={ref}
          id={inputId}
          type="range"
          min={min}
          max={max}
          className={styles.input}
          value={current}
          onChange={(e) => {
            const v = Number(e.target.value);
            if (!isControlled) setInternal(v);
            onChange?.(e);
          }}
          {...rest}
        />
        {showValue && <span className={styles.val}>{formatValue ? formatValue(current) : current}</span>}
      </div>
    </div>
  );
});
