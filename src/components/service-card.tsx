import { cn } from "@/lib/utils"
import Image from "next/image"

interface ServiceCardProps {
  icon: string
  title: string
  description?: string
  className?: string
}

export function ServiceCard({ icon, title, description, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-lg bg-gray-100 p-6 text-center transition-all hover:shadow-md",
        className,
      )}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center">
        <Image
          src={icon || "/placeholder.svg"}
          alt={title}
          width={48}
          height={48}
          className="h-12 w-12 object-contain"
        />
      </div>
      <h3 className="text-sm font-medium">{title}</h3>
      {description && <p className="mt-2 text-xs text-gray-600">{description}</p>}
    </div>
  )
}
