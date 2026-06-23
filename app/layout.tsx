import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedBackground } from "@/components/animated-background"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Saurabh Singh | Full Stack & Generative AI Engineer",
  description: "Portfolio of Saurabh Singh - Full Stack & Generative AI Engineer. Specializing in MERN stack, Next.js, Python, RAG systems, AI agents, LangChain/LangGraph, and scalable cloud solutions.",
  keywords: [
    "Full Stack Developer",
    "Generative AI Engineer",
    "AI Engineer",
    "RAG Developer",
    "LangChain Developer",
    "LLM Engineer",
    "Next.js Developer",
    "MERN Stack Developer",
    "AI Agent Developer",
    "Saurabh Singh"
  ],
  generator: "Saurabh Singh",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <AnimatedBackground />
            <ThemeToggle />
            {children}
            <Toaster />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
