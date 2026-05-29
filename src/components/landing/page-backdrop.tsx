import { cn } from "@/lib/utils"

/**
 * Full-page marketing backdrop — mesh washes, soft orbs, and a fine dot grid.
 * Colors come from `--marketing-backdrop-*` in `site-theme.ts` (ARIA Build can patch).
 */
export function PageBackdrop({ className }: { className?: string }): React.ReactElement {
  return (
    <div
      className={cn("pointer-events-none fixed inset-0 -z-10 overflow-hidden", className)}
      aria-hidden
    >
      <div className="marketing-backdrop-base absolute inset-0" />
      <div className="marketing-backdrop-mesh absolute inset-0" />
      <div className="marketing-backdrop-orb marketing-backdrop-orb-a absolute rounded-full blur-3xl" />
      <div className="marketing-backdrop-orb marketing-backdrop-orb-b absolute rounded-full blur-3xl" />
      <div className="marketing-backdrop-grid absolute inset-0" />
    </div>
  )
}
