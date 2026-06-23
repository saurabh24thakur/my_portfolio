"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Calendar, Briefcase, ChevronRight } from "lucide-react"

const experiences = [
  {
    role: "Website Content Planner & Developer",
    company: "OSGC",
    period: "2024 - Present",
    responsibilities: [
      "Planned, structured, and optimized dynamic website layouts and content architecture to maximize search visibility and content engagement.",
      "Developed full-stack web applications using React, Next.js, and Node.js/Express (MERN stack) for robust content management systems.",
      "Integrated Generative AI and prompt engineering workflows to automate SEO optimization, keyword tagging, and content summary generation.",
      "Configured database retrieval models and semantic search integrations utilizing vector databases for high-speed content indexing.",
      "Maintained version control (Git) and managed containerized cloud deployments (Docker, AWS) for continuous integration of website assets."
    ],
    skills: ["React.js", "Next.js", "Express", "MongoDB", "Generative AI", "Prompt Engineering", "SEO", "Git", "AWS"]
  }
]

export function ExperienceSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3)

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A history of building scalable web applications and intelligent systems
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative before:absolute before:inset-y-0 before:left-4 md:before:left-1/2 before:w-[2px] before:bg-border">
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.role} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2)
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-stretch mb-12 last:mb-0 md:justify-between ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Circle Marker */}
      <div className="absolute left-4 md:left-1/2 -translate-x-[9px] top-6 w-5 h-5 rounded-full bg-primary border-4 border-background z-10 shadow-md animate-pulse" />

      {/* Spacer or Card Container */}
      <div className="w-full md:w-[45%] pl-12 md:pl-0">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? isEven
                ? "animate-fade-in-left"
                : "animate-fade-in-right"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-muted-foreground font-semibold flex items-center mt-1">
                    <Briefcase className="h-4 w-4 mr-2 text-accent" />
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center text-sm text-muted-foreground bg-muted/60 px-3 py-1 rounded-full border border-border">
                  <Calendar className="h-4 w-4 mr-2 text-accent" />
                  {exp.period}
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-muted-foreground text-sm flex items-start leading-relaxed">
                    <ChevronRight className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Empty space for alignment on desktop */}
      <div className="hidden md:block w-[45%]" />
    </div>
  )
}
