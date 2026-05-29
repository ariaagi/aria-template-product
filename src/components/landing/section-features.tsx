import {
  RiBarChartGroupedLine,
  RiLayoutGridLine,
  RiShieldCheckLine,
  RiSparkling2Line,
  RiTimerFlashLine,
  RiUserVoiceLine,
} from "@remixicon/react"

import { MarketingGlassCard } from "@/components/landing/marketing-glass-card"
import { marketingBodyClass, marketingCardBodyClass, marketingGlassIconClass } from "@/components/landing/marketing-glass"
import { SectionCta } from "@/components/landing/section-cta"
import { siteCopy } from "@/config/site-copy"
import { cn } from "@/lib/utils"

const FEATURE_ICONS = {
  layout: RiLayoutGridLine,
  shield: RiShieldCheckLine,
  timer: RiTimerFlashLine,
  voice: RiUserVoiceLine,
  chart: RiBarChartGroupedLine,
  sparkle: RiSparkling2Line,
} as const

export function SectionFeatures({ className }: { className?: string }): React.ReactElement {
  return (
    <section
      className={cn("scroll-mt-20 py-16 sm:scroll-mt-24 sm:py-20 lg:py-24", className)}
      id="features"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {siteCopy.features.eyebrow}
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {siteCopy.features.title}
          </h2>
          <p className={cn("mt-3 max-w-xl sm:mt-4", marketingBodyClass)}>
            {siteCopy.features.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {siteCopy.features.items.map(({ key, title, description }) => {
            const Icon = FEATURE_ICONS[key]
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
                <p className={cn("mt-2", marketingCardBodyClass)}>{description}</p>
              </MarketingGlassCard>
            )
          })}
        </div>
        <SectionCta align="start" className="mt-10 sm:mt-12" />
      </div>
    </section>
  )
}
