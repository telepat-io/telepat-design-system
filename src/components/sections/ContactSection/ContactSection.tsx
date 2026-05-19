import { FormEvent, ReactNode, useState } from "react";
import styles from "./ContactSection.module.css";
import { TextInput } from "../../atoms/TextInput/TextInput";
import { Textarea } from "../../atoms/Textarea/Textarea";
import { Button } from "../../atoms/Button/Button";
import { Footer } from "../../molecules/Footer/Footer";

export interface ContactSectionProps {
  title?: ReactNode;
  description?: ReactNode;
  /** Called when the user submits. Receives the form values; section handles the "Sent ✓" UX. */
  onSubmit?: (values: { name: string; email: string; company: string; message: string }) => void;
  /** Hide the embedded footer. */
  showFooter?: boolean;
  className?: string;
}

export function ContactSection({
  title = "Get in touch",
  description = "Let's collaborate to turn your vision into reality. Fill out the form below, and we'll get back to you shortly.",
  onSubmit,
  showFooter = true,
  className,
}: ContactSectionProps) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (k: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handle = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.(form);
    setSent(true);
    setTimeout(() => setSent(false), 2400);
  };

  return (
    <section id="contact" className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.desc}>{description}</p>}
        </div>
        <form onSubmit={handle} className={styles.form}>
          <TextInput label="Name"    value={form.name}    onChange={(e) => update("name")(e.target.value)} />
          <TextInput label="Email"   value={form.email}   onChange={(e) => update("email")(e.target.value)} type="email" />
          <TextInput label="Company" value={form.company} onChange={(e) => update("company")(e.target.value)} />
          <Textarea  label="Message" value={form.message} onChange={(e) => update("message")(e.target.value)} rows={4} />
          <div className={styles.submitWrap}>
            <Button variant="primary" success={sent} type="submit">
              {sent ? "Sent ✓" : "Send"}
            </Button>
          </div>
        </form>
      </div>
      {showFooter && (
        <div className={styles.footer}>
          <Footer />
        </div>
      )}
    </section>
  );
}
