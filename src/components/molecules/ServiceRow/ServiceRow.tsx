import { ReactNode } from "react";
import styles from "./ServiceRow.module.css";

export interface ServiceRowProps {
  title: ReactNode;
  /** Bullet list contents. */
  items: ReactNode[];
  /** Image URL (typically generative AI imagery with a black background). */
  image: string;
  /** Place the image on the left and text on the right. */
  flip?: boolean;
  imageAlt?: string;
  className?: string;
}

export function ServiceRow({ title, items, image, flip = false, imageAlt = "", className }: ServiceRowProps) {
  const TextBlock = (
    <div className={styles.text}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.items}>
        {items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    </div>
  );
  const ImageBlock = (
    <div className={styles.imageWrap}>
      <img src={image} alt={imageAlt} className={styles.image} />
    </div>
  );
  return (
    <div className={[styles.row, className].filter(Boolean).join(" ")}>
      {flip ? ImageBlock : TextBlock}
      {flip ? TextBlock : ImageBlock}
    </div>
  );
}
