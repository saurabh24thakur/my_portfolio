import { HeroSection } from "@/components/hero-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { SkillsSection } from "@/components/skills-section"
import { AIExpertiseSection } from "@/components/ai-expertise-section"
import { ExperienceSection } from "@/components/experience-section"
import { AboutSection } from "@/components/about-section"
import { GithubSection } from "@/components/github-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PortfolioSection />
      <SkillsSection />
      <AIExpertiseSection />
      <ExperienceSection />
      <GithubSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
