"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: "CrushGram-An Social media Application ",
    description:
      "An Social media Application inspired by Instagram and Twitter .",
    image: "/homepage.png",
    tags: ["Expressjs" , "Node js","React js","mongoDB","Socket.io","Tailwind CSS"],
    liveUrl: "https://crushgram-app-frontend.onrender.com/",
    githubUrl: "https://github.com/saurabh24thakur/crushgram_app",
  },
  {
    title: "HackHub-Hackthon management app",
    description: "Interactive hackthon management app create to organise hackthons in efficient manner",
    image: "/hackhub.png",
    tags: ["TypeScript", "Node js","React js","mongoDB","Tailwind CSS"],
    liveUrl: "https://hackhubfinal.vercel.app/",
    githubUrl: "https://github.com/saurabh24thakur/hackhub",
  },
//   {
//     title: "Mobile Banking App",
//     description: "Secure mobile banking application with biometric authentication and intuitive user experience.",
//     image: "/mobile-banking-app.png",
//     tags: ["React Native", "Node.js", "MongoDB", "JWT"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     title: "Creative Portfolio",
//     description: "Animated portfolio website showcasing creative work with smooth scroll interactions.",
//     image: "/creative-portfolio-website.png",
//     tags: ["Next.js", "Framer Motion", "GSAP", "CSS"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     title: "Social Media Platform",
//     description: "Full-stack social platform with real-time messaging, content sharing, and community features.",
//     image: "/social-media-interface.png",
//     tags: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     title: "Task Management Tool",
//     description: "Collaborative project management tool with team workflows and progress tracking.",
//     image: "/task-management-dashboard.png",
//     tags: ["Angular", "Firebase", "Material UI", "PWA"],
//     liveUrl: "#",
//     githubUrl: "#",
//   },
]

export function PortfolioSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3)

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my passion for creating exceptional digital experiences.All projects are created with the intersection of Aesthtic,performance and Strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
              <Github className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
