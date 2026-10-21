import { pic } from "@/lib/img";
import { about, stats } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { Reveal } from "@/components/Reveal";
const cityImg = pic("city");
const detailImg = pic("detail");

const statItems = [stats.rooms, stats.rooftop, stats.airport, stats.rating];

export function About() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-border/60">
            <img
              {...detailImg}
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt="Qamariya stained-glass window and gypsum frieze on an Old Sana'a façade"
              loading="lazy"
              width={912}
              height={912}
              className="size-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 w-48 overflow-hidden rounded-2xl border-4 border-background shadow-xl sm:w-64 ltr:-right-4 rtl:-left-4 lg:w-72">
            <img
              {...cityImg}
              sizes="(min-width: 1024px) 18rem, (min-width: 640px) 16rem, 12rem"
              alt="Tower houses of Old Sana'a at dawn"
              loading="lazy"
              width={1200}
              height={800}
              className="size-full object-cover"
            />
          </div>
          <div className="h-16" aria-hidden />
        </Reveal>

        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-[0.7rem] tracking-[0.2em] text-brass-deep uppercase">
              <span aria-hidden className="rule-brass" />
              {about.eyebrow[lang]}
            </p>
            <h2 className="mt-5 font-display text-3xl leading-tight text-ink sm:text-5xl">
              {about.title[lang]}
            </h2>
          </Reveal>

          <Reveal delay={90}>
            <p className="mt-6 leading-relaxed text-muted-foreground">{about.p1[lang]}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{about.p2[lang]}</p>
          </Reveal>

          <Reveal delay={160}>
            <blockquote className="mt-8 border-s-2 border-brass ps-5">
              <p className="font-display text-lg text-ink italic">“{about.quote[lang]}”</p>
              <footer className="mt-3 text-xs tracking-[0.15em] text-muted-foreground uppercase">
                {about.quoteBy[lang]}
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={220}>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {statItems.map((item) => (
                <div key={item.label.en}>
                  <dt className="font-display text-3xl text-brass-deep">{item.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                    {item.label[lang]}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
