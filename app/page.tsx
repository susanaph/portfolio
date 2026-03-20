import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { CaseStudies } from "@/components/case-studies"
import { QuickFacts } from "@/components/quick-facts"
import { Skills } from "@/components/skills"
import { Building } from "@/components/building"
import { SocialProof } from "@/components/social-proof"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Nav />
      <Hero />
      <CaseStudies />
      <QuickFacts />
      <Skills />
      <Building />
      <SocialProof />
      <Contact />
      <Footer />
    </main>
  )
}
