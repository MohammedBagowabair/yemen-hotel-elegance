import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

export function Testimonials() {
  const { lang } = useLanguage();

  return (
    <section className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow={testimonials.eyebrow[lang]} title={testimonials.title[lang]} />

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {testimonials.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 90}>
              <figure className="flex h-full flex-col rounded-3xl border border-border/70 bg-card p-7">
                <Quote className="size-7 text-brass" aria-hidden />
                <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed text-ink">
                  {item.quote[lang]}
                </blockquote>
                <div className="mt-6 flex items-center gap-1 text-brass" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <figcaption className="mt-4 border-t border-border pt-4">
                  <span className="block text-sm font-semibold text-ink">{item.name}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {item.role[lang]}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
