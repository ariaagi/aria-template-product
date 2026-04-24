import Image from "next/image"

import { SocialIconLinks } from "@/components/landing/social-icon-links"
import { siteCopy } from "@/config/site-copy"

const navLinkClass =
  "rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

type NavHeaderProps = {
  brandName: string
  twitterHandle: string
  linkedinUrl: string
  githubUrl: string
  /** Swapped by ARIA Build or your pipeline when a real logo exists */
  logoSrc?: string
}

export function NavHeader({
  brandName,
  twitterHandle,
  linkedinUrl,
  githubUrl,
  logoSrc,
}: NavHeaderProps): React.ReactElement {
  const twitterUrl = `https://x.com/${twitterHandle}`
  const hasLogo = Boolean(logoSrc?.trim())

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/75 backdrop-blur-md supports-[backdrop-filter]:bg-background/65">
      <div className="mx-auto flex h-14 min-h-14 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:min-h-16 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="inline-flex min-w-0 max-w-[min(100%,18rem)] items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:max-w-xs"
        >
          {hasLogo ? (
            <span className="relative inline-block size-9 shrink-0 overflow-hidden rounded-lg bg-muted ring-1 ring-border">
              <Image
                src={logoSrc!}
                alt={`${brandName} logo`}
                fill
                className="object-cover"
                sizes="36px"
                priority
              />
            </span>
          ) : null}
          <span className="truncate text-sm font-semibold tracking-tight text-foreground sm:text-base">
            {brandName}
          </span>
        </a>

        <nav
          className="hidden items-center gap-0.5 md:flex"
          aria-label="Primary"
        >
          <a href="#features" className={navLinkClass}>
            {siteCopy.nav.features}
          </a>
          <a href="#how" className={navLinkClass}>
            {siteCopy.nav.howItWorks}
          </a>
          <a href="#pricing" className={navLinkClass}>
            {siteCopy.nav.pricing}
          </a>
          <a href="#faq" className={navLinkClass}>
            {siteCopy.nav.faq}
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <SocialIconLinks
            linkedinUrl={linkedinUrl}
            githubUrl={githubUrl}
            twitterUrl={twitterUrl}
            twitterAriaLabel={`${brandName} on X (${twitterHandle})`}
          />
        </div>
      </div>
    </header>
  )
}
