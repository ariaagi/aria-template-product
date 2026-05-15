import { SocialIconLinks } from "@/components/landing/social-icon-links"
import { cn } from "@/lib/utils"

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
    <footer className={cn("border-t border-border/80 bg-background")}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-8 text-center sm:px-6 sm:py-10 lg:px-8">
        <p className="w-full text-sm text-muted-foreground">
          © {year} {brandName}. All rights reserved.
        </p>
        <SocialIconLinks
          className="justify-center"
          twitterUrl={twitterUrl}
          twitterAriaLabel={`${brandName} on X (${twitterHandle})`}
        />
      </div>
    </footer>
  )
}
