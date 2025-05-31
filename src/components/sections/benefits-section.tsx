import type React from "react"
import { cn } from "@/lib/utils"

interface BenefitProps {
  icon: React.ReactNode
  title: string
  className?: string
}

function Benefit({ icon, title, className }: BenefitProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl bg-gray-100 p-6 text-center transition-all hover:shadow-md",
        className,
      )}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center">{icon}</div>
      <h3 className="text-sm font-medium">{title}</h3>
    </div>
  )
}

interface BenefitsSectionProps {
  title: string
  benefits: BenefitProps[]
  className?: string
}

export function BenefitsSection({ title, benefits, className }: BenefitsSectionProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">{title}</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  )
}
