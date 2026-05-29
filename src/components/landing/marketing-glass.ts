import { cn } from "@/lib/utils"

/** Resets shadcn Card chrome so marketing glass CSS owns the surface. */
export const marketingGlassCardReset =
  "border-0 bg-transparent shadow-none ring-0"

type GlassSurfaceOptions = {
  interactive?: boolean
  rounded?: "xl" | "2xl" | "3xl"
}

export function marketingGlassSurfaceClass(options: GlassSurfaceOptions = {}): string {
  const { interactive = false, rounded = "2xl" } = options
  return cn(
    "marketing-glass-surface",
    rounded === "xl" && "rounded-xl",
    rounded === "2xl" && "rounded-2xl",
    rounded === "3xl" && "rounded-3xl",
    interactive && "marketing-glass-surface-interactive"
  )
}

/** Standard landing card — How-it-works step surface (padding, radius, hover). */
export function marketingGlassCardClass(className?: string): string {
  return cn(
    "relative p-5 sm:p-6",
    marketingGlassSurfaceClass({ interactive: true, rounded: "2xl" }),
    className
  )
}

export function marketingGlassIconClass(): string {
  return "marketing-glass-icon"
}

export function marketingGlassBadgeClass(): string {
  return "marketing-glass-badge"
}

/** Hero description and section intro copy. */
export const marketingBodyClass =
  "text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base"

/** Card descriptions — same size as FAQ questions (`AccordionTrigger`). */
export const marketingCardBodyClass =
  "text-pretty text-base leading-relaxed text-muted-foreground sm:text-[0.9375rem]"

/** FAQ question label size (pair with semibold on the trigger). */
export const marketingFaqQuestionClass = "text-base sm:text-[0.9375rem]"
