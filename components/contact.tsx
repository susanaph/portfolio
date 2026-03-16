"use client"

import { FadeUp } from "@/components/fade-up"
import { Linkedin, Calendar } from "lucide-react"

export function Contact({ compact = false, subtext }: { compact?: boolean; subtext?: string }) {
  return (
    <section id="contact" className={compact ? "py-16 px-6" : "py-16 md:py-28 px-6 bg-zinc-950"}>
      <div className="mx-auto max-w-3xl text-center">
        <FadeUp>
          <h2 className={`mb-4 font-bold tracking-tight text-white ${compact ? "text-2xl" : "text-3xl md:text-4xl"}`}>
            Want to connect?
          </h2>
          <p className="mb-10 text-base text-zinc-500 leading-relaxed">
            {subtext ?? "Open to new opportunities, conversations, and chats over a cup of tea."}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://linkedin.com/in/susanaeperez"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-violet-600 px-7 text-sm font-medium text-white transition-all duration-200 hover:bg-violet-500 hover:shadow-[0_0_24px_rgba(139,92,246,0.35)]"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
            <a
              href="https://calendar.app.google/SxstQV1psBWTptU56"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-zinc-800 px-7 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-zinc-600 hover:text-white"
            >
              <Calendar className="size-4" />
              Book a call
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
