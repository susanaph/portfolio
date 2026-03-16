"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { usePathname } from "next/navigation"

const homeLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "AI", href: "#how-i-ai" },
  { label: "Contact", href: "#contact" },
]

const caseStudyTOC: Record<string, { title: string; sections: { label: string; href: string }[] }> = {
  "/case-studies/wegrow": {
    title: "WeGrow",
    sections: [
      { label: "The origin", href: "#origin" },
      { label: "What I built", href: "#what-i-built" },
      { label: "Shipping it", href: "#shipping-it" },
      { label: "What didn't work", href: "#what-didnt-work" },
    ],
  },
  "/case-studies/randstad-mobile": {
    title: "Global Mobile App",
    sections: [
      { label: "The opportunity", href: "#opportunity" },
      { label: "The product", href: "#the-product" },
      { label: "Stakeholder management", href: "#stakeholder-management" },
      { label: "The detective work", href: "#detective-work" },
      { label: "The outcome", href: "#outcome" },
    ],
  },
  "/case-studies/client-portal": {
    title: "Client Portal",
    sections: [
      { label: "How it started", href: "#how-it-started" },
      { label: "The problem", href: "#the-problem" },
      { label: "Building from zero", href: "#building-from-zero" },
      { label: "Navigating the hard parts", href: "#navigating-hard-parts" },
      { label: "Where we are now", href: "#where-we-are-now" },
    ],
  },
}

const linkClass = "text-sm text-zinc-500 hover:text-white transition-colors duration-200"

export function Nav() {
  const { scrollY } = useScroll()
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1])
  const pathname = usePathname()
  const toc = caseStudyTOC[pathname]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px bg-zinc-800"
        style={{ opacity: borderOpacity }}
      />
      <a href="/" className="text-sm font-semibold text-white tracking-tight">
        SP
      </a>

      {toc ? (
        <>
          {/* Desktop: Portfolio link + section TOC */}
          <div className="hidden md:flex items-center gap-5">
            <a href="/#work" className={linkClass}>
              ← Portfolio
            </a>
            <span className="text-zinc-800">|</span>
            {toc.sections.map((s) => (
              <a key={s.href} href={s.href} className={linkClass}>
                {s.label}
              </a>
            ))}
          </div>

          {/* Mobile: Portfolio link + title */}
          <div className="flex md:hidden items-center gap-4">
            <a href="/#work" className={linkClass}>
              ← Portfolio
            </a>
            <span className="text-sm text-zinc-600">{toc.title}</span>
          </div>
        </>
      ) : (
        <div className="flex items-center gap-6">
          {homeLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  )
}
