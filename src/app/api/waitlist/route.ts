import { NextResponse } from "next/server"

type WaitlistBody = {
  email?: string
  source?: string
  sourceUrl?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request): Promise<Response> {
  let body: WaitlistBody
  try {
    body = (await request.json()) as WaitlistBody
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 })
  }

  const email = (body.email || "").trim().toLowerCase()
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Please provide a valid email." },
      { status: 400 }
    )
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks! You are on the waitlist.",
    email,
    source: body.source || "landing",
    sourceUrl: body.sourceUrl,
  })
}
