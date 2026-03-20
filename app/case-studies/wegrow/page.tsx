import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WeGrow Case Study — Susana Perez",
  description:
    "How I built a B2B SaaS people analytics product from zero at NEORIS — from hackathon win to App Store launch.",
  alternates: {
    canonical: "https://susana-perez.com/case-studies/wegrow",
  },
  openGraph: {
    title: "WeGrow Case Study — Susana Perez",
    description:
      "How I built a B2B SaaS people analytics product from zero at NEORIS — from hackathon win to App Store launch.",
    url: "https://susana-perez.com/case-studies/wegrow",
  },
}

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { Nav } from "@/components/nav"
import { FadeUp } from "@/components/fade-up"
import { Contact } from "@/components/contact"

const learnedPoints = [
  {
    lead: "Validate the market before building.",
    body: 'I approached competitive analysis from the wrong angle: "they do this poorly, we do it better, people will love us." I never seriously questioned whether companies actually wanted to invest in feedback culture. They didn\'t, or at least not at the price point we needed.',
  },
  {
    lead: "Talk to customers earlier, even without a product.",
    body: "I resisted early customer conversations because I didn't want to overpromise. In retrospect, those conversations would have surfaced the real objections: procurement complexity, cultural resistance to downloading work apps on personal phones, the difficulty of proving ROI, etc. long before we'd spent two years building.",
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
      <article className="pt-10 px-6">
        <div className="mx-auto max-w-[720px] space-y-20">

          {/* The origin */}
          <section id="origin" className="space-y-8">
            <FadeUp>
              <h2 className="text-xl font-bold text-white mb-6">The origin</h2>
              <p className="text-base text-zinc-400 leading-relaxed">
                It started with a hackathon. As a recruiting manager with no product background, I signed up to support an internal innovation initiative. Mostly out of curiosity. What I discovered in those 24 hours surprised me: I had a lot to contribute. Not code, but clarity. Our team won out of roughly 8 competing teams across a 150-person office.
              </p>
            </FadeUp>

            <FadeUp delay={0.05}>
              <figure>
                <div className="overflow-hidden rounded-xl border border-zinc-800">
                  <Image
                    src="/wegrow-sketch.png"
                    alt="Product architecture sketch from the hackathon"
                    width={600}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 724px"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-zinc-600 leading-snug">
                  Product architecture sketched on an iPad during the hackathon
                </figcaption>
              </figure>
            </FadeUp>

            <FadeUp delay={0.05}>
              <p className="text-base text-zinc-400 leading-relaxed">
                The win led directly to my appointment as Product Owner for WeGrow: a mobile app for employee feedback and recognition, powered by people analytics. The vision: help companies build cultures of continuous feedback through organizational network analysis. I had never held a product role in my life. I took every course I could find and got to work.
              </p>
            </FadeUp>

            <FadeUp delay={0.05}>
              <figure>
                <div className="flex items-center justify-center overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900" style={{ maxHeight: "500px" }}>
                  <Image
                    src="/wegrow-hack6.png"
                    alt="The NEORIS hackathon, Oct 2019"
                    width={600}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 724px"
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: "500px" }}
                  />
                </div>
                <figcaption className="mt-2 text-xs text-zinc-600 leading-snug">
                  The NEORIS hackathon, Oct 2019
                </figcaption>
              </figure>
            </FadeUp>
          </section>

          {/* What I built */}
          <section id="what-i-built" className="space-y-8">
            <FadeUp>
              <h2 className="text-xl font-bold text-white mb-6">What I built</h2>
              <p className="text-base text-zinc-400 leading-relaxed">
                WeGrow was four products in one: a native iOS and Android app for employees, a dashboarding web app for HR and people managers powered by organizational network analysis, a provisioning app for IT support, and a backend running on Neo4j and AWS. The team spanned Prague and Mexico. Small, scrappy, fully remote during COVID.
              </p>
            </FadeUp>

            <FadeUp delay={0.05}>
              <figure className="md:-mx-[140px]">
                <div className="overflow-hidden rounded-xl border border-zinc-800">
                  <Image
                    src="/wegrow-product2.png"
                    alt="WeGrow mobile app and analytics dashboard"
                    width={1000}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 1000px"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="md:mx-[140px] mt-2 text-xs text-zinc-600 leading-snug">
                  WeGrow — mobile app and analytics dashboard
                </figcaption>
              </figure>
            </FadeUp>

            <FadeUp delay={0.05}>
              <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                <p>
                  I owned everything that wasn&apos;t code. Backlog, user stories, ceremonies, stakeholder alignment, legal, security, App Store approvals, push notification infrastructure decisions, GDPR compliance, marketing, the contract template, the terms of use. When the company&apos;s legal counsel told me this process was unusually fast, that most people who came to him couldn&apos;t explain what their product did or how it was built, I took it as a sign I was doing something right.
                </p>
                <p>
                  I was also still a full-time global recruiting manager with direct reports across multiple countries while doing all of this.
                </p>
              </div>
            </FadeUp>
          </section>

          {/* Shipping it */}
          <FadeUp>
            <section id="shipping-it">
              <h2 className="text-xl font-bold text-white mb-6">Shipping it</h2>
              <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                <p>
                  Getting a product out the door at a company that had never shipped a product before meant fighting organizational inertia at every step. Scheduling a penetration test or getting App Store accounts took months. Nothing had a precedent.
                </p>
                <p>
                  We launched on iOS and Android. We launched the dashboarding app. We deployed internally to 3,500 employees globally. The dev team told me I wrote the best user stories they&apos;d ever seen, which surprised and flattered me, I assumed everyone did it this way.
                </p>
                <p>
                  When I pitched to the C-suite, the former COO, a 20+ year company veteran who I wasn&apos;t sure liked me, sent me an audio note afterward. He said the leadership team had gone in with doubts about the company&apos;s technology partnerships and investments, including Neo4j, which sat outside their traditional Microsoft stack. After my presentation, they lit up. I had connected the product, the technology choices, the analytics, the competitive landscape, and the vision in a way that made it all click. He said I&apos;d knocked it out of the park, mentioned something about sparkles like Christmas lights, and called it the best pitch he&apos;d seen at the company. His exact words: &ldquo;Your presentation was the best. Impeccable. Te luciste.&rdquo;
                </p>
                <p>
                  I went on to pitch to 15–20 potential clients across the Czech Republic, Spain, Argentina, Mexico, and the United States.
                </p>
              </div>
              <figure className="mt-8">
                <div className="overflow-hidden rounded-xl border border-zinc-800">
                  <Image
                    src="/wegrow-hero.png"
                    alt="The WeGrow landing page"
                    width={600}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 724px"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-zinc-600 leading-snug">
                  The WeGrow landing page, still live at{" "}
                  <a
                    href="https://epamneoris.com/wegrow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-zinc-400 transition-colors"
                  >
                    epamneoris.com/wegrow
                  </a>
                </figcaption>
              </figure>
            </section>
          </FadeUp>

          {/* What didn't work */}
          <FadeUp>
            <section id="what-didnt-work">
              <h2 className="text-xl font-bold text-white mb-2">What didn&apos;t work and what I learned</h2>
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
                WeGrow probably shouldn&apos;t have been built. Not by this company, not at this time. But I&apos;m glad it was, because it&apos;s where I found my calling and reoriented my career.
              </p>
            </section>
          </FadeUp>

        </div>

        {/* Tech stack */}
        <div className="mx-auto max-w-[720px] border-t border-zinc-800 mt-10 pt-10 pb-10 space-y-4">
          <div className="flex flex-wrap items-start gap-3">
            <span className="w-28 shrink-0 text-sm text-zinc-500 pt-1">Tech stack</span>
            <div className="flex flex-wrap gap-2">
              {["Neo4j", "GraphQL", "Apollo", "React Native", "Azure"].map((tag) => (
                <span key={tag} className="font-mono text-sm text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md px-3 py-1.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Case study navigation */}
      <nav className="mx-auto max-w-[720px] px-6 pt-8 pb-8 flex justify-end">
        <Link href="/case-studies/talent-app" className="group text-right">
          <p className="text-xs text-zinc-500 mb-1">Next</p>
          <p className="text-sm font-medium text-violet-400 group-hover:text-violet-300 transition-colors inline-flex items-center gap-1">
            Talent App <ChevronRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </p>
        </Link>
      </nav>

      <Contact compact subtext="Open to discuss how to spot the warning signs that your innovation investment may be at risk." />

      <footer className="border-t border-zinc-800/60 py-8 px-6 text-center">
        <p className="text-xs text-zinc-700">
          © {new Date().getFullYear()} Susana Perez · Built with Next.js &amp; Claude Code
        </p>
      </footer>
    </main>
  )
}
