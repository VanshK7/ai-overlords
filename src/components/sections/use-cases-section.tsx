import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/custom-button"

interface UseCasesSectionProps {
  title: string
  useCases: string[]
  ctaText?: string
  ctaLink?: string
  className?: string
}

export function UseCasesSection({ title, useCases, ctaText, ctaLink, className }: UseCasesSectionProps) {
  return (
    <section className={cn("py-16 md:py-20 bg-gray-50", className)}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start">
          <div className="mb-8 md:mb-0 md:pr-12">
            <h2 className="text-3xl font-bold mb-8">{title}</h2>
            {ctaText && ctaLink && (
              <Button href={ctaLink} variant="primary">
                {ctaText}
              </Button>
            )}
          </div>
          <div className="flex-1">
            <ul className="space-y-4">
              {useCases.map((useCase, index) => (
                <li key={index} className="flex items-center">
                  <div className="mr-3 h-1.5 w-1.5 rounded-full bg-black"></div>
                  <span className="text-base font-medium text-gray-800">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
