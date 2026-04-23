"use client"

import Image from "next/image"
import { RiCheckboxCircleLine, RiFlashlightLine } from "@remixicon/react"

import { PageBackdrop } from "@/components/landing/page-backdrop"
import { NavHeader } from "@/components/landing/nav-header"
import { SectionFaq } from "@/components/landing/section-faq"
import { SectionFeatures } from "@/components/landing/section-features"
import { SectionHow } from "@/components/landing/section-how"
import { SectionLogoStrip } from "@/components/landing/section-logo-strip"
import { SectionPainOutcome } from "@/components/landing/section-pain-outcome"
import { SectionPreview } from "@/components/landing/section-preview"
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

const heroImageSrc = "/product-image.svg"
const headerLogoSrc = siteCopy.paths.headerLogo
const twitterHandle = "aria_agi"
const socialLinkedinUrl = siteCopy.social.linkedinUrl
const socialGithubUrl = siteCopy.social.githubUrl

export default function Home(): React.ReactElement {
  return (
    <div id="top" className="relative min-h-screen min-w-0">
      <PageBackdrop />

      <NavHeader
        brandName={siteCopy.ariaPatch.navBrandSlug}
        logoSrc={headerLogoSrc}
        twitterHandle={twitterHandle}
        linkedinUrl={socialLinkedinUrl}
        githubUrl={socialGithubUrl}
      />

      <main className="relative w-full min-w-0">
        <section
          className="relative border-b border-border/60 pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="min-w-0 space-y-6 sm:space-y-8">
                <a
                  href="#story"
                  className="inline-flex w-fit max-w-full items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 py-0.5 pl-0.5 pr-2 text-primary ring-1 ring-primary/10 transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:gap-2 md:py-1 md:pl-1 md:pr-2.5"
                >
                  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 md:size-7">
                    <RiFlashlightLine className="size-3 md:size-3.5" aria-hidden />
                  </span>
                  <span className="min-w-0 truncate text-[0.6875rem] font-semibold uppercase leading-tight tracking-wide text-primary sm:text-[0.75rem] md:text-[0.8125rem]">
                    {siteCopy.hero.pillLabel}
                  </span>
                </a>

                {/* validated idea launch — keep this exact phrase in page.tsx for ARIA Build copy patch */}

                <div className="space-y-4 sm:space-y-5">
                  <h1
                    id="hero-heading"
                    className="text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl sm:leading-[1.08] lg:text-5xl xl:text-[3.25rem]"
                  >
                    Turn validated ideas into high-converting landing pages.
                  </h1>
                  <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
                    This template helps you ship a polished offer page fast with clear messaging, email
                    capture, and modern responsive design. Plug your copy and go live.
                  </p>
                </div>

                <ul className="space-y-2.5 sm:space-y-3">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="flex w-full min-w-0 items-start gap-2.5 text-sm text-foreground/90 sm:text-base"
                    >
                      <RiCheckboxCircleLine
                        className="mt-0.5 size-[1.125rem] shrink-0 text-primary sm:size-5"
                        aria-hidden
                      />
                      <span className="min-w-0 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <div id="waitlist" className="scroll-mt-24 space-y-3 sm:scroll-mt-28">
                  <p className="text-sm font-medium text-foreground">{siteCopy.hero.waitlistHeading}</p>
                  <WaitlistForm />
                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-[0.8125rem]">
                    {siteCopy.hero.waitlistHint}
                  </p>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/80 bg-card/60 shadow-2xl shadow-primary/10 ring-1 ring-black/[0.04] backdrop-blur-sm sm:aspect-[5/4] lg:aspect-[4/5] xl:rounded-3xl"
                >
                  <Image
                    src={heroImageSrc}
                    alt={siteCopy.hero.heroImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionLogoStrip />
        <SectionPainOutcome />
        <SectionFeatures />
        <SectionHow />
        <SectionPreview heroImageSrc={heroImageSrc} />
        <SectionPricing />
        <SectionFaq />

        <section className="border-t border-border/60 bg-gradient-to-br from-primary/10 via-background to-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {siteCopy.closing.title}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-pretty text-base text-muted-foreground sm:mt-4 sm:text-lg">
              {siteCopy.closing.body}
            </p>
            <div className="mx-auto mt-8 flex max-w-xl flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:justify-center">
              <a href="#waitlist" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}>
                {siteCopy.closing.ctaPrimary}
              </a>
              <a
                href="#preview"
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
        linkedinUrl={socialLinkedinUrl}
        githubUrl={socialGithubUrl}
      />
    </div>
  )
}
