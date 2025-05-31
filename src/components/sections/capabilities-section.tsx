import { cn } from "@/lib/utils"

interface CapabilityPoint {
  text: string
}

interface CapabilityBlock {
  title: string
  points: CapabilityPoint[]
  position: "left" | "right"
}

interface CapabilitiesSectionProps {
  title: string
  capabilities: CapabilityBlock[]
  className?: string
}

export function CapabilitiesSection({ title, capabilities, className }: CapabilitiesSectionProps) {
  return (
    <section className={cn("py-16 bg-gray-50", className)}>
      <div className="container">
        <h2 className="mb-12 text-3xl font-bold text-center">{title}</h2>

        <div className="space-y-16">
          {capabilities.map((capability, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-start">
              {capability.position === "left" ? (
                <>
                  <div className="bg-gray-100 p-6 rounded-2xl shadow-sm">
                    <h3 className="text-2xl font-bold">{capability.title}</h3>
                  </div>
                  <div>
                    <ul className="space-y-4">
                      {capability.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <span className="mr-2 mt-1 text-gray-400">•</span>
                          <span className="text-gray-500">{point.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <ul className="space-y-4">
                      {capability.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <span className="mr-2 mt-1 text-gray-400">•</span>
                          <span className="text-gray-500">{point.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-2xl shadow-sm">
                    <h3 className="text-2xl font-bold">{capability.title}</h3>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
