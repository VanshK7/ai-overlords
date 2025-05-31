import { cn } from "@/lib/utils"

interface ApproachStepProps {
  number: string
  title: string
  description: string
  className?: string
}

function ApproachStep({ number, title, description, className }: ApproachStepProps) {
  // Different background colors based on step number
  const getBgColor = (num: string) => {
    switch (num) {
      case "01":
        return "bg-gradient-to-r from-green-50 to-green-100"
      case "02":
        return "bg-gradient-to-r from-green-100 to-green-200"
      case "03":
        return "bg-gradient-to-r from-green-200 to-green-300"
      case "04":
        return "bg-gradient-to-r from-green-300 to-primary"
      default:
        return "bg-green-100"
    }
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="relative h-14 flex items-center">
        {/* Larger white circle for number that matches the height of the pill */}
        <div className="absolute left-0 top-0 bottom-0 flex h-full w-14 items-center justify-center rounded-full bg-white shadow-sm z-10">
          <span className="text-sm font-medium text-gray-700">{number}</span>
        </div>

        {/* Colored pill with title */}
        <div className={cn("rounded-full w-full pl-12 pr-6 py-3 ml-7", getBgColor(number), className)}>
          <span className="font-medium text-gray-900">{title}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 px-2">{description}</p>
    </div>
  )
}

interface ApproachSectionProps {
  title: string
  subtitle: string
  steps: ApproachStepProps[]
  className?: string
}

export function ApproachSection({ title, subtitle, steps, className }: ApproachSectionProps) {
  return (
    <section className={cn("py-16 md:py-20 lg:py-24", className)}>
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <p className="mt-2 text-sm uppercase tracking-wider text-gray-500">{subtitle}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <ApproachStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}
