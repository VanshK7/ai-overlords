import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/custom-button"
import Image from "next/image"

interface ActionButtonProps {
  text: string
  href: string
  primary?: boolean
  icon?: boolean
  className?: string
}

interface HeroSectionProps {
  title: string
  subtitle?: string
  quote?: {
    text: string
    author: string
  }
  buttons?: ActionButtonProps[]
  backgroundImage?: string
  align?: "left" | "center" | "right"
  className?: string
  variant?: "default" | "centered" | "minimal"
  fullHeight?: boolean
  overlayOpacity?: number
  videoSrc?: string
  posterImage?: string
}

export function HeroSection({
  title,
  subtitle,
  quote,
  buttons = [],
  backgroundImage = "/images/neural-bg.png",
  align = "left",
  className,
  variant = "default",
  fullHeight = true,
  overlayOpacity = 0,
  videoSrc,
  posterImage,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-0 mt-[-82px] pb-12 md:pb-16 lg:pb-24 xl:pb-32",
        fullHeight && "min-h-[100vh]",
        className,
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <>
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={posterImage}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            {overlayOpacity > 0 && (
              <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }}></div>
            )}
          </>
        ) : backgroundImage?.startsWith("/") ? (
          <div className="h-full w-full relative">
            <Image
              src={backgroundImage || "/placeholder.svg"}
              alt="Background"
              fill
              priority
              className="object-cover"
              sizes="100vw"
              unoptimized={backgroundImage.endsWith(".gif")}
            />
            {overlayOpacity > 0 && (
              <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }}></div>
            )}
          </div>
        ) : (
          <div className="h-full w-full bg-[url('/images/neural-bg.png')] bg-cover bg-right-top"></div>
        )}
      </div>

      <div className="container relative z-10 pt-24">
        <div
          className={cn(
            "flex flex-col justify-center",
            fullHeight && "min-h-[calc(100vh-160px)]",
            variant === "centered" && "items-center text-center",
            variant === "default" && align === "center" && "items-center text-center",
            variant === "default" && align === "right" && "items-end text-right",
          )}
        >
          {variant === "centered" ? (
            // Centered variant with specific styling for Projects/Careers pages
            <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
              <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl font-serif">{title}</h1>

              {subtitle && (
                <p className="mb-10 text-base text-gray-700 sm:text-lg md:text-xl max-w-2xl mx-auto">{subtitle}</p>
              )}

              {buttons.length > 0 && (
                <div className="mt-8 flex justify-center">
                  {buttons.map((button, index) => (
                    <Button
                      key={index}
                      href={button.href}
                      variant="primary"
                      className={cn(
                        button.className,
                        "bg-primary text-black hover:scale-105 shadow-[0_0_15px_rgba(0,0,0,0.1)]",
                        index > 0 && "ml-4",
                      )}
                    >
                      {button.text}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            // Default variant with flexible alignment
            <div className={cn("max-w-xl px-4 sm:px-6 md:px-8 lg:px-12", align === "center" && "mx-auto")}>
              <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl font-serif">{title}</h1>

              {subtitle && <p className="mb-8 text-base text-muted-foreground sm:text-lg md:mb-12">{subtitle}</p>}

              {quote && (
                <div className="mb-8 md:mb-12">
                  <div className="text-4xl font-bold mb-2 font-serif">"</div>
                  <p className="text-lg text-gray-700 mb-2">{quote.text}</p>
                  <p className="text-lg font-medium">{quote.author}</p>
                </div>
              )}

              {buttons.length > 0 && (
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 w-full max-w-sm">
                  {buttons.map((button, index) => (
                    <div key={index} className="w-full">
                      <a
                        href={button.href}
                        className="group flex h-14 w-full items-center overflow-hidden rounded-full bg-primary text-black transition-transform hover:scale-105 shadow-[0_0_15px_rgba(0,0,0,0.1)]"
                      >
                        <span className="flex-1 text-center text-lg font-medium px-4">{button.text}</span>
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black flex-shrink-0">
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
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
