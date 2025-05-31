import Link from "next/link"
import Image from "next/image"
import { Linkedin, Calendar, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full">
      {/* CTA Section */}
      <section className="bg-gray-50 pt-16">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-lg bg-primary p-8">
              <h2 className="mb-4 text-2xl font-bold text-black">Get in touch</h2>
              <Link href="/contact" className="inline-block rounded-lg bg-black px-6 py-3 text-white">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-8 md:px-20">
          <div className="grid grid-cols-12 gap-8">
            {/* Logo and Social */}
            <div className="col-span-12 md:col-span-3">
              <div className="flex items-center mb-6">
                <Image src="/images/logo.png" alt="AI Overlords" width={48} height={48} className="mr-3" />
                <span className="text-xl font-bold">AI Overlords</span>
              </div>
              <div className="flex space-x-4 mb-6">
                <Link
                  href="https://www.linkedin.com/company/ai-0overlords/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="bg-black rounded-full p-2 inline-flex items-center justify-center"
                >
                  <Linkedin className="h-4 w-4 text-white" />
                </Link>
                <Link
                  href="https://calendly.com/founder-aioverlords"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Calendly"
                  className="bg-black rounded-full p-2 inline-flex items-center justify-center"
                >
                  <Calendar className="h-4 w-4 text-white" />
                </Link>
                <Link
                  href="mailto:founder@aioverlords.io"
                  aria-label="Email"
                  className="bg-black rounded-full p-2 inline-flex items-center justify-center"
                >
                  <Mail className="h-4 w-4 text-white" />
                </Link>
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden md:block md:col-span-3"></div>

            {/* Navigation */}
            <div className="col-span-4 md:col-span-2">
              <h3 className="text-sm font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/enterprise" className="text-xs uppercase text-gray-600 hover:text-primary">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-xs uppercase text-gray-600 hover:text-primary">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="col-span-4 md:col-span-2">
              <h3 className="text-sm font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="text-xs uppercase text-gray-600 hover:text-primary">
                    Docs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="col-span-4 md:col-span-2">
              <div>
                <h3 className="mb-4 text-sm font-semibold">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-12 mt-12">
            <div className="col-span-12 md:col-span-3">
              <p className="text-xs text-gray-500">©2025-2026 All Rights Reserved</p>
            </div>
            <div className="col-span-12 md:col-span-6 flex justify-center mt-4 md:mt-0">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <Link href="#" className="text-xs text-gray-500 hover:text-primary">
                  India
                </Link>
                <Link href="#" className="text-xs text-gray-500 hover:text-primary">
                  USA
                </Link>
                <Link href="#" className="text-xs text-gray-500 hover:text-primary">
                  Europe
                </Link>
                <Link href="#" className="text-xs text-gray-500 hover:text-primary">
                  Canada
                </Link>
                <Link href="#" className="text-xs text-gray-500 hover:text-primary">
                  Australia
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:col-span-3"></div>
          </div>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
