import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import { SiteThemeRootStyle } from "@/components/site-theme-root-style"
import { buildSiteMetadata } from "@/config/site-copy"
import { cn } from "@/lib/utils"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
      className={cn(inter.variable, geistMono.variable, "h-full min-w-0 antialiased")}
    >
      <body className={cn(inter.className, "flex min-h-full min-w-0 flex-col")}>
        <SiteThemeRootStyle />
        {children}
      </body>
    </html>
  )
}
