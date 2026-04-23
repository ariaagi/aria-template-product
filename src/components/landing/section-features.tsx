import {
  RiBarChartGroupedLine,
  RiLayoutGridLine,
  RiShieldCheckLine,
  RiSparkling2Line,
  RiTimerFlashLine,
  RiUserVoiceLine,
} from "@remixicon/react"

import { SectionCta } from "@/components/landing/section-cta"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
      className={cn("scroll-mt-20 bg-muted/25 py-16 sm:scroll-mt-24 sm:py-20 lg:py-24", className)}
      id="features"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {siteCopy.features.eyebrow}
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {siteCopy.features.title}
          </h2>
          <p className="mt-3 max-w-xl text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            {siteCopy.features.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {siteCopy.features.items.map(({ key, title, description }) => {
            const Icon = FEATURE_ICONS[key]
            return (
              <Card
                key={key}
                className="border-border/80 bg-card/90 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/[0.04]"
              >
                <CardHeader>
                  <span className="mb-1 inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
                  <CardDescription className="text-pretty text-sm leading-relaxed sm:text-[0.9375rem]">
                    {description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
        <SectionCta align="start" className="mt-10 sm:mt-12" />
      </div>
    </section>
  )
}
