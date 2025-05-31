import type React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface MethodItem {
  title: string
  description: React.ReactNode
  image: string
  imageAlt: string
  reversed?: boolean
}

interface MethodsSectionProps {
  title: string
  methods: MethodItem[]
  className?: string
}

export function MethodsSection({ title, methods, className }: MethodsSectionProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className="container">
        <h2 className="mb-12 text-3xl font-bold text-center">{title}</h2>

        <div className="space-y-16">
          {methods.map((method, index) => (
            <div
              key={index}
              className={cn(
                "grid gap-8 items-center",
                method.reversed ? "md:grid-cols-[3fr_2fr]" : "md:grid-cols-[2fr_3fr]",
                method.reversed && "md:grid-flow-dense",
              )}
            >
              <div className={method.reversed ? "md:col-start-2" : ""}>
                <h3 className="text-2xl font-bold mb-4">{method.title}</h3>
                <div className="space-y-4 text-gray-700">
                  {typeof method.description === "string" ? <p>{method.description}</p> : method.description}
                </div>
              </div>

              <div className={method.reversed ? "md:col-start-1" : ""}>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={method.image || "/placeholder.svg"}
                    alt={method.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
