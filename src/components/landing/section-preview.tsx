import Image from "next/image"
import { RiImage2Line, RiLayoutMasonryLine, RiPaletteLine } from "@remixicon/react"

import { SectionCta } from "@/components/landing/section-cta"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { siteCopy } from "@/config/site-copy"
import { cn } from "@/lib/utils"

type SectionPreviewProps = {
  heroImageSrc: string
  className?: string
}

export function SectionPreview({
  heroImageSrc,
  className,
}: SectionPreviewProps): React.ReactElement {
  return (
    <section
      className={cn("border-y border-border/60 bg-gradient-to-b from-background to-muted/30 py-16 sm:py-20 lg:py-24", className)}
      id="preview"
      aria-labelledby="preview-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="font-medium">
              {siteCopy.preview.badge}
            </Badge>
            <h2
              id="preview-heading"
              className="mt-3 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
            >
              {siteCopy.preview.title}
            </h2>
            <p className="mt-3 text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
              {siteCopy.preview.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <RiPaletteLine className="size-3.5" aria-hidden /> {siteCopy.preview.chips.lightMode}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <RiLayoutMasonryLine className="size-3.5" aria-hidden />{" "}
              {siteCopy.preview.chips.responsive}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <RiImage2Line className="size-3.5" aria-hidden /> {siteCopy.preview.chips.nextImage}
            </span>
          </div>
        </div>

        <Card className="mt-10 overflow-hidden border-border/80 bg-card/90 shadow-xl shadow-black/[0.06] sm:mt-14">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[4/3] min-h-[14rem] w-full bg-muted/40 sm:min-h-[18rem] lg:aspect-auto lg:min-h-[22rem]">
                <Image
                  src={heroImageSrc}
                  alt={siteCopy.preview.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center gap-6 p-6 sm:p-8 lg:p-10">
                <div>
                  <p className="text-sm font-medium text-primary">{siteCopy.preview.columnAbove}</p>
                  <p className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground">
                    {siteCopy.preview.columnAboveBody}
                  </p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm font-medium text-primary">{siteCopy.preview.columnBelow}</p>
                  <p className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground">
                    {siteCopy.preview.columnBelowBody}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <SectionCta className="mt-10 sm:mt-12" />
      </div>
    </section>
  )
}
