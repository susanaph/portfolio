"use client"

import { FadeUp } from "@/components/fade-up"

const facts = [
  "6+ years in Product, built on a decade of people, operations, and tech",
  "Based in Amsterdam, lived in 6 countries across 3 continents",
  "B2B & B2C · Web & Mobile Apps · API Integrations · 0→1 Builds",
  "Compulsive learner: data, AI, code, design, languages",
  "Builds teams people actually want to work in",
]

export function QuickFacts() {
  return (
    <section id="about" className="py-16 md:py-28 px-6">
      <div className="mx-auto max-w-3xl">
        <FadeUp>
          <p className="mb-3 text-xs font-medium tracking-[0.25em] text-violet-400 uppercase">
            About
          </p>
          <h2 className="mb-16 text-3xl md:text-4xl font-bold tracking-tight text-white">
            Quick facts
          </h2>
        </FadeUp>

        <div>
          {facts.map((fact, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div
                className={`py-5 flex items-start gap-5 group${i > 0 ? " border-t border-zinc-800/60" : ""}`}
              >
                <span className="shrink-0 font-mono text-xs text-violet-400 mt-1 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200 leading-relaxed">
                  {fact}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
