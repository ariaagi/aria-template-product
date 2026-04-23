import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { siteCopy } from "@/config/site-copy"
import { cn } from "@/lib/utils"

export function SectionFaq({ className }: { className?: string }): React.ReactElement {
  return (
    <section
      className={cn("border-t border-border/60 bg-muted/20 py-16 sm:py-20 lg:py-24", className)}
      id="faq"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-balance text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {siteCopy.faq.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-center text-base text-muted-foreground sm:mt-4">
          {siteCopy.faq.subtitle}
        </p>

        <Accordion type="single" collapsible className="mt-10 w-full sm:mt-12">
          {siteCopy.faq.items.map((item, index) => (
            <AccordionItem key={item.q} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base sm:text-[0.9375rem]">
                {item.q}
              </AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
