"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Capability {
  title: string
  description: string
}

interface NLPCapabilitiesSectionProps {
  title: string
  ctaText: string
  ctaLink: string
  capabilities: Capability[]
}

export function NLPCapabilitiesSection({ title, ctaText, ctaLink, capabilities }: NLPCapabilitiesSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column with title and CTA */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold mb-8">{title}</h2>

            <Link
              href={ctaLink}
              className="inline-flex items-center px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-medium transition-colors"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Right column with capabilities grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {capabilities.map((capability, index) => (
                <div key={index} className={cn("capability-item", index % 2 === 0 ? "md:mt-0" : "md:mt-16")}>
                  <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                  <p className="text-gray-700">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
