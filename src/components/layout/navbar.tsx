"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

interface NavItem {
  title: string
  href: string
  dropdown?: DropdownItem[]
}

interface DropdownItem {
  title: string
  href: string
}

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems: NavItem[] = [
    {
      title: "AI Solutions",
      href: "#",
      dropdown: [
        { title: "AI Agents", href: "/ai-agents" },
        { title: "Gen AI", href: "/gen-ai" },
        { title: "Machine Learning", href: "/machine-learning" },
        { title: "Data Science, Data Analytics & Big Data", href: "/data-science" },
        { title: "Natural Language Processing", href: "/nlp" },
        { title: "Voice AI", href: "/voice-ai" },
        { title: "End to End Software Development Services", href: "/software-development" },
      ],
    },
    { title: "Our Projects", href: "/projects" },
    { title: "Careers", href: "/careers" },
    { title: "Contact Us", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 w-full transition-all py-4 duration-200",
        scrolled ? "shadow-sm" : "bg-transparent",
        className,
      )}
    >
      <div className="container">
        <div
          className={cn(
            "mx-auto flex max-w-xl items-center justify-between rounded-full px-4 py-4 transition-all",
            scrolled
              ? "bg-white/90 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.1)]"
              : "bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)]",
          )}
        >
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="AI Overlords" width={32} height={32} className="h-8 w-8" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-5 relative">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <button className="flex items-center text-sm font-medium text-foreground transition-colors hover:text-primary">
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div
                      className={cn(
                        "absolute top-full left-0 mt-2 w-[400px] rounded-lg bg-white p-4 shadow-lg transition-all duration-200",
                        activeDropdown === item.title ? "opacity-100 visible" : "opacity-0 invisible",
                      )}
                    >
                      <div className="mb-2 border-b pb-2">
                        <h3 className="text-lg font-medium">{item.title}</h3>
                      </div>
                      <div className="flex flex-col space-y-3">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="text-sm text-gray-700 hover:text-primary hover:underline"
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mt-2 rounded-lg bg-white p-4 shadow-md md:hidden">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.href} className="space-y-2">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                        className="flex items-center text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {item.title}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {activeDropdown === item.title && (
                        <div className="ml-4 flex flex-col space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="text-sm text-gray-700 hover:text-primary"
                              onClick={() => {
                                setActiveDropdown(null)
                                setMobileMenuOpen(false)
                              }}
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
