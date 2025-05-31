"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

interface TechItem {
  name: string
  icon?: React.ReactNode
}

interface TechCategory {
  name: string
  items: TechItem[]
}

interface TechStackSectionProps {
  title?: string
  categories: TechCategory[]
  initialCategory?: string
  className?: string
}

export function TechStackSection({
  title = "Tech Stack",
  categories,
  initialCategory,
  className = "",
}: TechStackSectionProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory || categories[0]?.name || "")
  const categoriesRef = useRef<HTMLDivElement>(null)

  // Add duplicates for infinite scroll effect
  const displayCategories = [...categories.map((cat) => cat.name), ...categories.slice(0, 2).map((cat) => cat.name)]

  // Get active category items
  const activeItems = categories.find((cat) => cat.name === activeCategory)?.items || []

  // Auto scroll effect for tech categories
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = categories.findIndex((cat) => cat.name === activeCategory)
      const nextIndex = (currentIndex + 1) % categories.length
      setActiveCategory(categories[nextIndex].name)

      if (categoriesRef.current) {
        const scrollContainer = categoriesRef.current
        const activeElement = scrollContainer.children[nextIndex] as HTMLElement

        if (activeElement) {
          scrollContainer.scrollTo({
            left: activeElement.offsetLeft - scrollContainer.clientWidth / 2 + activeElement.clientWidth / 2,
            behavior: "smooth",
          })
        }
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [activeCategory, categories])

  return (
    <section className={`bg-gray-50 py-16 ${className}`}>
      <div className="container">
        <h2 className="mb-12 text-3xl font-bold text-center">{title}</h2>
        <div className="mb-8 relative">
          <div
            ref={categoriesRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide py-2 px-4 mx-auto max-w-4xl"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {displayCategories.map((category, index) => (
              <div
                key={index}
                className={`cursor-pointer whitespace-nowrap rounded-full px-6 py-2 transition-all duration-300 ${
                  category === activeCategory
                    ? "bg-primary text-black font-medium scale-110"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </div>
            ))}
          </div>
          {/* Gradient overlays for scroll indication */}
          <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>

        {/* Display items in grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {activeItems.slice(0, 5).map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center rounded-lg bg-white p-6 text-center">
              {item.icon ? (
                <div className="mb-2 h-16 w-16 flex items-center justify-center">{item.icon}</div>
              ) : (
                <div className="mb-2 h-16 w-16 bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">{item.name.substring(0, 2)}</span>
                </div>
              )}
              <h3 className="text-sm font-medium">{item.name}</h3>
            </div>
          ))}
        </div>

        {/* Additional items if more than 5 */}
        {activeItems.length > 5 && (
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
            {activeItems.slice(5, 10).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-lg bg-white p-6 text-center"
              >
                {item.icon ? (
                  <div className="mb-2 h-16 w-16 flex items-center justify-center">{item.icon}</div>
                ) : (
                  <div className="mb-2 h-16 w-16 bg-gray-200 rounded-md flex items-center justify-center">
                    <span className="text-sm font-medium">{item.name.substring(0, 2)}</span>
                  </div>
                )}
                <h3 className="text-sm font-medium">{item.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
