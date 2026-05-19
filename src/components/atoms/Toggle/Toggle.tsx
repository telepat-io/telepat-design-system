import { ReactNode, useId, useState } from "react";
import styles from "./Toggle.module.css";

export interface ToggleProps {
  /** Primary label rendered next to the switch. */
  label?: ReactNode;
  /** Helper text below the label. */
  sub?: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  /** If true, renders only the switch with no row chrome. */
  compact?: boolean;
  id?: string;
}

export function Toggle({
  label,
  sub,
  checked,
  defaultChecked = false,
  onChange,
  disabled,
  className,
  compact = false,
  id,
}: ToggleProps) {
  const generated = useId();
  const inputId = id ?? generated;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = useState(defaultChecked);
  const on = isControlled ? checked : internal;

  const flip = () => {
    if (disabled) return;
    if (!isControlled) setInternal((v) => !v);
    onChange?.(!on);
  };

  const Switch = (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      id={inputId}
      onClick={flip}
      disabled={disabled}
      className={[styles.switch, on && styles.on].filter(Boolean).join(" ")}
    />
  );

  if (compact) return Switch;

  return (
    <div className={[styles.row, disabled && styles.disabled, className].filter(Boolean).join(" ")}>
      <label htmlFor={inputId} className={styles.text}>
        {label && <span className={styles.name}>{label}</span>}
        {sub && <span className={styles.sub}>{sub}</span>}
      </label>
      {Switch}
    </div>
  );
}
