import {
  Bell,
  Briefcase,
  Car,
  Dumbbell,
  Droplets,
  Plane,
  Waves,
  Wifi,
} from "lucide-react";
import { amenities } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

const icons = [Waves, Droplets, Wifi, Plane, Bell, Dumbbell, Car, Briefcase];

export function Amenities() {
  const { lang } = useLanguage();

  return (
    <section id="amenities" className="scroll-mt-24 bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow={amenities.eyebrow[lang]}
          title={amenities.title[lang]}
          tone="dark"
          align="center"
        />

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-foreground/12 bg-ink-foreground/12 sm:mt-14 lg:grid-cols-4">
          {amenities.items.map((item, index) => {
            const Icon = icons[index] ?? Waves;
            return (
              <Reveal key={item.name.en} delay={index * 60}>
                <div className="group h-full bg-ink p-4 transition-colors duration-500 hover:bg-primary/20 sm:p-7">
                  <span className="grid size-9 place-items-center rounded-full sm:size-11 border border-brass/40 text-brass transition-colors group-hover:bg-brass group-hover:text-ink">
                    <Icon className="size-4 sm:size-5" aria-hidden />
                  </span>
                  <h3 className="mt-3 font-display text-base leading-snug text-ink-foreground sm:mt-5 sm:text-xl">
                    {item.name[lang]}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-foreground/65 sm:mt-2 sm:text-sm sm:text-ink-foreground/60">{item.text[lang]}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
