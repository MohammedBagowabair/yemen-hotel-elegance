import { highlights } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { waLink, waMessages } from "@/lib/whatsapp";

export function WaGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.45-9.43a9.38 9.38 0 0 1 6.68 2.77 9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.44-9.45 9.44zm8.04-17.48A11.3 11.3 0 0 0 12.05.7C5.78.7.67 5.8.67 12.07c0 2 .52 3.96 1.52 5.69L.57 23.7l6.08-1.6a11.33 11.33 0 0 0 5.4 1.38h.01c6.27 0 11.38-5.1 11.38-11.37 0-3.04-1.18-5.9-3.33-8.05z" />
    </svg>
  );
}

// Floating WhatsApp button: bottom-left in RTL, bottom-right in LTR. Hidden while
// the mobile menu or a dialog is open (see .wa-fab rules in styles.css).
export function WhatsAppFab() {
  const { lang } = useLanguage();
  return (
    <a
      href={waLink(waMessages.general[lang])}
      target="_blank"
      rel="noopener"
      aria-label={highlights.fab[lang]}
      title={highlights.fab[lang]}
      className="wa-fab fixed z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-10px_rgba(0,0,0,0.55)] transition-[transform,opacity] duration-300 hover:scale-105 ltr:right-[max(1rem,env(safe-area-inset-right))] rtl:left-[max(1rem,env(safe-area-inset-left))]"
      style={{ bottom: "max(1rem, calc(env(safe-area-inset-bottom) + 0.75rem))" }}
    >
      <WaGlyph className="size-7" />
    </a>
  );
}
