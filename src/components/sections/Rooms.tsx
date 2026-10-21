import { LazyImg } from "@/components/LazyImg";
import { pic } from "@/lib/img";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { rooms } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { WaGlyph } from "@/components/WhatsAppFab";
import { waLink, waMessages } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
const detailImg = pic("detail");
const majlisImg = pic("majlis");
const suiteImg = pic("suite");

const images = [detailImg, suiteImg, majlisImg];

export function Rooms() {
  const { lang } = useLanguage();
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Works in RTL too: scrollLeft is negative there, so use its magnitude.
  const onScroll = () => {
    const rail = railRef.current;
    const card = rail?.firstElementChild as HTMLElement | null;
    if (!rail || !card) return;
    const step = card.offsetWidth + 16;
    setActive(Math.min(rooms.items.length - 1, Math.round(Math.abs(rail.scrollLeft) / step)));
  };

  return (
    <section id="rooms" className="scroll-mt-24 bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow={rooms.eyebrow[lang]} title={rooms.title[lang]} text={rooms.text[lang]} />

        <div
          ref={railRef}
          onScroll={onScroll}
          role="region"
          aria-label={rooms.title[lang]}
          tabIndex={0}
          className="swipe-rail -mx-5 mt-12 flex gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 md:mx-0 md:mt-14 md:grid md:grid-cols-2 md:gap-7 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
        >
          {rooms.items.map((room, index) => (
            <Reveal key={room.name.en} delay={index * 90} className="w-[84%] shrink-0 md:w-auto">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card transition-shadow duration-500 hover:shadow-[0_35px_70px_-45px_rgba(60,40,20,0.6)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <LazyImg
                    {...images[index]}
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 84vw"
                    alt={room.name[lang]}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-4 rounded-full bg-background/90 px-3 py-1.5 text-[0.65rem] font-medium tracking-wide text-ink ltr:left-4 rtl:right-4">
                    {room.size[lang]}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl text-ink">{room.name[lang]}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {room.text[lang]}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {room.tags.map((tag) => (
                      <li
                        key={tag.en}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-[0.68rem] text-muted-foreground"
                      >
                        {tag[lang]}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t border-border pt-5">
                    <a
                      href={waLink(waMessages.room(room.name[lang], lang))}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-ink"
                    >
                      <WaGlyph className="size-4" />
                      {rooms.request[lang]}
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brass-deep transition-colors hover:text-ink"
                    >
                      {rooms.details[lang]}
                      <ArrowUpRight className="size-4" aria-hidden />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-center gap-2 md:hidden" aria-hidden>
          {rooms.items.map((room, index) => (
            <span
              key={room.name.en}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === active ? "w-6 bg-brass-deep" : "w-1.5 bg-ink/20",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
