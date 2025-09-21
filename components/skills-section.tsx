"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Smartphone, Database, Cloud, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "text-primary",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    skills: ["Figma", ],
    color: "text-accent",
  },
 
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Node.js", "Python", , "MongoDB", "MySQL", "REST APIs"],
    color: "text-accent",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Vercel", "Docker", "CI/CD", "Kubernetes", "Serverless"],
    color: "text-primary",
  },
  {
    title: "Tools & Others",
    icon: Zap,
    skills: ["Git"],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
