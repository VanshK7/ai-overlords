import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

interface ActionButtonProps {
  text: string
  href: string
  className?: string
  icon?: boolean
}

export function ActionButton({ text, href, className, icon = true }: ActionButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-12 items-center overflow-hidden rounded-full bg-primary text-black transition-transform hover:scale-105",
        className,
      )}
    >
      <span className="px-6 text-base font-medium">{text}</span>
      {icon && (
        <div className="ml-1 flex h-12 w-12 items-center justify-center rounded-full bg-black">
          <ArrowUpRight className="h-5 w-5 text-white" />
        </div>
      )}
    </Link>
  )
}
