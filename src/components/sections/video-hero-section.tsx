"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

interface ActionButtonProps {
  text: string
  href: string
  primary?: boolean
  icon?: boolean
  className?: string
}

interface VideoHeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  quote?: {
    text: string
    author: string
  }
  buttons?: ActionButtonProps[]
  videoSrc: string
  posterImage?: string
  align?: "left" | "center" | "right"
  className?: string
  variant?: "default" | "centered" | "minimal"
  fullHeight?: boolean
}

export function VideoHeroSection({
  title,
  subtitle,
  description,
  quote,
  buttons = [],
  videoSrc,
  posterImage,
  align = "left",
  className,
  variant = "default",
  fullHeight = true,
}: VideoHeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let isMounted = true

    const loadVideo = async () => {
      try {
        if (!video || !isMounted) return

        // Set initial video attributes
        video.muted = true
        video.playsInline = true
        video.loop = true
        video.preload = "metadata"

        // Create intersection observer
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                video.play().catch(console.error)
              } else {
                video.pause()
              }
            })
          },
          { threshold: 0.1 }
        )

        observer.observe(video)

        // Handle video loading
        video.addEventListener("loadeddata", () => {
          if (isMounted) {
            setIsVideoLoaded(true)
          }
        })

        // Start loading the video
        video.load()

        return () => {
          observer.disconnect()
          video.removeEventListener("loadeddata", () => setIsVideoLoaded(true))
        }
      } catch (error) {
        console.error("Video loading error:", error)
      }
    }

    loadVideo()

    return () => {
      isMounted = false
      if (video) {
        video.pause()
        video.src = ""
        video.load()
      }
    }
  }, [videoSrc])

  return (
    <section
      className={cn(
        "relative overflow-hidden pt-0 mt-[-82px] pb-12 md:pb-16 lg:pb-24 xl:pb-32",
        fullHeight && "min-h-[100vh]",
        className,
      )}
    >
      <div className="absolute inset-0 z-0">
        {posterImage && !isVideoLoaded && (
          <img
            src={posterImage}
            alt="Video poster"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <video
          ref={videoRef}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transform-gpu",
            !isVideoLoaded && "opacity-0",
            isVideoLoaded && "opacity-100 transition-opacity duration-500"
          )}
          playsInline
          muted
          loop
          poster={posterImage}
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Rest of your existing JSX */}
    </section>
  )
}