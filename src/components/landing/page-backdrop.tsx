import { cn } from "@/lib/utils"

export function PageBackdrop({ className }: { className?: string }): React.ReactElement {
  return (
    <div
      className={cn("pointer-events-none fixed inset-0 -z-10 overflow-hidden", className)}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,var(--marketing-backdrop-radial-1),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,var(--marketing-backdrop-radial-2),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,var(--marketing-backdrop-radial-3),transparent_45%)]" />
      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-multiply dark:mix-blend-normal"
        style={{
          backgroundImage: `linear-gradient(to right, var(--marketing-backdrop-grid) 1px, transparent 1px),
            linear-gradient(to bottom, var(--marketing-backdrop-grid) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  )
}
