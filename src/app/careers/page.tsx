import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { VideoHeroSection } from "@/components/sections/video-hero-section"
import { JobRole } from "@/components/job-role"
import { engineeringRoles, productRoles, employeeBenefits, employeeTestimonials } from "@/data/careers"

export const metadata: Metadata = {
  title: "Careers - Join the AI Revolution",
  description:
    "Join AI Overlords and become an architect of intelligence. We're hiring AI engineers, researchers, product managers, and designers. Remote-first culture with competitive benefits.",
  keywords: [
    "AI careers",
    "AI jobs",
    "machine learning jobs",
    "AI engineer jobs",
    "AI researcher positions",
    "remote AI jobs",
    "artificial intelligence careers",
    "tech jobs",
  ],
  openGraph: {
    title: "Careers - Join the AI Revolution | AI Overlords",
    description:
      "Join AI Overlords and become an architect of intelligence. We're hiring AI engineers, researchers, product managers, and designers.",
    url: "https://aioverlords.com/careers",
  },
  twitter: {
    title: "Careers - Join the AI Revolution | AI Overlords",
    description:
      "Join AI Overlords and become an architect of intelligence. We're hiring AI engineers, researchers, product managers, and designers.",
  },
}

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <VideoHeroSection
        title="Careers at AI Overlords"
        subtitle="Become an Architect of Intelligence"
        description="We are a team of AI researchers and engineers on a mission to build AI systems that can help humanity understand the world better. We are driven by ambitious goals, fast execution, and a strong sense of urgency. Join us if you want to shape the next generation of AI models and products."
        videoSrc="/videos/gen-ai.mp4"
        posterImage="/images/career-bg.png"
        variant="centered"
        buttons={[
          {
            text: "View Open Roles",
            href: "#open-roles",
            primary: true,
            className: "bg-primary text-black",
          },
        ]}
      />

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 bg-white rounded-xl shadow-sm">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6">We offer the following employee benefits:</h2>
                <ul className="space-y-4">
                  {employeeBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 text-primary">•</div>
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/employee-benefit%201-zHTARSo73MF1Kw40mr3gEyTJCNktq9.png"
                  alt="Employee Benefits"
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section id="open-roles" className="py-16">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">Open Roles</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Join us if you want to shape the next generation of AI models and products.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">ENGINEERING</h3>
              {engineeringRoles.map((role, index) => (
                <JobRole
                  key={index}
                  title={role.title}
                  department={role.department}
                  description={role.description}
                  requirements={role.requirements}
                  responsibilities={role.responsibilities}
                />
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">PRODUCT</h3>
              {productRoles.map((role, index) => (
                <JobRole
                  key={index}
                  title={role.title}
                  department={role.department}
                  description={role.description}
                  requirements={role.requirements}
                  responsibilities={role.responsibilities}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="mb-12 text-3xl font-bold text-center">Why Join Us?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <path
                    d="M12 16L7 11M12 16L17 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Cutting-Edge Work</h3>
              <p className="text-gray-700">
                Work on the frontier of AI research and development, solving problems that matter.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <path
                    d="M17 20H7M17 20C18.1046 20 19 19.1046 19 18V9.41421C19 9.149 18.8946 8.89464 18.7071 8.70711L13.2929 3.29289C13.1054 3.10536 12.851 3 12.5858 3H7C5.89543 3 5 3.89543 5 5V18C5 19.1046 5.89543 20 7 20M17 20H7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Flexible Work</h3>
              <p className="text-gray-700">
                Remote-first culture with flexible hours and a focus on results, not hours worked.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Growth Opportunities</h3>
              <p className="text-gray-700">
                Continuous learning, mentorship, and career advancement in a rapidly growing field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4">
                These testimonials can give you a better sense of the value employees have gained by working with us
              </h2>
            </div>
            <div className="lg:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                {employeeTestimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-100 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">{testimonial.text}</p>
                    <div className="text-sm">
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="group flex h-14 items-center overflow-hidden rounded-full bg-primary text-black transition-transform hover:scale-105"
            >
              <span className="px-6 pr-4 text-lg font-medium">Apply Today</span>
              <div className="ml-2 flex h-14 w-14 items-center justify-center rounded-full bg-black">
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
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
