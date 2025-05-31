import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - AI Consultation",
  description:
    "Ready to transform your business with AI? Schedule a free consultation with our AI experts. Get in touch for AI agents, machine learning, and custom AI development services.",
  keywords: [
    "AI consultation",
    "contact AI experts",
    "AI development consultation",
    "schedule AI meeting",
    "AI project discussion",
    "artificial intelligence consulting",
  ],
  openGraph: {
    title: "Contact Us - AI Consultation | AI Overlords",
    description: "Ready to transform your business with AI? Schedule a free consultation with our AI experts.",
    url: "https://aioverlords.com/contact",
  },
  twitter: {
    title: "Contact Us - AI Consultation | AI Overlords",
    description: "Ready to transform your business with AI? Schedule a free consultation with our AI experts.",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
