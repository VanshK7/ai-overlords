"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Mic } from "lucide-react"

interface SolutionCardProps {
  icon: string | React.ReactNode
  title: string
  href: string
  className?: string
}

function SolutionCard({ icon, title, href, className }: SolutionCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl p-4 text-center transition-all duration-300",
        isHovered ? "bg-primary text-white" : "bg-gray-100 text-gray-800",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-3 flex h-16 w-16 items-center justify-center">
        {typeof icon === "string" ? (
          <Image
            src={icon || "/placeholder.svg"}
            alt={title}
            width={48}
            height={48}
            className="h-12 w-12 object-contain transition-all"
          />
        ) : (
          <div className={cn("h-12 w-12 transition-all", isHovered ? "text-white" : "text-gray-800")}>{icon}</div>
        )}
      </div>
      <h3 className="text-sm font-medium">{title}</h3>
    </Link>
  )
}

interface SolutionsSectionProps {
  title: string
  className?: string
  id?: string
}

export function SolutionsSection({ title, className, id }: SolutionsSectionProps) {
  const solutions = [
    {
      icon: "/images/ai-agents.png",
      title: "AI Agents",
      href: "/ai-agents",
    },
    {
      icon: "/images/gen-ai.png",
      title: "Gen AI",
      href: "/gen-ai",
    },
    {
      icon: "/images/machine-learning.png",
      title: "Machine Learning",
      href: "/machine-learning",
    },
    {
      icon: "/images/data-science.png",
      title: "Data Science",
      href: "/data-science",
    },
    {
      icon: "/images/nlp.png",
      title: "Natural Language Processing",
      href: "/nlp",
    },
    {
      icon: "/images/gen-ai.png",
      title: "End To end Software Development",
      href: "/software-development",
    },
    {
      icon: <Mic className="h-full w-full" />,
      title: "Voice AI",
      href: "/voice-ai",
    },
  ]

  return (
    <section className={cn("py-12 md:py-16 lg:py-24 xl:py-32", className)} id={id}>
      <div className="container px-4 sm:px-6 lg:px-12 xl:px-16">
        <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">{title}</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:max-w-5xl lg:mx-auto">
          {solutions.slice(0, 4).map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:max-w-4xl lg:mx-auto">
          {solutions.slice(4, 7).map((solution, index) => (
            <SolutionCard key={index + 4} {...solution} />
          ))}
        </div>
      </div>
    </section>
  )
}
