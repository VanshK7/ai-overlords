import { cn } from "@/lib/utils"

interface RoadmapStep {
  number: string
  title: string
}

interface RoadmapSectionProps {
  title: string
  steps: RoadmapStep[]
  className?: string
}

export function RoadmapSection({ title, steps, className }: RoadmapSectionProps) {
  return (
    <section className={cn("py-16 bg-gray-50", className)}>
      <div className="container">
        <h2 className="mb-16 text-center text-3xl font-bold">{title}</h2>

        <div className="relative mx-auto max-w-5xl px-4">
          {/* Top row - Steps 1-4 */}
          <div className="hidden md:flex justify-between mb-20 relative">
            {steps.slice(0, 4).map((step, index) => (
              <div key={index} className="relative z-10 w-[22%]">
                <div className="flex items-center">
                  {/* Circle with number */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md z-20">
                    <span className="text-xl font-bold text-gray-800">{step.number}</span>
                  </div>
                  {/* Pill with title */}
                  <div className="rounded-full bg-green-200 py-4 px-4 ml-[-8px] pl-12 z-10 w-full">
                    <span className="font-medium text-gray-800 text-sm md:text-base">{step.title}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Connecting line for top row */}
            <div className="absolute top-8 left-[8%] right-[8%] h-1 bg-green-200 z-0"></div>

            {/* Right vertical connector */}
            <div className="absolute right-[8%] top-8 w-1 h-32 bg-green-300 z-0"></div>
          </div>

          {/* Bottom row - Steps 5-8 in correct order (5 at right, 8 at left) */}
          <div className="hidden md:flex justify-between relative">
            {/* This maps steps 8,7,6,5 from left to right */}
            {[...steps.slice(4, 8)].reverse().map((step, index) => (
              <div key={index} className="relative z-10 w-[22%]">
                <div className="flex items-center">
                  {/* Circle with number */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md z-20">
                    <span className="text-xl font-bold text-gray-800">{step.number}</span>
                  </div>
                  {/* Pill with title */}
                  <div className="rounded-full bg-green-400 py-4 px-4 ml-[-8px] pl-12 z-10 w-full">
                    <span className="font-medium text-gray-800 text-sm md:text-base">{step.title}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Connecting line for bottom row */}
            <div className="absolute top-8 left-[8%] right-[8%] h-1 bg-green-400 z-0"></div>

            {/* Left vertical connector */}
            <div className="absolute left-[8%] bottom-8 top-[-32px] w-1 bg-green-300 z-0"></div>
          </div>

          {/* Mobile view - vertical steps */}
          <div className="md:hidden space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <span className="text-lg font-bold text-gray-800">{step.number}</span>
                </div>
                <div
                  className={`rounded-full ${index < 4 ? "bg-green-200" : "bg-green-400"} py-3 px-4 ml-[-6px] pl-10`}
                >
                  <span className="font-medium text-gray-800 text-sm">{step.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
