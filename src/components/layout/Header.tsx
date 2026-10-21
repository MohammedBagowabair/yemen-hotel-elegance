import { useEffect, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { a11y, brand, nav } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";

const links = [
  { id: "about", label: nav.about },
  { id: "rooms", label: nav.rooms },
  { id: "dining", label: nav.dining },
  { id: "amenities", label: nav.amenities },
  { id: "gallery", label: nav.gallery },
  { id: "contact", label: nav.contact },
];

function Wordmark({ tone }: { tone: "light" | "dark" }) {
  const { lang } = useLanguage();
  return (
    <a href="#top" className="group flex items-center gap-3">
      <span
        aria-hidden
        className="grid size-9 place-items-center rounded-full border border-brass/50 text-brass transition-colors group-hover:bg-brass/10"
      >
        <span className="block size-2.5 rotate-45 bg-brass" />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "font-display block text-lg tracking-wide",
            tone === "light" ? "text-background" : "text-ink",
          )}
        >
          {brand.name[lang]}
        </span>
        <span
          className={cn(
            "mt-1 block text-[0.6rem] tracking-[0.28em] uppercase",
            tone === "light" ? "text-background/60" : "text-muted-foreground",
          )}
        >
          Sana'a
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const { lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-border/70 bg-background/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Wordmark tone={solid ? "dark" : "light"} />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "text-sm font-medium transition-colors",
                solid
                  ? "text-foreground/75 hover:text-brass-deep"
                  : "text-background/80 hover:text-background",
              )}
            >
              {link.label[lang]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={a11y.langSwitch[lang]}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium tracking-wide transition-colors",
              solid
                ? "border-border text-foreground hover:border-brass hover:text-brass-deep"
                : "border-background/30 text-background hover:border-background/70",
            )}
          >
            <Globe className="size-3.5" aria-hidden />
            {nav.langLabel[lang]}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-xs font-semibold tracking-wide text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            {nav.book[lang]}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? a11y.closeMenu[lang] : a11y.openMenu[lang]}
            className={cn(
              "grid size-10 place-items-center rounded-full border transition-colors lg:hidden",
              solid
                ? "border-border text-foreground"
                : "border-background/30 text-background",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden bg-background transition-[max-height] duration-500 lg:hidden",
          open ? "max-h-[32rem]" : "max-h-0",
        )}
      >
        <nav className="flex flex-col px-5 pt-2 pb-8 sm:px-8" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-4 font-display text-xl text-ink transition-colors hover:text-brass-deep"
            >
              {link.label[lang]}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-full bg-primary px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground"
          >
            {nav.book[lang]}
          </a>
        </nav>
      </div>
    </header>
  );
}
