"use client"

import { useParallax } from "@/hooks/use-advanced-scroll"

export function AnimatedBackground() {
  const offset1 = useParallax(0.2)
  const offset2 = useParallax(0.3)
  const offset3 = useParallax(0.1)

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient orbs */}
      <div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"
        style={{ transform: `translateY(${offset1}px)` }}
      />
      <div
        className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-tr from-secondary/15 to-accent/15 rounded-full blur-3xl animate-pulse"
        style={{ transform: `translateY(${offset2}px)`, animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-tl from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"
        style={{ transform: `translateY(${offset3}px)`, animationDelay: "4s" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
