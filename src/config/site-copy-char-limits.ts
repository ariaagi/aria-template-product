/**
 * Character ceilings for `siteCopy` strings in the **ARIA GitHub template** repo. ARIA Build,
 * Claude, and operators should keep generated or hand-edited copy within these bounds so forks
 * do not hit truncation, overflow, or awkward line breaks in the landing layout.
 *
 * Use `flattenSiteCopyCharLimits()` for tables and tooltips. Patch-related keys align with
 * `build-copy-composer.ts` in `aria-dapp` (badge 24, bullets 56, headline 64, summary 220).
 */
export const siteCopyCharLimits = {
  paths: {
    headerLogo: 128,
    ogImage: 128,
  },
  site: {
    canonicalOrigin: 120,
  },
  brand: {
    name: 32,
    titleDefault: 64,
    description: 200,
    twitterSite: 24,
    twitterCreator: 24,
  },
  /** Mirrors literals patched in `page.tsx`; keep in sync with ARIA Build composer caps. */
  ariaPatch: {
    /** Per bullet string in `highlights` (exactly 3 lines in the hero). */
    highlightItem: 56,
    heroImageSrc: 128,
    twitterHandle: 20,
    /** Header + footer wordmark; narrow column truncates with ellipsis. */
    navBrandSlug: 48,
    /** Hero H1; ARIA `finalizeCopy` caps at 64 — match when editing `page.tsx`. */
    headline: 64,
    /** Hero supporting paragraph; composer `shortenWithoutEllipsis` uses 220. */
    summary: 220,
  },
  social: {
    linkedinUrl: 300,
    githubUrl: 300,
  },
  nav: {
    features: 22,
    howItWorks: 24,
    pricing: 18,
    faq: 14,
  },
  hero: {
    pillLabel: 56,
    waitlistHeading: 40,
    waitlistHint: 120,
    heroImageAlt: 120,
  },
  closing: {
    title: 56,
    body: 220,
    ctaPrimary: 24,
    ctaSecondary: 24,
  },
  logoStrip: {
    ariaLabel: 56,
    eyebrow: 56,
    placeholder: 24,
  },
  story: {
    title: 56,
    subtitle: 180,
    painTitle: 44,
    painBody: 180,
    outcomeTitle: 44,
    outcomeBody: 200,
  },
  features: {
    eyebrow: 24,
    title: 72,
    subtitle: 200,
    itemTitle: 48,
    itemDescription: 180,
  },
  how: {
    eyebrow: 28,
    title: 64,
    intro: 200,
    bullet: 120,
    stepTitle: 48,
    stepBody: 280,
  },
  preview: {
    badge: 28,
    title: 72,
    subtitle: 200,
    chip: 24,
    columnAbove: 32,
    columnAboveBody: 240,
    columnBelow: 32,
    columnBelowBody: 240,
    imageAlt: 120,
  },
  pricing: {
    eyebrow: 20,
    title: 56,
    subtitle: 200,
    badge: 22,
    badgeHint: 32,
    planTitle: 40,
    planDescription: 160,
    perkLine: 88,
    ctaJoin: 22,
    ctaSales: 22,
  },
  faq: {
    title: 56,
    subtitle: 140,
    question: 100,
    answer: 1200,
  },
  ctas: {
    primaryWaitlist: 24,
    joining: 20,
  },
  waitlist: {
    emailPlaceholder: 48,
    emptyEmail: 120,
    submitError: 160,
    successMessage: 160,
    sourceTag: 64,
  },
} as const

export type SiteCopyCharLimits = typeof siteCopyCharLimits

export type FlatSiteCopyLimit = {
  path: string
  maxChars: number
  note: string
}

const LIMIT_NOTES: Record<string, string> = {
  "paths.headerLogo": "Public URL path for the header mark.",
  "paths.ogImage": "Open Graph / social preview image path.",
  "site.canonicalOrigin": "Production site origin (https + host, no trailing slash).",
  "brand.name": "Short product name in metadata and chrome.",
  "brand.titleDefault": "Default `<title>` and OG title.",
  "brand.description": "Meta / OG description; keep scannable.",
  "brand.twitterSite": "Twitter/X @handle for card site field.",
  "brand.twitterCreator": "Twitter/X @handle for creator field.",
  "ariaPatch.highlightItem": "One hero checklist line; ARIA composer caps at 56.",
  "ariaPatch.heroImageSrc": "Public path for hero + preview image.",
  "ariaPatch.twitterHandle": "X handle without @ for profile URLs.",
  "ariaPatch.navBrandSlug": "Wordmark next to the logo; truncates on small widths.",
  "ariaPatch.headline": "Hero H1; ARIA finalizeCopy caps at 64 characters.",
  "ariaPatch.summary": "Hero subcopy; ARIA composer caps at 220 characters.",
  "social.linkedinUrl": "Full LinkedIn profile or company URL.",
  "social.githubUrl": "Full GitHub org or profile URL.",
  "nav.features": "Desktop nav label.",
  "nav.howItWorks": "Desktop nav label.",
  "nav.pricing": "Desktop nav label.",
  "nav.faq": "Desktop nav label.",
  "hero.pillLabel": "Upper pill; truncates on narrow screens.",
  "hero.waitlistHeading": "Label above the email field.",
  "hero.waitlistHint": "Muted helper under the form.",
  "hero.heroImageAlt": "Alt text for the hero image.",
  "closing.title": "Final band heading.",
  "closing.body": "Final band supporting copy.",
  "closing.ctaPrimary": "Primary button label.",
  "closing.ctaSecondary": "Outline button label.",
  "logoStrip.ariaLabel": "Accessible name for the logo row section.",
  "logoStrip.eyebrow": "Small caps line above fake logos.",
  "logoStrip.placeholder": "Each faux logo word (five slots).",
  "story.title": "Story section H2.",
  "story.subtitle": "Story intro paragraph.",
  "story.painTitle": "Each pain card title.",
  "story.painBody": "Each pain card body.",
  "story.outcomeTitle": "Outcome card title.",
  "story.outcomeBody": "Outcome card body.",
  "features.eyebrow": "Small caps label above the grid.",
  "features.title": "Features H2.",
  "features.subtitle": "Features intro paragraph.",
  "features.itemTitle": "Each feature card title.",
  "features.itemDescription": "Each feature card description.",
  "how.eyebrow": "Section kicker.",
  "how.title": "How-it-works H2.",
  "how.intro": "Left column intro copy.",
  "how.bullet": "Each checklist line in the left column.",
  "how.stepTitle": "Numbered step title.",
  "how.stepBody": "Numbered step body.",
  "preview.badge": "Badge above preview heading.",
  "preview.title": "Preview H2.",
  "preview.subtitle": "Preview intro.",
  "preview.chip": "Each small chip label (light mode, responsive, etc.).",
  "preview.columnAbove": "First column heading inside the preview card.",
  "preview.columnAboveBody": "First column body in the preview card.",
  "preview.columnBelow": "Second column heading inside the preview card.",
  "preview.columnBelowBody": "Second column body in the preview card.",
  "preview.imageAlt": "Alt text for preview image.",
  "pricing.eyebrow": "Pricing kicker.",
  "pricing.title": "Pricing H2.",
  "pricing.subtitle": "Pricing intro.",
  "pricing.badge": "Plan badge label.",
  "pricing.badgeHint": "Muted hint beside the badge.",
  "pricing.planTitle": "Main plan title.",
  "pricing.planDescription": "Plan subtitle / description.",
  "pricing.perkLine": "Each bullet in the perk list.",
  "pricing.ctaJoin": "Primary pricing CTA.",
  "pricing.ctaSales": "Secondary pricing control label.",
  "faq.title": "FAQ H2.",
  "faq.subtitle": "FAQ intro line.",
  "faq.question": "Each accordion question.",
  "faq.answer": "Each accordion answer (longer is OK in accordion).",
  "ctas.primaryWaitlist": "Default waitlist button label.",
  "ctas.joining": "Loading state on submit.",
  "waitlist.emailPlaceholder": "Input placeholder.",
  "waitlist.emptyEmail": "Client-side empty validation message.",
  "waitlist.submitError": "Generic failure toast / line.",
  "waitlist.successMessage": "Fallback success line if the API omits a message.",
  "waitlist.sourceTag": "Analytics / API source slug; keep stable in production.",
}

function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value)
}

/**
 * Flatten nested numeric limits into path + max for tables and API responses.
 */
export function flattenSiteCopyCharLimits(
  obj: Record<string, unknown> = siteCopyCharLimits as unknown as Record<string, unknown>,
  prefix = ""
): FlatSiteCopyLimit[] {
  const out: FlatSiteCopyLimit[] = []
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key
    if (typeof value === "number") {
      out.push({
        path,
        maxChars: value,
        note: LIMIT_NOTES[path] ?? "",
      })
    } else if (isPlainRecord(value)) {
      out.push(...flattenSiteCopyCharLimits(value, path))
    }
  }
  return out
}

/**
 * Human-readable lines for tooltips, docs, or pasting into an LLM system prompt.
 */
export function formatSiteCopyLimitsForPrompt(): string {
  return flattenSiteCopyCharLimits()
    .map((row) => `- ${row.path}: max ${row.maxChars} chars${row.note ? ` — ${row.note}` : ""}`)
    .join("\n")
}
