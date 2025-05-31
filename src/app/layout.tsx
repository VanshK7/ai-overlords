import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Poppins, Playfair_Display } from "next/font/google"

// Initialize the Google Fonts with Next.js 15.3 optimizations
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: false, // Next.js 15.3 feature
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
  adjustFontFallback: false, // Next.js 15.3 feature
})

export const metadata: Metadata = {
  title: {
    default: "AI Overlords - The Architects of Intelligence",
    template: "%s | AI Overlords",
  },
  description:
    "Leading AI development company specializing in AI agents, machine learning, data science, generative AI, and custom software solutions. Transform your business with cutting-edge artificial intelligence.",
  keywords: [
    "AI development",
    "artificial intelligence",
    "machine learning",
    "AI agents",
    "generative AI",
    "data science",
    "custom software development",
    "AI consulting",
    "voice AI",
    "natural language processing",
    "AI solutions",
  ],
  authors: [{ name: "AI Overlords", url: "https://aioverlords.com" }],
  creator: "AI Overlords",
  publisher: "AI Overlords",
  metadataBase: new URL("https://aioverlords.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aioverlords.com",
    title: "AI Overlords - The Architects of Intelligence",
    description:
      "Leading AI development company specializing in AI agents, machine learning, data science, generative AI, and custom software solutions.",
    siteName: "AI Overlords",
    images: [
      {
        url: "/images/ai-robot-background.png",
        width: 1200,
        height: 630,
        alt: "AI Overlords - The Architects of Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Overlords - The Architects of Intelligence",
    description:
      "Leading AI development company specializing in AI agents, machine learning, data science, generative AI, and custom software solutions.",
    images: ["/images/ai-robot-background.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon-32x32.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${playfair.variable}`}>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
