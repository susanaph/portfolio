import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { CaseStudies } from "@/components/case-studies"
import { QuickFacts } from "@/components/quick-facts"
import { Skills } from "@/components/skills"
import { SocialProof } from "@/components/social-proof"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Nav />
      <Hero />
      <CaseStudies />
      <QuickFacts />
      <Skills />
      <SocialProof />
      <Contact />
      <footer className="border-t border-zinc-800/60 py-8 px-6 text-center">
        <p className="text-xs text-zinc-700">
          © {new Date().getFullYear()} Susana Perez · Built with Next.js &amp; Claude Code
        </p>
      </footer>
    </main>
  )
}
