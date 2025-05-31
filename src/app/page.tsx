import type { Metadata } from "next"
import { VideoHeroSection } from "@/components/sections/video-hero-section"
import { SolutionsSection } from "@/components/sections/solutions-section"
import { TestimonialSection } from "@/components/sections/testimonial-section"
import { IndustriesSection } from "@/components/sections/industries-section"
import { ApproachSection } from "@/components/sections/approach-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { StatsSection } from "@/components/sections/stats-section"
import { approachSteps, featuredProjects, companyStats, testimonialCompanies } from "@/data/home"

export const metadata: Metadata = {
  title: "AI Overlords - The Architects of Intelligence",
  description:
    "Leading AI development company specializing in AI agents, machine learning, data science, generative AI, and custom software solutions. Transform your business with cutting-edge artificial intelligence.",
  openGraph: {
    title: "AI Overlords - The Architects of Intelligence",
    description:
      "Leading AI development company specializing in AI agents, machine learning, data science, generative AI, and custom software solutions.",
    url: "https://aioverlords.com",
  },
  twitter: {
    title: "AI Overlords - The Architects of Intelligence",
    description:
      "Leading AI development company specializing in AI agents, machine learning, data science, generative AI, and custom software solutions.",
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <VideoHeroSection
        title="AI Overlords"
        subtitle="The architects of intelligence."
        videoSrc="/videos/homepage-bg.mp4"
        posterImage="/images/neural-bg.png"
        buttons={[
          { text: "AI", href: "#solutions", primary: true },
          { text: "Projects", href: "/projects", primary: false },
        ]}
      />
      <SolutionsSection title="Find Solutions in wide use cases" className="scroll-mt-20" id="solutions" />
      <TestimonialSection rating="4.9/5" customers="From 50+ Customers" companies={testimonialCompanies} />
      <IndustriesSection title="Industries we work in" />
      <ApproachSection
        title="Define. Train. Integrate your AI Solutions"
        subtitle="GET A GLANCE OF OUR METHODICAL APPROACH"
        steps={approachSteps}
      />
      <ProjectsSection title="Explore Our Portfolio of Featured Projects" projects={featuredProjects} />
      <StatsSection stats={companyStats} />
    </div>
  )
}
