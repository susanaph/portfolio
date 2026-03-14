"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

const ease = [0.25, 0.4, 0.25, 1] as const

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[700px] h-[500px] rounded-full bg-violet-700/10 blur-[120px]" />

      <div className="relative z-10 max-w-4xl">
        <motion.p
          className="mb-5 text-base font-medium tracking-[0.25em] text-violet-400 uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
        >
          Product Manager
        </motion.p>

        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-bold tracking-tight text-white leading-[0.95] mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          Susana Perez
        </motion.h1>

        <motion.div
          className="mb-12 space-y-2 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease }}
        >
          <p className="text-xl md:text-2xl text-zinc-200 font-light leading-relaxed">
            Bringing clarity, alignment, and momentum to complex product environments.
          </p>
          <p className="text-xl md:text-xl text-zinc-400 font-light leading-relaxed">
            Driven by strategy, empathy, and a healthy impatience for the status quo.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
        >
          <a
            href="#work"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-violet-600 px-8 text-base font-medium text-white transition-all duration-200 hover:bg-violet-500 hover:shadow-[0_0_24px_rgba(139,92,246,0.35)]"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-800 px-8 text-base font-medium text-zinc-300 transition-all duration-200 hover:border-zinc-600 hover:text-white"
          >
            Let&apos;s connect
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <ArrowDown className="size-4 text-zinc-700" />
      </motion.div>
    </section>
  )
}
