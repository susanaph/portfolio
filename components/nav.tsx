"use client"

import { motion, useScroll, useTransform } from "framer-motion"

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Nav() {
  const { scrollY } = useScroll()
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1])

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
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-zinc-500 hover:text-white transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
