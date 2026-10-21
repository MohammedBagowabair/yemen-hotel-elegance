import { pic } from "@/lib/img";
import { gallery } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
const cityImg = pic("city");
const coffeeImg = pic("coffee");
const detailImg = pic("detail");
const diningImg = pic("dining");
const heroImg = pic("hero");
const spaImg = pic("spa");

const shots = [
  { src: heroImg, w: 1920, h: 1088, span: "sm:col-span-2 sm:row-span-2" },
  { src: detailImg, w: 912, h: 912, span: "" },
  { src: coffeeImg, w: 912, h: 912, span: "" },
  { src: spaImg, w: 1200, h: 800, span: "sm:col-span-2" },
  { src: diningImg, w: 1200, h: 800, span: "" },
  { src: cityImg, w: 1200, h: 800, span: "" },
];

export function Gallery() {
  const { lang } = useLanguage();

  return (
    <section id="gallery" className="scroll-mt-24 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow={gallery.eyebrow[lang]}
          title={gallery.title[lang]}
          text={gallery.text[lang]}
        />

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[210px] sm:grid-cols-4">
          {shots.map((shot, index) => (
            <Reveal
              key={index}
              delay={index * 60}
              className={cn("group relative overflow-hidden rounded-2xl", shot.span)}
            >
              <img
                {...shot.src}
                sizes="(min-width: 640px) 50vw, 100vw"
                alt={gallery.captions[index]?.[lang] ?? ""}
                loading="lazy"
                width={shot.w}
                height={shot.h}
                className="size-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="absolute bottom-0 text-xs text-background opacity-0 transition-opacity duration-500 group-hover:opacity-100 ltr:left-4 rtl:right-4">
                {gallery.captions[index]?.[lang]}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
