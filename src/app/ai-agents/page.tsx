import type { Metadata } from "next"
import { VideoHeroSection } from "@/components/sections/video-hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TypesSection } from "@/components/sections/types-section"
import { EfficiencyStatsSection } from "@/components/sections/efficiency-stats-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ModelsSection } from "@/components/sections/models-section"
import { UseCasesSection } from "@/components/sections/use-cases-section"
import { aiAgentServices, aiAgentTypes, aiModels, aiAgentUseCases } from "@/data/ai-agents"
import { Brain, Layers, MessageSquare, Network, Cpu, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Agent Development Services",
  description:
    "Expert AI agent development company offering autonomous task execution, multi-agent collaboration, and intelligent automation solutions. Build custom AI agents that work 24/7 to boost efficiency by 40%.",
  keywords: [
    "AI agents",
    "AI agent development",
    "autonomous agents",
    "intelligent automation",
    "multi-agent systems",
    "AI workforce",
    "custom AI agents",
    "AI automation",
  ],
  openGraph: {
    title: "AI Agent Development Services | AI Overlords",
    description:
      "Expert AI agent development company offering autonomous task execution, multi-agent collaboration, and intelligent automation solutions.",
    url: "https://aioverlords.com/ai-agents",
  },
  twitter: {
    title: "AI Agent Development Services | AI Overlords",
    description:
      "Expert AI agent development company offering autonomous task execution, multi-agent collaboration, and intelligent automation solutions.",
  },
}

export const aiAgentFeatures = [
  {
    title: "Autonomous Task Execution",
    description:
      "Our AI agents independently handle complex workflows without human intervention, using our Planetary Grid to fulfill your global compute needs.",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    title: "Multimodal Data Processing",
    description:
      "Process text, images, audio, and video simultaneously with our cutting-edge H100 & H200 GPUs available at industry-leading prices under $2/GPU/hr.",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: "Dynamic and Context-Aware Conversations",
    description:
      "Our agents maintain conversation history and adapt responses based on evolving context, delivering 20% more tokens/sec for faster, more coherent interactions.",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: "Streamlined Multi-Agent Collaboration",
    description:
      "Multiple specialized agents work together seamlessly to solve complex problems, sharing context and coordinating actions for optimal outcomes.",
    icon: <Network className="h-5 w-5" />,
  },
  {
    title: "Seamless Skill Integration",
    description:
      "Easily extend agent capabilities with custom skills and tools, allowing them to access external data sources and perform specialized tasks on demand.",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "Optimized Large Language Model (LLM) Inference",
    description:
      "Advanced optimization techniques deliver maximum performance from state-of-the-art LLMs, with 20% higher throughput and significantly reduced latency.",
    icon: <Brain className="h-5 w-5" />,
  },
]

export default function AIAgentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
     
          <VideoHeroSection
       title="AI Agent Development Company"
        quote={{
          text: "Most of the web surfing on internet browsers will be through AI Agents not through humans",
          author:"Vinod Khosla",
        }}
         buttons={[
          {
            text: "Consult Our Experts",
            href: "/contact",
            primary: true,
          },
        ]}
        videoSrc="/videos/ai-agent.mp4"
        posterImage="/images/nlp-bg.jpeg"
      />


      <ServicesSection title="AI Agent Development Services We Offer" services={aiAgentServices} />

      <TypesSection
        title="Types of AI Agents"
        subtitle="Discover the power of high-performance GPUs."
        types={aiAgentTypes}
      />

      <EfficiencyStatsSection
        title="Boost Efficiency by 40% with AI Agents"
        description="Did you know that businesses using AI agents see a 40% increase in efficiency? It saves up to 30% on operational costs? Automate tasks, engage customers 24/7, and accelerate growth. Let's get started!"
        buttonText="Start Building Your AI Agent"
        buttonLink="/contact"
        backgroundImage="/images/ai-robot-background.png"
      />

      <FeaturesSection title="Key Elements of our AI Agents" features={aiAgentFeatures} />

      <ModelsSection title="AI Models We Have Expertise In" models={aiModels} />

      <UseCasesSection
        title="AI Agent Development Use Cases"
        useCases={aiAgentUseCases}
        ctaText="Get a Free Consultation"
        ctaLink="/contact"
      />
    </div>
  )
}
