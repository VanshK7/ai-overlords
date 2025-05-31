"use client"

import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

interface EfficiencyStatsSectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  className?: string
  backgroundImage?: string
}

export function EfficiencyStatsSection({
  title,
  description,
  buttonText,
  buttonLink,
  className,
  backgroundImage = "/images/ai-robot-background.png",
}: EfficiencyStatsSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("efficiency-section")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.disconnect()
    }
  }, [])

  return (
    <section
      id="efficiency-section"
      className={cn("relative overflow-hidden py-16 md:py-20 bg-black text-white", className)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="AI Robot"
          fill
          priority
          className="object-cover opacity-100"
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:w-3/5 lg:w-2/3">
              <h2
                className={cn(
                  "mb-4 text-3xl font-bold tracking-tight transition-all duration-700",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
              >
                {title}
              </h2>
              <p
                className={cn(
                  "mb-6 text-gray-300 transition-all duration-700 delay-200",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
              >
                {description}
              </p>
              <div
                className={cn(
                  "transition-all duration-700 delay-400",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
              >
                <a
                  href={buttonLink}
                  className="group flex h-14 w-fit items-center overflow-hidden rounded-full bg-primary text-black transition-transform hover:scale-105"
                >
                  <span className="px-6 pr-4 text-lg font-medium">{buttonText}</span>
                  <div className="ml-2 flex h-14 w-14 items-center justify-center rounded-full bg-black">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                </a>
              </div>
            </div>
            <div className="md:w-2/5 lg:w-1/3">
              {/* This space is intentionally left empty to balance the layout
                  since the robot is already in the background image */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
