"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Code, BookOpen, Rocket, Award, ExternalLink, GraduationCap } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Code, label: "Projects Built", value: "3+" },
  { icon: BookOpen, label: "Technologies Learning", value: "10+" },
  { icon: Award, label: "Hackathons Joined", value: "3+" },
  { icon: Rocket, label: "Currently Exploring", value: "Artificial Intelligence" },
]

const certifications = [
  {
    title: "React JS by Knowledge Gate",
    issuer: "React-Knowledge Gate",
    date: "2025",
    skills: ["React JS"],
    credentialUrl: "#",
    logo: "/react.jpg", // Add your image path here
  },
  {
    title: "AWS Solution Architecture",
    issuer: "Amazon Web Services",
    date: "2026",
    skills: ["Cloud Computing", "AWS Services", "Security", "Architecture"],
    credentialUrl: "#",
    logo: "/aws-solution-architecture.png", // Add your image path here
  },
  {
    title: "Generative AI for All",
    issuer: "Physics Wallah",
    date: "2025",
    skills: ["Microsoft Copilot"],
    credentialUrl: "#",
    logo: "/genAi_cert_ms-pw.png", // Add your image path here
  },
  {
    title: "Hacktoberfest Supercontributer",
    issuer: "Hacktoberfest",
    date: "2025",
    skills: ["React JS","Node JS","MongoDB","Express","Git "],
    credentialUrl: "#",
    logo: "/hacktoberfest-supercontributer.png", // Add your image path here
  },
]

export function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3)
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          I am a Full-Stack Developer specializing in the MERN stack, dedicated to building scalable, high-performance web applications from the ground up. Beyond crafting robust digital products, I am an active contributor to the Open Source (OSS) ecosystem, where I focus on refining shared tools and collaborating on community-driven codebases. My approach combines technical precision in MongoDB, Express, React, and Node.js with a commitment to transparent, collaborative development that pushes the boundaries of modern web standards.
          </p>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 ${statsVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isVisible={statsVisible} />
          ))}
        </div>

        {/* Certifications Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.title} certification={cert} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, index, isVisible }: { stat: (typeof stats)[0]; index: number; isVisible: boolean }) {
  const Icon = stat.icon

  return (
    <Card
      className={`text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
        isVisible ? "animate-scale-in" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6">
        <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
        <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
        <div className="text-sm text-muted-foreground">{stat.label}</div>
      </CardContent>
    </Card>
  )
}

function CertificationCard({ certification, index }: { certification: (typeof certifications)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={certification.logo}
                  alt={`${certification.issuer} logo`}
                  fill
                  className="object-contain rounded-lg"
                  sizes="64px"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {certification.title}
                </h4>
                <p className="text-sm text-muted-foreground">{certification.issuer}</p>
                <p className="text-xs text-muted-foreground mt-1">{certification.date}</p>
              </div>
            </div>
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ExternalLink className="h-5 w-5 text-primary hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {certification.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}