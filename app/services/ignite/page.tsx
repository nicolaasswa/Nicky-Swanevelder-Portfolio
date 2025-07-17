"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { BackToTop } from "@/components/back-to-top"
import { Footer } from "@/components/footer"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  Brain,
  Globe,
  Settings,
  Users,
  Calendar,
  Lightbulb,
  Zap,
  BarChart3,
  Target,
} from "lucide-react"
import Link from "next/link"

export default function IgniteAILandingPage() {
  return (
    <div className="min-h-screen bg-brand-white">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 py-20 lg:py-32 pt-32 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                  Ignite AI: Practical AI for <span className="text-brand-yellow">Real Business Impact</span>.
                </h1>
                <p className="text-xl text-brand-gray-dark leading-relaxed">
                  Cut through the hype. We deliver practical AI solutions that solve real business problems, automate
                  tasks, and generate measurable ROI.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-yellow hover:bg-yellow-400 text-brand-black font-semibold px-8 py-4 border-2 border-brand-black"
                  asChild
                >
                  <Link href="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Discover Your AI Advantage
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 border-2 border-brand-black text-brand-black hover:bg-brand-gray-light bg-transparent"
                  onClick={() => {
                    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Explore Features
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-brand-gray-light rounded-2xl p-8 h-96 flex items-center justify-center border-2 border-brand-black">
                <Image
                  src="/logos/ignite-logo.png"
                  alt="Ignite AI Logo"
                  width={300}
                  height={100}
                  className="w-[300px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="px-6 py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-brand-black">Is AI Just a Buzzword, Not a Business Tool?</h2>
              <p className="text-xl text-brand-gray-dark">
                Many companies are curious about AI but struggle to move beyond experimentation to real-world
                implementation. You need practical applications, not just flashy demos.
              </p>
              <ul className="space-y-3 text-brand-gray-dark text-lg">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Unclear ROI from AI investments.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Difficulty integrating AI tools into existing workflows.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Lack of internal expertise to build and manage AI solutions.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Overwhelmed by the sheer volume of AI tools and options.
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-brand-black">
                Ignite AI: Your Partner for Actionable AI Solutions.
              </h2>
              <p className="text-xl text-brand-gray-dark">
                We cut through the hype to deliver practical AI solutions that solve real business problems and generate
                measurable ROI, seamlessly integrating into your operations.
              </p>
              <ul className="space-y-3 text-brand-gray-dark text-lg">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Custom AI tools tailored to your specific business needs.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  AI-powered automation that frees up your team for strategic work.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Enhanced decision-making through intelligent data analysis.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Clear adoption strategies and training for your team.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-black mb-4">What Ignite AI Delivers</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              Practical AI applications designed to boost productivity, automate tasks, and drive real business value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Custom AI Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Bespoke AI solutions tailored to your specific business needs, from intelligent chatbots to predictive
                  analytics models.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">AI Content & Media</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Automated content creation, AI video production, and intelligent copywriting that maintains your brand
                  voice and scales your output.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Intelligent Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  AI-powered workflows that make smart decisions, learn from patterns, and optimize themselves over
                  time, reducing manual effort.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Internal Training & Adoption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Comprehensive training programs and adoption strategies to ensure your team confidently integrates AI
                  into their daily tasks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Prompt Engineering & Assets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Develop optimized prompts and reusable AI assets to maximize the effectiveness and consistency of your
                  AI tools.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">ChatGPT + API Use Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Identify and implement practical applications of large language models for your operations and
                  marketing needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="px-6 py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-black mb-4">Our Ignite AI Implementation Process</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              A structured approach to integrating AI for measurable business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">1. Identify Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  We pinpoint where AI can deliver the most significant ROI for your specific business challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">2. Prototype & Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Develop and test AI prototypes, designing solutions that integrate seamlessly with your existing
                  systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">3. Deploy & Integrate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Implement the AI solutions, ensuring they are robust, scalable, and fully integrated into your
                  workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">4. Monitor & Optimize</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Continuously monitor AI performance, gather feedback, and optimize for ongoing efficiency and impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials/Results */}
      <section className="px-6 py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-black mb-4">Ignite AI: Measurable AI Outcomes</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              Real-world impact from practical AI implementations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-brand-black bg-brand-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-brand-yellow mb-4 text-2xl">{"★".repeat(5)}</div>
                  <blockquote className="text-lg text-brand-black italic mb-6">
                    "From CRM to AI copilots, every solution was usable, documented, and adopted fast."
                  </blockquote>
                  <cite className="text-sm text-brand-gray-dark font-medium">— COO, Tech-Enabled Services Firm</cite>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black bg-brand-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-brand-yellow mb-2">75%</div>
                  <h3 className="font-semibold text-brand-black mb-3">Reduction in content creation time</h3>
                  <p className="text-brand-gray-dark text-sm">
                    A marketing agency used Ignite AI to automate content generation, saving 75% of their time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-cta" className="px-6 py-20 bg-brand-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-brand-white mb-4">Ready to Unlock Your AI Advantage?</h2>
          <p className="text-xl text-brand-gray-light mb-8">
            Book a discovery session with our Ignite AI experts and let's identify practical AI solutions for your
            business.
          </p>
          <Button
            size="lg"
            className="bg-brand-yellow hover:bg-yellow-400 text-brand-black font-semibold px-8 py-4 border-2 border-brand-yellow"
            asChild
          >
            <Link href="/contact">
              <Calendar className="mr-2 h-5 w-5" />
              Book My AI Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}
