/**
 * **Single source of truth for light-theme UI colors** (buttons, badges, rings, marketing
 * gradients, backdrop). This repo is the ARIA GitHub template — ARIA Build can patch selected
 * tokens in this file (see `patchSiteThemeTokens` in `aria-dapp` `build-launch.ts`).
 *
 * Values are **CSS custom properties** applied on `:root` via `SiteThemeRootStyle` in
 * `layout.tsx`. Shadcn / Tailwind read `--primary`, `--ring`, etc. Marketing-only keys start
 * with `--marketing-`.
 *
 * Dark mode overrides remain in `globals.css` (`.dark { ... }`).
 */
export const siteThemeLight = {
  "--background": "oklch(0.995 0.004 106)",
  "--foreground": "oklch(0.22 0.02 260)",
  "--card": "oklch(1 0 0)",
  "--card-foreground": "oklch(0.22 0.02 260)",
  "--popover": "oklch(1 0 0)",
  "--popover-foreground": "oklch(0.22 0.02 260)",
  /** aria-build:theme-primary — main brand (buttons, links, primary badge, hero accents). */
  "--primary": "oklch(0.52 0.14 195)",
  "--primary-foreground": "oklch(0.99 0.01 195)",
  "--secondary": "oklch(0.96 0.02 230)",
  "--secondary-foreground": "oklch(0.28 0.04 260)",
  "--muted": "oklch(0.96 0.008 230)",
  "--muted-foreground": "oklch(0.48 0.02 260)",
  /** aria-build:theme-accent — soft fills (secondary pills, subtle hovers). */
  "--accent": "oklch(0.94 0.04 200)",
  "--accent-foreground": "oklch(0.28 0.06 200)",
  "--destructive": "oklch(0.577 0.245 27.325)",
  "--border": "oklch(0.91 0.012 230)",
  "--input": "oklch(0.91 0.012 230)",
  /** Focus rings; usually close to primary hue. */
  "--ring": "oklch(0.58 0.12 195)",
  "--chart-1": "oklch(0.72 0.12 195)",
  "--chart-2": "oklch(0.62 0.1 260)",
  "--chart-3": "oklch(0.55 0.08 280)",
  "--chart-4": "oklch(0.48 0.06 260)",
  "--chart-5": "oklch(0.4 0.04 260)",
  "--radius": "0.75rem",
  "--sidebar": "oklch(0.99 0.004 106)",
  "--sidebar-foreground": "oklch(0.22 0.02 260)",
  "--sidebar-primary": "oklch(0.52 0.14 195)",
  "--sidebar-primary-foreground": "oklch(0.99 0.01 195)",
  "--sidebar-accent": "oklch(0.96 0.02 230)",
  "--sidebar-accent-foreground": "oklch(0.28 0.04 260)",
  "--sidebar-border": "oklch(0.91 0.012 230)",
  "--sidebar-ring": "oklch(0.58 0.12 195)",

  /** Top-center hero wash (page backdrop). */
  "--marketing-backdrop-radial-1": "oklch(0.92 0.06 195)",
  /** Upper-right cool wash. */
  "--marketing-backdrop-radial-2": "oklch(0.94 0.04 260)",
  /** Lower-left warm wash. */
  "--marketing-backdrop-radial-3": "oklch(0.95 0.05 145)",
  /** Grid line color (alpha baked in for the mesh overlay). */
  "--marketing-backdrop-grid": "oklch(0.2 0.02 260 / 0.06)",
} as const satisfies Record<string, string>

export type SiteThemeLight = typeof siteThemeLight

/**
 * Serialized `:root` declarations (no wrapping braces). Injected by `SiteThemeRootStyle`.
 */
export function siteThemeLightToCssDeclarations(): string {
  const parts: string[] = []
  for (const [key, value] of Object.entries(siteThemeLight)) {
    parts.push(`${key}:${value};`)
  }
  return parts.join("")
}
