import { SocialIconLinks } from "@/components/landing/social-icon-links"

type SiteFooterProps = {
  brandName: string
  twitterHandle: string
}

export function SiteFooter({
  brandName,
  twitterHandle,
}: SiteFooterProps): React.ReactElement {
  const year = new Date().getFullYear()
  const twitterUrl = `https://x.com/${twitterHandle}`

  return (
    <footer>
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-5 sm:gap-4 sm:px-6 sm:py-6 lg:px-8">
        <div aria-hidden className="min-w-0" />
        <p className="text-center text-sm text-muted-foreground">
          © {year} {brandName}. All rights reserved.
        </p>
        <SocialIconLinks
          className="justify-self-end"
          twitterUrl={twitterUrl}
          twitterAriaLabel={`${brandName} on X (${twitterHandle})`}
        />
      </div>
    </footer>
  )
}
