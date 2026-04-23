import * as React from "react"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical"
}): React.ReactElement {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      data-slot="separator"
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-px w-full min-w-0" : "h-full w-px min-h-0",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
