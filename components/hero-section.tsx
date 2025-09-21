"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { useAdvancedScroll, useParallax } from "@/hooks/use-advanced-scroll"
import { useState, useEffect } from "react"

export function HeroSection() {
  const { elementRef: heroRef, isVisible: heroVisible } = useAdvancedScroll({ threshold: 0.2 })
  const parallaxOffset = useParallax(0.5)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translateY(${-parallaxOffset * 0.8}px)`,
            animationDelay: "2s",
          }}
        />

        {/* Floating sparkles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-primary/30 animate-pulse"
            size={12 + Math.random() * 8}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-6 relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="text-primary animate-pulse">Full Stack</span>
              <br />
              <span className="text-foreground">Developer</span>
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-2xl opacity-50 animate-pulse -z-10" />
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Crafting digital experiences that blend innovative design with cutting-edge technology
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToPortfolio}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
            </Button>

            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/saurabh24thakur", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/saurabh-singh-476157374", label: "LinkedIn" },
                { icon: Mail, href: "mailto:saurabh5532u@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }, index) => (
                <Button
                  key={label}
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-background/50 backdrop-blur-sm border-border hover:scale-110 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{label}</span>
                </Button>
              ))}
            </div>
          </div>

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
