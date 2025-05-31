import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href: string
}

interface HeaderProps {
  navItems?: NavItem[]
  className?: string
}

export function Header({
  navItems = [
    { title: "Products", href: "/products" },
    { title: "Solutions", href: "/solutions" },
    { title: "Company", href: "/company" },
    { title: "Contact Us", href: "/contact" },
  ],
  className,
}: HeaderProps) {
  return (
    <header className={cn("w-full border-b bg-background", className)}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <span className="text-primary-foreground">AI</span>
            </div>
            <span className="font-semibold">AI Overlords</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
