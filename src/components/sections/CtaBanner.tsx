import { pic } from "@/lib/img";
import { Phone } from "lucide-react";
import { cta } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { Reveal } from "@/components/Reveal";
const cityImg = pic("city");

export function CtaBanner() {
  const { lang } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        {...cityImg}
        sizes="100vw"
        alt=""
        aria-hidden
        loading="lazy"
        width={1200}
        height={800}
        className="absolute inset-0 size-full object-cover opacity-45"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink/90 to-ink/40" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl leading-tight text-background sm:text-5xl">
            {cta.title[lang]}
          </h2>
          <p className="mt-5 leading-relaxed text-background/75">{cta.text[lang]}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-brass px-8 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              {cta.button[lang]}
            </a>
            <a
              href="tel:+9671234567"
              className="inline-flex items-center gap-2 text-sm text-background/80 transition-colors hover:text-brass"
            >
              <Phone className="size-4" aria-hidden />
              {cta.call[lang]} +967 1 234 567
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
