import { cn } from "@/lib/utils"

/** Flat page background — neutral tokens only (no marketing color wash). */
export function PageBackdrop({ className }: { className?: string }): React.ReactElement {
  return (
    <div
      className={cn("pointer-events-none fixed inset-0 -z-10 bg-background", className)}
      aria-hidden
    />
  )
}
