import type React from "react"
import { cn } from "@/lib/utils"
import { Brain, Layers, MessageSquare, Network, Cpu, BarChart3 } from "lucide-react"

interface FeatureProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
}

function Feature({ title, description, icon, className }: FeatureProps) {
  return (
    <div
      className={cn(
        "group bg-gray-50 p-6 rounded-lg transition-all hover:shadow-md border-l-4 border-transparent hover:border-primary",
        className,
      )}
    >
      <div className="flex items-center mb-3">
        <div className="mr-3 text-gray-800 group-hover:text-primary transition-colors">{icon}</div>
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

interface FeaturesSectionProps {
  title: string
  features?: FeatureProps[]
  className?: string
}

export function FeaturesSection({ title, features, className }: FeaturesSectionProps) {
  const defaultFeatures = [
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

  const displayFeatures = features || defaultFeatures

  return (
    <section className={cn("py-16 md:py-20 bg-white", className)}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">{title}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayFeatures.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
