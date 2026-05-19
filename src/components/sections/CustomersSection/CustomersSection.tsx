import { ReactNode } from "react";
import styles from "./CustomersSection.module.css";
import { TestimonialCarousel } from "../../molecules/TestimonialCarousel/TestimonialCarousel";
import { ClientGrid } from "../../molecules/ClientGrid/ClientGrid";
import { TestimonialCardProps } from "../../molecules/TestimonialCard/TestimonialCard";
import { ClientLogoSpec } from "../../molecules/ClientGrid/ClientGrid";

export interface CustomersSectionProps {
  title?: ReactNode;
  testimonials?: TestimonialCardProps[];
  clients?: ClientLogoSpec[];
  className?: string;
}

const DEFAULT_TESTIMONIALS: TestimonialCardProps[] = [
  {
    quote: "Overall, I would say that we wouldn't have been able to generate this kind of success if Telepat wasn't there.",
    name: "Sarah Schaaf",
    title: "CEO, Headnote",
    initials: "SS",
  },
  {
    quote: "Telepat's team plugged in like they had been with us for years — strategy, ship, iterate.",
    name: "Marcus Lee",
    title: "VP Engineering",
    initials: "ML",
  },
  {
    quote: "The virtual photoshoots cut our production cycle from weeks to a single afternoon. Wild.",
    name: "Ana Petrova",
    title: "Creative Director",
    initials: "AP",
  },
];

export function CustomersSection({ title = "Customers", testimonials = DEFAULT_TESTIMONIALS, clients, className }: CustomersSectionProps) {
  return (
    <section id="customers" className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.testimonialBlock}>
        <h2 className={styles.title}>{title}</h2>
        <TestimonialCarousel items={testimonials} />
      </div>
      <ClientGrid clients={clients} />
    </section>
  );
}
