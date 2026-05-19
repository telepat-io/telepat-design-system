import { ButtonHTMLAttributes, ReactNode, useState } from "react";
import styles from "./Chip.module.css";

export interface ChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value"> {
  active?: boolean;
  children: ReactNode;
}

export function Chip({ active = false, className, children, ...rest }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={[styles.chip, active && styles.on, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}

export interface ChipsProps {
  /** All available chip options. */
  options: { label: ReactNode; value: string }[];
  /** Currently active values. If omitted, manages state internally. */
  value?: string[];
  defaultValue?: string[];
  onChange?: (next: string[]) => void;
  className?: string;
}

export function Chips({ options, value, defaultValue = [], onChange, className }: ChipsProps) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState<string[]>(defaultValue);
  const active = isControlled ? value : internal;

  const toggle = (v: string) => {
    const next = active.includes(v) ? active.filter((x) => x !== v) : [...active, v];
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  return (
    <div className={[styles.chips, className].filter(Boolean).join(" ")}>
      {options.map((o) => (
        <Chip key={o.value} active={active.includes(o.value)} onClick={() => toggle(o.value)}>
          {o.label}
        </Chip>
      ))}
    </div>
  );
}
