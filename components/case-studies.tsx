"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FadeUp } from "@/components/fade-up"

const cases = [
  {
    title: "WeGrow",
    company: "NEORIS",
    tag: "B2B SaaS · 0→1",
    description:
      "From hackathon winner to shipped product: building a people analytics platform from scratch inside a company that had never built one before.",
    href: "/case-studies/wegrow",
  },
  {
    title: "Global Mobile App",
    company: "RANDSTAD",
    tag: "B2C Mobile · Global Scale",
    description:
      "From 10 to 26 countries, 10x MAU growth, and 4.6+ stars. How a single codebase powers Randstad's workforce app across 39 markets and 3 brands.",
    href: "/case-studies/randstad-mobile",
  },
  {
    title: "Client Portal",
    company: "RANDSTAD",
    tag: "B2B · Global Platform",
    description:
      "A global B2B platform built from zero. From market research and team building to a live product in 3 countries.",
    href: "/case-studies/client-portal",
  },
]

const ease = [0.25, 0.4, 0.25, 1] as const

export function CaseStudies() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const prev = () => {
    setDirection(-1)
    setCurrent((i) => (i - 1 + cases.length) % cases.length)
  }

  const next = () => {
    setDirection(1)
    setCurrent((i) => (i + 1) % cases.length)
  }

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1)
    setCurrent(i)
  }

  return (
    <section id="work" className="py-16 md:py-28 px-6 bg-zinc-950">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <p className="mb-3 text-xs font-medium tracking-[0.25em] text-violet-400 uppercase">
            Case Studies
          </p>
          <h2 className="mb-16 text-3xl md:text-4xl font-bold tracking-tight text-white">
            Selected work
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          {/* Carousel card */}
          <div className="overflow-hidden rounded-2xl mb-6">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({
                    x: dir > 0 ? 60 : -60,
                    opacity: 0,
                  }),
                  center: { x: 0, opacity: 1 },
                  exit: (dir: number) => ({
                    x: dir > 0 ? -60 : 60,
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.32, ease }}
                className="border border-zinc-800 bg-zinc-900 rounded-2xl p-8 md:p-10 min-h-[280px] flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs font-medium text-violet-400 mb-2 tracking-wide">
                      {cases[current].company}
                    </p>
                    <h3 className="text-3xl font-bold text-white tracking-tight">
                      {cases[current].title}
                    </h3>
                  </div>
                  <span className="shrink-0 text-sm text-zinc-500 border border-zinc-800 rounded-full px-3 py-1 mt-1">
                    {cases[current].tag}
                  </span>
                </div>

                <p className="text-zinc-400 text-base leading-relaxed flex-1">
                  {cases[current].description}
                </p>

                <div className="mt-8">
                  <a
                    href={cases[current].href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors group"
                  >
                    Read more
                    <ChevronRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {cases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-violet-500"
                      : "w-2 bg-zinc-700 hover:bg-zinc-600"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                className="flex size-9 items-center justify-center rounded-full border border-zinc-800 text-zinc-500 transition-all duration-200 hover:border-zinc-600 hover:text-white"
                aria-label="Previous"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={next}
                className="flex size-9 items-center justify-center rounded-full border border-zinc-800 text-zinc-500 transition-all duration-200 hover:border-zinc-600 hover:text-white"
                aria-label="Next"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
