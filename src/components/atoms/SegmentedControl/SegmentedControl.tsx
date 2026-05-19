import { ReactNode, useId, useState } from "react";
import styles from "./SegmentedControl.module.css";

export interface SegmentedOption {
  label: ReactNode;
  value: string;
}

export interface SegmentedControlProps {
  options: SegmentedOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  className?: string;
  ariaLabel?: string;
}

export function SegmentedControl({
  options,
  value,
  defaultValue,
  onChange,
  name,
  className,
  ariaLabel,
}: SegmentedControlProps) {
  const generated = useId();
  const groupName = name ?? generated;
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue ?? options[0]?.value);
  const active = isControlled ? value : internal;

  const handle = (v: string) => {
    if (!isControlled) setInternal(v);
    onChange?.(v);
  };

  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} role="radiogroup" aria-label={ariaLabel}>
      {options.map((o) => {
        const id = `${groupName}-${o.value}`;
        return (
          <span key={o.value} className={styles.cell}>
            <input
              type="radio"
              name={groupName}
              id={id}
              value={o.value}
              checked={active === o.value}
              onChange={() => handle(o.value)}
              className={styles.input}
            />
            <label htmlFor={id} className={styles.label}>{o.label}</label>
          </span>
        );
      })}
    </div>
  );
}
