"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Cloud, Brain, Network, Cpu, Terminal, Settings } from "lucide-react"

const skillCategories = [
  {
    title: "Generative AI",
    icon: Brain,
    skills: [
      "OpenAI API",
      "Gemini API",
      "Claude API",
      "LangChain",
      "LangGraph",
      "CrewAI",
      "AutoGen",
      "RAG Systems",
      "Prompt Engineering",
      "AI Agents",
      "Hugging Face",
    ],
    color: "text-primary",
  },
  {
    title: "Vector Databases",
    icon: Network,
    skills: ["Pinecone", "ChromaDB", "FAISS", "LanceDB"],
    color: "text-accent",
  },
  {
    title: "ML / AI Foundations",
    icon: Cpu,
    skills: ["Python", "NumPy", "Pandas", "Transformers", "Sentence Transformers"],
    color: "text-primary",
  },
  {
    title: "Frontend",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    color: "text-accent",
  },
  {
    title: "Backend",
    icon: Terminal,
    skills: ["Node.js", "Express", "REST APIs", "Python", "Socket.io"],
    color: "text-primary",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
    color: "text-accent",
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS", "Vercel", "Azure AI Services", "Serverless"],
    color: "text-primary",
  },
  {
    title: "DevOps",
    icon: Settings,
    skills: ["Docker", "CI/CD", "Kubernetes", "Git"],
    color: "text-accent",
  },
]

export function SkillsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ category, index }: { category: (typeof skillCategories)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2)
  const Icon = category.icon

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? "animate-scale-in" : "opacity-0 scale-95"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className={`p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors ${category.color}`}>
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <Badge
                key={skill}
                variant="outline"
                className={`transition-all duration-300 hover:bg-primary hover:text-primary-foreground ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 150 + skillIndex * 50}ms`,
                  animationDelay: `${index * 150 + skillIndex * 50}ms`,
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
