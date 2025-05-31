import { HeroSection } from "@/components/sections/hero-section"
import { VoiceAIComponentsSection } from "@/components/sections/voice-ai-components-section"
import { VoiceAIDemoSection } from "@/components/sections/voice-ai-demo-section"
import { Mic, Volume2, MessageSquare, Zap, Brain, Globe } from "lucide-react"


export const voiceAIFeatures = [
  {
    title: "Real-time Speech Processing",
    description:
      "Process speech in real-time with ultra-low latency, enabling natural conversations and immediate responses for voice applications.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Multi-language Support",
    description:
      "Support for 50+ languages and dialects, enabling global voice applications with accurate recognition and synthesis.",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    title: "Natural Voice Synthesis",
    description:
      "Generate human-like speech with emotional nuances, custom voice cloning, and adaptive tone for engaging user experiences.",
    icon: <Volume2 className="h-5 w-5" />,
  },
  {
    title: "Advanced Speech Recognition",
    description:
      "Highly accurate speech-to-text conversion with noise cancellation, speaker identification, and context-aware processing.",
    icon: <Mic className="h-5 w-5" />,
  },
  {
    title: "Conversational AI Integration",
    description:
      "Seamlessly integrate with chatbots and virtual assistants for natural, context-aware voice interactions.",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: "Intelligent Voice Analytics",
    description:
      "Extract insights from voice data including sentiment analysis, emotion detection, and conversation intelligence.",
    icon: <Brain className="h-5 w-5" />,
  },
]


export default function VoiceAIPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroSection
        title="The Voice AI platform for enterprise use cases"
        quote={{
          text: "Human language is a new UI layer, bots are the new apps, and digital assistants are the new apps.",
          author: "Satya Nadella",
        }}
        buttons={[
          {
            text: "Try it out for Free",
            href: "/contact",
            primary: true,
          },
        ]}
        backgroundImage="/images/voice-ai-bg.jpeg"
      />

      {/* Proprietary Models Section */}
      <VoiceAIComponentsSection
        title="Public + Proprietary Models:"
        subtitle="Starting at just $5/hour"
        animatedDiagram="/images/voice-ai-components-1.gif"
      />

      {/* Demo Section */}
      <VoiceAIDemoSection
        title="Try it live:"
        description="Experience our Voice AI technology with live demonstrations"
        buttonText="Book a Free Demo"
        buttonLink="/contact"
      />

      {/* Public Models Section */}
      <VoiceAIComponentsSection
        title="Publicly available models:"
        animatedDiagram="/images/voice-ai-components-2.gif"
        className="bg-white"
      />
    </div>
  )
}
