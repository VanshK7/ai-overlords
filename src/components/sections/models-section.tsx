import { cn } from "@/lib/utils"
import Image from "next/image"

interface ModelCardProps {
  icon: string
  name: string
  className?: string
}

function ModelCard({ icon, name, className }: ModelCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl bg-gray-100 p-6 text-center shadow-[0_4px_10px_rgba(0,0,0,0.05)] transition-all hover:scale-105 hover:shadow-[0_6px_15px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <div className="mb-3 flex h-16 w-16 items-center justify-center">
        <Image
          src={icon || "/placeholder.svg?height=64&width=64&query=AI model icon"}
          alt={name}
          width={64}
          height={64}
          className="h-12 w-12 object-contain"
        />
      </div>
      <h3 className="text-sm font-medium">{name}</h3>
    </div>
  )
}

interface ModelsSectionProps {
  title: string
  models: ModelCardProps[]
  className?: string
}

export function ModelsSection({ title, models, className }: ModelsSectionProps) {
  return (
    <section className={cn("py-16 md:py-20", className)}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">{title}</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {models.map((model, index) => (
            <ModelCard key={index} {...model} />
          ))}
        </div>
      </div>
    </section>
  )
}
