import { ReactNode } from "react";
import styles from "./Hero.module.css";
import { Nav } from "../../molecules/Nav/Nav";
import { LinkMore } from "../../atoms/LinkMore/LinkMore";
import heroBg from "../../../assets/hero-bg.png?url";

export interface HeroProps {
  /** Headline copy. Defaults to the Telepat tagline. */
  title?: ReactNode;
  /** Sub-headline. */
  subtitle?: ReactNode;
  /** Footer link text. Defaults to "View more". */
  ctaLabel?: ReactNode;
  ctaHref?: string;
  /** Render the top nav inline. Defaults true. */
  showNav?: boolean;
  className?: string;
}

export function Hero({
  title = (
    <>
      AI-Powered Software<br />Tailored for Innovators
    </>
  ),
  subtitle = "With over a decade of expertise Telepat is powering leading Silicon Valley startups and Fortune 500 companies with next gen software development.",
  ctaLabel = "View more",
  ctaHref = "#services",
  showNav = true,
  className,
}: HeroProps) {
  return (
    <section id="home" className={[styles.hero, className].filter(Boolean).join(" ")}>
      <div className={styles.topo} style={{ backgroundImage: `url(${heroBg})` }} aria-hidden />
      <div className={styles.glowBlue} aria-hidden />
      <div className={styles.glowMagenta} aria-hidden />
      {showNav && <Nav />}
      <div className={styles.content}>
        <div className={styles.haloWrap}>
          <div className={styles.haloLeft} aria-hidden />
          <div className={styles.haloRight} aria-hidden />
          <h1 className={styles.title}>{title}</h1>
        </div>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.cta}>
        <LinkMore href={ctaHref}>{ctaLabel}</LinkMore>
      </div>
    </section>
  );
}
