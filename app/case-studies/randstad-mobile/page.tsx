import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Global Mobile App Case Study — Susana Perez",
  description:
    "How I scaled Randstad's global talent app from 10 to 26 countries, grew MAU 10x, and raised ratings from 2.5 to 4.6 stars.",
  alternates: {
    canonical: "https://susana-perez.com/case-studies/randstad-mobile",
  },
  openGraph: {
    title: "Global Mobile App Case Study — Susana Perez",
    description:
      "How I scaled Randstad's global talent app from 10 to 26 countries, grew MAU 10x, and raised ratings from 2.5 to 4.6 stars.",
    url: "https://susana-perez.com/case-studies/randstad-mobile",
  },
}

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Nav } from "@/components/nav"
import { FadeUp } from "@/components/fade-up"
import { Contact } from "@/components/contact"

export default function RandstadMobile() {
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
              Talent App
            </h1>
            <p className="text-sm text-zinc-500 mb-6">
              Product Owner · Jan 2022 – Dec 2023 · Prague
            </p>
            <span className="inline-block text-xs text-zinc-500 border border-zinc-800 rounded-full px-3 py-1">
              B2C Mobile · Global Scale
            </span>
          </FadeUp>
        </div>
      </section>

      <div className="mx-auto max-w-[720px] px-6">
        <div className="border-t border-zinc-800" />
      </div>

      {/* Hero image */}
      <div className="pt-12 pb-0 px-6">
        <FadeUp>
          <div className="mx-auto max-w-[720px] overflow-hidden rounded-xl border border-zinc-800">
            <Image
              src="/randstad-appstore2.png"
              alt="Randstad Global Mobile App"
              width={1800}
              height={1200}
              className="w-full h-auto"
              priority
            />
          </div>
        </FadeUp>
      </div>

      {/* Content */}
      <article className="pt-16 px-6">
        <div className="mx-auto max-w-[720px] space-y-20">

          {/* The opportunity */}
          <FadeUp>
            <section id="opportunity">
              <h2 className="text-xl font-bold text-white mb-6">The opportunity</h2>
              <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                <p>
                  When Randstad reached out about the Global Mobile App Product Owner role, I didn&apos;t hesitate. The myRandstad app key to Randstad&apos;s staffing operations by facilitating tens of thousands of talents manage their admin during their assignments. Two days after the final round, I had an offer. I signed. For the first time in my career, I&apos;d be hired to do product full time.
                </p>
                <p>
                  I immediately enrolled in courses on UX design, agile methodologies, and design thinking. I wanted to do this properly. By the end of my tenure, I had completed 27 courses in UX, SQL, Python, data analysis, statistics, calculus, product strategy and innovation. All while working full time. Learning for me was part of the job.
                </p>
                <p>
                  During this time, I also completed my Master&apos;s degree in Business and Change Management, something I had originally moved to Europe for but had to pause due to workload. For my thesis, I developed the product vision and strategy for a mentoring platform. Using design thinking frameworks and user research techniques, I prepared a value proposition canvas, business model canvas, and an investment plan for an MVP. Essentially a full product case study as an academic exercise.
                </p>
              </div>
            </section>
          </FadeUp>

          {/* The product and what I built */}
          <FadeUp>
            <section id="the-product">
              <h2 className="text-xl font-bold text-white mb-6">The product and what I built</h2>
              <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                <p>
                  The Global Mobile App is Randstad&apos;s app for workers. People on temporary contracts submitting timesheets, tracking shifts, managing expenses. Built to serve 39 markets from a single codebase, the challenge was making scale and simplicity coexist: one app, one codebase, 3 brands, countless local variations in regulation, language, and workflow.
                </p>
                <p>
                  When I joined, the app was live in 10 countries with basic functionality and ratings sitting around 2.5 stars. The roadmap was ambitious: expand country coverage, replace legacy products, and build features that workers actually needed. Over two years we shipped shift management, notifications, absence and availability management, accessibility improvements, timesheets, expenses, e-signing, and a full rebrand and white-label spin-off for Tempo-Team and YouPlan.
                </p>
                <p>
                  Shortly after joining, my scope expanded to include product ownership for the integrations and middleware team. I welcomed it. This meant getting genuinely literate in system architecture: APIs, authentication flows, data contracts, error handling, how our mobile app communicated with 39 different market backends through a middleware layer. I learned fast, asked a lot of questions, and made sure I never had to ask the same one twice. The tech lead told me that was rare. It&apos;s my advice for anyone new to a team: ask and take notes. Study your notes. And thanks for the compliment.
                </p>
              </div>
              <figure className="mt-8">
                <div className="overflow-hidden rounded-xl border border-zinc-800">
                  <Image
                    src="/randstad-app.png"
                    alt="The Global Mobile App"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain max-h-[600px]"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-zinc-600 leading-snug">
                  The Global Mobile App — multiple brands, markets, and features from a single codebase
                </figcaption>
              </figure>
            </section>
          </FadeUp>

          {/* The detective work */}
          <FadeUp>
            <section id="detective-work">
              <h2 className="text-xl font-bold text-white mb-6">The detective work</h2>
              <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                <p>
                  The ratings issue wasn&apos;t obvious. Users were leaving poor reviews but the signals weren&apos;t surfacing through normal channels. I combined app store feedback with our product analytics setup, taught myself enough SQL to query user events in BigQuery, and started looking for patterns.
                </p>
                <p>
                  What I found were major bugs causing chronic user dissatisfaction: issues that had existed for a long time but hadn&apos;t been flagged for resolution due to how our systems communicated. After releasing a new app version with the fixes, the response from my Italian colleague was: &ldquo;Finally we fix that.&rdquo; He went on to share that consultants in Italy had been fielding reports for years without knowing how to respond. The calls kept coming until we shipped the fix. Reducing operating expenses this way is how the product proves ROI.
                </p>
                <p>
                  I replied to reviews personally, thanking users for their feedback and letting them know we were investigating. In a couple of cases, after notifying them that the fix was live, they updated their rating to 5 stars and left a comment thanking us for following through.
                </p>
                <p>
                  I also picked up enough AWS to start using CloudWatch to diagnose system communication issues. Not out of ambition to exceed my scope, but out of practicality. I needed answers, I didn&apos;t want to wait for someone else&apos;s availability, and I wasn&apos;t even sure the right logs existed or where to find them. Learning the tools myself was the fastest path to the truth.
                </p>
                <p>
                  Through my learning, I understood that the PO should care deeply about every aspect of the development process: QA, production setup, system health. You own it.
                </p>
              </div>
            </section>
          </FadeUp>

          {/* Stakeholder management at scale */}
          <FadeUp>
            <section id="stakeholder-management">
              <h2 className="text-xl font-bold text-white mb-6">Stakeholder management at scale</h2>
              <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                <p>
                  This was a vast IT and product organization with a lot of moving parts, operating fully remotely across multiple time zones. My job wasn&apos;t just to manage the backlog. It was to cut through the jungle and make a path for the team. I got deeply involved in ceremonies, protected the team&apos;s productive time, and kept the environment focused without losing momentum.
                </p>
                <p>
                  My manager&apos;s direction when I joined was simple: own the product. Be the expert. Be involved. I took that seriously, and was recognized for it. But what I&apos;m most proud of is the team culture we built. We incorporated user feedback directly into our backlog, communicated the impact of every release, and made sure the team could see the tens of thousands of people whose working lives we were improving. Meaningful work inspires excellent work. I believe that, and I tried to create it.
                </p>
                <p>
                  I visited the team in Poland a couple of times. Good work and good energy are not mutually exclusive — this team proved it.
                </p>
              </div>
              <figure className="mt-8">
                <div className="overflow-hidden rounded-xl border border-zinc-800">
                  <Image
                    src="/randstad-team.jpg"
                    alt="The development team in Poland"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-zinc-600 leading-snug">
                  The development team in Poland
                </figcaption>
              </figure>
            </section>
          </FadeUp>

          {/* The outcome */}
          <FadeUp>
            <section id="outcome">
              <h2 className="text-xl font-bold text-white mb-6">The outcome</h2>
              <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                <p>
                  By the time I left, the app was live in 26 countries, MAU had grown 10x, and ratings had climbed to 4.6+ on both the App Store and Google Play. Powering 3 different brands from the same codebase.
                </p>
                <p>
                  Toward the end of my time in this role, I contributed to the business case that secured funding for the next phase of the app. A multi-year investment in an internal landscape where the question was genuinely &ldquo;buy, build, or acquire.&rdquo; The global mobile app had proven its case: reach, adoption, ratings. It won.
                </p>
                <p>
                  I helped define what came next through a competitive analysis of comparable apps and consumer UX patterns to shape the candidate journey, designed to integrate seamlessly with the worker experience already built.
                </p>
                <p>
                  Building something that earns its own future is a good feeling.
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
              {["Swift", "Kotlin", "AWS", "REST APIs", "DevOps"].map((tag) => (
                <span key={tag} className="font-mono text-sm text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md px-3 py-1.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-start gap-3">
            <span className="w-28 shrink-0 text-sm text-zinc-500 pt-1">My tools</span>
            <div className="flex flex-wrap gap-2">
              {["BigQuery", "SQL", "Firebase", "Splunk", "Applanga", "Postman"].map((tag) => (
                <span key={tag} className="font-mono text-sm text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md px-3 py-1.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Case study navigation */}
      <nav className="mx-auto max-w-[720px] px-6 pt-8 pb-8 flex justify-between">
        <Link href="/case-studies/wegrow" className="group text-left">
          <p className="text-xs text-zinc-500 mb-1">Previous</p>
          <p className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors inline-flex items-center gap-1">
            <ChevronLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" /> WeGrow
          </p>
        </Link>
        <Link href="/case-studies/client-portal" className="group text-right">
          <p className="text-xs text-zinc-500 mb-1">Next</p>
          <p className="text-sm font-medium text-violet-400 group-hover:text-violet-300 transition-colors inline-flex items-center gap-1">
            Client Portal <ChevronRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </p>
        </Link>
      </nav>

      <Contact compact subtext="Open to help you plan how to upskill your product team with proven paths and methods." />

      <footer className="border-t border-zinc-800/60 py-8 px-6 text-center">
        <p className="text-xs text-zinc-700">
          © {new Date().getFullYear()} Susana Perez · Built with Next.js &amp; Claude Code
        </p>
      </footer>
    </main>
  )
}
