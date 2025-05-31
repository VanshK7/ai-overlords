"use client"

import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScrollButtonProps {
  text: string
  targetId: string
  className?: string
}

export function ScrollButton({ text, targetId, className }: ScrollButtonProps) {
  const scrollToTarget = () => {
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <button
      onClick={scrollToTarget}
      className={cn(
        "group inline-flex items-center justify-center rounded-full bg-primary text-black px-6 py-3 text-lg font-medium transition-all hover:scale-105",
        className,
      )}
    >
      {text}
      <div className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-black">
        <ChevronDown className="h-5 w-5 text-white" />
      </div>
    </button>
  )
}
