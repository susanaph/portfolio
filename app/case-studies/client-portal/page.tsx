import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ChevronLeft } from "lucide-react"
import { Nav } from "@/components/nav"
import { FadeUp } from "@/components/fade-up"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Client Portal Case Study — Susana Perez",
  description:
    "How I built a global B2B client portal from zero at Randstad — from market research and team building to a live product in 3 countries.",
  alternates: {
    canonical: "https://susana-perez.com/case-studies/client-portal",
  },
  openGraph: {
    title: "Client Portal Case Study — Susana Perez",
    description:
      "How I built a global B2B client portal from zero at Randstad — from market research and team building to a live product in 3 countries.",
    url: "https://susana-perez.com/case-studies/client-portal",
  },
}

export default function ClientPortal() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-[720px]">
          <FadeUp>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-300 transition-colors mb-12"
            >
              <ArrowLeft className="size-3.5" />
              Back
            </Link>
          </FadeUp>

          <FadeUp delay={0.08}>
            <p className="text-xs font-medium tracking-[0.25em] text-violet-400 uppercase mb-3">
              RANDSTAD
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
              Client Portal
            </h1>
            <p className="text-sm text-zinc-500 mb-6">
              Product Manager · Jan 2024 – Present · Amsterdam
            </p>
            <span className="inline-block text-xs text-zinc-500 border border-zinc-800 rounded-full px-3 py-1">
              B2B · Global Platform
            </span>
          </FadeUp>
        </div>
      </section>

      <div className="mx-auto max-w-[720px] px-6">
        <div className="border-t border-zinc-800" />
      </div>

      {/* Content */}
      <article className="pt-10 px-6">
        <div className="mx-auto max-w-[720px] space-y-20">

          {/* How it started */}
          <FadeUp>
            <section id="how-it-started">
              <h2 className="text-xl font-bold text-white mb-6">How it started</h2>
              <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                <p>
                  After a presentation with the COO and my future manager, I didn&apos;t wait for a job posting. I reached out directly and said I wanted to be part of what they were building. There was a position available: a brand new Global Client Portal, one platform to service all Randstad markets worldwide. I applied, got the job, and a promotion to Product Manager. Then I requested a transfer from Prague to Amsterdam. Randstad said yes. I moved countries for this role. I&apos;d do it again.
                </p>
                <p>
                  It was the most complex product challenge I&apos;d taken on. And I said yes immediately.
                </p>
              </div>
            </section>
          </FadeUp>

          {/* The problem worth solving */}
          <FadeUp>
            <section id="the-problem">
              <h2 className="text-xl font-bold text-white mb-6">The problem worth solving</h2>
              <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                <p>
                  Before writing a single user story, I went deep on the business. I pulled financial data to understand revenue by business line and market. I mapped client profiles from small businesses to global enterprises. I analyzed what Randstad actually offers across its services and asked the hard question: who will genuinely benefit from this portal, and who won&apos;t?
                </p>
                <p>
                  The insight that shaped everything: hiring managers don&apos;t care about HR processes. They need people, now. The portal had to be seamless and uncomplicated while still being legal, compliant, and organized. And it had to match the B2C experience users increasingly expect: self-service, transparent, fast.
                </p>
                <p>
                  I defined personas at three levels: company, buyer, and the hiring manager. I benchmarked internal tools, competitor products, and B2C comparables. User research became continuous and central. It informs every roadmap decision we make.
                </p>
              </div>
            </section>
          </FadeUp>

          {/* Building from zero */}
          <FadeUp>
            <section id="building-from-zero">
              <h2 className="text-xl font-bold text-white mb-6">Building from zero</h2>
              <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                <p>
                  This was a major multi-year strategic initiative as part of Randstad&apos;s global digital transformation. Which meant I didn&apos;t just build a product. I built a team and a way of working.
                </p>
                <p>
                  I participated in vendor selection, onboarded an IT partner, recruited product owners, business analysts, and designers, and established how we&apos;d all work together. I ran workshops to define our way of work, created RACI matrices for a 50+ person extended team, and documented processes and expectations so that hundreds of people across the organization could find a path forward.
                </p>
                <p>
                  Remote-first, globally distributed, high complexity. I was fully remote while most of the core team was in Amsterdam.
                </p>
                <p>
                  We launched a minimal viable version in the first year, built on a dual architecture capable of supporting both global and local market systems from the same codebase.
                </p>
              </div>
            </section>
          </FadeUp>

          {/* Navigating the hard parts */}
          <FadeUp>
            <section id="navigating-hard-parts">
              <h2 className="text-xl font-bold text-white mb-6">Navigating the hard parts</h2>
              <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                <p>
                  I&apos;ll be honest: it wasn&apos;t a smooth ride. Significant vendor challenges, organizational turbulence, and high team fluctuation, including multiple parental leaves across key roles simultaneously, tested the team&apos;s resilience at every stage.
                </p>
                <p>
                  My job through all of it was to stay close to the designers, product owners, and architects, keep everyone aligned on the vision, and make sure every role understood how to move and when. I pushed for engineering best practices throughout: DevOps, CI/CD, proper QA, scalability, even when the corporate environment made that slower than it should be.
                </p>
                <p>
                  We have been praised for our resilience, our organization, and genuinely having a good team culture. I&apos;ll take that. When I reduced my hours for a few weeks during my move from Prague to Amsterdam, things kept running. That&apos;s not luck. That&apos;s what good organizational design looks like in practice.
                </p>
              </div>
            </section>
          </FadeUp>

          {/* Where we are now */}
          <FadeUp>
            <section id="where-we-are-now">
              <h2 className="text-xl font-bold text-white mb-6">Where we are now</h2>
              <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                <p>
                  The portal is live in 3 countries with more rollouts planned. My team of 3 product owners, 3 business analysts, 3 designers, and 3 architects, none of whom report to me directly but all of whom I consider my team, has a solid foundation and a clear set of shared values:
                </p>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["User-centered design", "Data-driven", "Quality"].map((value) => (
                      <span key={value} className="text-xs font-medium text-violet-300 bg-violet-500/10 border border-violet-500/30 rounded-full px-3 py-1">
                        {value}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Scalability", "Security and privacy", "Continuous value delivery"].map((value) => (
                      <span key={value} className="text-xs font-medium text-violet-300 bg-violet-500/10 border border-violet-500/30 rounded-full px-3 py-1">
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
                <p>
                  My role has evolved to span broader initiatives across the product organization, but the Client Portal remains my product. The organizational design we built here works. It can be replicated and adapted. That&apos;s the kind of thing I care about: not just shipping features, but building the conditions for a team to keep shipping long after the hardest moments have passed.
                </p>
              </div>
            </section>
          </FadeUp>

        </div>

        {/* Tech stack */}
        <div className="mx-auto max-w-[720px] border-t border-zinc-800 mt-10 pt-10 pb-10 space-y-4">
          <div className="flex flex-wrap items-start gap-3">
            <span className="w-28 shrink-0 text-sm text-zinc-500 pt-1">Tech stack</span>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "REST APIs", "AWS", "CI/CD", "DevOps"].map((tag) => (
                <span key={tag} className="font-mono text-sm text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md px-3 py-1.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-start gap-3">
            <span className="w-28 shrink-0 text-sm text-zinc-500 pt-1">My tools</span>
            <div className="flex flex-wrap gap-2">
              {["Gemini", "NotebookLM", "Figma", "Miro", "Medallia DXA"].map((tag) => (
                <span key={tag} className="font-mono text-sm text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md px-3 py-1.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Case study navigation */}
      <nav className="mx-auto max-w-[720px] px-6 pt-8 pb-8 flex justify-start">
        <Link href="/case-studies/randstad-mobile" className="group text-left">
          <p className="text-xs text-zinc-500 mb-1">Previous</p>
          <p className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors inline-flex items-center gap-1">
            <ChevronLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" /> Global Mobile App
          </p>
        </Link>
      </nav>

      <Contact compact subtext="Open to discuss how you can scale your organization while boosting team morale." />

      <footer className="border-t border-zinc-800/60 py-8 px-6 text-center">
        <p className="text-xs text-zinc-700">
          © {new Date().getFullYear()} Susana Perez · Built with Next.js &amp; Claude Code
        </p>
      </footer>
    </main>
  )
}
