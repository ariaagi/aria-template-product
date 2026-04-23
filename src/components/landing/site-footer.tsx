import { SocialIconLinks } from "@/components/landing/social-icon-links"
import { cn } from "@/lib/utils"

type SiteFooterProps = {
  brandName: string
  twitterHandle: string
  linkedinUrl: string
  githubUrl: string
}

export function SiteFooter({
  brandName,
  twitterHandle,
  linkedinUrl,
  githubUrl,
}: SiteFooterProps): React.ReactElement {
  const year = new Date().getFullYear()
  const twitterUrl = `https://x.com/${twitterHandle}`

  return (
    <footer className={cn("border-t border-border/80 bg-background")}>
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-10 lg:px-8">
        <p className="shrink-0 text-sm text-muted-foreground">
          © {year} {brandName}. All rights reserved.
        </p>
        <SocialIconLinks
          className="justify-start sm:justify-end"
          linkedinUrl={linkedinUrl}
          githubUrl={githubUrl}
          twitterUrl={twitterUrl}
          twitterAriaLabel={`${brandName} on X (${twitterHandle})`}
        />
      </div>
    </footer>
  )
}
