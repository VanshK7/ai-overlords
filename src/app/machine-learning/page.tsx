import { VideoHeroSection } from "@/components/sections/video-hero-section"
import { CapabilitiesSection } from "@/components/sections/capabilities-section"
import { ExpertCTASection } from "@/components/sections/expert-cta-section"
import { mlCapabilities } from "@/data/machine-learning"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Machine Learning Services | AI Overlords",
  description:
    "Advanced machine learning solutions and AI model development. Expert ML engineers delivering cutting-edge artificial intelligence systems for your business needs.",
  keywords: [
    "machine learning",
    "ML services",
    "AI models",
    "deep learning",
    "neural networks",
    "predictive analytics",
    "AI development",
  ],
  openGraph: {
    title: "Machine Learning Services | AI Overlords",
    description:
      "Advanced machine learning solutions and AI model development. Expert ML engineers delivering cutting-edge artificial intelligence systems.",
    type: "website",
    url: "https://ai-overlords.com/machine-learning",
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Learning Services | AI Overlords",
    description:
      "Advanced machine learning solutions and AI model development. Expert ML engineers delivering cutting-edge artificial intelligence systems.",
  },
}

export default function MachineLearningPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <VideoHeroSection
        title="Machine Learning Services"
        quote={{
          text: "Machine Intelligence is the last invention that humanity will ever need to make",
          author: "Nick Bostrom",
        }}
        buttons={[
          {
            text: "Consult Our Experts",
            href: "/contact",
            primary: true,
          },
        ]}
        videoSrc="/videos/machine-learning.mp4"
        posterImage="/images/ml-bg.jpeg"
      />

      {/* Capabilities Section */}
      <CapabilitiesSection title="Machine Learning Capabilities" capabilities={mlCapabilities} />

      {/* Expert CTA Section */}
      <ExpertCTASection
        title="Want to speak with a Very expert?"
        subtitle="Let's talk about your vision for a powerful IoT solution."
        buttonText="Book a Meeting"
        buttonLink="/contact"
        image="/images/iot-illustration.png"
      />
    </div>
  )
}
