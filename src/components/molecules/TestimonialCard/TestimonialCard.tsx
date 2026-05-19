import { ReactNode } from "react";
import styles from "./TestimonialCard.module.css";

export interface TestimonialCardProps {
  quote: ReactNode;
  /** Display name beneath the quote. */
  name: ReactNode;
  /** Sub-line for title/role, e.g. "CEO, Headnote". */
  title?: ReactNode;
  /** Initials shown in the gradient avatar circle. Ignored if `avatar` is passed. */
  initials?: string;
  /** Optional avatar override (e.g. an <img>). */
  avatar?: ReactNode;
  /** Pixel width. Defaults to 880 to match the source landing page. */
  width?: number | string;
  className?: string;
}

export function TestimonialCard({
  quote,
  name,
  title,
  initials = "",
  avatar,
  width = 880,
  className,
}: TestimonialCardProps) {
  return (
    <article className={[styles.card, className].filter(Boolean).join(" ")} style={{ width }}>
      <div className={styles.avatarWrap}>
        {avatar ?? <div className={styles.avatar} aria-hidden>{initials}</div>}
      </div>
      <div className={styles.body}>
        <blockquote className={styles.quote}>&ldquo;{quote}&rdquo;</blockquote>
        <div className={styles.meta}>
          <div className={styles.name}>{name}</div>
          {title && <div className={styles.title}>{title}</div>}
        </div>
      </div>
    </article>
  );
}
