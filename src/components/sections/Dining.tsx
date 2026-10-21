import { pic } from "@/lib/img";
import { Clock } from "lucide-react";
import { dining } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
const coffeeImg = pic("coffee");
const diningImg = pic("dining");
const majlisImg = pic("majlis");

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

        {/* Mobile: image cards with the copy set on a legible gradient. */}
        <div className="mt-10 space-y-5 lg:hidden">
          {dining.items.map((item, index) => (
            <Reveal key={item.name.en}>
              <article className="relative isolate overflow-hidden rounded-[1.75rem] border border-border/60 bg-ink">
                <img
                  {...images[index]}
                  sizes="100vw"
                  alt={item.name[lang]}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="absolute inset-0 -z-10 size-full object-cover"
                />
                <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/75 to-ink/0" />
                <div className="flex min-h-[26rem] flex-col justify-end p-6 pt-40">
                  <p className="flex items-center gap-3 text-[0.7rem] tracking-[0.2em] text-brass uppercase">
                    <span aria-hidden className="rule-brass" />
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-background">{item.name[lang]}</h3>
                  <p className="mt-2 inline-flex items-center gap-2 text-xs tracking-[0.12em] text-background/75 uppercase">
                    <Clock className="size-3.5 text-brass" aria-hidden />
                    {item.hours[lang]}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-background/85">{item.text[lang]}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex min-h-[44px] items-center self-start rounded-full border border-background/40 px-5 text-sm font-medium text-background transition-colors hover:border-brass hover:bg-brass/15"
                  >
                    {dining.reserve[lang]}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 hidden space-y-24 lg:block">
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
                  {...images[index]}
                  sizes="(min-width: 1024px) 50vw, 100vw"
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
                  {dining.reserve[lang]}
                </a>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
