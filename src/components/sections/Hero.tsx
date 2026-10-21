import { ArrowDown, Clock, Coffee, MapPin, Plane } from "lucide-react";
import { hero, highlights } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { waLink, waMessages } from "@/lib/whatsapp";
import { WaGlyph } from "@/components/WhatsAppFab";
import heroImg from "@/assets/hero.jpg";

const highlightIcons = [MapPin, Plane, Clock, Coffee];

// Replaces the old search bar: key facts at a glance plus a WhatsApp availability request.
function HighlightStrip() {
  const { lang } = useLanguage();
  return (
    <div className="mx-auto w-full max-w-5xl rounded-3xl border border-background/15 bg-ink/55 p-2 backdrop-blur-md">
      <ul aria-label={highlights.label[lang]} className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl lg:grid-cols-4">
        {highlights.items.map((item, index) => {
          const Icon = highlightIcons[index] ?? MapPin;
          return (
            <li key={item.title.en} className="flex items-start gap-3 px-3 py-3 sm:px-4">
              <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-brass/45 text-brass">
                <Icon className="size-4" aria-hidden />
              </span>
              <span className="min-w-0 leading-tight">
                <span className="block text-sm font-medium text-background">{item.title[lang]}</span>
                <span className="mt-1 block text-xs text-background/65">{item.text[lang]}</span>
              </span>
            </li>
          );
        })}
      </ul>
      <a
        href={waLink(waMessages.general[lang])}
        target="_blank"
        rel="noopener"
        className="mt-2 flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-sm font-semibold tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <WaGlyph className="size-[18px]" />
        {highlights.cta[lang]}
      </a>
    </div>
  );
}

export function Hero() {
  const { lang } = useLanguage();

  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt=""
        aria-hidden
        fetchPriority="high"
        width={1920}
        height={1088}
        className="hero-drift absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/45 to-ink/85"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pt-32 pb-10 sm:px-8">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-[0.7rem] tracking-[0.2em] text-brass uppercase">
            <span aria-hidden className="rule-brass" />
            {hero.eyebrow[lang]}
          </p>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] text-background sm:text-6xl lg:text-7xl">
            {hero.title[lang]}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-background/80 sm:text-lg">
            {hero.text[lang]}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              {hero.primary[lang]}
            </a>
            <a
              href="#about"
              className="rounded-full border border-background/35 px-7 py-3.5 text-sm font-semibold text-background transition-colors hover:border-background hover:bg-background/10"
            >
              {hero.secondary[lang]}
            </a>
          </div>
        </div>

        <div className="mt-14">
          <HighlightStrip />
        </div>

        <a
          href="#about"
          className="scroll-cue mx-auto mt-10 flex flex-col items-center gap-2 text-[0.62rem] tracking-[0.3em] text-background/60 uppercase"
        >
          {hero.scroll[lang]}
          <ArrowDown className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
