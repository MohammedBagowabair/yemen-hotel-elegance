import { ArrowUpRight } from "lucide-react";
import { rooms } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import detailImg from "@/assets/detail.jpg";
import majlisImg from "@/assets/majlis.jpg";
import suiteImg from "@/assets/suite.jpg";

const images = [detailImg, suiteImg, majlisImg];

export function Rooms() {
  const { lang } = useLanguage();

  return (
    <section id="rooms" className="scroll-mt-24 bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow={rooms.eyebrow[lang]} title={rooms.title[lang]} text={rooms.text[lang]} />

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {rooms.items.map((room, index) => (
            <Reveal key={room.name.en} delay={index * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card transition-shadow duration-500 hover:shadow-[0_35px_70px_-45px_rgba(60,40,20,0.6)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={images[index]}
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

                  <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                    <p className="text-sm text-muted-foreground">
                      {rooms.from[lang]}{" "}
                      <span className="font-display text-2xl text-ink">${room.price}</span>{" "}
                      {rooms.perNight[lang]}
                    </p>
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
      </div>
    </section>
  );
}
