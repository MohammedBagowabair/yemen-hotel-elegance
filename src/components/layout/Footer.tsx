import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { brand, contact, footer, nav } from "@/lib/content";
import { useLanguage } from "@/lib/language";

const explore = [
  { id: "about", label: nav.about },
  { id: "rooms", label: nav.rooms },
  { id: "dining", label: nav.dining },
  { id: "gallery", label: nav.gallery },
];

export function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span aria-hidden className="grid size-9 place-items-center rounded-full border border-brass/50">
                <span className="block size-2.5 rotate-45 bg-brass" />
              </span>
              <span className="font-display text-xl">{brand.name[lang]}</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-foreground/65">
              {footer.blurb[lang]}
            </p>
          </div>

          <div>
            <h3 className="eyebrow text-brass">{footer.links[lang]}</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {explore.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-ink-foreground/75 transition-colors hover:text-brass"
                  >
                    {item.label[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-brass">{footer.reach[lang]}</h3>
            <ul className="mt-5 space-y-4 text-sm text-ink-foreground/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden />
                <span>{contact.address[lang]}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden />
                <a href="tel:+9671234567" className="hover:text-brass">
                  +967 1 234 567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-brass" aria-hidden />
                <a href="mailto:stay@daralsama.com" className="hover:text-brass">
                  stay@daralsama.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-brass">{footer.newsletter[lang]}</h3>
            <form
              className="mt-5 flex items-center gap-2 rounded-full border border-ink-foreground/20 p-1.5"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder={footer.emailPlaceholder[lang]}
                aria-label={footer.emailPlaceholder[lang]}
                className="w-full bg-transparent px-3 py-2 text-sm text-ink-foreground placeholder:text-ink-foreground/40 focus:outline-none"
              />
              <button
                type="submit"
                className="grid size-9 shrink-0 place-items-center rounded-full bg-brass text-ink transition-transform hover:scale-105"
                aria-label={footer.subscribe[lang]}
              >
                <ArrowUpRight className="size-4" aria-hidden />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-foreground/15 pt-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.full[lang]}. {footer.rights[lang]}
          </p>
          <p>{footer.note[lang]}</p>
        </div>
      </div>
    </footer>
  );
}
