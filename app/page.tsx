"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { BackToTop } from "@/components/back-to-top"
import Image from "next/image"
import {
  ArrowRight,
  Settings,
  Zap,
  Megaphone,
  Bot,
  Search,
  Wrench,
  BarChart3,
  Building2,
  Users,
  Lightbulb,
  Calendar,
  Linkedin,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const headerHeight = 80 // Account for fixed header height
      const targetPosition = targetElement.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-brand-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 py-20 lg:py-32 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text + Buttons */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                  Growth, <span className="text-brand-yellow">Systemized</span>.
                </h1>
                <p className="text-xl text-brand-gray-dark leading-relaxed">
                  At Black Rocket Consult, we build operational and digital systems that unlock scale — across
                  workflows, marketing, and AI.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-yellow hover:bg-yellow-400 text-brand-black font-semibold px-8 py-4 border-2 border-brand-black"
                  onClick={() => handleSmoothScroll("contact")}
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Let's Map Your Growth
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 border-2 border-brand-black text-brand-black hover:bg-brand-gray-light bg-transparent"
                  onClick={() => handleSmoothScroll("services")}
                >
                  <Settings className="mr-2 h-5 w-5" />
                  Explore Our Services
                </Button>
              </div>
            </div>

            {/* Right: Visual Flow Diagram */}
            <div className="relative">
              <div className="bg-brand-gray-light rounded-2xl p-8 h-96 flex items-center justify-center border-2 border-brand-black">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mb-3">
                      <Settings className="h-8 w-8 text-brand-black" />
                    </div>
                    <p className="text-sm font-medium text-brand-black">Workflow</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-brand-gray-dark" />
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mb-3">
                      <Megaphone className="h-8 w-8 text-brand-black" />
                    </div>
                    <p className="text-sm font-medium text-brand-black">Marketing</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-brand-gray-dark" />
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mb-3">
                      <Bot className="h-8 w-8 text-brand-black" />
                    </div>
                    <p className="text-sm font-medium text-brand-black">AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productized Service Pillars */}
      <section id="services" className="px-6 py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* OpsSync */}
            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 hover:shadow-lg bg-brand-white">
              <CardHeader>
                <div className="mb-4">
                  <Image
                    src="/logos/opssync-logo.png"
                    alt="OpsSync"
                    width={150}
                    height={50}
                    className="w-[150px] h-auto"
                  />
                </div>
                <CardDescription className="text-lg font-medium text-brand-black">
                  Systemized workflows and CRMs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark mb-6">
                  We implement tools like HubSpot and Zoho to streamline your pipeline, automate your operations, and
                  enable scale.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-2 border-brand-black text-brand-black hover:bg-brand-yellow bg-transparent"
                  asChild
                >
                  <Link href="/services/opssync">
                    Explore OpsSync
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Partnr */}
            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 hover:shadow-lg bg-brand-white">
              <CardHeader>
                <div className="mb-4">
                  <Image
                    src="/logos/partnr-logo.png"
                    alt="Partnr"
                    width={150}
                    height={50}
                    className="w-[150px] h-auto"
                  />
                </div>
                <CardDescription className="text-lg font-medium text-brand-black">
                  Performance marketing that integrates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark mb-6">
                  Funnels, automation, and media that actually convert — fully aligned to your internal operations.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-2 border-brand-black text-brand-black hover:bg-brand-yellow bg-transparent"
                  asChild
                >
                  <Link href="/services/partnr">
                    Explore Partnr
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Ignite AI */}
            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 hover:shadow-lg bg-brand-white">
              <CardHeader>
                <div className="mb-4">
                  <Image
                    src="/logos/ignite-logo.png"
                    alt="Ignite AI"
                    width={150}
                    height={50}
                    className="w-[150px] h-auto"
                  />
                </div>
                <CardDescription className="text-lg font-medium text-brand-black">
                  Practical AI tools for your business.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark mb-6">
                  From custom GPTs to AI video to automation — we build usable AI systems with real ROI.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-2 border-brand-black text-brand-black hover:bg-brand-yellow bg-transparent"
                  asChild
                >
                  <Link href="/services/ignite">
                    Explore Ignite AI
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="about" className="px-6 py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-black mb-4">We Engineer Business Momentum.</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              Every business hits a ceiling. We help you break it by aligning strategy, systems, and scale — using the
              tools you already have.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-brand-black" />
              </div>
              <h3 className="text-xl font-semibold text-brand-black mb-3">Audit First</h3>
              <p className="text-brand-gray-dark">We diagnose where profit leaks and friction live</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-8 w-8 text-brand-black" />
              </div>
              <h3 className="text-xl font-semibold text-brand-black mb-3">Systems Built for You</h3>
              <p className="text-brand-gray-dark">Custom workflows, automations, and campaigns</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-brand-black" />
              </div>
              <h3 className="text-xl font-semibold text-brand-black mb-3">Tied to ROI</h3>
              <p className="text-brand-gray-dark">Everything we deploy has a performance metric</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="px-6 py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-black mb-4">Built for Builders.</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              We work best with ambitious teams ready to invest in leverage, clarity, and intelligent growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Scaling SMEs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark">Building traction but ops are messy</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">COOs / Operators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark">Need workflows and marketing alignment</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Founders & Visionaries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark">Want AI and automation to deliver, not distract</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-black mb-4">Don't Take Our Word For It.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-brand-black bg-brand-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-brand-yellow mb-4 text-2xl">{"★".repeat(5)}</div>
                  <blockquote className="text-lg text-brand-black italic mb-6">
                    "Black Rocket transformed the way we run our pipeline. The OpsSync workflows alone saved our team
                    30+ hours a month."
                  </blockquote>
                  <cite className="text-sm text-brand-gray-dark font-medium">— Head of Growth, B2B SaaS</cite>
                </div>
              </CardContent>
            </Card>

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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="px-6 py-20 bg-brand-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-brand-white mb-4">Ready to Systemize and Scale?</h2>
          <p className="text-xl text-brand-gray-light mb-8">
            Book a discovery session and let's identify your growth levers — workflow, marketing, or AI.
          </p>
          <Button
            size="lg"
            className="bg-brand-yellow hover:bg-yellow-400 text-brand-black font-semibold px-8 py-4 border-2 border-brand-yellow"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book My Strategy Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-brand-gray-dark text-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <Image
                  src="/logos/blackrocket-logo-footer.png"
                  alt="Black Rocket Consult"
                  width={200}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-brand-gray-light">
                Black Rocket Consult helps scale-minded businesses operationalize growth through systems, strategy, and
                AI.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-brand-white">Navigation</h4>
              <ul className="space-y-2 text-brand-gray-light">
                <li>
                  <a href="/" className="hover:text-brand-yellow transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-brand-yellow transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-brand-yellow transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-brand-white">Connect</h4>
              <a
                href="https://www.linkedin.com/company/black-rocket-consult/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-gray-light hover:text-brand-yellow transition-colors"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="border-t border-brand-gray-light pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-gray-light text-sm">© 2024 Black Rocket Consult. All rights reserved.</p>
            <a href="/privacy" className="text-brand-gray-light hover:text-brand-yellow text-sm transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  )
}
