import { VideoHeroSection } from "@/components/sections/video-hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { CustomSolutionsSection } from "@/components/sections/custom-solutions-section"
import { nlpServices, nlpCapabilities } from "@/data/nlp"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Natural Language Processing Services | AI Overlords",
  description:
    "Advanced NLP solutions including sentiment analysis, text generation, speech recognition, and language modeling. Transform your text data into actionable insights.",
  keywords: [
    "natural language processing",
    "NLP",
    "sentiment analysis",
    "text generation",
    "speech recognition",
    "language modeling",
    "AI text processing",
  ],
  openGraph: {
    title: "Natural Language Processing Services | AI Overlords",
    description:
      "Advanced NLP solutions including sentiment analysis, text generation, speech recognition, and language modeling.",
    images: ["/images/nlp.png"],
  },
}

export default function NLPPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <VideoHeroSection
        title="Natural Language Processing Services"
        quote={{
          text: "Natural language processing may make the internet far more useful than it is today",
          author: "Vint Cerf",
        }}
        buttons={[
          {
            text: "Book a Demo",
            href: "/contact",
            primary: true,
          },
        ]}
        videoSrc="/videos/ai-agent.mp4"
        posterImage="/images/nlp-bg.jpeg"
      />

      {/* Services Section */}
      <ServicesSection
        title="Natural Language Processing Services We Offer"
        services={nlpServices}
        ctaText="Consult for NLP Solutions"
        ctaLink="/contact"
      />

      {/* Custom Solutions Section */}
      <CustomSolutionsSection
        title="Automate Workflows & Improve Accuracy with Custom NLP Solutions"
        ctaText="Consult for NLP Solutions"
        ctaLink="/contact"
        capabilities={nlpCapabilities}
        variant="nlp"
      />
    </div>
  )
}
