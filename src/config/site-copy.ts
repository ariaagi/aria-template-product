import type { Metadata } from "next"

/**
 * Central marketing + SEO copy. Edit here for Claude / operators.
 *
 * This repository is the **ARIA GitHub template** (source for “Use this template” / org
 * template repos). **ARIA Build** in `aria-dapp` forks it, then replaces `ariaPatch.navBrandSlug`
 * here and regex-patches literals in `src/app/page.tsx` (hero bullets, image path, X handle,
 * pill phrase, headline, summary). Keep `ariaPatch` aligned with those `page.tsx` literals when
 * you change them by hand.
 *
 * **Character limits:** each string field has a `@maxChars` JSDoc tag (template baseline length,
 * or max among repeated slots). Programmatic ceilings match those values in
 * `./site-copy-char-limits.ts` and on `/copy-limits`.
 */
export const siteCopy = {
  paths: {
    /** @maxChars 15 — public asset path for the header mark. */
    headerLogo: "/ARIA_Brand.png",
    /** @maxChars 7 — Open Graph / social preview image path. */
    ogImage: "/OG.png",
  },

  site: {
    /** @maxChars 19 — production origin; set `NEXT_PUBLIC_SITE_URL` to match on Vercel. */
    canonicalOrigin: "https://ariaagi.com",
  },

  brand: {
    /** @maxChars 4 — metadata + application name. */
    name: "ARIA",
    /** @maxChars 28 — default `<title>` and OG title. */
    titleDefault: "ARIA — Ship the right thing.",
    /** @maxChars 106 — meta / OG description. */
    description:
      "Autonomous revenue intelligence for operators who ship. Early access landing built with the ARIA template.",
    /** @maxChars 9 — Twitter/X card `site` field (@handle). */
    twitterSite: "@aria_agi",
    /** @maxChars 9 — Twitter/X card `creator` field (@handle). */
    twitterCreator: "@aria_agi",
  },

  /**
   * Mirror of literals ARIA Build patches in `page.tsx`. Update **both** when changing
   * hero bullets, headline, summary, image path, or X handle.
   */
  ariaPatch: {
    /**
     * Exactly three strings; each **@maxChars 37** (longest shipped bullet; keep in sync with
     * `const highlights = [...]` in `page.tsx`).
     */
    highlights: [
      "Built from validated user demand",
      "Launch-ready workflow in minutes",
      "Simple setup, zero technical friction",
    ],
    /** @maxChars 18 — uploaded product asset path (ARIA Build); not shown in hero layout. */
    heroImageSrc: "/product-image.svg",
    /** @maxChars 8 — X handle without `@` (profile URLs). */
    twitterHandle: "aria_agi",
    /**
     * @maxChars 24 — header + footer wordmark; truncates in narrow header.
     * ARIA Build overwrites when launching from an idea.
     */
    navBrandSlug: "aria validation template",
    /** @maxChars 56 — hero H1; must match `page.tsx`. */
    headline: "Turn validated ideas into high-converting landing pages.",
    /** @maxChars 150 — hero supporting copy; must match `page.tsx`. */
    summary:
      "This template helps you ship a polished offer page fast with clear messaging, email capture, and modern responsive design. Plug your copy and go live.",
  },

  social: {
    /** @maxChars 25 — full LinkedIn URL. */
    linkedinUrl: "https://www.linkedin.com/",
    /** @maxChars 19 — full GitHub URL. */
    githubUrl: "https://github.com/",
  },

  nav: {
    /** @maxChars 8 — desktop nav link. */
    features: "Features",
    /** @maxChars 12 — desktop nav link. */
    howItWorks: "How it works",
    /** @maxChars 7 — desktop nav link. */
    pricing: "Pricing",
    /** @maxChars 3 — desktop nav link. */
    faq: "FAQ",
  },

  hero: {
    /** @maxChars 35 — hero pill; truncates on small screens (ARIA badge slot is 24 in composer). */
    pillLabel: "New — validation-to-launch template",
  },

  closing: {
    /** @maxChars 18 — final band H2. */
    title: "Ready when you are",
    /** @maxChars 111 — final band body. */
    body: "Drop in your narrative, connect waitlist delivery, and ship a page that feels like a mature product—on day one.",
    /** @maxChars 13 — primary button. */
    ctaPrimary: "Join waitlist",
    /** @maxChars 16 — secondary button (links to #features). */
    ctaSecondary: "Explore features",
  },

  logoStrip: {
    /** @maxChars 16 — section accessible name. */
    ariaLabel: "Trusted by teams",
    /** @maxChars 28 — eyebrow above faux logos. */
    eyebrow: "Built for operators who ship",
    /** Each placeholder **@maxChars 9** — five logo strip names. */
    placeholders: ["Acme", "Northwind", "Globex", "Umbrella", "Stark"] as const,
  },

  story: {
    /** @maxChars 19 — story H2. */
    title: "Clarity beats noise",
    /** @maxChars 96 — story intro. */
    subtitle:
      "Replace scattered notes with a focused narrative your buyers actually read—on every screen size.",
    pains: [
      {
        key: "contrast" as const,
        /** @maxChars 19 — pain card title. */
        title: "Fragmented feedback",
        /** @maxChars 77 — pain card body. */
        body: "Signals live in slides, threads, and docs—never one narrative you can act on.",
      },
      {
        key: "loop" as const,
        /** @maxChars 21 — pain card title. */
        title: "Slow validation loops",
        /** @maxChars 74 — pain card body. */
        body: "Teams debate opinions instead of running tight experiments on real demand.",
      },
    ],
    outcomes: [
      {
        key: "rocket" as const,
        /** @maxChars 15 — outcome card title. */
        title: "One crisp story",
        /** @maxChars 75 — outcome card body. */
        body: "A single page that explains the offer, proves urgency, and captures intent.",
      },
    ],
  },

  features: {
    /** @maxChars 7 — section kicker. */
    eyebrow: "Product",
    /** @maxChars 38 — features H2. */
    title: "Everything you need to look inevitable",
    /** @maxChars 107 — features intro. */
    subtitle:
      "A cohesive marketing surface that scales from first landing to mature GTM—without redesigning from scratch.",
    /** Each card: title **@maxChars 25**, description **@maxChars 84**. */
    items: [
      { key: "layout" as const, title: "Modular sections", description: "Hero, proof, features, FAQ—composed for scan-friendly reading on mobile first." },
      { key: "shield" as const, title: "Accessible by default", description: "Semantic structure, visible focus, and contrast-aware light surfaces." },
      { key: "timer" as const, title: "Fast everywhere", description: "Lean client islands, static-friendly layout, and responsive type scales." },
      { key: "voice" as const, title: "Intent capture", description: "Waitlist wired for local dev and production ARIA endpoints—no secrets in the client." },
      { key: "chart" as const, title: "Operator-grade polish", description: "Spacing, rhythm, and hierarchy tuned for credible B2B positioning." },
      { key: "sparkle" as const, title: "Ready for personalization", description: "Copy blocks structured so your pipeline can swap headlines, bullets, and CTAs." },
    ],
  },

  how: {
    /** @maxChars 12 — section kicker. */
    eyebrow: "How it works",
    /** @maxChars 30 — how H2. */
    title: "A page buyers finish on mobile",
    /** @maxChars 100 — left column intro. */
    intro:
      "Three beats, tight copy, and responsive rhythm so your story stays legible from 320px to ultra-wide.",
    /** Each line **@maxChars 63** — checklist in left column. */
    bullets: [
      "Sticky navigation with in-page anchors.",
      "Touch-friendly controls and 44px minimum targets.",
      "Stacked layouts that breathe—no cramped grids on small screens.",
    ],
    steps: [
      {
        n: 1,
        /** @maxChars 18 — step title. */
        title: "Anchor the promise",
        /** @maxChars 83 — step body. */
        body: "Lead with one outcome, one urgency signal, and proof that you understand the buyer.",
      },
      {
        n: 2,
        /** @maxChars 18 — step title. */
        title: "Show the mechanism",
        /** @maxChars 87 — step body. */
        body: "Explain how it works in plain language—short blocks, generous spacing, no jargon walls.",
      },
      {
        n: 3,
        /** @maxChars 14 — step title. */
        title: "Capture intent",
        /** @maxChars 84 — step body. */
        body: "A single waitlist path with clear confirmation states and respectful error handling.",
      },
    ],
  },

  pricing: {
    /** @maxChars 7 — pricing kicker. */
    eyebrow: "Pricing",
    /** @maxChars 26 — pricing H2. */
    title: "Early access, simple terms",
    /** @maxChars 109 — pricing intro. */
    subtitle:
      "Start with a waitlist program. When you are ready for paid tiers, this layout adapts without breaking rhythm.",
    /** @maxChars 12 — plan badge text. */
    badge: "Early access",
    /** @maxChars 18 — muted hint beside badge. */
    badgeHint: "Limited onboarding",
    /** @maxChars 18 — main plan title. */
    planTitle: "Free while in beta",
    /** @maxChars 76 — plan subtitle. */
    planDescription: "Join the waitlist—no card required. We will never bury pricing in footnotes.",
    /** Each line **@maxChars 40** — perk bullet. */
    perks: [
      "Responsive layout across breakpoints",
      "Accessible forms and focus states",
      "Email capture wired for ARIA deployments",
      "Structured sections for future toggles",
    ],
    /** @maxChars 13 — primary pricing CTA. */
    ctaJoin: "Join waitlist",
    /** @maxChars 13 — secondary control label. */
    ctaSales: "Talk to sales",
  },

  faq: {
    /** @maxChars 26 — FAQ H2. */
    title: "Frequently asked questions",
    /** @maxChars 68 — FAQ intro. */
    subtitle: "Straight answers for operators shipping a credible first impression.",
    items: [
      {
        /** @maxChars 34 — accordion trigger text. */
        q: "Is this template production-ready?",
        /** @maxChars 167 — accordion answer. */
        a: "Yes—the stack is Next.js App Router, TypeScript, Tailwind v4, and shadcn-style primitives. You should still run your own QA, analytics, and legal review before launch.",
      },
      {
        /** @maxChars 28 */
        q: "How does email capture work?",
        /** @maxChars 203 */
        a: "In development, submissions hit a local API route. In production, ARIA sets NEXT_PUBLIC_WAITLIST_ENDPOINT so signups post to your public leads endpoint with a secure token—no secrets ship to the browser.",
      },
      {
        /** @maxChars 28 */
        q: "Will it look good on phones?",
        /** @maxChars 122 */
        a: "Layouts are mobile-first: fluid type, stacked grids, touch-friendly controls, and tested spacing down to narrow viewports.",
      },
      {
        /** @maxChars 30 */
        q: "Can sections be toggled later?",
        /** @maxChars 171 */
        a: "Sections are isolated components so your host app can add configuration and preview. This template ships with a focused set of sections (no separate product-preview band).",
      },
    ],
  },

  ctas: {
    /** @maxChars 13 — default waitlist CTA label. */
    primaryWaitlist: "Join waitlist",
    /** @maxChars 8 — submitting state on the button. */
    joining: "Joining…",
  },

  waitlist: {
    /** @maxChars 15 — email input placeholder. */
    emailPlaceholder: "you@company.com",
    /** @maxChars 24 — empty-field message. */
    emptyEmail: "Please enter your email.",
    /** @maxChars 35 — generic submit failure. */
    submitError: "Could not submit. Please try again.",
    /** @maxChars 32 — fallback success line. */
    successMessage: "Thanks! You are on the waitlist.",
    /** @maxChars 21 — API / analytics source slug; keep stable in prod. */
    sourceTag: "aria-template-product",
  },
} as const

function trimEnv(value: string | undefined): string | undefined {
  const t = value?.trim()
  return t ? t : undefined
}

/**
 * Prefer `NEXT_PUBLIC_SITE_URL=https://ariaagi.com` in production so relative OG paths resolve
 * against your real domain (see `siteCopy.site.canonicalOrigin`).
 */
export function getMetadataBaseUrl(): URL {
  const explicit = trimEnv(process.env.NEXT_PUBLIC_SITE_URL)
  if (explicit) {
    const normalized = explicit.replace(/\/+$/, "")
    return new URL(`${normalized}/`)
  }
  const vercel = trimEnv(process.env.VERCEL_URL)
  if (vercel) {
    return new URL(`https://${vercel.replace(/^\/+/, "")}/`)
  }
  return new URL("http://localhost:3000/")
}

export function buildSiteMetadata(): Metadata {
  const { name, titleDefault, description, twitterSite, twitterCreator } = siteCopy.brand
  const { headerLogo, ogImage } = siteCopy.paths
  const { canonicalOrigin } = siteCopy.site

  return {
    metadataBase: getMetadataBaseUrl(),
    alternates: {
      canonical: canonicalOrigin,
    },
    title: {
      default: titleDefault,
      template: `%s | ${name}`,
    },
    description,
    applicationName: name,
    openGraph: {
      type: "website",
      url: canonicalOrigin,
      siteName: name,
      title: titleDefault,
      description,
      images: [{ url: ogImage, alt: `${name} preview` }],
    },
    twitter: {
      card: "summary_large_image",
      site: twitterSite,
      creator: twitterCreator,
      title: titleDefault,
      description,
      images: [ogImage],
    },
    icons: {
      icon: [{ url: headerLogo, type: "image/png" }],
      apple: [{ url: headerLogo, sizes: "180x180", type: "image/png" }],
    },
  }
}

export {
  siteCopyCharLimits,
  flattenSiteCopyCharLimits,
  formatSiteCopyLimitsForPrompt,
  type FlatSiteCopyLimit,
  type SiteCopyCharLimits,
} from "./site-copy-char-limits"
