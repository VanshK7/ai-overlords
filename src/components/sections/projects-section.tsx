import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/custom-button"
import { ProjectCard, type ProjectCardProps } from "@/components/project-card"

interface ProjectsSectionProps {
  title: string
  projects: ProjectCardProps[]
  className?: string
}

export function ProjectsSection({ title, projects, className }: ProjectsSectionProps) {
  return (
    <section className={cn("py-12 md:py-16 lg:py-24 xl:py-32 bg-gray-50", className)}>
      <div className="container px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-3xl font-bold">{title}</h2>
          <Button href="/projects" variant="primary">
            Explore more Projects
          </Button>
        </div>
        <div className="flex flex-col space-y-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              imagePosition={index % 2 === 0 ? "left" : "right"}
              highlighted={index === 2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
