import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { meta, type Lang } from "@/lib/content";

const STORAGE_KEY = "daralsama-lang";

type LanguageValue = {
  lang: Lang;
  dir: "rtl" | "ltr";
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageValue>({
  lang: "ar",
  dir: "rtl",
  setLang: () => {},
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Arabic is the default (and what the static HTML is prerendered in).
  // ?lang=en / ?lang=ar or a saved choice override it.
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("lang");
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initial = query === "en" || query === "ar" ? query : stored;
    if (initial === "ar" || initial === "en") setLangState(initial);
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.title = meta.title[lang];
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description[lang]);
    window.localStorage.setItem(STORAGE_KEY, lang);
    const url = new URL(window.location.href);
    if (url.searchParams.has("lang") && url.searchParams.get("lang") !== lang) {
      url.searchParams.set("lang", lang);
      window.history.replaceState(null, "", url.toString());
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggle = useCallback(
    () => setLangState((current) => (current === "en" ? "ar" : "en")),
    [],
  );

  const value = useMemo<LanguageValue>(
    () => ({ lang, dir: lang === "ar" ? "rtl" : "ltr", setLang, toggle }),
    [lang, setLang, toggle],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
