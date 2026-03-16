"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { FadeUp } from "@/components/fade-up"

const projects = [
  {
    title: "Vandaag",
    description:
      "Built a Dutch language learning app. Installed as a PWA. Claude via API enables reading, writing, and speaking. Supports multi-user and authentication. 15-day streak and counting, B1 level. Love polishing how to apply gamification to create habits.",
    tags: ["Claude API", "Supabase", "Railway", "Deepgram", "gTTS", "GitHub"],
    href: "https://vandaag.lovable.app/",
    image: (
      <div className="flex h-48 overflow-hidden rounded-t-xl">
        <div className="flex-1 overflow-hidden">
          <Image
            src="/vandaag-streak.png"
            alt="Vandaag streak"
            width={300}
            height={192}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex-1 overflow-hidden">
          <Image
            src="/vandaag-home.png"
            alt="Vandaag home"
            width={300}
            height={192}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: "This portfolio",
    description:
      "Built with Claude Code and shadcn MCP. Started with benchmarking PM portfolios and analyzing landing pages, mapped the design direction, wrote the content, built and deployed. Yes, you're reading it right now.",
    tags: ["Claude Code", "Next.js", "shadcn", "Vercel", "GitHub"],
    image: (
      <div className="h-48 overflow-hidden rounded-t-xl">
        <Image
          src="/portfolio-figjam.png"
          alt="Portfolio FigJam planning"
          width={600}
          height={192}
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
  {
    title: "Automating product ops",
    description:
      "Built a Google Chat app connecting to our on-premise Jira instance to track delivery at scale. Using Gemini to automate workflows, reduce repetitive work, track to-dos, and cut the back-and-forth that slows product teams down.",
    tags: ["Google Apps Script", "Gemini", "Jira", "Workspace Studio"],
    image: (
      <div className="h-48 overflow-hidden rounded-t-xl">
        <Image
          src="/google-workflow.png"
          alt="Google Workflow automation"
          width={600}
          height={192}
          className="w-full h-full object-cover object-top"
        />
      </div>
    ),
  },
]

export function Building() {
  return (
    <section className="py-28 px-6 bg-zinc-950">
      <div className="mx-auto max-w-5xl">
        <FadeUp>
          <p className="mb-3 text-xs font-medium tracking-[0.25em] text-violet-400 uppercase">
            Building
          </p>
          <h2 className="mb-16 text-3xl md:text-4xl font-bold tracking-tight text-white">
            How I AI
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {projects.map((project, i) => (
            <FadeUp key={project.title} delay={i * 0.08} className="h-full">
              <motion.div
                className="flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden"
                whileHover={{ borderColor: "rgba(139,92,246,0.4)", y: -2 }}
                transition={{ duration: 0.18 }}
              >
                {project.image}
                <div className="flex flex-col flex-1 px-6 py-5">
                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-base text-zinc-400 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  {"href" in project && project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors group"
                    >
                      Try it
                      <ChevronRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </a>
                  )}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-zinc-400 bg-zinc-800/80 border border-zinc-700/60 rounded-md px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
