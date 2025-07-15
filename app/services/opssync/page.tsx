"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { BackToTop } from "@/components/back-to-top"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  Settings,
  BarChart3,
  Database,
  Workflow,
  Users,
  Calendar,
  Target,
  Lightbulb,
  Zap,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

export default function OpsSyncLandingPage() {
  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const headerHeight = 80
      const targetPosition = targetElement.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

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
                  OpsSync: Systemized Workflows, <span className="text-brand-yellow">Unlocked Scale</span>.
                </h1>
                <p className="text-xl text-brand-gray-dark leading-relaxed">
                  Transform your operations from reactive firefighting to proactive, scalable systems that work without
                  you. We build the infrastructure for effortless growth.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-yellow hover:bg-yellow-400 text-brand-black font-semibold px-8 py-4 border-2 border-brand-black"
                  onClick={() => handleSmoothScroll("contact-cta")}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your OpsSync Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 border-2 border-brand-black text-brand-black hover:bg-brand-gray-light bg-transparent"
                  onClick={() => handleSmoothScroll("features")}
                >
                  <Settings className="mr-2 h-5 w-5" />
                  Explore Features
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-brand-gray-light rounded-2xl p-8 h-96 flex items-center justify-center border-2 border-brand-black">
                <Image
                  src="/logos/opssync-logo.png"
                  alt="OpsSync Logo"
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
              <h2 className="text-4xl font-bold text-brand-black">Are Manual Processes Holding Your Business Back?</h2>
              <p className="text-xl text-brand-gray-dark">
                Many growing businesses hit a wall: operations become messy, data is siloed, and scaling feels
                impossible. You're spending more time managing than growing.
              </p>
              <ul className="space-y-3 text-brand-gray-dark text-lg">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Inconsistent lead follow-up and lost opportunities.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Time wasted on repetitive administrative tasks.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Lack of clear visibility into team performance and pipeline.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Difficulty onboarding new clients or team members efficiently.
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-brand-black">
                OpsSync: Your Blueprint for Operational Excellence.
              </h2>
              <p className="text-xl text-brand-gray-dark">
                We design and implement robust operational systems that eliminate friction, automate the mundane, and
                give you the clarity to scale with confidence.
              </p>
              <ul className="space-y-3 text-brand-gray-dark text-lg">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Streamlined CRMs that capture every lead and interaction.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Automated workflows that handle tasks from lead routing to client onboarding.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Custom dashboards providing real-time performance insights.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Clear SOPs and training for seamless team adoption.
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
            <h2 className="text-4xl font-bold text-brand-black mb-4">What OpsSync Delivers</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              Comprehensive solutions to build, optimize, and automate your core business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">CRM & Pipeline Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  We implement and optimize HubSpot, Zoho, or custom CRM solutions that actually get used by your team,
                  ensuring no lead is lost.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Workflow className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Process Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Eliminate manual tasks with intelligent workflows that handle everything from lead routing to client
                  onboarding, freeing up your team.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Performance Dashboards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Gain real-time visibility into what's working, what's not, and where your biggest opportunities lie
                  with custom, actionable reports.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Team Enablement & SOPs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  We create clear Standard Operating Procedures and provide training to ensure seamless adoption and
                  consistent execution across your team.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Toolstack Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Ensure all your tools (HubSpot, Zoho, Airtable, Notion, etc.) work together harmoniously, eliminating
                  data silos and manual transfers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Operational Audits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Deep dive into your current processes to identify inefficiencies, bottlenecks, and hidden profit
                  leaks.
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
            <h2 className="text-4xl font-bold text-brand-black mb-4">Our OpsSync Implementation Process</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              A structured approach to building robust, scalable operational systems.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">1. Discovery & Audit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  We deep dive into your current operations, identify bottlenecks, and map out your ideal workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">2. System Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  We architect your CRM, automation, and reporting systems, tailored to your unique business model.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">3. Implementation & Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Our team builds and deploys the systems, integrating tools and automating processes for efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">4. Training & Handover</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  We provide comprehensive training and documentation to ensure your team confidently adopts the new
                  systems.
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
            <h2 className="text-4xl font-bold text-brand-black mb-4">OpsSync: Real Results, Real Impact</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              See how OpsSync has transformed operations for businesses like yours.
            </p>
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
                  <div className="text-3xl font-bold text-brand-yellow mb-2">40hrs</div>
                  <h3 className="font-semibold text-brand-black mb-3">Weekly Time Savings</h3>
                  <p className="text-brand-gray-dark text-sm">
                    Professional services firm automated client onboarding, freeing up 40 hours per week.
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
          <h2 className="text-4xl font-bold text-brand-white mb-4">Ready to Systemize Your Operations?</h2>
          <p className="text-xl text-brand-gray-light mb-8">
            Book a discovery session with our OpsSync experts and let's map out your path to operational excellence.
          </p>
          <Button
            size="lg"
            className="bg-brand-yellow hover:bg-yellow-400 text-brand-black font-semibold px-8 py-4 border-2 border-brand-yellow"
            asChild
          >
            <Link href="/contact">
              <Calendar className="mr-2 h-5 w-5" />
              Book My OpsSync Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

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
                  <Link href="/" className="hover:text-brand-yellow transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-brand-yellow transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-brand-yellow transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-brand-yellow transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-brand-white">Connect</h4>
              <div className="space-y-2">
                <a
                  href="mailto:hello@blackrocket.co.za"
                  className="block text-brand-gray-light hover:text-brand-yellow transition-colors"
                >
                  <Mail className="h-4 w-4 inline mr-2" />
                  hello@blackrocket.co.za
                </a>
                <a
                  href="tel:+27726992437"
                  className="block text-brand-gray-light hover:text-brand-yellow transition-colors"
                >
                  <Phone className="h-4 w-4 inline mr-2" />
                  +27 72 699 2437
                </a>
                <a
                  href="https://www.linkedin.com/company/black-rocket-consult/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-brand-gray-light hover:text-brand-yellow transition-colors"
                >
                  <MessageSquare className="h-4 w-4 inline mr-2" />
                  LinkedIn
                </a>
              </div>
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

      <BackToTop />
    </div>
  )
}
