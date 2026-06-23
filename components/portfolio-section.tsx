"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {

    title: "MockMate - AI Mock Interview Platform",
    description: "An AI Mock Interview platform with real-time audio transcripts, feedback, and scoring dashboards.",
    image: "/mockInterview.png",
    tags: ["Next.js", "Express", "Node.js", "MongoDB", "Generative AI", "Gemini API"],
    category: "genai",
    liveUrl: "https://ai-mock-interview-frontend-2.pages.dev/",
    githubUrl: "https://github.com/saurabh24thakur/AI_mock_Interview_.git",
    details: {
      problem: "Technical interview preparation lacks scalable, cost-effective, and personalized evaluation with instant feedback loops.",
      architecture: "Next.js frontend communicating with a secure Node.js/Express service, orchestrating streaming LLM interactions and state storage.",
      llm: "Google Gemini 1.5 Pro / Flash",
      rag: "Dynamically matches user resume contents and targeted job descriptions to retrieve and compile custom-tailored interview questionnaires.",
      vectorDb: "Pinecone / Local Semantic Cache",
      deployment: "Frontend deployed on Cloudflare Pages; backend hosted on Render, using MongoDB for analytics state.",
      impact: "Reduced interview prep friction with real-time audio transcripts and granular scoring dashboards."
    }
  },
  
  {
    title: "CrushGram - Social Media Application",
    description: "A full-featured social platform inspired by Instagram and Twitter, incorporating real-time feeds and messaging.",

    image: "/homepage.png",
    tags: ["Expressjs", "Node.js", "React.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "https://crushgram-app-frontend.onrender.com/",

    githubUrl: "https://github.com/saurabh24thakur/crushgram_app"
  },
  {
    title: "HackHub - Hackathon Management App",
    description: "Interactive application designed to streamline hackathon creation, team registrations, and evaluation criteria.",
    image: "/hackhub.png",
    tags: ["TypeScript", "Node.js", "React.js", "MongoDB", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "https://hackhubfinal.vercel.app/",
    githubUrl: "https://github.com/saurabh24thakur/hackhub"
  }

]

export function PortfolioSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3)
  const [activeTab, setActiveTab] = useState<"all" | "genai" | "fullstack">("all")

  const filteredProjects = projects.filter(
    (project) => activeTab === "all" || project.category === activeTab
  )

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            A curated showcase of scalable web applications and intelligent Generative AI products.
          </p>

          {/* Filtering buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { id: "all", label: "All Projects" },
              { id: "genai", label: "Generative AI Projects" },
              { id: "fullstack", label: "Full Stack Projects" }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id as any)}
                className="rounded-full px-6 transition-all duration-300"
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        <PhilosophyDiagram />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full bg-card">
        <div className="relative overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

            <Button
              size="sm"
              variant="secondary"
              className="bg-white/90 hover:bg-white text-black"
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.liveUrl, "_blank", "noopener,noreferrer")
              }}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="bg-white/90 hover:bg-white text-black"
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.githubUrl, "_blank", "noopener,noreferrer")
              }}
            >
              <Github className="h-4 w-4" />
            </Button>

          </div>
        </div>

        <CardContent className="p-6 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function PhilosophyDiagram() {
  const [hoveredSector, setHoveredSector] = useState<string | null>(null)

  return (
    <div className="max-w-xl mx-auto my-12 p-6 rounded-2xl border border-border/40 bg-card/25 backdrop-blur-md relative overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      {/* Title */}
      <h3 className="text-sm font-bold mb-6 text-center text-foreground uppercase tracking-widest">
        Development Philosophy
      </h3>

      {/* SVG Venn Diagram */}
      <div className="relative w-full aspect-square max-w-[280px] mx-auto">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,220,50,0.1)]">
          {/* Performance Circle */}
          <circle
            cx="35"
            cy="42"
            r="26"
            className={`fill-primary/10 stroke-primary/35 stroke-[0.8] transition-all duration-300 cursor-pointer ${
              hoveredSector === "performance" ? "fill-primary/25 stroke-primary/80 scale-[1.03] transform origin-[35px_42px]" : ""
            }`}
            onMouseEnter={() => setHoveredSector("performance")}
            onMouseLeave={() => setHoveredSector(null)}
          />
          {/* Aesthetic Circle */}
          <circle
            cx="65"
            cy="42"
            r="26"
            className={`fill-accent/10 stroke-accent/35 stroke-[0.8] transition-all duration-300 cursor-pointer ${
              hoveredSector === "aesthetic" ? "fill-accent/25 stroke-accent/80 scale-[1.03] transform origin-[65px_42px]" : ""
            }`}
            onMouseEnter={() => setHoveredSector("aesthetic")}
            onMouseLeave={() => setHoveredSector(null)}
          />
          {/* Strategy Circle */}
          <circle
            cx="50"
            cy="65"
            r="26"
            className={`fill-secondary/10 stroke-secondary/35 stroke-[0.8] transition-all duration-300 cursor-pointer ${
              hoveredSector === "strategy" ? "fill-secondary/25 stroke-secondary/80 scale-[1.03] transform origin-[50px_65px]" : ""
            }`}
            onMouseEnter={() => setHoveredSector("strategy")}
            onMouseLeave={() => setHoveredSector(null)}
          />

          {/* Texts */}
          <text x="22" y="38" className="text-[3.5px] font-extrabold fill-foreground select-none pointer-events-none tracking-wide">Performance</text>
          <text x="56" y="38" className="text-[3.5px] font-extrabold fill-foreground select-none pointer-events-none tracking-wide">Aesthetic</text>
          <text x="43.5" y="68" className="text-[3.5px] font-extrabold fill-foreground select-none pointer-events-none tracking-wide">Strategy</text>

          {/* Core Intersection Indicator */}
          <circle
            cx="50"
            cy="49.5"
            r="7"
            className={`fill-yellow-400/20 stroke-yellow-400/80 stroke-[0.5] transition-all duration-300 cursor-pointer animate-pulse ${
              hoveredSector === "intersection" ? "fill-yellow-400/40 scale-110 transform origin-[50px_49.5px]" : ""
            }`}
            onMouseEnter={() => setHoveredSector("intersection")}
            onMouseLeave={() => setHoveredSector(null)}
          />
          <text x="48.2" y="50.8" className="text-[4px] font-bold fill-yellow-400 select-none pointer-events-none">✨</text>
        </svg>
      </div>

      {/* Description Panel */}
      <div className="mt-6 text-center min-h-[60px] flex items-center justify-center border-t border-border/30 pt-4">
        {hoveredSector === "performance" && (
          <p className="text-xs text-primary animate-fade-in-up leading-relaxed">
            <strong>Performance:</strong> Fast-loading pages, optimized bundle sizes, proper caching, and clean SEO structures designed for recruiters.
          </p>
        )}
        {hoveredSector === "aesthetic" && (
          <p className="text-xs text-accent animate-fade-in-up leading-relaxed">
            <strong>Aesthetic:</strong> Fluid interactive elements, harmonious color transitions, dark-mode glassmorphism, and responsive styling.
          </p>
        )}
        {hoveredSector === "strategy" && (
          <p className="text-xs text-secondary/90 animate-fade-in-up leading-relaxed">
            <strong>Strategy:</strong> Structured for business needs, focused user flows, modular clean code, and scalable architecture.
          </p>
        )}
        {hoveredSector === "intersection" && (
          <p className="text-xs text-yellow-400 animate-fade-in-up leading-relaxed font-semibold">
            <strong>The Sweet Spot:</strong> I build websites at the intersection of performance, aesthetics, and strategy to deliver clean, production-ready experiences.
          </p>
        )}
        {!hoveredSector && (
          <p className="text-xs text-muted-foreground animate-fade-in-up italic leading-relaxed">
            Hover over any circle or the center star to explore my design and development philosophy.
          </p>
        )}
      </div>
    </div>
  )
}
