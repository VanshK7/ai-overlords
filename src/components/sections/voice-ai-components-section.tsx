import { cn } from "@/lib/utils"
import Image from "next/image"

interface VoiceAIComponentsSectionProps {
  title: string
  subtitle?: string
  animatedDiagram: string
  className?: string
}

export function VoiceAIComponentsSection({
  title,
  subtitle,
  animatedDiagram,
  className,
}: VoiceAIComponentsSectionProps) {
  return (
    <section className={cn("py-16 bg-gray-50", className)}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
        </div>

        {/* GIF Illustration - Now covers 80% of screen width */}
        <div className="flex justify-center">
          <div className="relative w-[80vw] max-w-6xl">
            <Image
              src={animatedDiagram || "/placeholder.svg"}
              alt="Voice AI Components Diagram"
              width={1200}
              height={800}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}
