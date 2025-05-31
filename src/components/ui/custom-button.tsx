"use client"

import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "outline" | "ghost" | "expert"
  size?: "sm" | "md" | "lg"
  href?: string
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  fullWidth?: boolean
  ariaLabel?: string
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  type = "button",
  fullWidth = false,
  ariaLabel,
  ...props
}: ButtonProps) {
  // Base classes for all button variants
  const baseClasses = cn(
    "group relative inline-flex items-center justify-center font-medium transition-all",
    {
      "w-full": fullWidth,
      "opacity-50 cursor-not-allowed": disabled,
    },
    className,
  )

  // Variant-specific classes and content
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          classes: cn(
            "h-14 overflow-hidden rounded-full bg-primary text-black transition-transform hover:scale-105",
            size === "sm" && "h-10",
            size === "lg" && "h-16",
          ),
          content: (
            <>
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
            </>
          ),
        }
      case "secondary":
        return {
          classes: "rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 h-14 px-6",
          content: <span className="text-lg font-medium">{children}</span>,
        }
      case "outline":
        return {
          classes: "rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 h-14 px-6",
          content: <span className="text-lg font-medium">{children}</span>,
        }
      case "ghost":
        return {
          classes: "rounded-full hover:bg-accent hover:text-accent-foreground h-14 px-6",
          content: <span className="text-lg font-medium">{children}</span>,
        }
      case "expert":
        return {
          classes: "rounded-full bg-primary text-white hover:scale-105 shadow-[0_0_15px_rgba(0,0,0,0.1)] h-14 px-8",
          content: <span className="text-lg font-medium">{children}</span>,
        }
      default:
        return {
          classes: "rounded-full bg-primary text-black h-14 px-6",
          content: <span className="text-lg font-medium">{children}</span>,
        }
    }
  }

  const { classes: variantClasses, content } = getVariantStyles()

  // Render as link if href is provided
  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, variantClasses)} aria-label={ariaLabel} {...(props as any)}>
        {content}
      </Link>
    )
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={cn(baseClasses, variantClasses)}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  )
}
