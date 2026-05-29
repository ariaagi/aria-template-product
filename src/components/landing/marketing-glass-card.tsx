import * as React from "react"

import { marketingGlassCardClass } from "@/components/landing/marketing-glass"
import { cn } from "@/lib/utils"

type MarketingGlassCardProps<T extends React.ElementType = "div"> = {
  as?: T
  className?: string
  children?: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">

/**
 * Standard landing card surface — matches How-it-works step cards (glass, border, hover lift).
 */
export function MarketingGlassCard<T extends React.ElementType = "div">({
  as,
  className,
  children,
  ...props
}: MarketingGlassCardProps<T>): React.ReactElement {
  const Component = as ?? "div"
  return (
    <Component className={cn(marketingGlassCardClass(), className)} {...props}>
      {children}
    </Component>
  )
}
