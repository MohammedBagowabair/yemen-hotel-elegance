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

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink-foreground/12 bg-ink-foreground/12 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.items.map((item, index) => {
            const Icon = icons[index] ?? Waves;
            return (
              <Reveal key={item.name.en} delay={index * 60}>
                <div className="group h-full bg-ink p-7 transition-colors duration-500 hover:bg-primary/20">
                  <span className="grid size-11 place-items-center rounded-full border border-brass/40 text-brass transition-colors group-hover:bg-brass group-hover:text-ink">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-ink-foreground">
                    {item.name[lang]}
                  </h3>
                  <p className="mt-2 text-sm text-ink-foreground/60">{item.text[lang]}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
