import { buttonVariants } from "@/components/ui/button"
import { siteCopy } from "@/config/site-copy"
import { cn } from "@/lib/utils"

export type SectionCtaProps = {
  /** Destination anchor or URL */
  href?: string
  label?: string
  className?: string
  align?: "start" | "center" | "end"
}

export function SectionCta({
  href = "#waitlist",
  label = siteCopy.ctas.primaryWaitlist,
  className,
  align = "center",
}: SectionCtaProps): React.ReactElement {
  const alignClass =
    align === "start"
      ? "justify-start"
      : align === "end"
        ? "justify-end"
        : "justify-center"

  return (
    <div className={cn("flex w-full min-w-0 flex-wrap gap-3", alignClass, className)}>
      <a href={href} className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}>
        {label}
      </a>
    </div>
  )
}
