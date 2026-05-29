import { RiCheckboxCircleFill } from "@remixicon/react"

import { MarketingGlassCard } from "@/components/landing/marketing-glass-card"
import { marketingBodyClass, marketingCardBodyClass, marketingGlassBadgeClass } from "@/components/landing/marketing-glass"
import { SectionCta } from "@/components/landing/section-cta"
import { siteCopy } from "@/config/site-copy"
import { cn } from "@/lib/utils"

export function SectionHow({ className }: { className?: string }): React.ReactElement {
  return (
    <section
      className={cn("scroll-mt-20 py-16 sm:scroll-mt-24 sm:py-20 lg:py-24", className)}
      id="how"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {siteCopy.how.eyebrow}
            </p>
            <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              {siteCopy.how.title}
            </h2>
            <p className={cn("mt-3 sm:mt-4", marketingBodyClass)}>{siteCopy.how.intro}</p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground sm:text-base">
              {siteCopy.how.bullets.map((line) => (
                <li key={line} className="flex gap-2">
                  <RiCheckboxCircleFill className="mt-0.5 size-5 shrink-0 text-foreground" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <ol className="relative space-y-6 lg:col-span-7">
            <div
              className="absolute left-[1.125rem] top-6 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-transparent via-border/50 to-transparent sm:block"
              aria-hidden
            />
            {siteCopy.how.steps.map(({ n, title, body }) => (
              <MarketingGlassCard key={n} as="li" className="flex gap-4 sm:gap-5">
                <span
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-foreground sm:size-10 sm:text-base",
                    marketingGlassBadgeClass()
                  )}
                >
                  <span className="relative z-[1]">{n}</span>
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    {title}
                  </h3>
                  <p className={cn("mt-2", marketingCardBodyClass)}>{body}</p>
                </div>
              </MarketingGlassCard>
            ))}
          </ol>
        </div>

        <SectionCta className="mt-12 sm:mt-14" />
      </div>
    </section>
  )
}
