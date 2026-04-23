"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import { cn } from "@/lib/utils"
import { RiArrowDownSLine } from "@remixicon/react"

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>): React.ReactElement {
  return (
    <AccordionPrimitive.Root className={cn("w-full", className)} data-slot="accordion" {...props} />
  )
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>): React.ReactElement {
  return (
    <AccordionPrimitive.Item
      className={cn("border-b border-border last:border-b-0", className)}
      data-slot="accordion-item"
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>): React.ReactElement {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 items-center justify-between gap-3 py-4 text-left text-base font-semibold tracking-tight text-foreground outline-none transition-colors hover:text-primary focus-visible:text-primary [&[data-state=open]>svg]:rotate-180",
          className
        )}
        data-slot="accordion-trigger"
        {...props}
      >
        {children}
        <RiArrowDownSLine
          className="size-5 shrink-0 text-muted-foreground transition-transform duration-200"
          aria-hidden
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>): React.ReactElement {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden text-pretty text-sm text-muted-foreground"
      data-slot="accordion-content"
      {...props}
    >
      <div className={cn("pb-4 pt-0 leading-relaxed", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
