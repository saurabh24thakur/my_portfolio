"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { GitHubCalendar } from "react-github-calendar"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { RefObject } from "react"

export function GithubSection() {
    const { ref, isVisible } = useScrollAnimation(0.1)
    const { theme } = useTheme()

    const username = "saurabh24thakur"

    // Custom theme for the calendar to match the portfolio
    const themeData = {
        light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
        dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    }

    return (
        <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <div
                    ref={ref as RefObject<HTMLDivElement>}
                    className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">GitHub & OSS Contributions</h2>

                    <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
                        {/* Contribution Graph */}
                        <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                            <CardContent className="p-8 flex flex-col items-center justify-center">
                                <h3 className="text-2xl font-semibold mb-6 self-start">Contribution Graph</h3>
                                <div className="w-full overflow-x-auto flex justify-center">
                                    <GitHubCalendar
                                        username={username}
                                        colorScheme={theme === "dark" ? "dark" : "light"}
                                        fontSize={16}
                                        blockSize={15}
                                        blockMargin={5}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Profile Details (Area Graph) */}
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-0 overflow-hidden flex justify-center items-center bg-[#0d1117]">
                                <img
                                    src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=tokyonight`}
                                    alt="GitHub Profile Details"
                                    className="w-full h-auto object-contain"
                                />
                            </CardContent>
                        </Card>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card className="hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-0 overflow-hidden flex justify-center items-center bg-[#0d1117]">
                                    <img
                                        src={`https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${username}&theme=tokyonight`}
                                        alt="GitHub Stats"
                                        className="w-full h-auto object-contain"
                                    />
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-0 overflow-hidden flex justify-center items-center bg-[#0d1117]">
                                    <img
                                        src={`https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${username}&theme=tokyonight`}
                                        alt="Top Languages"
                                        className="w-full h-auto object-contain"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
