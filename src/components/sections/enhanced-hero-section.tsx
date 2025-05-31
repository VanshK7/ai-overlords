"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/custom-button"
import Image from "next/image"

interface HeroButtonProps {
  text: string
  href: string
  icon?: boolean
  primary?: boolean
}

interface EnhancedHeroSectionProps {
  title: string
  subtitle?: string
  quote?: {
    text: string
    author: string
  }
  buttons?: HeroButtonProps[]
  className?: string
  backgroundImage?: string
  align?: "left" | "center" | "right"
  fullHeight?: boolean
}

export function EnhancedHeroSection({
  title,
  subtitle,
  quote,
  buttons = [],
  className,
  backgroundImage = "/images/heros-banner.jpeg",
  align = "left",
  fullHeight = true,
}: EnhancedHeroSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-0 pb-12 md:pb-16 lg:pb-24 xl:pb-32",
        fullHeight && "min-h-[100vh]",
        className,
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24">
        <div
          className={cn(
            "flex flex-col justify-center",
            fullHeight && "min-h-[calc(100vh-160px)]",
            align === "center" && "items-center text-center",
            align === "right" && "items-end text-right",
          )}
        >
          <div className={cn("max-w-xl px-4 sm:px-6 md:px-8 lg:px-12", align === "center" && "mx-auto")}>
            {/* Title */}
            <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl font-serif">{title}</h1>

            {/* Subtitle or Quote */}
            {subtitle && <p className="mb-8 text-base text-muted-foreground sm:text-lg md:mb-12">{subtitle}</p>}

            {/* Quote */}
            {quote && (
              <div className="mb-8 md:mb-12">
                <div className="text-4xl font-bold mb-2 font-serif">"</div>
                <p className="text-lg text-gray-700 mb-2">{quote.text}</p>
                <p className="text-lg font-medium">{quote.author}</p>
              </div>
            )}

            {/* Buttons */}
            {buttons.length > 0 && (
              <div className="mt-8">
                {buttons.map((button, index) => (
                  <Button key={index} href={button.href} variant="primary">
                    {button.text}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
