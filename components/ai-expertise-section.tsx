"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Layers, Network, Scissors, GitBranch, Wrench, Terminal, Activity } from "lucide-react"

const expertiseItems = [
  {
    title: "RAG Architecture",
    icon: Layers,
    description: "End-to-end Retrieval-Augmented Generation systems integrating ingestion pipelines, semantic retrieval, and conversational synthesizers.",
    details: ["Query Translation", "Multi-stage Retrieval", "Re-ranking (Cohere)", "Context Compression"],
    bgGlow: "rgba(14, 165, 233, 0.15)"
  },
  {
    title: "Embeddings & Vector Search",
    icon: Network,
    description: "High-dimensional data mapping and query matching. Expertise in dense/sparse hybrid search and index configurations.",
    details: ["Text Embeddings", "Cosine/Euclidean Search", "HNSW Indexing", "Sparse Bi-encoders"],
    bgGlow: "rgba(168, 85, 247, 0.15)"
  },
  {
    title: "Chunking Strategies",
    icon: Scissors,
    description: "Semantic data splitting to retain contextual integrity and optimize chunk relevance for downstream generation.",
    details: ["Recursive Character Splitting", "Sliding Window", "Semantic/Sentence Chunking", "Metadata Enrichment"],
    bgGlow: "rgba(234, 179, 8, 0.15)"
  },
  {
    title: "Agentic Workflows",
    icon: GitBranch,
    description: "State-driven AI architectures that utilize cyclic routing and conditional reasoning loops for autonomous task execution.",
    details: ["LangGraph / CrewAI", "State Persistence", "Conditional Routing", "Human-in-the-Loop"],
    bgGlow: "rgba(34, 197, 94, 0.15)"
  },
  {
    title: "Tool & Function Calling",
    icon: Wrench,
    description: "Teaching LLMs to interact with third-party APIs, web search engines, databases, and executing deterministic actions.",
    details: ["Structured Output (JSON)", "Pydantic Schema Validation", "API Executions", "Error-Recovery Handlers"],
    bgGlow: "rgba(239, 68, 68, 0.15)"
  },
  {
    title: "Prompt Engineering",
    icon: Terminal,
    description: "Designing structured instructions, templates, and patterns to yield consistent, high-fidelity responses.",
    details: ["Few-Shot Prompting", "Chain-of-Thought (CoT)", "ReAct Pattern", "System Directives"],
    bgGlow: "rgba(6, 182, 212, 0.15)"
  },
  {
    title: "Evaluation & Monitoring",
    icon: Activity,
    description: "Systematic performance profiling, response validation, hallucination checking, and latency telemetry.",
    details: ["Ragas Framework", "G-Eval Validation", "Toxicity Checking", "Semantic Caching"],
    bgGlow: "rgba(249, 115, 22, 0.15)"
  }
]

export function AIExpertiseSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3)

  return (
    <section id="ai-expertise" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Generative AI Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep technical capability in designing, evaluating, and deploying production-ready AI systems
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {expertiseItems.map((item, index) => (
            <ExpertiseCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExpertiseCard({ item, index }: { item: (typeof expertiseItems)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2)
  const Icon = item.icon

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "animate-scale-in" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card 
        className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden border border-border bg-card/40 backdrop-blur-md relative"
        style={{
          boxShadow: `inset 0 0 12px 1px ${item.bgGlow}`
        }}
      >
        <CardContent className="p-6 flex flex-col h-full justify-between">
          <div>
            {/* Icon Block */}
            <div className="p-3 w-fit rounded-lg bg-muted group-hover:bg-primary/10 transition-colors mb-5">
              <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {item.description}
            </p>
          </div>

          {/* Details badges */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
            {item.details.map((detail) => (
              <Badge 
                key={detail} 
                variant="outline" 
                className="text-[10px] py-0.5 px-2 bg-background/50 hover:bg-primary/10 transition-colors"
              >
                {detail}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
