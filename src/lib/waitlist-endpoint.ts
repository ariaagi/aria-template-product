/**
 * Same contract as aria-validation-template: optional
 * `NEXT_PUBLIC_WAITLIST_ENDPOINT`, otherwise `/api/waitlist`.
 *
 * Optional compose (local testing against ARIA): set in `.env.local` only, not committed —
 * `NEXT_PUBLIC_ARIA_PUBLIC_API_BASE_URL` + `NEXT_PUBLIC_ARIA_BUILD_PUBLIC_TOKEN` →
 * `{base}/api/v1/build/leads?token=...` (same shape aria-dapp sets on Vercel).
 */
export function getWaitlistEndpoint(): string {
  const full = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT?.trim()
  if (full) return full

  const base =
    process.env.NEXT_PUBLIC_ARIA_PUBLIC_API_BASE_URL?.trim() ||
    process.env.NEXT_PUBLIC_ARIA_API_BASE_URL?.trim()
  const token = process.env.NEXT_PUBLIC_ARIA_BUILD_PUBLIC_TOKEN?.trim()
  if (base && token) {
    const normalized = base.replace(/\/+$/, "")
    return `${normalized}/api/v1/build/leads?token=${encodeURIComponent(token)}`
  }

  return "/api/waitlist"
}
