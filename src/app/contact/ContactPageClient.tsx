"use client"

import type React from "react"

import { HeroSection } from "@/components/sections/hero-section"
import { Mail, MapPin, Calendar, Linkedin, MessageSquare } from "lucide-react"
import { faqData } from "@/data/contact"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Custom Contact Button Component
interface ContactButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  icon?: React.ReactNode
  fullWidth?: boolean
}

function ContactButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  icon,
  fullWidth = false,
}: ContactButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-3 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
      "w-full": fullWidth,
      // Size variations
      "px-4 py-2 text-sm rounded-lg": size === "sm",
      "px-6 py-3 text-base rounded-xl": size === "md",
      "px-8 py-4 text-lg rounded-xl": size === "lg",
    },
    className,
  )

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-primary to-primary/90 text-black hover:from-primary/90 hover:to-primary hover:shadow-lg hover:shadow-primary/25 focus:ring-primary/50 transform hover:scale-[1.02]",
    secondary:
      "bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 border border-gray-200 hover:from-gray-50 hover:to-white hover:shadow-md hover:border-gray-300 focus:ring-gray-300 transform hover:scale-[1.02]",
    outline:
      "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-black focus:ring-primary/50 transform hover:scale-[1.02]",
  }

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, variantClasses[variant])}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={cn(baseClasses, variantClasses[variant])}>
      {content}
    </button>
  )
}

export default function ContactPageClient() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Ready to transform your business with AI? Let's discuss your project and explore how we can help you achieve your goals."
        backgroundImage="/images/heros-banner.jpeg"
        variant="centered"
      />

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We're here to help you harness the power of AI for your business. Whether you need AI agents, machine
                learning solutions, or custom AI development, our team of experts is ready to assist you.
              </p>
            </div>

            {/* Primary CTA */}
            <div className="text-center mb-16">
              <div className="inline-block p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-3xl border border-primary/20 shadow-xl">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Schedule a Free Consultation
                </h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg leading-relaxed">
                  Book a 30-minute call with our founder to discuss your AI project and get expert guidance.
                </p>
                <ContactButton
                  href="https://calendly.com/founder-aioverlords"
                  variant="primary"
                  size="lg"
                  icon={<Calendar className="h-5 w-5" />}
                  className="shadow-xl"
                >
                  Book a Meeting Now
                </ContactButton>
              </div>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Email Us</h3>
                <p className="text-gray-600 mb-6">Send us a direct email for detailed inquiries</p>
                <a
                  href="mailto:founder@aioverlords.io"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-200 border-b border-primary/30 hover:border-primary/60"
                >
                  founder@aioverlords.io
                </a>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                  <Linkedin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect on LinkedIn</h3>
                <p className="text-gray-600 mb-6">Follow our updates and connect professionally</p>
                <a
                  href="https://www.linkedin.com/company/ai-0overlords/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-200 border-b border-primary/30 hover:border-primary/60"
                >
                  AI Overlords Company
                </a>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group md:col-span-2 lg:col-span-1">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Presence</h3>
                <p className="text-gray-600 mb-6">We serve clients worldwide</p>
                <p className="text-primary font-semibold">India • USA • Europe • Canada • Australia</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-3xl p-10 border border-gray-200">
              <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Quick Actions
              </h3>
              <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
                <ContactButton
                  href="https://calendly.com/founder-aioverlords"
                  variant="primary"
                  size="lg"
                  fullWidth
                  icon={<Calendar className="h-5 w-5" />}
                >
                  Schedule a Call
                </ContactButton>
                <ContactButton
                  href="/projects"
                  variant="outline"
                  size="lg"
                  fullWidth
                  icon={<MessageSquare className="h-5 w-5" />}
                >
                  View Our Portfolio
                </ContactButton>
              </div>
            </div>

            {/* Response Time Info */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-blue-900 mb-3 text-lg">Response Time</h4>
              <p className="text-blue-800 text-lg leading-relaxed">
                We typically respond to emails within 24 hours and can schedule calls within 1-2 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100/50 py-20">
        <div className="container">
          <h2 className="mb-16 text-center text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-4xl space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="mb-4 text-xl font-bold text-gray-900">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
