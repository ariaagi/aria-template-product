import type { Metadata } from "next"
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google"

import { SiteThemeRootStyle } from "@/components/site-theme-root-style"
import { buildSiteMetadata } from "@/config/site-copy"

import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = buildSiteMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.ReactElement {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${geistMono.variable} h-full min-w-0`}
    >
      <body className="flex min-h-full min-w-0 flex-col">
        <SiteThemeRootStyle />
        {children}
      </body>
    </html>
  )
}
