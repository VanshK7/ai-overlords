"use client"

import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

interface TestimonialSectionProps {
  rating: string
  customers: string
  companies: string[]
  className?: string
}

export function TestimonialSection({
  rating = "4.9/5",
  customers = "From 50+ Customers",
  companies = ["TestGenie", "AnkorDocs", "Alphavatar", "Liwy", "Enrolla", "Bunky"],
  className,
}: TestimonialSectionProps) {
  // Double the array for seamless looping
  const allCompanies = [...companies, ...companies]

  return (
    <section className={cn("overflow-hidden bg-gray-50 py-12 md:py-16", className)}>
      <div className="container px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex flex-col items-center justify-center">
          {/* Stars */}
          <div className="mb-2 flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Rating */}
          <p className="mb-10 text-center text-xl font-medium">
            {rating} <span className="text-muted-foreground">{customers}</span>
          </p>
        </div>
      </div>

      {/* Scrolling companies with center highlight */}
      <div className="relative w-full overflow-hidden">
        {/* Animated marquee */}
        <div className="animate-marquee flex whitespace-nowrap">
          {allCompanies.map((company, index) => (
            <span key={index} className="mx-8 inline-block text-xl font-medium text-gray-400">
              {company}
            </span>
          ))}
        </div>

        {/* Center highlight overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-full w-full flex items-center justify-center">
            <div className="relative w-full">
              {/* Gradient mask for center highlight */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, transparent 35%, black 50%, transparent 65%, transparent 100%)",
                  mixBlendMode: "overlay",
                }}
              ></div>

              {/* Edge fade */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(249,250,251,1) 0%, transparent 15%, transparent 85%, rgba(249,250,251,1) 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
