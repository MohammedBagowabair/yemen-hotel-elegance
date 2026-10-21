import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { ArrowDown, CalendarDays, ChevronDown, Search, Users } from "lucide-react";
import { booking, hero } from "@/lib/content";
import { useLanguage } from "@/lib/language";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/hero.jpg";

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-1 flex-col gap-1.5 px-4 py-3 text-start">
      <span className="eyebrow text-[0.62rem] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

const selectClass =
  "w-full appearance-none bg-transparent pe-6 text-sm font-medium text-ink focus:outline-none";

function BookingBar() {
  const { lang } = useLanguage();
  const [today, setToday] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [rooms, setRooms] = useState("1");
  const [held, setHeld] = useState(false);

  useEffect(() => {
    setToday(new Date().toISOString().slice(0, 10));
  }, []);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setHeld(true);
  };

  return (
    <div className="mx-auto w-full max-w-5xl">
      <form
        onSubmit={submit}
        className="grid grid-cols-1 divide-y divide-border/70 rounded-3xl border border-border/70 bg-card/95 p-2 shadow-[0_30px_70px_-40px_rgba(60,40,20,0.55)] backdrop-blur-sm sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:divide-x rtl:lg:divide-x-reverse"
      >
        <Field label={booking.checkIn[lang]}>
          <input
            type="date"
            lang={lang}
            required
            min={today}
            value={checkIn}
            onChange={(event) => {
              setCheckIn(event.target.value);
              setHeld(false);
            }}
            className="w-full bg-transparent text-sm font-medium text-ink focus:outline-none"
          />
        </Field>

        <Field label={booking.checkOut[lang]}>
          <input
            type="date"
            lang={lang}
            required
            min={checkIn || today}
            value={checkOut}
            onChange={(event) => {
              setCheckOut(event.target.value);
              setHeld(false);
            }}
            className="w-full bg-transparent text-sm font-medium text-ink focus:outline-none"
          />
        </Field>

        <Field label={booking.guests[lang]}>
          <span className="flex items-center gap-2">
            <Users className="size-4 shrink-0 text-brass" aria-hidden />
            <select
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              className={selectClass}
            >
              {["1", "2", "3", "4", "5", "6"].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <ChevronDown className="size-3.5 shrink-0 text-muted-foreground" aria-hidden />
          </span>
        </Field>

        <Field label={booking.rooms[lang]}>
          <span className="flex items-center gap-2">
            <CalendarDays className="size-4 shrink-0 text-brass" aria-hidden />
            <select
              value={rooms}
              onChange={(event) => setRooms(event.target.value)}
              className={selectClass}
            >
              {["1", "2", "3", "4"].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <ChevronDown className="size-3.5 shrink-0 text-muted-foreground" aria-hidden />
          </span>
        </Field>

        <div className="p-2">
          <button
            type="submit"
            className="flex h-full w-full items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-4 text-sm font-semibold tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Search className="size-4" aria-hidden />
            {booking.search[lang]}
          </button>
        </div>
      </form>

      <p
        className={cn(
          "mt-3 text-center text-xs text-muted-foreground transition-opacity duration-500",
          held ? "opacity-100" : "opacity-0",
        )}
        role="status"
      >
        {booking.result[lang]}
      </p>
    </div>
  );
}

export function Hero() {
  const { lang } = useLanguage();

  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt=""
        aria-hidden
        fetchPriority="high"
        width={1920}
        height={1088}
        className="hero-drift absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/45 to-ink/85"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pt-32 pb-10 sm:px-8">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-[0.7rem] tracking-[0.2em] text-brass uppercase">
            <span aria-hidden className="rule-brass" />
            {hero.eyebrow[lang]}
          </p>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] text-background sm:text-6xl lg:text-7xl">
            {hero.title[lang]}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-background/80 sm:text-lg">
            {hero.text[lang]}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              {hero.primary[lang]}
            </a>
            <a
              href="#about"
              className="rounded-full border border-background/35 px-7 py-3.5 text-sm font-semibold text-background transition-colors hover:border-background hover:bg-background/10"
            >
              {hero.secondary[lang]}
            </a>
          </div>
        </div>

        <div className="mt-14">
          <BookingBar />
        </div>

        <a
          href="#about"
          className="scroll-cue mx-auto mt-10 flex flex-col items-center gap-2 text-[0.62rem] tracking-[0.3em] text-background/60 uppercase"
        >
          {hero.scroll[lang]}
          <ArrowDown className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
