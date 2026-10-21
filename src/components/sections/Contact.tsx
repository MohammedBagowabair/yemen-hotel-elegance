import { LazyImg } from "@/components/LazyImg";
import { pic } from "@/lib/img";
import { useState, type FormEvent, type ReactNode } from "react";
import { Check, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { contact } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
const cityImg = pic("city");

const inputClass =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink transition-colors placeholder:text-muted-foreground/70 focus:border-brass focus:outline-none";

function FieldRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs tracking-[0.14em] text-muted-foreground uppercase">{label}</span>
      {children}
    </label>
  );
}

export function Contact() {
  const { lang } = useLanguage();
  const [sent, setSent] = useState(false);
  const [today, setToday] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHead
            eyebrow={contact.eyebrow[lang]}
            title={contact.title[lang]}
            text={contact.text[lang]}
          />

          <Reveal delay={80}>
            <form onSubmit={submit} className="mt-10 grid gap-5 sm:grid-cols-2">
              <FieldRow label={contact.name[lang]}>
                <input required name="name" type="text" className={inputClass} />
              </FieldRow>
              <FieldRow label={contact.email[lang]}>
                <input required name="email" type="email" className={inputClass} />
              </FieldRow>
              <FieldRow label={contact.phone[lang]}>
                <input name="phone" type="tel" className={inputClass} />
              </FieldRow>
              <FieldRow label={contact.dates[lang]}>
                <span className="grid grid-cols-2 gap-2">
                  <input
                    required
                    name="arrival"
                    type="date"
                    min={today || undefined}
                    className={inputClass}
                  />
                  <input
                    required
                    name="departure"
                    type="date"
                    min={today || undefined}
                    className={inputClass}
                  />
                </span>
              </FieldRow>
              <div className="sm:col-span-2">
                <FieldRow label={contact.message[lang]}>
                  <textarea name="message" rows={4} className={inputClass} />
                </FieldRow>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Send className="size-4" aria-hidden />
                  {contact.send[lang]}
                </button>
                {sent ? (
                  <p
                    role="status"
                    className="inline-flex items-center gap-2 text-sm text-primary"
                  >
                    <Check className="size-4" aria-hidden />
                    {contact.sent[lang]}
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="overflow-hidden rounded-[2rem] border border-border/70">
            <div className="relative h-52">
              <LazyImg
                {...cityImg}
                sizes="(min-width: 1024px) 40vw, 100vw"
                alt="Old Sana'a seen from the hotel parapet"
                loading="lazy"
                width={1200}
                height={800}
                className="size-full object-cover"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent"
              />
              <MapPin className="absolute size-7 text-brass ltr:bottom-6 ltr:left-6 rtl:bottom-6 rtl:right-6" />
            </div>

            <ul className="divide-y divide-border bg-card">
              <li className="flex items-start gap-4 p-6">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brass-deep" aria-hidden />
                <div>
                  <span className="block text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    {contact.eyebrow[lang]}
                  </span>
                  <span className="mt-1 block text-sm text-ink">{contact.address[lang]}</span>
                </div>
              </li>
              <li className="flex items-start gap-4 p-6">
                <Phone className="mt-0.5 size-5 shrink-0 text-brass-deep" aria-hidden />
                <div>
                  <span className="block text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    {contact.phoneLabel[lang]}
                  </span>
                  <a href="tel:+9671234567" className="mt-1 block text-sm text-ink hover:text-brass-deep">
                    +967 1 234 567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 p-6">
                <Mail className="mt-0.5 size-5 shrink-0 text-brass-deep" aria-hidden />
                <div>
                  <span className="block text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    {contact.emailLabel[lang]}
                  </span>
                  <a
                    href="mailto:stay@daralsama.com"
                    className="mt-1 block text-sm text-ink hover:text-brass-deep"
                  >
                    stay@daralsama.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 p-6">
                <Clock className="mt-0.5 size-5 shrink-0 text-brass-deep" aria-hidden />
                <div>
                  <span className="block text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    {contact.hoursLabel[lang]}
                  </span>
                  <span className="mt-1 block text-sm text-ink">{contact.hours[lang]}</span>
                </div>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
