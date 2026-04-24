/**
 * Character ceilings for `siteCopy` strings in the **ARIA GitHub template** repo.
 *
 * **Baseline rule:** each number is the UTF-16 `.length` of the shipped template copy, or for
 * repeating slots (hero bullets, FAQ rows, feature cards, etc.) the **maximum** length among
 * siblings. Use these when prompting Claude so generated copy stays within what the current UI
 * was tuned for. After you change strings in `site-copy.ts`, re-measure and bump any ceiling that
 * needs headroom.
 *
 * `flattenSiteCopyCharLimits()` powers `/copy-limits` and `formatSiteCopyLimitsForPrompt()`.
 * `ariaPatch.*` mirrors literals in `page.tsx` — keep both in sync when editing the hero.
 */
export const siteCopyCharLimits = {
  paths: {
    headerLogo: 15,
    ogImage: 7,
  },
  site: {
    canonicalOrigin: 19,
  },
  brand: {
    name: 4,
    titleDefault: 28,
    description: 106,
    twitterSite: 9,
    twitterCreator: 9,
  },
  /** Mirrors literals patched in `page.tsx`; keep in sync with `siteCopy.ariaPatch`. */
  ariaPatch: {
    /** Longest of the three hero checklist strings in `page.tsx` / `ariaPatch.highlights`. */
    highlightItem: 37,
    heroImageSrc: 18,
    twitterHandle: 8,
    navBrandSlug: 24,
    headline: 56,
    summary: 150,
  },
  social: {
    linkedinUrl: 25,
    githubUrl: 19,
  },
  nav: {
    features: 8,
    howItWorks: 12,
    pricing: 7,
    faq: 3,
  },
  hero: {
    pillLabel: 35,
  },
  closing: {
    title: 18,
    body: 111,
    ctaPrimary: 13,
    ctaSecondary: 16,
  },
  logoStrip: {
    ariaLabel: 16,
    eyebrow: 28,
    placeholder: 9,
  },
  story: {
    title: 19,
    subtitle: 96,
    painTitle: 21,
    painBody: 77,
    outcomeTitle: 15,
    outcomeBody: 75,
  },
  features: {
    eyebrow: 7,
    title: 38,
    subtitle: 107,
    itemTitle: 25,
    itemDescription: 84,
  },
  how: {
    eyebrow: 12,
    title: 30,
    intro: 100,
    bullet: 63,
    stepTitle: 18,
    stepBody: 87,
  },
  pricing: {
    eyebrow: 7,
    title: 26,
    subtitle: 109,
    badge: 12,
    badgeHint: 18,
    planTitle: 18,
    planDescription: 76,
    perkLine: 40,
    ctaJoin: 13,
    ctaSales: 13,
  },
  faq: {
    title: 26,
    subtitle: 68,
    question: 34,
    answer: 203,
  },
  ctas: {
    primaryWaitlist: 13,
    joining: 8,
  },
  waitlist: {
    emailPlaceholder: 15,
    emptyEmail: 24,
    submitError: 35,
    successMessage: 32,
    sourceTag: 21,
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
  "ariaPatch.highlightItem": "One hero checklist line (max of three shipped bullets).",
  "ariaPatch.heroImageSrc": "Public path for uploaded product asset (ARIA Build).",
  "ariaPatch.twitterHandle": "X handle without @ for profile URLs.",
  "ariaPatch.navBrandSlug": "Wordmark next to the logo; truncates on small widths.",
  "ariaPatch.headline": "Hero H1; must match `page.tsx` literal.",
  "ariaPatch.summary": "Hero subcopy; must match `page.tsx` literal.",
  "social.linkedinUrl": "Full LinkedIn profile or company URL.",
  "social.githubUrl": "Full GitHub org or profile URL.",
  "nav.features": "Desktop nav label.",
  "nav.howItWorks": "Desktop nav label.",
  "nav.pricing": "Desktop nav label.",
  "nav.faq": "Desktop nav label.",
  "hero.pillLabel": "Upper pill; truncates on narrow screens.",
  "closing.title": "Final band heading.",
  "closing.body": "Final band supporting copy.",
  "closing.ctaPrimary": "Primary button label.",
  "closing.ctaSecondary": "Outline button label.",
  "logoStrip.ariaLabel": "Accessible name for the logo row section.",
  "logoStrip.eyebrow": "Small caps line above fake logos.",
  "logoStrip.placeholder": "Each faux logo word (max of five shipped).",
  "story.title": "Story section H2.",
  "story.subtitle": "Story intro paragraph.",
  "story.painTitle": "Each pain card title (max of shipped cards).",
  "story.painBody": "Each pain card body (max of shipped cards).",
  "story.outcomeTitle": "Outcome card title.",
  "story.outcomeBody": "Outcome card body.",
  "features.eyebrow": "Small caps label above the grid.",
  "features.title": "Features H2.",
  "features.subtitle": "Features intro paragraph.",
  "features.itemTitle": "Each feature card title (max of six shipped).",
  "features.itemDescription": "Each feature card description (max of six shipped).",
  "how.eyebrow": "Section kicker.",
  "how.title": "How-it-works H2.",
  "how.intro": "Left column intro copy.",
  "how.bullet": "Each checklist line in the left column (max of three shipped).",
  "how.stepTitle": "Numbered step title (max of three shipped).",
  "how.stepBody": "Numbered step body (max of three shipped).",
  "pricing.eyebrow": "Pricing kicker.",
  "pricing.title": "Pricing H2.",
  "pricing.subtitle": "Pricing intro.",
  "pricing.badge": "Plan badge label.",
  "pricing.badgeHint": "Muted hint beside the badge.",
  "pricing.planTitle": "Main plan title.",
  "pricing.planDescription": "Plan subtitle / description.",
  "pricing.perkLine": "Each bullet in the perk list (max of four shipped).",
  "pricing.ctaJoin": "Primary pricing CTA.",
  "pricing.ctaSales": "Secondary pricing control label.",
  "faq.title": "FAQ H2.",
  "faq.subtitle": "FAQ intro line.",
  "faq.question": "Each accordion question (max of four shipped).",
  "faq.answer": "Each accordion answer (max of four shipped).",
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
