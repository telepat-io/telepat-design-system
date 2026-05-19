import { useState } from "react";
import styles from "./TestimonialCarousel.module.css";
import { TestimonialCard, TestimonialCardProps } from "../TestimonialCard/TestimonialCard";

export interface TestimonialCarouselProps {
  items: TestimonialCardProps[];
  /** Card width. Falls through to the child component. */
  width?: number | string;
  className?: string;
  /** Controlled active index. */
  index?: number;
  /** Initial uncontrolled index. */
  defaultIndex?: number;
  onChange?: (index: number) => void;
}

export function TestimonialCarousel({
  items,
  width,
  className,
  index,
  defaultIndex = 0,
  onChange,
}: TestimonialCarouselProps) {
  const isControlled = index !== undefined;
  const [internal, setInternal] = useState(defaultIndex);
  const active = isControlled ? index : internal;
  const current = items[active] ?? items[0];

  const set = (i: number) => {
    if (!isControlled) setInternal(i);
    onChange?.(i);
  };

  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")}>
      <TestimonialCard {...current} width={width} />
      <div className={styles.dots} role="tablist" aria-label="Testimonials">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Testimonial ${i + 1}`}
            onClick={() => set(i)}
            className={[styles.dot, i === active && styles.dotActive].filter(Boolean).join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
