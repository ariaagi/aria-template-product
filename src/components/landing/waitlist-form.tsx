"use client"

import * as React from "react"
import { RiMailSendLine } from "@remixicon/react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { siteCopy } from "@/config/site-copy"
import { getWaitlistEndpoint } from "@/lib/waitlist-endpoint"

type WaitlistFormProps = {
  /** Additional classes for the outer form element */
  className?: string
  /** Compact layout for narrow columns */
  dense?: boolean
}

type SubmitStatus = "idle" | "loading" | "success" | "error"

export function WaitlistForm({ className, dense }: WaitlistFormProps): React.ReactElement {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<SubmitStatus>("idle")
  const [message, setMessage] = React.useState("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    const value = email.trim()
    if (!value) {
      setStatus("error")
      setMessage(siteCopy.waitlist.emptyEmail)
      return
    }
    setStatus("loading")
    setMessage("")
    try {
      const sourceUrl =
        typeof window !== "undefined" ? window.location.href.split("#")[0] : undefined
      const res = await fetch(getWaitlistEndpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: value,
          source: siteCopy.waitlist.sourceTag,
          sourceUrl,
        }),
      })
      const data = (await res.json()) as { ok?: boolean; message?: string }
      if (!res.ok || !data.ok) {
        throw new Error(data.message || siteCopy.waitlist.submitError)
      }
      setStatus("success")
      setMessage(data.message || siteCopy.waitlist.successMessage)
      setEmail("")
    } catch (error) {
      setStatus("error")
      setMessage(
        error instanceof Error ? error.message : siteCopy.waitlist.submitError
      )
    }
  }

  return (
    <div className="w-full min-w-0">
      <form
        className={
          className ??
          `flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:items-stretch ${dense ? "max-w-md" : "max-w-xl"}`
        }
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          name="email"
          autoComplete="email"
          placeholder={siteCopy.waitlist.emailPlaceholder}
          className="h-12 min-h-12 flex-1 bg-background/90 sm:h-11 sm:min-h-11"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-invalid={status === "error"}
        />
        <Button
          type="submit"
          size="lg"
          className="w-full min-w-0 shrink-0 sm:w-auto"
          disabled={status === "loading"}
        >
          <RiMailSendLine className="size-4" aria-hidden />
          {status === "loading" ? siteCopy.ctas.joining : siteCopy.ctas.primaryWaitlist}
        </Button>
      </form>
      {message ? (
        <p
          className={`mt-2 text-sm sm:text-[0.8125rem] ${
            status === "error" ? "text-destructive" : "text-primary"
          }`}
          role={status === "error" ? "alert" : "status"}
        >
          {message}
        </p>
      ) : null}
    </div>
  )
}
