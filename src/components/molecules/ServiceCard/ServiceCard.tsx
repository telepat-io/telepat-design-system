import { ReactNode } from "react";
import styles from "./ServiceCard.module.css";

export interface ServiceCardProps {
  title: ReactNode;
  /** Bullet list or any block content rendered below the title. */
  description: ReactNode;
  image: string;
  imageAlt?: string;
  className?: string;
}

export function ServiceCard({ title, description, image, imageAlt = "", className }: ServiceCardProps) {
  return (
    <article className={[styles.card, className].filter(Boolean).join(" ")}>
      <div className={styles.text}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.desc}>{description}</div>
      </div>
      <div className={styles.imageWrap}>
        <img src={image} alt={imageAlt} className={styles.image} />
      </div>
    </article>
  );
}
