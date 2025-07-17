"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { ArrowRight, Target, Lightbulb, Award, Calendar, TrendingUp, Zap, Building2, Globe } from "lucide-react"
import { BackToTop } from "@/components/back-to-top"
import Link from "next/link"

export default function AboutPage() {
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
      <section className="px-6 py-20 lg:py-32 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                  We Build the <span className="text-brand-yellow">Infrastructure</span> Behind Growth
                </h1>
                <p className="text-xl text-brand-gray-dark leading-relaxed">
                  At Black Rocket Consult, we design systems that drive scale — aligning workflows, marketing, and AI
                  into a single strategic engine.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-brand-yellow hover:bg-yellow-400 text-brand-black font-semibold px-8 py-4 border-2 border-brand-black"
                onClick={() => handleSmoothScroll("mission")}
              >
                <Target className="mr-2 h-5 w-5" />
                Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-brand-gray-light rounded-2xl p-8 h-96 flex items-center justify-center border-2 border-brand-black">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mb-3 mx-auto">
                      <Building2 className="h-8 w-8 text-brand-black" />
                    </div>
                    <p className="text-sm font-medium text-brand-black">50+ Clients</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mb-3 mx-auto">
                      <TrendingUp className="h-8 w-8 text-brand-black" />
                    </div>
                    <p className="text-sm font-medium text-brand-black">200% Avg Growth</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mb-3 mx-auto">
                      <Globe className="h-8 w-8 text-brand-black" />
                    </div>
                    <p className="text-sm font-medium text-brand-black">Global Reach</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mb-3 mx-auto">
                      <Award className="h-8 w-8 text-brand-black" />
                    </div>
                    <p className="text-sm font-medium text-brand-black">Industry Leaders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section id="mission" className="px-6 py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-black mb-4">Scale Isn't Random. It's Engineered</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-brand-gray-dark">
              <p>
                We exist to help founders and operators break through growth ceilings by building systems that scale.
                From workflow automations and CRM ecosystems to AI integrations and performance marketing, we don't just
                advise — we implement.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-black mb-2">We're not an agency.</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-black mb-2">We're not a software vendor.</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-yellow mb-2">
                    We're your growth infrastructure partner.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="px-6 py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-black mb-4">Built for Operators. Driven by Outcomes</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">Why We're Different</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Systems Over Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark">We don't deliver decks. We deploy repeatable, scalable systems.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Operator-Led Thinking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark">
                  We've been in the trenches. We think in processes, not vanity metrics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Strategy + Execution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark">We bridge high-level clarity with hands-on implementation.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Nick Swaneveider */}
      <section className="px-6 py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-brand-black">Meet Nick Swaneveider</h2>
                <div className="text-lg font-medium text-brand-yellow">
                  Operations Consultant | Scale Strategist | Profit-Focused Advisor
                </div>
                <div className="text-base font-medium text-brand-gray-dark">Founder, Black Rocket Consult</div>
              </div>

              <div className="space-y-4 text-brand-gray-dark">
                <p>
                  I founded Black Rocket Consult to help business owners stop running in circles — and start running
                  businesses that actually scale.
                </p>
                <p>
                  With over a decade of experience driving operational performance and strategic growth, I specialise in
                  uncovering hidden costs, simplifying complexity, and building systems that unlock clean, sustainable
                  growth.
                </p>
                <p>
                  My work is grounded in numbers — from people costs to process inefficiencies — but always focused on
                  outcomes: better margins, smarter teams, and businesses that don't burn out as they grow.
                </p>
                <p>
                  I've partnered with startups, scale-ups, agencies, and service firms that were doing "okay" but wanted
                  more: more control, more clarity, and more profit.
                </p>
                <p className="font-medium text-brand-black">
                  I'm not here to impress boards with buzzwords or sell cookie-cutter frameworks. I work with ambitious
                  founders and operators who are serious about building high-performance businesses that last.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-brand-white rounded-2xl p-8 border-2 border-brand-black">
                <div className="space-y-6">
                  <div className="w-32 h-32 border-2 border-brand-black rounded-full overflow-hidden mx-auto">
                    <Image
                      src="/images/nick-swaneveider-headshot.png"
                      alt="Nick Swaneveider, Founder of Black Rocket Consult"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-black mb-2">10+ Years</div>
                    <p className="text-brand-gray-dark">Operational Excellence</p>
                  </div>
                  <div className="grid grid-cols-1 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-brand-yellow">ZAR 10M+</div>
                      <p className="text-sm text-brand-gray-dark">Revenue Impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Beliefs */}
      <section className="px-6 py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-black mb-4">Our Beliefs</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black text-lg">Every Business Is a System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">Growth is a result of process, clarity, and alignment.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black text-lg">Clarity Over Chaos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  We simplify complexity with clean structures and measurable workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black text-lg">AI Should Be Useful, Not Flashy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">Real value comes from automation that gets adopted.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black text-lg">Marketing Must Convert</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  We integrate marketing into your operational backbone — not as an add-on, but as a driver.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="px-6 py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-black mb-4">Success Stories</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              Real results from real businesses who chose to systemize their growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-brand-black bg-brand-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-brand-yellow mb-2">300%</div>
                  <h3 className="font-semibold text-brand-black mb-3">Lead Conversion Increase</h3>
                  <p className="text-brand-gray-dark text-sm">
                    B2B SaaS company streamlined their sales pipeline with OpsSync, tripling qualified lead conversion.
                  </p>
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

            <Card className="border-2 border-brand-black bg-brand-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-brand-yellow mb-2">$2M</div>
                  <h3 className="font-semibold text-brand-black mb-3">Additional Revenue</h3>
                  <p className="text-brand-gray-dark text-sm">
                    E-commerce brand's Partnr marketing integration generated $2M in additional annual revenue.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="px-6 py-20 bg-brand-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-brand-white mb-4">Let's Build Your Growth Engine</h2>
          <p className="text-xl text-brand-gray-light mb-8">
            Schedule a discovery session. Let's identify where your workflows, marketing, and AI can work smarter —
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-brand-yellow hover:bg-yellow-400 text-brand-black font-semibold px-8 py-4 border-2 border-brand-yellow"
              asChild
            >
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}
