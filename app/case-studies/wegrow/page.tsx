"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Nav } from "@/components/nav"
import { FadeUp } from "@/components/fade-up"

const learnedPoints = [
  {
    lead: "Validate the market before building.",
    body: 'I approached competitive analysis from the wrong angle — "they do this poorly, we do it better, people will love us." I never seriously questioned whether companies actually wanted to invest in feedback culture. They didn\'t, or at least not at the price point we needed.',
  },
  {
    lead: "Talk to customers earlier, even without a product.",
    body: "I resisted early customer conversations because I didn't want to overpromise. In retrospect, those conversations would have surfaced the real objections: procurement complexity, cultural resistance to downloading work apps on personal phones, the difficulty of proving ROI — long before we'd spent two years building.",
  },
  {
    lead: "B2B sales is a multi-stakeholder problem.",
    body: "I focused on the people manager as decision-maker. But B2B means procurement, legal, IT security, and a different conversation with each. One good pitch to one person is not enough.",
  },
  {
    lead: "Cultural context matters.",
    body: "In Latin America, employees were reluctant to install a work app on personal devices. In Europe, interest was higher, but by the time we had the product, the company was in headwinds and had reduced headcount significantly. We never got to properly test the hypothesis.",
  },
]

export default function WeGrow() {
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
              NEORIS
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
              WeGrow
            </h1>
            <p className="text-sm text-zinc-500 mb-6">
              Product Owner · Oct 2019 – Dec 2021
            </p>
            <span className="inline-block text-xs text-zinc-500 border border-zinc-800 rounded-full px-3 py-1">
              B2B SaaS · 0→1
            </span>
          </FadeUp>
        </div>
      </section>

      <div className="mx-auto max-w-[720px] px-6">
        <div className="border-t border-zinc-800" />
      </div>

      {/* Content */}
      <article className="py-16 px-6 pb-32">
        <div className="mx-auto max-w-[720px] space-y-20">

          {/* The origin */}
          <FadeUp>
            <section>
              <h2 className="text-xl font-bold text-white mb-6">The origin</h2>
              <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                <p>
                  It started with a hackathon. As a recruiting manager with no product background, I signed up to support an internal innovation initiative — mostly out of curiosity. What I discovered in those 24 hours surprised me: I had a lot to contribute. Not code, but clarity. What&apos;s the problem? Who are the users? What do they actually need? Our team won out of roughly 8–9 competing teams across a 150-person office.
                </p>
                <p>
                  The win led directly to my appointment as Product Owner for WeGrow: a mobile app for employee feedback and recognition, powered by people analytics. The vision: help companies build cultures of continuous feedback through organizational network analysis. I had never held a product role in my life. I took every course I could find and got to work.
                </p>
              </div>
            </section>
          </FadeUp>

          {/* What I built */}
          <FadeUp>
            <section>
              <h2 className="text-xl font-bold text-white mb-6">What I built</h2>
              <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                <p>
                  WeGrow was four products in one: a native iOS and Android app for employees, a dashboarding web app for HR and people managers powered by organizational network analysis, a provisioning app for IT support, and a backend running on Neo4j and AWS. The team spanned Prague and Mexico. Small, scrappy, fully remote during COVID.
                </p>
                <p>
                  I owned everything that wasn&apos;t code. Backlog, user stories, ceremonies, stakeholder alignment, legal, security, App Store approvals, push notification infrastructure decisions, GDPR compliance, marketing, the contract template, the terms of use. When the company&apos;s legal counsel told me this process was unusually fast, that most people who came to him couldn&apos;t explain what their product did or how it was built, I took it as a sign I was doing something right.
                </p>
                <p>
                  I was also still a full-time global recruiting manager with direct reports across multiple countries while doing all of this.
                </p>
              </div>
            </section>
          </FadeUp>

          {/* Shipping it */}
          <FadeUp>
            <section>
              <h2 className="text-xl font-bold text-white mb-6">Shipping it</h2>
              <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                <p>
                  Getting a product out the door at a company that had never shipped a product before meant fighting organizational inertia at every step. Scheduling a penetration test took months. Getting App Store accounts took weeks. Nothing had a precedent.
                </p>
                <p>
                  We launched on iOS and Android. We launched the dashboarding app. We deployed internally to 3,500 employees globally. The dev team told me I wrote the best user stories they&apos;d ever seen, which baffled me, because I assumed everyone did it this way.
                </p>
                <p>
                  When I pitched to the C-suite, the former COO — a 20+ year company veteran who I wasn&apos;t sure liked me — sent me an audio note afterward. He said the leadership team had gone in with doubts about the company&apos;s technology partnerships and investments, including Neo4j, which sat outside their traditional Microsoft stack. After my presentation, they lit up. I had connected the product, the technology choices, the analytics, the competitive landscape, and the vision in a way that made it all click. He said I&apos;d knocked it out of the park, mentioned something about sparkles like Christmas lights, and called it the best pitch he&apos;d seen at the company.
                </p>
                <p>
                  I went on to pitch to 15–20 potential clients across the Czech Republic, Spain, Argentina, Mexico, and the United States.
                </p>
              </div>
            </section>
          </FadeUp>

          {/* What didn't work */}
          <FadeUp>
            <section>
              <h2 className="text-xl font-bold text-white mb-2">What didn&apos;t work — and what I learned</h2>
              <p className="text-base text-zinc-400 leading-relaxed mb-10">
                The product didn&apos;t find commercial success. Adoption internally was minimal, client conversions were zero, and when the executive sponsor left the company, the initiative lost its champion. Here&apos;s what I&apos;d do differently:
              </p>
              <div className="space-y-8">
                {learnedPoints.map((point) => (
                  <div key={point.lead} className="pl-5 border-l border-zinc-800">
                    <p className="text-base text-zinc-300 leading-relaxed">
                      <span className="font-semibold text-white">{point.lead}</span>{" "}
                      {point.body}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-base text-zinc-400 leading-relaxed mt-10">
                WeGrow probably shouldn&apos;t have been built — not by this company, not at this time. But I&apos;m glad it was, because it&apos;s where I found my calling and reoriented my career.
              </p>
            </section>
          </FadeUp>

        </div>
      </article>

      <footer className="border-t border-zinc-800/60 py-8 px-6 text-center">
        <p className="text-xs text-zinc-700">
          © {new Date().getFullYear()} Susana Perez · Built with Next.js &amp; Claude Code
        </p>
      </footer>
    </main>
  )
}
