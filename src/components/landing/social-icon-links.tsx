import { RiGithubFill, RiLinkedinFill, RiTwitterXLine } from "@remixicon/react"

import { cn } from "@/lib/utils"

const iconWrap =
  "inline-flex size-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:size-9"

export type SocialIconLinksProps = {
  linkedinUrl: string
  githubUrl: string
  twitterUrl: string
  twitterAriaLabel: string
  className?: string
}

export function SocialIconLinks({
  linkedinUrl,
  githubUrl,
  twitterUrl,
  twitterAriaLabel,
  className,
}: SocialIconLinksProps): React.ReactElement {
  const trimmedLinkedinUrl = linkedinUrl.trim()
  const trimmedGithubUrl = githubUrl.trim()
  const trimmedTwitterUrl = twitterUrl.trim()
  const showTwitter = Boolean(trimmedTwitterUrl) && !/^https:\/\/x\.com\/?$/i.test(trimmedTwitterUrl)

  return (
    <div className={cn("flex shrink-0 items-center gap-0.5 sm:gap-1", className)}>
      {trimmedLinkedinUrl ? (
        <a
          href={trimmedLinkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={iconWrap}
          aria-label="LinkedIn"
        >
          <RiLinkedinFill className="size-[1.125rem]" aria-hidden />
        </a>
      ) : null}
      {trimmedGithubUrl ? (
        <a
          href={trimmedGithubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={iconWrap}
          aria-label="GitHub"
        >
          <RiGithubFill className="size-[1.125rem]" aria-hidden />
        </a>
      ) : null}
      {showTwitter ? (
        <a
          href={trimmedTwitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={iconWrap}
          aria-label={twitterAriaLabel}
        >
          <RiTwitterXLine className="size-[1.125rem]" aria-hidden />
        </a>
      ) : null}
    </div>
  )
}
