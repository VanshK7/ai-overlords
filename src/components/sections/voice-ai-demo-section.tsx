import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

interface VoiceAIDemoSectionProps {
  title: string
  description?: string
  buttonText: string
  buttonLink: string
  className?: string
}

export function VoiceAIDemoSection({ title, description, buttonText, buttonLink, className }: VoiceAIDemoSectionProps) {
  return (
    <section
      className={cn(
        "py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden",
        className,
      )}
    >
      {/* Sound Wave Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/sound-wave.jpeg" alt="Sound Wave" fill className="object-cover opacity-60" priority />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Title and CTA Button */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold mb-8">{title}</h2>

            <a
              href={buttonLink}
              className="inline-flex items-center bg-primary text-black rounded-full px-8 py-4 font-medium text-lg transition-transform hover:scale-105 group"
            >
              {buttonText}
              <div className="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-black">
                <ArrowUpRight className="h-5 w-5 text-white" />
              </div>
            </a>
          </div>

          {/* Right side - Phone Cards */}
          <div className="lg:w-2/3 flex flex-col md:flex-row gap-6 items-center justify-center">
            {/* Sophia Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-sm">
              <p className="text-gray-200 mb-4 text-sm">
                This is Sophia, a voice AI agent assisting doctors with scheduling appointments.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-center">
                <span className="text-blue-300 font-medium text-lg">+1 (682) 651-9423</span>
              </div>
            </div>

            {/* Alex Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-sm">
              <p className="text-gray-200 mb-4 text-sm">
                This is Alex, a voice AI agent for real estate lead qualification.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-center">
                <span className="text-blue-300 font-medium text-lg">+1 (484) 285-8095</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
