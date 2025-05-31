import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/custom-button"
import Image from "next/image"

interface ExpertCTASectionProps {
  title: string
  subtitle?: string
  buttonText: string
  buttonLink: string
  image?: string
  className?: string
}

export function ExpertCTASection({
  title,
  subtitle,
  buttonText,
  buttonLink,
  image = "/images/iot-illustration.png",
  className,
}: ExpertCTASectionProps) {
  return (
    <section className={cn("py-16 bg-black text-white", className)}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            {subtitle && <p className="mb-6 text-gray-300">{subtitle}</p>}
            <Button href={buttonLink} variant="primary" className="mt-4">
              {buttonText}
            </Button>
          </div>
          {image && (
            <div className="flex justify-center">
              <div className="relative h-64 w-full max-w-md">
                <Image
                  src={image || "/placeholder.svg"}
                  alt="IoT Illustration"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
