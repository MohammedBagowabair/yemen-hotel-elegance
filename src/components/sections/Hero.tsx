import { heroFrameAvifSrcSet, heroFrameSizes, heroFrameWebpSrcSet } from "@/lib/img";
import { Clock, Coffee, MapPin, Plane } from "lucide-react";
import { hero, highlights } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { waLink, waMessages } from "@/lib/whatsapp";
import { T } from "@/components/T";
import { WaGlyph } from "@/components/WhatsAppFab";

const highlightIcons = [MapPin, Plane, Clock, Coffee];

// Replaces the old search bar: key facts at a glance plus a WhatsApp availability request.
function HighlightStrip() {
  const { lang } = useLanguage();
  return (
    <div className="w-full rounded-3xl border border-brass/25 bg-card p-2 shadow-[0_24px_60px_-40px_rgba(90,60,20,0.45)]">
      <ul aria-label={highlights.label[lang]} className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-4 lg:grid-cols-2">
        {highlights.items.map((item, index) => {
          const Icon = highlightIcons[index] ?? MapPin;
          return (
            <li key={item.title.en} className="flex items-start gap-3 px-3 py-3 sm:px-4">
              <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-brass/45 bg-[#F7F1E8] text-brass-deep">
                <Icon className="size-4" aria-hidden />
              </span>
              <span className="min-w-0 leading-tight">
                <span className="block text-sm font-medium text-ink"><T v={item.title} /></span>
                <span className="mt-1 block text-xs text-ink/70"><T v={item.text} /></span>
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
        <T v={highlights.cta} />
      </a>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[linear-gradient(to_bottom,#F7F1E8_0%,#F7F1E8_82%,var(--background)_100%)] text-ink"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 size-[28rem] rounded-full bg-brass/10 blur-3xl ltr:-right-32 rtl:-left-32"
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pt-28 pb-12 sm:px-8 lg:min-h-[100svh] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pt-32 lg:pb-16">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-[0.7rem] tracking-[0.2em] text-brass-deep uppercase">
            <span aria-hidden className="rule-brass" />
            <T v={hero.eyebrow} />
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.12] text-ink sm:text-6xl lg:text-[4.25rem]">
            <T v={hero.title} />
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg">
            <T v={hero.text} />
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              <T v={hero.primary} />
            </a>
            <a
              href="#about"
              className="rounded-full border border-ink/25 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-brass-deep hover:text-brass-deep"
            >
              <T v={hero.secondary} />
            </a>
          </div>
          <div className="mt-10 hidden lg:block">
            <HighlightStrip />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none">
          {/* Arched frame inspired by Sana'a qamariya windows */}
          <div
            aria-hidden
            className="absolute -inset-3 rounded-t-[999px] rounded-b-[2rem] border border-brass/40 sm:-inset-4"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[1.75rem] bg-sand shadow-[0_40px_80px_-50px_rgba(90,60,20,0.6)]">
            <picture>
              <source type="image/avif" srcSet={heroFrameAvifSrcSet} sizes={heroFrameSizes} />
              <img
                src={`${import.meta.env.BASE_URL}img/hero-p-720.webp`}
                srcSet={heroFrameWebpSrcSet}
                sizes={heroFrameSizes}
                alt=""
                aria-hidden
                fetchPriority="high"
                decoding="async"
                width={870}
                height={1088}
                className="hero-drift size-full object-cover"
              />
            </picture>
          </div>
          <span
            aria-hidden
            className="absolute -bottom-5 grid size-14 place-items-center rounded-full border border-brass/50 bg-[#F7F1E8] text-brass-deep ltr:left-6 rtl:right-6"
          >
            <span className="block size-3 rotate-45 bg-brass" />
          </span>
        </div>

        <div className="lg:hidden">
          <HighlightStrip />
        </div>
      </div>
    </section>
  );
}
