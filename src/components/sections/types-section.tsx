import { cn } from "@/lib/utils"
import Image from "next/image"

interface TypeCardProps {
  icon: string
  title: string
  className?: string
}

function TypeCard({ icon, title, className }: TypeCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl bg-gray-100 p-6 text-center shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-all hover:scale-105 hover:shadow-[0_6px_15px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center">
        <Image
          src={icon || "/placeholder.svg?height=64&width=64&query=icon"}
          alt={title}
          width={64}
          height={64}
          className="h-12 w-12 object-contain"
        />
      </div>
      <h3 className="text-sm font-medium">{title}</h3>
    </div>
  )
}

interface TypesSectionProps {
  title: string
  subtitle?: string
  types: TypeCardProps[]
  className?: string
}

export function TypesSection({ title, subtitle, types, className }: TypesSectionProps) {
  return (
    <section className={cn("py-16 md:py-20", className)}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold">{title}</h2>
        {subtitle && <p className="mb-12 text-center text-muted-foreground">{subtitle}</p>}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {types.map((type, index) => (
            <TypeCard key={index} {...type} />
          ))}
        </div>
      </div>
    </section>
  )
}
