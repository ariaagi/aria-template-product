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
 * **Character limits:** each string field has a `@maxChars` JSDoc tag. Programmatic ceilings
 * (for ARIA, validators, and the `/copy-limits` page) live in `./site-copy-char-limits.ts`.
 */
export const siteCopy = {
  paths: {
    /** @maxChars 128 — public asset path for the header mark. */
    headerLogo: "/ARIA_Brand.png",
    /** @maxChars 128 — Open Graph / social preview image path. */
    ogImage: "/OG.png",
  },

  site: {
    /** @maxChars 120 — production origin; set `NEXT_PUBLIC_SITE_URL` to match on Vercel. */
    canonicalOrigin: "https://ariaagi.com",
  },

  brand: {
    /** @maxChars 32 — metadata + application name. */
    name: "ARIA",
    /** @maxChars 64 — default `<title>` and OG title. */
    titleDefault: "ARIA — Ship the right thing.",
    /** @maxChars 200 — meta / OG description. */
    description:
      "Autonomous revenue intelligence for operators who ship. Early access landing built with the ARIA template.",
    /** @maxChars 24 — Twitter/X card `site` field (@handle). */
    twitterSite: "@aria_agi",
    /** @maxChars 24 — Twitter/X card `creator` field (@handle). */
    twitterCreator: "@aria_agi",
  },

  /**
   * Mirror of literals ARIA Build patches in `page.tsx`. Update **both** when changing
   * hero bullets, headline, summary, image path, or X handle.
   */
  ariaPatch: {
    /**
     * Exactly three strings; each **@maxChars 56** (matches ARIA composer bullet cap).
     * Keep in sync with `const highlights = [...]` in `page.tsx`.
     */
    highlights: [
      "Built from validated user demand",
      "Launch-ready workflow in minutes",
      "Simple setup, zero technical friction",
    ],
    /** @maxChars 128 — public path for hero + preview image. */
    heroImageSrc: "/product-image.svg",
    /** @maxChars 20 — X handle without `@` (profile URLs). */
    twitterHandle: "aria_agi",
    /**
     * @maxChars 48 — header + footer wordmark; truncates in narrow header.
     * ARIA Build overwrites when launching from an idea.
     */
    navBrandSlug: "aria validation template",
    /** @maxChars 64 — hero H1; must match `page.tsx` (ARIA `finalizeCopy` uses 64). */
    headline: "Turn validated ideas into high-converting landing pages.",
    /** @maxChars 220 — hero supporting copy; composer caps at 220. */
    summary:
      "This template helps you ship a polished offer page fast with clear messaging, email capture, and modern responsive design. Plug your copy and go live.",
  },

  social: {
    /** @maxChars 300 — full LinkedIn URL. */
    linkedinUrl: "https://www.linkedin.com/",
    /** @maxChars 300 — full GitHub URL. */
    githubUrl: "https://github.com/",
  },

  nav: {
    /** @maxChars 22 — desktop nav link. */
    features: "Features",
    /** @maxChars 24 — desktop nav link. */
    howItWorks: "How it works",
    /** @maxChars 18 — desktop nav link. */
    pricing: "Pricing",
    /** @maxChars 14 — desktop nav link. */
    faq: "FAQ",
  },

  hero: {
    /** @maxChars 56 — hero pill; truncates on small screens (ARIA badge slot is 24 in composer). */
    pillLabel: "New — validation-to-launch template",
    /** @maxChars 40 — label above waitlist field. */
    waitlistHeading: "Join the waitlist",
    /** @maxChars 120 — muted hint under the form. */
    waitlistHint: "We respect your inbox. Unsubscribe any time.",
    /** @maxChars 120 — hero image `alt`. */
    heroImageAlt: "Product hero visual",
  },

  closing: {
    /** @maxChars 56 — final band H2. */
    title: "Ready when you are",
    /** @maxChars 220 — final band body. */
    body: "Drop in your narrative, connect waitlist delivery, and ship a page that feels like a mature product—on day one.",
    /** @maxChars 24 — primary button. */
    ctaPrimary: "Join waitlist",
    /** @maxChars 24 — secondary button. */
    ctaSecondary: "See preview",
  },

  logoStrip: {
    /** @maxChars 56 — section accessible name. */
    ariaLabel: "Trusted by teams",
    /** @maxChars 56 — eyebrow above faux logos. */
    eyebrow: "Built for operators who ship",
    /** Each placeholder **@maxChars 24** — five logo strip names. */
    placeholders: ["Acme", "Northwind", "Globex", "Umbrella", "Stark"] as const,
  },

  story: {
    /** @maxChars 56 — story H2. */
    title: "Clarity beats noise",
    /** @maxChars 180 — story intro. */
    subtitle:
      "Replace scattered notes with a focused narrative your buyers actually read—on every screen size.",
    pains: [
      {
        key: "contrast" as const,
        /** @maxChars 44 — pain card title. */
        title: "Fragmented feedback",
        /** @maxChars 180 — pain card body. */
        body: "Signals live in slides, threads, and docs—never one narrative you can act on.",
      },
      {
        key: "loop" as const,
        /** @maxChars 44 — pain card title. */
        title: "Slow validation loops",
        /** @maxChars 180 — pain card body. */
        body: "Teams debate opinions instead of running tight experiments on real demand.",
      },
    ],
    outcomes: [
      {
        key: "rocket" as const,
        /** @maxChars 44 — outcome card title. */
        title: "One crisp story",
        /** @maxChars 200 — outcome card body. */
        body: "A single page that explains the offer, proves urgency, and captures intent.",
      },
    ],
  },

  features: {
    /** @maxChars 24 — section kicker. */
    eyebrow: "Product",
    /** @maxChars 72 — features H2. */
    title: "Everything you need to look inevitable",
    /** @maxChars 200 — features intro. */
    subtitle:
      "A cohesive marketing surface that scales from first landing to mature GTM—without redesigning from scratch.",
    /** Each card: title **@maxChars 48**, description **@maxChars 180**. */
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
    /** @maxChars 28 — section kicker. */
    eyebrow: "How it works",
    /** @maxChars 64 — how H2. */
    title: "A page buyers finish on mobile",
    /** @maxChars 200 — left column intro. */
    intro:
      "Three beats, tight copy, and responsive rhythm so your story stays legible from 320px to ultra-wide.",
    /** Each line **@maxChars 120** — checklist in left column. */
    bullets: [
      "Sticky navigation with in-page anchors.",
      "Touch-friendly controls and 44px minimum targets.",
      "Stacked layouts that breathe—no cramped grids on small screens.",
    ],
    steps: [
      {
        n: 1,
        /** @maxChars 48 — step title. */
        title: "Anchor the promise",
        /** @maxChars 280 — step body. */
        body: "Lead with one outcome, one urgency signal, and proof that you understand the buyer.",
      },
      {
        n: 2,
        /** @maxChars 48 — step title. */
        title: "Show the mechanism",
        /** @maxChars 280 — step body. */
        body: "Explain how it works in plain language—short blocks, generous spacing, no jargon walls.",
      },
      {
        n: 3,
        /** @maxChars 48 — step title. */
        title: "Capture intent",
        /** @maxChars 280 — step body. */
        body: "A single waitlist path with clear confirmation states and respectful error handling.",
      },
    ],
  },

  preview: {
    /** @maxChars 28 — badge above preview heading. */
    badge: "Product preview",
    /** @maxChars 72 — preview H2. */
    title: "Your hero asset, framed like a shipped product",
    /** @maxChars 200 — preview intro. */
    subtitle:
      "The same image powers the hero and a dedicated preview panel—ready for screenshots or lifestyle photography.",
    chips: {
      /** @maxChars 24 — small chip label. */
      lightMode: "Light mode",
      /** @maxChars 24 — small chip label. */
      responsive: "Responsive",
      /** @maxChars 24 — small chip label. */
      nextImage: "Next/Image",
    },
    /** @maxChars 32 — column heading in preview card. */
    columnAbove: "Above the fold",
    /** @maxChars 240 — column body in preview card. */
    columnAboveBody:
      "Pair a bold headline with a tight supporting line, then let the visual carry proof. Typography scales fluidly so nothing feels oversized on small phones.",
    /** @maxChars 32 — column heading in preview card. */
    columnBelow: "Below the fold",
    /** @maxChars 240 — column body in preview card. */
    columnBelowBody:
      "Sections stack into a single scroll narrative—ideal for waitlist launches and early-access programs.",
    /** @maxChars 120 — preview image `alt`. */
    imageAlt: "Product preview",
  },

  pricing: {
    /** @maxChars 20 — pricing kicker. */
    eyebrow: "Pricing",
    /** @maxChars 56 — pricing H2. */
    title: "Early access, simple terms",
    /** @maxChars 200 — pricing intro. */
    subtitle:
      "Start with a waitlist program. When you are ready for paid tiers, this layout adapts without breaking rhythm.",
    /** @maxChars 22 — plan badge text. */
    badge: "Early access",
    /** @maxChars 32 — muted hint beside badge. */
    badgeHint: "Limited onboarding",
    /** @maxChars 40 — main plan title. */
    planTitle: "Free while in beta",
    /** @maxChars 160 — plan subtitle. */
    planDescription: "Join the waitlist—no card required. We will never bury pricing in footnotes.",
    /** Each line **@maxChars 88** — perk bullet. */
    perks: [
      "Responsive layout across breakpoints",
      "Accessible forms and focus states",
      "Email capture wired for ARIA deployments",
      "Structured sections for future toggles",
    ],
    /** @maxChars 22 — primary pricing CTA. */
    ctaJoin: "Join waitlist",
    /** @maxChars 22 — secondary control label. */
    ctaSales: "Talk to sales",
  },

  faq: {
    /** @maxChars 56 — FAQ H2. */
    title: "Frequently asked questions",
    /** @maxChars 140 — FAQ intro. */
    subtitle: "Straight answers for operators shipping a credible first impression.",
    items: [
      {
        /** @maxChars 100 — accordion trigger text. */
        q: "Is this template production-ready?",
        /** @maxChars 1200 — accordion answer (accordion allows longer copy). */
        a: "Yes—the stack is Next.js App Router, TypeScript, Tailwind v4, and shadcn-style primitives. You should still run your own QA, analytics, and legal review before launch.",
      },
      {
        /** @maxChars 100 */
        q: "How does email capture work?",
        /** @maxChars 1200 */
        a: "In development, submissions hit a local API route. In production, ARIA sets NEXT_PUBLIC_WAITLIST_ENDPOINT so signups post to your public leads endpoint with a secure token—no secrets ship to the browser.",
      },
      {
        /** @maxChars 100 */
        q: "Will it look good on phones?",
        /** @maxChars 1200 */
        a: "Layouts are mobile-first: fluid type, stacked grids, touch-friendly controls, and tested spacing down to narrow viewports.",
      },
      {
        /** @maxChars 100 */
        q: "Can sections be toggled later?",
        /** @maxChars 1200 */
        a: "Sections are isolated components so your host app can add configuration and preview. This repo ships with all sections enabled for a complete reference surface.",
      },
    ],
  },

  ctas: {
    /** @maxChars 24 — default waitlist CTA label. */
    primaryWaitlist: "Join waitlist",
    /** @maxChars 20 — submitting state on the button. */
    joining: "Joining…",
  },

  waitlist: {
    /** @maxChars 48 — email input placeholder. */
    emailPlaceholder: "you@company.com",
    /** @maxChars 120 — empty-field message. */
    emptyEmail: "Please enter your email.",
    /** @maxChars 160 — generic submit failure. */
    submitError: "Could not submit. Please try again.",
    /** @maxChars 160 — fallback success line. */
    successMessage: "Thanks! You are on the waitlist.",
    /** @maxChars 64 — API / analytics source slug; keep stable in prod. */
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
