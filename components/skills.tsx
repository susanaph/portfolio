"use client"

import { motion } from "framer-motion"
import { FadeUp } from "@/components/fade-up"

const skills = [
  {
    title: "End-to-end ownership",
    description:
      "From discovery and strategy to delivery and team alignment. Not afraid to roll up my sleeves and don't shy away from the tough conversations.",
  },
  {
    title: "Systems thinking  ",
    description:
      "I spot the structural problems before they become product problems: misaligned incentives, unclear ownership, KPIs that reward the wrong behavior.",
  },
  {
    title: "Into the details",
    description:
      "I engage deeply with design, architecture, legal, and data protection. Whatever it takes to bring the product to life. I make decisions quickly to get teams unstuck.",
  },
  {
    title: "Clarity in ambiguity",
    description:
      "I bring structure to complex environments, connect strategy, and create a path to execution.",
  },
  {
    title: "Resilience",
    description:
      "I stay grounded when everything's on fire. Progress over perfection, momentum over paralysis.",
  },
]

const toolRows = [
  {
    label: "Tools",
    items: ["Jira", "Confluence", "Figma", "FigJam", "Google Workspace", "REST APIs", "Apps Script"],
  },
  {
    label: "Building with",
    items: ["Claude Code", "Lovable", "Supabase", "GitHub", "Balsamiq", "Canva", "Deepgram"],
  },
]

function SkillCard({ title, description, delay }: { title: string; description: string; delay: number }) {
  return (
    <FadeUp delay={delay}>
      <motion.div
        className="flex min-h-[280px] flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-8"
        whileHover={{ borderColor: "rgba(139,92,246,0.4)", y: -2 }}
        transition={{ duration: 0.18 }}
      >
        <h3 className="text-lg font-semibold text-white leading-snug">{title}</h3>
        <p className="text-base text-zinc-400 leading-relaxed">{description}</p>
      </motion.div>
    </FadeUp>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-zinc-950">
      <div className="mx-auto max-w-5xl">
        <FadeUp>
          <p className="mb-3 text-xs font-medium tracking-[0.25em] text-violet-400 uppercase">
            Approach
          </p>
          <h2 className="mb-16 text-3xl md:text-4xl font-bold tracking-tight text-white">
            Skills & approach
          </h2>
        </FadeUp>

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {skills.slice(0, 3).map((skill, i) => (
            <SkillCard key={skill.title} {...skill} delay={i * 0.08} />
          ))}
        </div>

        {/* Row 2: 2 cards, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-[calc(100%/6)] mb-16">
          {skills.slice(3).map((skill, i) => (
            <SkillCard key={skill.title} {...skill} delay={(i + 3) * 0.08} />
          ))}
        </div>

        {/* Tools */}
        <FadeUp delay={0.4}>
          <div className="border-t border-zinc-800 pt-10 space-y-4">
            {toolRows.map((row) => (
              <div key={row.label} className="flex flex-wrap items-start gap-3">
                <span className="w-28 shrink-0 text-sm text-violet-400 pt-1">{row.label}</span>
                <div className="flex flex-wrap gap-2">
                  {row.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-sm text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md px-3 py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
