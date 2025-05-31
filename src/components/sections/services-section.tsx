import { cn } from "@/lib/utils"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/custom-button"

interface ServiceItem {
  icon: string
  title: string
  description?: string
}

interface ServicesSectionProps {
  title: string
  subtitle?: string
  services: ServiceItem[]
  ctaText?: string
  ctaLink?: string
  className?: string
}

export function ServicesSection({ title, subtitle, services, ctaText, ctaLink, className }: ServicesSectionProps) {
  return (
    <section className={cn("py-16 bg-gray-50", className)}>
      <div className="container">
        <h2 className="mb-4 text-center text-3xl font-bold">{title}</h2>
        {subtitle && <p className="mb-12 text-center text-gray-700">{subtitle}</p>}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {ctaText && ctaLink && (
          <div className="mt-12 flex justify-center">
            <Button href={ctaLink} variant="primary">
              {ctaText}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
