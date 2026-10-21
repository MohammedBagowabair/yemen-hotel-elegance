import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

type SectionHeadProps = {
  eyebrow: string;
  title: string;
  text?: string;
  tone?: "light" | "dark";
  align?: "start" | "center";
  children?: ReactNode;
};

export function SectionHead({
  eyebrow,
  title,
  text,
  tone = "light",
  align = "start",
  children,
}: SectionHeadProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p
        className={cn(
          "flex items-center gap-3 text-[0.7rem] tracking-[0.2em] uppercase",
          align === "center" && "justify-center",
          tone === "dark" ? "text-brass" : "text-brass-deep",
        )}
      >
        <span aria-hidden className="rule-brass" />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-5 font-display text-3xl leading-tight sm:text-5xl",
          tone === "dark" ? "text-ink-foreground" : "text-ink",
        )}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            tone === "dark" ? "text-ink-foreground/70" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      ) : null}
      {children}
    </Reveal>
  );
}
