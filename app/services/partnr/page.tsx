"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { BackToTop } from "@/components/back-to-top"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Zap,
  Target,
  Users,
  Calendar,
  Megaphone,
  Lightbulb,
  Settings,
  BarChart3,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"

export default function PartnrLandingPage() {
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
                  Partnr: Performance Marketing That <span className="text-brand-yellow">Actually Converts</span>.
                </h1>
                <p className="text-xl text-brand-gray-dark leading-relaxed">
                  Stop wasting ad spend. We build integrated marketing funnels, automation, and media campaigns that
                  deliver measurable ROI and align with your operations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-yellow hover:bg-yellow-400 text-brand-black font-semibold px-8 py-4 border-2 border-brand-black"
                  onClick={() => handleSmoothScroll("contact-cta")}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Map Your Marketing Growth Funnel
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 border-2 border-brand-black text-brand-black hover:bg-brand-gray-light bg-transparent"
                  onClick={() => handleSmoothScroll("features")}
                >
                  <Megaphone className="mr-2 h-5 w-5" />
                  Explore Features
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-brand-gray-light rounded-2xl p-8 h-96 flex items-center justify-center border-2 border-brand-black">
                <Image
                  src="/logos/partnr-logo.png"
                  alt="Partnr Logo"
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
              <h2 className="text-4xl font-bold text-brand-black">
                Is Your Marketing a Cost Center, Not a Growth Driver?
              </h2>
              <p className="text-xl text-brand-gray-dark">
                Many businesses struggle with marketing that feels disconnected, expensive, and doesn't deliver clear
                returns. You're spending, but not seeing the growth you expect.
              </p>
              <ul className="space-y-3 text-brand-gray-dark text-lg">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Inconsistent lead flow and unpredictable sales pipeline.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  High customer acquisition costs with low conversion rates.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Marketing efforts not aligned with sales processes or operational capacity.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Difficulty tracking true ROI from marketing campaigns.
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-brand-black">Partnr: Your Integrated Marketing Growth Engine.</h2>
              <p className="text-xl text-brand-gray-dark">
                We build marketing systems that seamlessly integrate with your operations, ensuring every lead becomes a
                qualified opportunity and every rand spent is tracked to ROI.
              </p>
              <ul className="space-y-3 text-brand-gray-dark text-lg">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Conversion-focused funnels that consistently generate qualified leads.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Automated nurturing campaigns that move prospects through your pipeline.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Clear performance metrics and dashboards for marketing accountability.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-yellow mr-3 flex-shrink-0" />
                  Marketing strategies fully aligned with your sales and operational capacity.
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
            <h2 className="text-4xl font-bold text-brand-black mb-4">What Partnr Delivers</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              Integrated marketing solutions designed to attract, engage, and convert your ideal customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Conversion-Focused Funnels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Landing pages, email sequences, and nurture campaigns designed to move prospects through your sales
                  process efficiently.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Marketing Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Intelligent campaigns that nurture leads, score prospects, and trigger sales actions at the right
                  moment, saving time and increasing effectiveness.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Performance Media Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Paid advertising strategies tied directly to revenue metrics, ensuring every rand spent is tracked to
                  ROI and optimized for results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Marketing Strategy & Offer Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  We help you define your unique value proposition and craft compelling offers that resonate with your
                  target audience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">CRM & Email Marketing Sequences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Design and implement effective email campaigns and CRM sequences that nurture leads and drive
                  conversions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Megaphone className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Website Messaging & Conversion Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Optimize your website's messaging and design for maximum conversion, turning visitors into leads.
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
            <h2 className="text-4xl font-bold text-brand-black mb-4">Our Partnr Marketing Process</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              A systematic approach to building high-performance marketing engines.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">1. Strategy & Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Define your target audience, unique offer, and the core strategy for lead generation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">2. Funnel Build</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Design and build your lead generation funnels, including landing pages and email sequences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">3. Launch & Automate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Launch campaigns and set up marketing automation to nurture leads and qualify prospects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">4. Optimize for ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Continuously monitor performance, analyze data, and optimize campaigns for maximum return on
                  investment.
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
            <h2 className="text-4xl font-bold text-brand-black mb-4">Partnr: Driving Measurable Marketing Growth</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              Real-world impact from integrated marketing strategies.
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
                  <div className="text-3xl font-bold text-brand-yellow mb-2">ZAR 2M+</div>
                  <h3 className="font-semibold text-brand-black mb-3">Additional Revenue</h3>
                  <p className="text-brand-gray-dark text-sm">
                    E-commerce brand's Partnr marketing integration generated ZAR 2M+ in additional annual revenue.
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
          <h2 className="text-4xl font-bold text-brand-white mb-4">Ready to Drive Marketing Performance?</h2>
          <p className="text-xl text-brand-gray-light mb-8">
            Book a discovery session with our Partnr experts and let's map out your high-converting marketing funnel.
          </p>
          <Button
            size="lg"
            className="bg-brand-yellow hover:bg-yellow-400 text-brand-black font-semibold px-8 py-4 border-2 border-brand-yellow"
            asChild
          >
            <Link href="/contact">
              <Calendar className="mr-2 h-5 w-5" />
              Book My Partnr Session
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
