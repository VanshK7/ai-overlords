import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/custom-button"
import Image from "next/image"

interface IndustriesSectionProps {
  title: string
  className?: string
}

export function IndustriesSection({ title, className }: IndustriesSectionProps) {
  return (
    <section className={cn("py-12 md:py-16 lg:py-24 xl:py-32", className)}>
      <div className="container px-4 sm:px-6 lg:px-12 xl:px-16">
        <h2 className="mb-12 text-center text-2xl font-bold sm:text-3xl">{title}</h2>

        <div className="mx-auto mb-12 max-w-3xl">
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Industries-k1Rq8AAKVertmFUWzwW9Otl51g6NVL.gif"
              alt="Industries we work with"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
              unoptimized
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            href="/projects"
            variant="primary"
            className="bg-primary text-black hover:scale-105 shadow-[0_0_15px_rgba(0,0,0,0.1)]"
          >
            View Our Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
