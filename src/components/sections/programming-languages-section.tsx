import { cn } from "@/lib/utils"
import Image from "next/image"
import type React from "react"

interface LanguageItem {
  name: string
  icon: string | React.ReactNode
}

interface ProgrammingLanguagesSectionProps {
  title: string
  languages: LanguageItem[]
  className?: string
}

export function ProgrammingLanguagesSection({ title, languages, className }: ProgrammingLanguagesSectionProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className="container">
        <h2 className="mb-12 text-3xl font-bold text-center">{title}</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {languages.map((language, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4 h-24 w-24 flex items-center justify-center">
                {typeof language.icon === "string" ? (
                  <Image
                    src={language.icon || "/placeholder.svg"}
                    alt={language.name}
                    width={96}
                    height={96}
                    className="h-full w-auto object-contain"
                  />
                ) : (
                  <div className="text-gray-800">{language.icon}</div>
                )}
              </div>
              <h3 className="text-lg font-medium text-center">{language.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
