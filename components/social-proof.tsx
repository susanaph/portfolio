"use client"

import { motion } from "framer-motion"
import { FadeUp } from "@/components/fade-up"

const testimonials = [
  {
    quote:
      "Susana gives any team the confidence to take on even the most complex projects.",
    name: "Rutger Wiegmans",
    title: "Senior UX Designer",
    company: "Randstad",
  },
  {
    quote:
      "Her performance exceeded expectations significantly. There is no way to show in a CV the performance I experienced working with this extra-motivated and engaged professional.",
    name: "Tomasz Odrzywołek",
    title: "IT Program Manager",
    company: "Randstad",
  },
  {
    quote:
      "You are a unique person and a great team player. I have always valued your matter-of-fact approach, sense of humor, and pragmatism. Randstad has a truly top-notch specialist in its ranks.",
    name: "AZ",
    title: "QA Engineer",
    company: "Randstad",
  },
]

export function SocialProof() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <FadeUp>
          <p className="mb-3 text-xs font-medium tracking-[0.25em] text-violet-400 uppercase">
            Testimonials
          </p>
          <h2 className="mb-16 text-3xl md:text-4xl font-bold tracking-tight text-white">
            What people say
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <FadeUp key={i} delay={i * 0.1} className="h-full">
              <motion.div
                className="flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-900/60 p-6"
                whileHover={{ borderColor: "rgba(139,92,246,0.3)" }}
                transition={{ duration: 0.18 }}
              >
                <p className="flex-1 text-base text-zinc-300 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-zinc-800">
                  <p className="text-base font-medium text-white">{t.name}</p>
                  <p className="text-sm text-zinc-500 mt-0.5">
                    {t.title} · {t.company}
                  </p>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
