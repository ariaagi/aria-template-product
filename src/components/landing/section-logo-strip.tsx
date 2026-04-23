import { siteCopy } from "@/config/site-copy"
import { cn } from "@/lib/utils"

export function SectionLogoStrip({ className }: { className?: string }): React.ReactElement {
  return (
    <section
      className={cn("border-y border-border/60 bg-muted/30 py-10 sm:py-12", className)}
      aria-label={siteCopy.logoStrip.ariaLabel}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:mb-8 sm:text-[0.6875rem]">
          {siteCopy.logoStrip.eyebrow}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14 md:gap-x-16">
          {siteCopy.logoStrip.placeholders.map((name) => (
            <span
              key={name}
              className="select-none text-lg font-semibold tracking-tight text-foreground/25 sm:text-xl md:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
