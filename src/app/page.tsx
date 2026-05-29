"use client"

import { RiCheckboxCircleLine, RiFlashlightLine } from "@remixicon/react"

import { PageBackdrop } from "@/components/landing/page-backdrop"
import { NavHeader } from "@/components/landing/nav-header"
import { marketingBodyClass } from "@/components/landing/marketing-glass"
import { SectionFaq } from "@/components/landing/section-faq"
import { SectionFeatures } from "@/components/landing/section-features"
import { SectionHow } from "@/components/landing/section-how"
import { SectionPainOutcome } from "@/components/landing/section-pain-outcome"
import { SectionPricing } from "@/components/landing/section-pricing"
import { SiteFooter } from "@/components/landing/site-footer"
import { WaitlistForm } from "@/components/landing/waitlist-form"
import { siteCopy } from "@/config/site-copy"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * ARIA Build v1 (`aria-dapp` `build-launch.ts`) forks this GitHub template and regex-patches
 * this file. Keep these literals aligned with `siteCopy.ariaPatch` in `src/config/site-copy.ts`.
 */
const highlights = [
  "Built from validated user demand",
  "Launch-ready workflow in minutes",
  "Simple setup, zero technical friction",
]

/**
 * ARIA Build regex-patches this path (uploaded product asset). Not rendered in the hero after
 * layout change — keep the literal so `build-launch.ts` can still replace it.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- patched by ARIA Build; not used in JSX
const heroImageSrc = "/product-image.svg"
const headerLogoSrc = siteCopy.paths.headerLogo
const twitterHandle = "ariaagidotcom"

export default function Home(): React.ReactElement {
  return (
    <div id="top" className="relative min-h-screen min-w-0">
      <PageBackdrop />

      <NavHeader
        brandName={siteCopy.ariaPatch.navBrandSlug}
        logoSrc={headerLogoSrc}
        twitterHandle={twitterHandle}
      />

      <main className="relative w-full min-w-0">
        <section
          className="relative pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center sm:max-w-3xl lg:max-w-7xl">
              <a
                href="#story"
                className="inline-flex h-7 max-w-full items-center gap-1.5 rounded-full border border-foreground/10 bg-background/40 px-2.5 shadow-sm shadow-black/[0.03] backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-200 hover:border-foreground/16 hover:bg-background/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:h-8 sm:gap-2 sm:px-3"
              >
                <RiFlashlightLine
                  className="size-3 shrink-0 text-foreground/65 sm:size-3.5"
                  aria-hidden
                />
                <span className="min-w-0 truncate text-[0.6875rem] font-semibold uppercase leading-none tracking-[0.14em] text-foreground/75 sm:text-xs">
                  {siteCopy.hero.pillLabel}
                </span>
              </a>

              {/* validated idea launch — keep this exact phrase in page.tsx for ARIA Build copy patch */}

              <div className="mt-6 w-full space-y-4 sm:mt-8 sm:space-y-5">
                <h1
                  id="hero-heading"
                  className="max-w-none text-pretty text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl sm:leading-[1.06] lg:text-6xl lg:leading-[1.04] xl:text-7xl xl:leading-[1.03]"
                >
                  Turn validated ideas into high-converting landing pages.
                </h1>
                <p className={cn("mx-auto w-full max-w-xl sm:max-w-2xl lg:max-w-2xl", marketingBodyClass)}>
                  This template helps you ship a polished offer page fast with clear messaging, email
                  capture, and modern responsive design. Plug your copy and go live.
                </p>
              </div>

              <div
                id="waitlist"
                className="mt-8 w-full max-w-lg scroll-mt-24 text-left sm:mt-10 sm:scroll-mt-28"
              >
                <WaitlistForm dense />
              </div>

              <ul className="mx-auto mt-8 w-fit max-w-xl space-y-2.5 text-left sm:mt-10 sm:space-y-3 lg:mt-10 lg:max-w-3xl">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex min-w-0 items-start gap-2.5 text-xs leading-snug text-foreground/90 sm:text-sm"
                  >
                    <RiCheckboxCircleLine
                      className="mt-0.5 size-3.5 shrink-0 text-foreground sm:size-4"
                      aria-hidden
                    />
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <SectionPainOutcome />
        <SectionFeatures />
        <SectionHow />
        <SectionPricing />
        <SectionFaq />

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {siteCopy.closing.title}
            </h2>
            <p className={cn("mx-auto mt-3 max-w-lg sm:mt-4", marketingBodyClass)}>
              {siteCopy.closing.body}
            </p>
            <div className="mx-auto mt-8 flex max-w-xl flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:justify-center">
              <a href="#waitlist" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}>
                {siteCopy.closing.ctaPrimary}
              </a>
              <a
                href="#features"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}
              >
                {siteCopy.closing.ctaSecondary}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        brandName={siteCopy.ariaPatch.navBrandSlug}
        twitterHandle={twitterHandle}
      />
    </div>
  )
}
