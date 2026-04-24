import { RiCheckboxLine, RiVipCrown2Line } from "@remixicon/react"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {siteCopy.pricing.eyebrow}
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {siteCopy.pricing.title}
          </h2>
          <p className="mt-3 text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
            {siteCopy.pricing.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-lg sm:mt-14">
          <Card className="relative overflow-hidden border-primary/25 bg-gradient-to-b from-card via-card to-primary/[0.06] shadow-xl shadow-primary/10 ring-1 ring-primary/20">
            <div
              className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-primary/20 blur-3xl"
              aria-hidden
            />
            <CardHeader className="relative pb-4 text-center sm:text-left">
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
                <Badge variant="default" className="gap-1 font-medium">
                  <RiVipCrown2Line className="size-3.5" aria-hidden />
                  {siteCopy.pricing.badge}
                </Badge>
                <span className="text-sm text-muted-foreground">{siteCopy.pricing.badgeHint}</span>
              </div>
              <CardTitle className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {siteCopy.pricing.planTitle}
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                {siteCopy.pricing.planDescription}
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-3">
              <Separator className="bg-border/80" />
              <ul className="space-y-3 text-left text-sm text-muted-foreground sm:text-base">
                {siteCopy.pricing.perks.map((line) => (
                  <li key={line} className="flex gap-3">
                    <RiCheckboxLine className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="relative flex justify-center">
              <a href="#waitlist" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}>
                {siteCopy.pricing.ctaJoin}
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
