"use client"

import Image from "next/image"
import { AnimatePresence, motion, useScroll } from "motion/react"
import * as React from "react"
import { RiCloseLine, RiMenuLine } from "@remixicon/react"

import { buttonVariants } from "@/components/ui/button"
import { siteCopy } from "@/config/site-copy"
import { cn } from "@/lib/utils"

type NavHeaderProps = {
  brandName: string
  twitterHandle: string
  logoSrc?: string
}

const NAV_SECTION_IDS = ["features", "how", "pricing", "faq"] as const
const SCROLL_SPY_OFFSET_PX = 120

function resolveActiveSection(): (typeof NAV_SECTION_IDS)[number] | null {
  for (const sectionId of NAV_SECTION_IDS) {
    const element = document.getElementById(sectionId)
    if (!element) {
      continue
    }
    const rect = element.getBoundingClientRect()
    if (rect.top <= SCROLL_SPY_OFFSET_PX && rect.bottom >= SCROLL_SPY_OFFSET_PX) {
      return sectionId
    }
  }
  return null
}

function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId)
  if (!element) {
    return
  }
  const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 96
  window.scrollTo({ top: offsetPosition, behavior: "smooth" })
}

export function NavHeader({
  brandName,
  twitterHandle: _twitterHandle,
  logoSrc,
}: NavHeaderProps): React.ReactElement {
  const navRef = React.useRef<HTMLUListElement>(null)
  const { scrollY } = useScroll()
  const [hasScrolled, setHasScrolled] = React.useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState<string>("")
  const [isManualScroll, setIsManualScroll] = React.useState(false)
  const [indicatorLeft, setIndicatorLeft] = React.useState(0)
  const [indicatorWidth, setIndicatorWidth] = React.useState(0)
  const [indicatorReady, setIndicatorReady] = React.useState(false)
  const hasLogo = Boolean(logoSrc?.trim())

  const syncIndicator = React.useCallback((sectionId: string | null) => {
    if (!sectionId) {
      setIndicatorReady(false)
      return
    }
    const navItem = navRef.current?.querySelector(`[data-nav-id="${sectionId}"]`)
    if (!(navItem instanceof HTMLElement)) {
      return
    }
    setIndicatorLeft(navItem.offsetLeft)
    setIndicatorWidth(navItem.offsetWidth)
    setIndicatorReady(true)
  }, [])

  React.useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 10)
    })
    return unsubscribe
  }, [scrollY])

  React.useEffect(() => {
    const handleScroll = (): void => {
      if (isManualScroll) {
        return
      }

      const section = resolveActiveSection()
      setActiveSection(section ?? "")
      syncIndicator(section)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isManualScroll, syncIndicator])

  const handleSectionClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string): void => {
    event.preventDefault()
    setIsManualScroll(true)
    setActiveSection(sectionId)
    syncIndicator(sectionId)
    scrollToSection(sectionId)
    setIsDrawerOpen(false)
    window.setTimeout(() => setIsManualScroll(false), 500)
  }

  const navLinkClass = (sectionId: string): string =>
    cn(
      "relative z-10 flex h-full items-center justify-center px-4 py-2 text-sm font-medium tracking-tight transition-colors duration-200",
      activeSection === sectionId && activeSection.length > 0
        ? "text-primary"
        : "text-primary/60 hover:text-primary"
    )

  return (
    <header className="sticky top-3 z-50 flex w-full justify-center px-3 sm:top-4 sm:px-4 md:px-6">
      <motion.div className="w-full max-w-7xl px-1 sm:px-0">
        <div
          className={cn(
            "mx-auto w-full rounded-2xl border border-border/80 px-2 shadow-sm shadow-black/[0.04] backdrop-blur-lg transition-[background-color,border-color,box-shadow] duration-300 sm:px-3",
            hasScrolled
              ? "border-border/50 bg-background/55"
              : "border-transparent bg-transparent shadow-none"
          )}
        >
          <div className="grid h-12 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 sm:h-14 sm:gap-3 sm:px-1 md:grid-cols-[1fr_auto_1fr]">
            <a
              href="#top"
              className={cn(
                "flex min-w-0 items-center justify-self-start overflow-hidden md:max-w-[32ch]",
                hasLogo && "gap-2 sm:gap-2.5"
              )}
            >
              {hasLogo ? (
                <span className="relative inline-block size-7 shrink-0 overflow-hidden rounded-lg bg-muted ring-1 ring-border sm:size-8">
                  <Image
                    src={logoSrc!}
                    alt={`${brandName} logo`}
                    fill
                    className="object-cover"
                    sizes="32px"
                    priority
                  />
                </span>
              ) : null}
              <span className="min-w-0 truncate text-sm font-semibold tracking-tight text-primary sm:text-base">
                {brandName}
              </span>
            </a>

            <nav className="hidden justify-self-center md:block" aria-label="Primary">
              <ul
                ref={navRef}
                className="relative flex h-11 w-fit items-center justify-center rounded-lg px-2"
              >
                <li data-nav-id="features" className={navLinkClass("features")}>
                  <a href="#features" onClick={(event) => handleSectionClick(event, "features")}>
                    {siteCopy.nav.features}
                  </a>
                </li>
                <li data-nav-id="how" className={navLinkClass("how")}>
                  <a href="#how" onClick={(event) => handleSectionClick(event, "how")}>
                    {siteCopy.nav.howItWorks}
                  </a>
                </li>
                <li data-nav-id="pricing" className={navLinkClass("pricing")}>
                  <a href="#pricing" onClick={(event) => handleSectionClick(event, "pricing")}>
                    {siteCopy.nav.pricing}
                  </a>
                </li>
                <li data-nav-id="faq" className={navLinkClass("faq")}>
                  <a href="#faq" onClick={(event) => handleSectionClick(event, "faq")}>
                    {siteCopy.nav.faq}
                  </a>
                </li>
                {indicatorReady && activeSection ? (
                  <motion.li
                    aria-hidden
                    animate={{ left: indicatorLeft, width: indicatorWidth }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="pointer-events-none absolute top-1.5 bottom-1.5 rounded-lg border border-border bg-accent/60"
                  />
                ) : null}
              </ul>
            </nav>

            <div className="flex shrink-0 items-center justify-self-end gap-1 sm:gap-2">
              <a
                href="#waitlist"
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "hidden h-9 rounded-lg px-4 md:inline-flex"
                )}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection("waitlist")
                }}
              >
                {siteCopy.ctas.primaryWaitlist}
              </a>
              <button
                type="button"
                className="inline-flex size-9 cursor-pointer items-center justify-center rounded-md border border-border md:hidden"
                aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
                aria-expanded={isDrawerOpen}
                onClick={() => setIsDrawerOpen((open) => !open)}
              >
                {isDrawerOpen ? (
                  <RiCloseLine className="size-5" aria-hidden />
                ) : (
                  <RiMenuLine className="size-5" aria-hidden />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isDrawerOpen ? (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-40 bg-black/45 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close menu"
              onClick={() => setIsDrawerOpen(false)}
            />
            <motion.div
              className="fixed inset-x-0 bottom-3 z-50 mx-auto w-[95%] max-w-lg rounded-xl border border-border bg-background p-4 shadow-lg md:hidden"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", damping: 18, stiffness: 220 }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-3">
                  <a
                    href="#top"
                    className={cn("flex min-w-0 items-center", hasLogo && "gap-2.5")}
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {hasLogo ? (
                      <span className="relative inline-block size-7 shrink-0 overflow-hidden rounded-lg bg-muted ring-1 ring-border">
                        <Image
                          src={logoSrc!}
                          alt=""
                          aria-hidden
                          fill
                          className="object-cover"
                          sizes="28px"
                        />
                      </span>
                    ) : null}
                    <span className="min-w-0 truncate text-sm font-semibold text-primary">
                      {brandName}
                    </span>
                  </a>
                  <button
                    type="button"
                    className="inline-flex size-9 items-center justify-center rounded-md border border-border"
                    aria-label="Close menu"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <RiCloseLine className="size-5" aria-hidden />
                  </button>
                </div>

                <ul className="mb-1 flex flex-col overflow-hidden rounded-lg border border-border text-sm">
                  <li className="border-b border-border last:border-b-0">
                    <a
                      href="#features"
                      className="block px-3 py-2.5 text-muted-foreground transition-colors hover:text-foreground"
                      onClick={(event) => handleSectionClick(event, "features")}
                    >
                      {siteCopy.nav.features}
                    </a>
                  </li>
                  <li className="border-b border-border last:border-b-0">
                    <a
                      href="#how"
                      className="block px-3 py-2.5 text-muted-foreground transition-colors hover:text-foreground"
                      onClick={(event) => handleSectionClick(event, "how")}
                    >
                      {siteCopy.nav.howItWorks}
                    </a>
                  </li>
                  <li className="border-b border-border last:border-b-0">
                    <a
                      href="#pricing"
                      className="block px-3 py-2.5 text-muted-foreground transition-colors hover:text-foreground"
                      onClick={(event) => handleSectionClick(event, "pricing")}
                    >
                      {siteCopy.nav.pricing}
                    </a>
                  </li>
                  <li className="border-b border-border last:border-b-0">
                    <a
                      href="#faq"
                      className="block px-3 py-2.5 text-muted-foreground transition-colors hover:text-foreground"
                      onClick={(event) => handleSectionClick(event, "faq")}
                    >
                      {siteCopy.nav.faq}
                    </a>
                  </li>
                </ul>

                <a
                  href="#waitlist"
                  className={cn(buttonVariants({ size: "lg" }), "w-full")}
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection("waitlist")
                    setIsDrawerOpen(false)
                  }}
                >
                  {siteCopy.ctas.primaryWaitlist}
                </a>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
