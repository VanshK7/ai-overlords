import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/custom-button"
import { ArrowRight } from "lucide-react"

interface Capability {
  title: string
  description: string
}

interface CustomSolutionsSectionProps {
  title: string
  description?: string
  ctaText: string
  ctaLink: string
  capabilities: Capability[]
  className?: string
  variant?: "default" | "nlp"
}

export function CustomSolutionsSection({
  title,
  description,
  ctaText,
  ctaLink,
  capabilities,
  className,
  variant = "default",
}: CustomSolutionsSectionProps) {
  if (variant === "nlp") {
    return (
      <section className={cn("py-16 bg-white", className)}>
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Title and CTA */}
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold leading-tight mb-8">{title}</h2>
              <div className="inline-block">
                <a
                  href={ctaLink}
                  className="flex items-center justify-between bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-full transition-colors w-fit"
                >
                  <span>{ctaText}</span>
                  <span className="flex items-center justify-center bg-black w-8 h-8 rounded-full ml-3">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column - Capabilities in 2-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-bold">{capability.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Default variant (existing layout)
  return (
    <section className={cn("py-16", className)}>
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">{title}</h2>
            {description && <p className="mb-6 text-gray-700">{description}</p>}
            <Button href={ctaLink} variant="primary" className="mt-4">
              {ctaText}
            </Button>
          </div>
          <div className="space-y-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="rounded-lg border p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">{capability.title}</h3>
                <p className="text-gray-700">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
