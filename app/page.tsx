import { HeroSection } from "@/components/hero-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { SkillsSection } from "@/components/skills-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { GithubSection } from "@/components/github-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PortfolioSection />
      <SkillsSection />
      <AboutSection />
      <GithubSection />
      <ContactSection />
    </main>
  )
}
