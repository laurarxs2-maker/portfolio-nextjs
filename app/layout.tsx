import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { AnimatedBackground } from "@/components/effects/animated-background"
import { BackToTop } from "@/components/chrome/back-to-top"
import { CommandPalette } from "@/components/chrome/command-palette"
import { RecruiterBanner } from "@/components/chrome/recruiter-banner"
import { ScrollProgress } from "@/components/chrome/scroll-progress"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { RecruiterProvider } from "@/components/providers/recruiter-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { siteConfig } from "@/data/site"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Laura Xavier",
    "Desenvolvedora Front-end",
    "Full Stack Jr",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: siteConfig.url,
  sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
  email: siteConfig.social.email,
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <RecruiterProvider>
            <AnimatedBackground />
            <ScrollProgress />
            <Navbar />
            <div className="pt-16">
              <RecruiterBanner />
              <main>{children}</main>
              <Footer />
            </div>
            <BackToTop />
            <CommandPalette />
          </RecruiterProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
