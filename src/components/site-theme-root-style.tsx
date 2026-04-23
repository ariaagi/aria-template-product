import { siteThemeLightToCssDeclarations } from "@/config/site-theme"

/**
 * Injects light-theme CSS variables on `:root` from `siteThemeLight` (single source in
 * `src/config/site-theme.ts`).
 */
export function SiteThemeRootStyle(): React.ReactElement {
  return (
    <style
      id="aria-site-theme-light"
      dangerouslySetInnerHTML={{
        __html: `:root { ${siteThemeLightToCssDeclarations()} }`,
      }}
    />
  )
}
