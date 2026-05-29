import { RiCheckboxLine, RiVipCrown2Line } from "@remixicon/react"

import { MarketingGlassCard } from "@/components/landing/marketing-glass-card"
import { marketingBodyClass, marketingCardBodyClass } from "@/components/landing/marketing-glass"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { siteCopy } from "@/config/site-copy"
import { cn } from "@/lib/utils"

export function SectionPricing({ className }: { className?: string }): React.ReactElement {
  return (
    <section
      className={cn("scroll-mt-20 py-16 sm:scroll-mt-24 sm:py-20 lg:py-24", className)}
      id="pricing"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {siteCopy.pricing.eyebrow}
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {siteCopy.pricing.title}
          </h2>
          <p className={cn("mt-3 sm:mt-4", marketingBodyClass)}>{siteCopy.pricing.subtitle}</p>
        </div>

        <div className="mx-auto mt-10 max-w-lg sm:mt-14">
          <MarketingGlassCard className="flex flex-col gap-4">
            <div className="pb-1 text-center sm:text-left">
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
                <Badge variant="default" className="gap-1 font-medium">
                  <RiVipCrown2Line className="size-3.5" aria-hidden />
                  {siteCopy.pricing.badge}
                </Badge>
                <span className="text-sm text-muted-foreground">{siteCopy.pricing.badgeHint}</span>
              </div>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {siteCopy.pricing.planTitle}
              </h3>
              <p className={cn("mt-2", marketingCardBodyClass)}>{siteCopy.pricing.planDescription}</p>
            </div>

            <Separator className="bg-foreground/12" />

            <ul className={cn("space-y-3 text-left", marketingCardBodyClass)}>
              {siteCopy.pricing.perks.map((line) => (
                <li key={line} className="flex gap-3 text-foreground/72">
                  <RiCheckboxLine className="mt-0.5 size-5 shrink-0 text-foreground" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <Separator className="bg-foreground/12" />

            <div className="flex justify-center pt-1">
              <a href="#waitlist" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}>
                {siteCopy.pricing.ctaJoin}
              </a>
            </div>
          </MarketingGlassCard>
        </div>
      </div>
    </section>
  )
}
