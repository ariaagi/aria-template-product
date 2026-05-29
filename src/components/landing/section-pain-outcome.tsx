import {
  RiContrast2Line,
  RiLoopLeftLine,
  RiRocket2Line,
} from "@remixicon/react"

import { MarketingGlassCard } from "@/components/landing/marketing-glass-card"
import { marketingBodyClass, marketingCardBodyClass, marketingGlassIconClass } from "@/components/landing/marketing-glass"
import { SectionCta } from "@/components/landing/section-cta"
import { siteCopy } from "@/config/site-copy"
import { cn } from "@/lib/utils"

const PAIN_ICONS = {
  contrast: RiContrast2Line,
  loop: RiLoopLeftLine,
} as const

const OUTCOME_ICONS = {
  rocket: RiRocket2Line,
} as const

export function SectionPainOutcome({ className }: { className?: string }): React.ReactElement {
  return (
    <section className={cn("py-16 sm:py-20 lg:py-24", className)} id="story">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {siteCopy.story.title}
          </h2>
          <p className={cn("mt-3 sm:mt-4", marketingBodyClass)}>
            {siteCopy.story.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {siteCopy.story.pains.map(({ key, title, body }) => {
            const Icon = PAIN_ICONS[key]
            return (
              <MarketingGlassCard key={key}>
                <span
                  className={cn(
                    "mb-3 inline-flex size-10 items-center justify-center rounded-xl text-foreground",
                    marketingGlassIconClass()
                  )}
                >
                  <Icon className="relative z-[1] size-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
                <p className={cn("mt-2", marketingCardBodyClass)}>{body}</p>
              </MarketingGlassCard>
            )
          })}
          {siteCopy.story.outcomes.map(({ key, title, body }) => {
            const Icon = OUTCOME_ICONS[key]
            return (
              <MarketingGlassCard key={key} className="sm:col-span-2 lg:col-span-1">
                <span
                  className={cn(
                    "mb-3 inline-flex size-10 items-center justify-center rounded-xl text-foreground",
                    marketingGlassIconClass()
                  )}
                >
                  <Icon className="relative z-[1] size-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
                <p className={cn("mt-2", marketingCardBodyClass)}>{body}</p>
              </MarketingGlassCard>
            )
          })}
        </div>
        <SectionCta className="mt-10 sm:mt-12" />
      </div>
    </section>
  )
}
