import { EnhancedHeroSection } from "@/components/sections/enhanced-hero-section"

export default function ExamplesPage() {
  return (
    <div className="space-y-12">
      {/* Example with one button */}
      <EnhancedHeroSection
        title="Single Button Example"
        subtitle="This hero section has just one button and is left-aligned."
        buttons={[
          {
            text: "Get Started",
            href: "/contact",
            icon: true,
            primary: false,
          },
        ]}
        backgroundImage="/images/heros-banner.jpeg"
        fullHeight={false}
      />

      {/* Example with two buttons */}
      <EnhancedHeroSection
        title="Two Buttons Example"
        subtitle="This hero section has two buttons and is center-aligned."
        buttons={[
          {
            text: "Primary Action",
            href: "/contact",
            primary: true,
          },
          {
            text: "Secondary Action",
            href: "/about",
            icon: true,
            primary: false,
          },
        ]}
        backgroundImage="/images/heros-banner.jpeg"
        align="center"
        fullHeight={false}
      />

      {/* Example with quote and right alignment */}
      <EnhancedHeroSection
        title="Right-Aligned Example"
        quote={{
          text: "This is an example of a right-aligned hero section with a quote instead of a subtitle.",
          author: "Example Author",
        }}
        buttons={[
          {
            text: "Learn More",
            href: "/about",
            icon: true,
            primary: false,
          },
          {
            text: "Contact Us",
            href: "/contact",
            primary: true,
          },
        ]}
        backgroundImage="/images/heros-banner.jpeg"
        align="right"
        fullHeight={false}
      />
    </div>
  )
}
