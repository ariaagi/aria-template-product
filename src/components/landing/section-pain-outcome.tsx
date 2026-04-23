import {
  RiContrast2Line,
  RiLoopLeftLine,
  RiRocket2Line,
} from "@remixicon/react"

import { SectionCta } from "@/components/landing/section-cta"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
          <p className="mt-3 text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            {siteCopy.story.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {siteCopy.story.pains.map(({ key, title, body }) => {
            const Icon = PAIN_ICONS[key]
            return (
              <Card
                key={key}
                className="border-border/80 bg-card/80 shadow-sm shadow-black/[0.03] backdrop-blur-sm"
              >
                <CardHeader className="pb-2">
                  <span className="mb-2 inline-flex size-10 items-center justify-center rounded-lg bg-muted text-foreground">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">{body}</CardContent>
              </Card>
            )
          })}
          {siteCopy.story.outcomes.map(({ key, title, body }) => {
            const Icon = OUTCOME_ICONS[key]
            return (
              <Card
                key={key}
                className="border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card shadow-md shadow-primary/5 ring-1 ring-primary/15 sm:col-span-2 lg:col-span-1"
              >
                <CardHeader className="pb-2">
                  <span className="mb-2 inline-flex size-10 items-center justify-center rounded-lg bg-muted text-foreground">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">{body}</CardContent>
              </Card>
            )
          })}
        </div>
        <SectionCta className="mt-10 sm:mt-12" />
      </div>
    </section>
  )
}
