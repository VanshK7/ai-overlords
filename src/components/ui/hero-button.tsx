import type React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface HeroButtonProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function HeroButton({ href, children, className }: HeroButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-14 items-center overflow-hidden rounded-full bg-primary text-black transition-transform hover:scale-105",
        className,
      )}
    >
      <span className="px-6 pr-4 text-lg font-medium">{children}</span>
      <div className="ml-2 flex h-14 w-14 items-center justify-center rounded-full bg-black">
        <div className="flex h-10 w-10 items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  )
}
