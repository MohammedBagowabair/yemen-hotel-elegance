import { Clock } from "lucide-react";
import { dining } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import coffeeImg from "@/assets/coffee.jpg";
import diningImg from "@/assets/dining.jpg";
import majlisImg from "@/assets/majlis.jpg";

const images = [diningImg, coffeeImg, majlisImg];

export function Dining() {
  const { lang } = useLanguage();

  return (
    <section id="dining" className="scroll-mt-24 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow={dining.eyebrow[lang]}
          title={dining.title[lang]}
          text={dining.text[lang]}
          align="center"
        />

        <div className="mt-16 space-y-16 sm:space-y-24">
          {dining.items.map((item, index) => (
            <div
              key={item.name.en}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal
                className={cn(
                  "overflow-hidden rounded-[2rem] border border-border/60",
                  index % 2 === 1 && "lg:order-2",
                )}
              >
                <img
                  src={images[index]}
                  alt={item.name[lang]}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="aspect-[4/3] size-full object-cover"
                />
              </Reveal>

              <Reveal delay={100} className={cn(index % 2 === 1 && "lg:order-1")}>
                <p className="flex items-center gap-3 text-[0.7rem] tracking-[0.2em] text-brass-deep uppercase">
                  <span aria-hidden className="rule-brass" />
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
                  {item.name[lang]}
                </h3>
                <p className="mt-3 inline-flex items-center gap-2 text-xs tracking-[0.12em] text-muted-foreground uppercase">
                  <Clock className="size-3.5 text-brass" aria-hidden />
                  {item.hours[lang]}
                </p>
                <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                  {item.text[lang]}
                </p>
                <a
                  href="#contact"
                  className="mt-7 inline-flex rounded-full border border-ink/25 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-brass hover:bg-brass/10"
                >
                  {dining.eyebrow[lang]} — {item.name[lang]}
                </a>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
