import Link from "next/link"

import { flattenSiteCopyCharLimits } from "@/config/site-copy-char-limits"

/**
 * Operator reference: max character counts for every `siteCopy` string.
 * Not linked from the marketing nav; bookmark `/copy-limits` or share the URL with editors.
 */
export default function CopyLimitsPage(): React.ReactElement {
  const rows = flattenSiteCopyCharLimits()

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm text-muted-foreground">
        <Link href="/" className="font-medium text-primary underline-offset-4 hover:underline">
          ← Back to site
        </Link>
      </p>
      <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground">
        Site copy — character limits
      </h1>
      <p className="mt-3 max-w-2xl text-pretty text-base text-muted-foreground">
        This site is the{" "}
        <strong className="font-medium text-foreground">ARIA GitHub template</strong>. Each field in <code className="rounded bg-muted px-1 py-0.5 text-sm">siteCopy</code> has a
        documented ceiling so generated or hand-written text does not overflow the layout after
        ARIA Build forks the repo. ARIA and Claude can consume the same numbers from{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-sm">siteCopyCharLimits</code> or{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-sm">formatSiteCopyLimitsForPrompt()</code>
        .
      </p>

      <div className="mt-10 overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th className="px-3 py-2.5 font-semibold text-foreground sm:px-4">Field path</th>
              <th className="px-3 py-2.5 font-semibold text-foreground sm:px-4">Max chars</th>
              <th className="px-3 py-2.5 font-semibold text-foreground sm:px-4">Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.path} className="border-b border-border/80 last:border-0">
                <td className="px-3 py-2 font-mono text-xs text-foreground sm:px-4 sm:text-sm">
                  {row.path}
                </td>
                <td className="px-3 py-2 tabular-nums text-foreground sm:px-4">{row.maxChars}</td>
                <td className="px-3 py-2 text-muted-foreground sm:px-4">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
