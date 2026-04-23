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
  return (
    <div className={cn("flex shrink-0 items-center gap-0.5 sm:gap-1", className)}>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={iconWrap}
        aria-label="LinkedIn"
      >
        <RiLinkedinFill className="size-[1.125rem]" aria-hidden />
      </a>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={iconWrap}
        aria-label="GitHub"
      >
        <RiGithubFill className="size-[1.125rem]" aria-hidden />
      </a>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={iconWrap}
        aria-label={twitterAriaLabel}
      >
        <RiTwitterXLine className="size-[1.125rem]" aria-hidden />
      </a>
    </div>
  )
}
