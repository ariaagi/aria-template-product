/**
 * **Single source of truth for light-theme UI colors** (buttons, badges, rings, backdrop).
 * Aligned with `aria-template-live-product` neutral SaaS tokens (`globals.css` `:root`).
 * ARIA Build can patch selected keys (see `patchSiteThemeTokens` in `aria-dapp` `build-launch.ts`).
 *
 * Values are **CSS custom properties** applied on `:root` via `SiteThemeRootStyle` in
 * `layout.tsx`. Shadcn / Tailwind read `--primary`, `--ring`, etc. Marketing-only keys start
 * with `--marketing-`.
 *
 * Dark mode overrides remain in `globals.css` (`.dark { ... }`).
 */
export const siteThemeLight = {
  "--background": "oklch(1 0 0)",
  "--foreground": "oklch(0.145 0 0)",
  "--card": "oklch(1 0 0)",
  "--card-foreground": "oklch(0.145 0 0)",
  "--popover": "oklch(1 0 0)",
  "--popover-foreground": "oklch(0.145 0 0)",
  /** aria-build:theme-primary — main brand (buttons, links, accents). */
  "--primary": "oklch(0.205 0 0)",
  "--primary-foreground": "oklch(0.985 0 0)",
  "--secondary": "oklch(0.97 0 0)",
  "--secondary-foreground": "oklch(0.205 0 0)",
  "--muted": "oklch(0.97 0 0)",
  "--muted-foreground": "oklch(0.556 0 0)",
  /** aria-build:theme-accent — soft fills (secondary pills, subtle hovers). */
  "--accent": "oklch(0.97 0 0)",
  "--accent-foreground": "oklch(0.205 0 0)",
  "--destructive": "oklch(0.577 0.245 27.325)",
  "--border": "oklch(0.922 0 0)",
  "--input": "oklch(0.922 0 0)",
  /** Focus rings; neutral gray close to live template. */
  "--ring": "oklch(0.708 0 0)",
  "--chart-1": "oklch(0.87 0 0)",
  "--chart-2": "oklch(0.556 0 0)",
  "--chart-3": "oklch(0.439 0 0)",
  "--chart-4": "oklch(0.371 0 0)",
  "--chart-5": "oklch(0.269 0 0)",
  "--radius": "0.625rem",
  "--sidebar": "oklch(0.985 0 0)",
  "--sidebar-foreground": "oklch(0.145 0 0)",
  "--sidebar-primary": "oklch(0.205 0 0)",
  "--sidebar-primary-foreground": "oklch(0.985 0 0)",
  "--sidebar-accent": "oklch(0.97 0 0)",
  "--sidebar-accent-foreground": "oklch(0.205 0 0)",
  "--sidebar-border": "oklch(0.922 0 0)",
  "--sidebar-ring": "oklch(0.708 0 0)",

  /** Flat page wash (no colored gradient — matches background). */
  "--marketing-backdrop-radial-1": "oklch(1 0 0)",
  "--marketing-backdrop-radial-2": "oklch(1 0 0)",
  "--marketing-backdrop-radial-3": "oklch(1 0 0)",
  /** Grid line color (alpha baked in for the mesh overlay). */
  "--marketing-backdrop-grid": "oklch(0.145 0 0 / 0.04)",
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
