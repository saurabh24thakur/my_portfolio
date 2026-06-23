"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useAdvancedScroll } from "@/hooks/use-advanced-scroll"
import { useState, useEffect } from "react"

export function HeroSection() {
  const { elementRef: heroRef, isVisible: heroVisible } = useAdvancedScroll({ threshold: 0.2 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* 🔥 Cursor-follow background */}
      <div
        className="pointer-events-none absolute inset-0 transition-colors duration-300"
        style={{
          background: `radial-gradient(
            400px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(255, 220, 50, 0.25), 
            transparent 80%
          )`,
        }}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Name */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-6">
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary text-transparent bg-clip-text animate-text-shimmer">
              Saurabh Singh
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mb-4">
            Full Stack & Generative AI Engineer
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Crafting scalable <span className="text-primary font-medium">MERN Stack</span> & <span className="text-primary font-medium">Next.js</span> web applications, combined with robust <span className="text-accent font-medium">Generative AI</span> architectures, high-performance <span className="text-accent font-medium">RAG Systems</span>, autonomous <span className="text-accent font-medium">AI Agents</span>, and optimized <span className="text-accent font-medium">Vector Databases</span> using <span className="text-primary font-medium">Python</span> and TypeScript.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-14">
            <Button
              onClick={scrollToPortfolio}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(255,200,50,0.5)] transform hover:scale-110 transition-all duration-300"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>

            <div className="flex gap-5">
              {[
                { icon: Github, href: "https://github.com/saurabh24thakur", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/saurabh-singh-476157374", label: "LinkedIn" },
                { icon: Mail, href: "mailto:saurabh5532u@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }, index) => (
                <Button
                  key={label}
                  asChild
                  size="icon"
                  className="p-3 rounded-full bg-background/70 backdrop-blur-sm border border-border hover:scale-125 transition-all hover:shadow-lg hover:bg-yellow-400 text-foreground hover:text-black"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-6 w-6" />
                    <span className="sr-only">{label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-muted-foreground">Scroll to explore</span>
              <ArrowDown className="h-6 w-6 text-primary animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}