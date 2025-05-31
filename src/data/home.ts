import type { ProjectCardProps } from "@/components/project-card"

export const approachSteps = [
  {
    number: "01",
    title: "Strategizing Flow",
    description:
      "Define the goal, analyze requirements, capture missing data points, and create a data-gathering pipeline.",
  },
  {
    number: "02",
    title: "Develop perception through Analysis",
    description: "Visualize the pipeline & present key insights with clear results.",
  },
  {
    number: "03",
    title: "Train, Test & Tune",
    description: "Develop, train & validate models, implement & test algorithms iteratively.",
  },
  {
    number: "04",
    title: "Productionize & Scale",
    description: "Deploy models at scale, monitor performance & provide helpful reports.",
  },
]

export const featuredProjects: ProjectCardProps[] = [
  {
    description:
      "We built a new kind of intelligent workforce using customizable AI agents that automate repetitive, time-consuming tasks like support, content creation, and data analysis. These agents work 24/7, helping teams operate faster, cut costs, and scale output.",
    image: "/images/portfolio-1.png",
  },
  {
    description:
      "We built a fast, highly accurate speech-to-text engine optimized for real-time use. It captures natural speech with clarity and near-instant responsiveness, making it ideal for voice assistants, live events, and customer support.",
    image: "/images/portfolio-2.png",
  },
  {
    description:
      "We created an AI-powered smart beauty salon experience to deliver hyper-personalized services at scale. Intelligent agents analyze facial features, tone, and texture to recommend the best beauty routines and look.",
    image: "/images/portfolio-3.png",
  },
  {
    description:
      "We created a suite of more than 10 AI-fashion driven tools — from virtual try-ons to instant tech pack generation. These features automate complex design tasks and enhance product development.",
    image: "/images/portfolio-4.png",
  },
  {
    description:
      "We developed an AI-powered recruitment analytics dashboard that streamlines hiring workflows and provides real-time insights. The system tracks active loops, email templates, and candidate matches with comprehensive visualization tools.",
    image: "/images/portfolio-5.png",
  },
]

export const companyStats = [
  { value: "75+", label: "Projects" },
  { value: "30+", label: "In-house devs" },
  { value: "50+", label: "Years of combined AI/ML coding experience." },
]

export const testimonialCompanies = ["TestGenie", "AnkorDocs", "Alphavatar", "Liwy", "Enrolla", "Bunky"]
