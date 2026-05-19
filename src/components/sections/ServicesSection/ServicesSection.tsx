import { ReactNode } from "react";
import styles from "./ServicesSection.module.css";
import { ServiceRow, ServiceRowProps } from "../../molecules/ServiceRow/ServiceRow";
import imgPhone from "../../../assets/img-phone.png?url";
import imgCharacter from "../../../assets/img-ai-character.png?url";
import imgSecurity from "../../../assets/img-security.png?url";

export interface ServicesSectionProps {
  title?: ReactNode;
  services?: ServiceRowProps[];
  className?: string;
}

const DEFAULTS: ServiceRowProps[] = [
  {
    title: "AI Software Development Services",
    items: [
      "AI Strategy Development & Use Case Identification",
      "AI-Driven Mobile & Web Application Development",
      "Integration of Pre-Trained Models into existing Applications",
      "AI Model Fine-Tuning and Optimization for specific verticals",
    ],
    image: imgPhone,
    flip: false,
  },
  {
    title: "AI Visuals & Voice",
    items: [
      "AI Product and e-Com Photography",
      "AI-Generated Video Animations and Commercials",
      "Autonomous, lifelike Virtual Personas for Social Media engagement",
      "Speech Recognition and Synthesis",
    ],
    image: imgCharacter,
    flip: true,
  },
  {
    title: "Security & Infrastructure for AI software",
    items: [
      "AI Model Security Audits & Implementation of Security Solutions",
      "AI Compliance with AI Regulations & Data Security Standards",
      "Cloud Infrastructure Setup & AI Model Hosting Management",
      "Cloud-Based AI Solution Deployment",
    ],
    image: imgSecurity,
    flip: false,
  },
];

export function ServicesSection({ title = "Services", services = DEFAULTS, className }: ServicesSectionProps) {
  return (
    <section id="services" className={[styles.section, className].filter(Boolean).join(" ")}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.rows}>
        {services.map((s, i) => <ServiceRow key={i} {...s} />)}
      </div>
    </section>
  );
}
