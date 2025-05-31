"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "@/components/ui/custom-button"

interface ServiceItem {
  icon: string
  title: string
  description?: string
}

interface ServicesGridSectionProps {
  title: string
  subtitle?: string
  services: ServiceItem[]
  ctaText?: string
  ctaLink?: string
  className?: string
  columns?: 2 | 3 | 4 | 6
  withShadow?: boolean
  withBackground?: boolean
}

export function ServicesGridSection({
  title,
  subtitle,
  services,
  ctaText,
  ctaLink,
  className,
  columns = 6,
  withShadow = true,
  withBackground = true,
}: ServicesGridSectionProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    6: "md:grid-cols-3 lg:grid-cols-6",
  }

  return (
    <section className={cn("py-16", withBackground && "bg-gray-50", className)}>
      <div className="container">
        <h2 className="mb-4 text-center text-3xl font-bold">{title}</h2>
        {subtitle && <p className="mb-12 text-center text-gray-700">{subtitle}</p>}

        <div className={`grid grid-cols-2 gap-4 ${gridCols[columns]}`}>
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center justify-center rounded-lg p-6 text-center",
                withBackground && "bg-white",
                withShadow && "shadow-sm",
              )}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center">
                <Image
                  src={service.icon || "/placeholder.svg"}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="text-sm font-medium">{service.title}</h3>
              {service.description && <p className="mt-2 text-xs text-gray-600">{service.description}</p>}
            </div>
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
