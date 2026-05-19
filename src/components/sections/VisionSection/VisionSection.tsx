import { ReactNode } from "react";
import styles from "./VisionSection.module.css";
import visionBg from "../../../assets/img-vision-magnetic.png?url";

export interface VisionSectionProps {
  paragraphs?: ReactNode[];
  className?: string;
}

const DEFAULTS: ReactNode[] = [
  "Our vision is to lead the way in sustainable development by harnessing the power of AI to create innovative solutions that not only drive technological progress but also promote environmental stewardship and social responsibility.",
  "We aim to build a future where cutting-edge technology and sustainability go hand in hand, ensuring that growth today doesn't compromise the resources and well-being of tomorrow.",
];

const TINTS = ["var(--color-quote-pink)", "var(--color-quote-pinker)"];

export function VisionSection({ paragraphs = DEFAULTS, className }: VisionSectionProps) {
  return (
    <section id="vision" className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.bg} style={{ backgroundImage: `url(${visionBg})` }} aria-hidden />
      <div className={styles.eclipse} aria-hidden />
      <div className={styles.copy}>
        {paragraphs.map((p, i) => (
          <p key={i} className={styles.line} style={{ color: TINTS[i % TINTS.length] }}>{p}</p>
        ))}
      </div>
    </section>
  );
}
