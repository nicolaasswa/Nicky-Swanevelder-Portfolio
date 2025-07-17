"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { BackToTop } from "@/components/back-to-top"
import {
  ArrowRight,
  CheckCircle,
  Settings,
  BarChart3,
  Users,
  Calendar,
  Zap,
  Target,
  TrendingUp,
  Database,
  Workflow,
  Brain,
  Globe,
  Shield,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-brand-white">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 py-20 lg:py-32 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                Three Engines. <span className="text-brand-yellow">One Growth Infrastructure</span>.
              </h1>
              <p className="text-xl text-brand-gray-dark leading-relaxed max-w-4xl mx-auto">
                We don't offer services in isolation. We design interconnected systems that drive scale — through
                workflows, performance marketing, and AI enablement.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-yellow hover:bg-yellow-400 text-brand-black font-semibold px-8 py-4 border-2 border-brand-black"
                asChild
              >
                <Link href="/services/opssync">
                  <Target className="mr-2 h-5 w-5" />
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 border-2 border-brand-black text-brand-black hover:bg-brand-gray-light bg-transparent"
                asChild
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Discovery Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section id="services" className="px-6 py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-black mb-4">Our Service Ecosystem</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              Each service works independently, but together they create exponential growth leverage.
            </p>
          </div>

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
                <CardTitle className="text-2xl text-brand-black">Workflow & Systems Implementation</CardTitle>
                <CardDescription className="text-lg font-medium text-brand-gray-dark">
                  Build operational clarity with process design, system integration, and CRM implementation. Whether
                  you're scaling in HubSpot, Zoho, or Notion — we connect the tools to your business model.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-brand-gray-dark">
                    We implement and optimize tools like HubSpot, Zoho, and custom workflows to streamline your pipeline
                    and automate your operations.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      CRM setup, automation & optimization
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Workflow mapping & operations audits
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Toolstack alignment (HubSpot, Zoho, Airtable, Notion, etc.)
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Custom dashboards & reporting
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      SOPs & enablement frameworks
                    </div>
                  </div>
                  <p className="text-brand-gray-dark mt-4">
                    Ideal For: Operations leads, agency owners, founders drowning in manual processes.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-brand-black text-brand-black hover:bg-brand-yellow bg-transparent mt-6"
                    asChild
                  >
                    <Link href="/services/opssync">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
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
                <CardTitle className="text-2xl text-brand-black">Digital Marketing That Performs</CardTitle>
                <CardDescription className="text-lg font-medium text-brand-gray-dark">
                  Marketing isn't magic — it's math, messaging, and momentum. We combine sharp strategy with full-funnel
                  implementation to attract leads and convert them.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-brand-gray-dark">
                    Funnels, automation, and media campaigns that actually convert — fully aligned to your internal
                    systems and processes.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Marketing strategy & offer development
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Lead generation funnels & automation
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Email marketing & CRM sequences
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Website messaging & conversion design
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Paid media (optional partnerships)
                    </div>
                  </div>
                  <p className="text-brand-gray-dark mt-4">
                    Ideal For: B2B service providers, agencies, and experts ready to scale beyond referrals.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-brand-black text-brand-black hover:bg-brand-yellow bg-transparent mt-6"
                    asChild
                  >
                    <Link href="/services/partnr">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
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
                <CardTitle className="text-2xl text-brand-black">Applied AI for Real-World Productivity</CardTitle>
                <CardDescription className="text-lg font-medium text-brand-gray-dark">
                  Forget shiny demos. We implement AI tools where they drive true business value — automating the
                  repetitive, accelerating the strategic, and enhancing decision-making.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-brand-gray-dark">
                    From custom GPTs to AI video to intelligent automation — we build usable AI systems with measurable
                    business impact.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      AI workflow design & automation
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      ChatGPT + API use cases for ops/marketing
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Custom GPT & agent deployment
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Internal training & AI adoption strategies
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Prompt engineering & enablement assets
                    </div>
                  </div>
                  <p className="text-brand-gray-dark mt-4">
                    Ideal For: Companies wanting to integrate AI into operations and move beyond experimentation.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-brand-black text-brand-black hover:bg-brand-yellow bg-transparent mt-6"
                    asChild
                  >
                    <Link href="/services/ignite">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* OpsSync Detailed Section */}
      <section id="opssync-details" className="px-6 py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="mb-4">
                  <Image
                    src="/logos/opssync-logo.png"
                    alt="OpsSync"
                    width={200}
                    height={60}
                    className="w-[200px] h-auto"
                  />
                </div>
                <h2 className="text-4xl font-bold text-brand-black">
                  Stop Managing. Start <span className="text-brand-yellow">Systemizing</span>.
                </h2>
                <p className="text-xl text-brand-gray-dark leading-relaxed">
                  OpsSync transforms your business operations from reactive firefighting into proactive, scalable
                  systems that work without you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="h-6 w-6 text-brand-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-black mb-2">CRM & Pipeline Optimization</h3>
                    <p className="text-brand-gray-dark">
                      We implement and optimize HubSpot, Zoho, or custom CRM solutions that actually get used by your
                      team.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Workflow className="h-6 w-6 text-brand-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-black mb-2">Process Automation</h3>
                    <p className="text-brand-gray-dark">
                      Eliminate manual tasks with intelligent workflows that handle everything from lead routing to
                      client onboarding.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-brand-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-black mb-2">Performance Dashboards</h3>
                    <p className="text-brand-gray-dark">
                      Real-time visibility into what's working, what's not, and where your biggest opportunities lie.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="border-2 border-brand-black bg-brand-gray-light">
                <CardHeader>
                  <CardTitle className="text-brand-black">OpsSync Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-yellow mb-2">40hrs</div>
                      <p className="text-brand-gray-dark">Weekly time savings per team member</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-yellow mb-2">300%</div>
                      <p className="text-brand-gray-dark">Increase in lead conversion rates</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-yellow mb-2">90%</div>
                      <p className="text-brand-gray-dark">Reduction in manual data entry</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnr Detailed Section */}
      <section id="partnr-details" className="px-6 py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <Card className="border-2 border-brand-black bg-brand-white">
                <CardHeader>
                  <CardTitle className="text-brand-black">Partnr Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-yellow mb-2">ZAR 2M+</div>
                      <p className="text-brand-gray-dark">Additional annual revenue generated</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-yellow mb-2">450%</div>
                      <p className="text-brand-gray-dark">ROI on marketing spend</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-yellow mb-2">60%</div>
                      <p className="text-brand-gray-dark">Reduction in customer acquisition cost</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <div className="mb-4">
                  <Image
                    src="/logos/partnr-logo.png"
                    alt="Partnr"
                    width={200}
                    height={60}
                    className="w-[200px] h-auto"
                  />
                </div>
                <h2 className="text-4xl font-bold text-brand-black">
                  Marketing That <span className="text-brand-yellow">Actually Converts</span>.
                </h2>
                <p className="text-xl text-brand-gray-dark leading-relaxed">
                  Partnr builds marketing systems that integrate seamlessly with your operations, ensuring every lead
                  becomes a qualified opportunity.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-brand-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-black mb-2">Conversion-Focused Funnels</h3>
                    <p className="text-brand-gray-dark">
                      Landing pages, email sequences, and nurture campaigns designed to move prospects through your
                      sales process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-brand-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-black mb-2">Marketing Automation</h3>
                    <p className="text-brand-gray-dark">
                      Intelligent campaigns that nurture leads, score prospects, and trigger sales actions at the right
                      moment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-brand-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-black mb-2">Performance Media</h3>
                    <p className="text-brand-gray-dark">
                      Paid advertising that's tied to revenue metrics, not vanity metrics. Every rand spent is tracked
                      to ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ignite AI Detailed Section */}
      <section id="ignite-details" className="px-6 py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="mb-4">
                  <Image
                    src="/logos/ignite-logo.png"
                    alt="Ignite AI"
                    width={200}
                    height={60}
                    className="w-[200px] h-auto"
                  />
                </div>
                <h2 className="text-4xl font-bold text-brand-black">
                  AI That <span className="text-brand-yellow">Works</span>, Not Just Wows.
                </h2>
                <p className="text-xl text-brand-gray-dark leading-relaxed">
                  Ignite AI cuts through the hype to deliver practical AI solutions that solve real business problems
                  and generate measurable ROI.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="h-6 w-6 text-brand-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-black mb-2">Custom AI Development</h3>
                    <p className="text-brand-gray-dark">
                      Bespoke AI solutions tailored to your specific business needs, from chatbots to predictive
                      analytics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-brand-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-black mb-2">AI Content & Media</h3>
                    <p className="text-brand-gray-dark">
                      Automated content creation, AI video production, and intelligent copywriting that maintains your
                      brand voice.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="h-6 w-6 text-brand-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-black mb-2">Intelligent Automation</h3>
                    <p className="text-brand-gray-dark">
                      AI-powered workflows that make smart decisions, learn from patterns, and optimize themselves over
                      time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="border-2 border-brand-black bg-brand-gray-light">
                <CardHeader>
                  <CardTitle className="text-brand-black">Ignite AI Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-yellow mb-2">75%</div>
                      <p className="text-brand-gray-dark">Reduction in content creation time</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-yellow mb-2">24/7</div>
                      <p className="text-brand-gray-dark">Automated customer support coverage</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-yellow mb-2">500%</div>
                      <p className="text-brand-gray-dark">Increase in data processing speed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="px-6 py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-black mb-4">Clarity First. Systems Second. Scale Always.</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              Our proven methodology ensures every implementation delivers measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">1. Diagnose the bottlenecks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  We assess the gap between your goals and current infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">2. Design the system</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Strategy meets architecture — we map what needs to be built or reengineered.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">3. Deploy with precision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Implementation done right. Clean, documented, and measurable.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">4. Enable your team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark text-sm">
                  Training, SOPs, and adoption support — because the best system is the one your team uses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="px-6 py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-black mb-4">Investment & Engagement Models</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              Flexible engagement options designed to fit your business stage and growth objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-brand-black bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Project-Based</CardTitle>
                <CardDescription className="text-brand-gray-dark">
                  Fixed-scope implementations with clear deliverables
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-brand-black">ZAR 50K - 200K</div>
                  <p className="text-brand-gray-dark text-sm">Depending on scope and complexity</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Single service implementation
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      30-90 day timeline
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Training & handover included
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-yellow bg-brand-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-brand-yellow border-2 border-brand-black px-4 py-1 rounded-full">
                  <span className="text-brand-black font-semibold text-sm">Most Popular</span>
                </div>
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Growth Partnership</CardTitle>
                <CardDescription className="text-brand-gray-dark">
                  Ongoing optimization and multi-service integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-brand-black">ZAR 25K - 75K</div>
                  <p className="text-brand-gray-dark text-sm">Per month, 6-12 month commitment</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Multi-service integration
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Ongoing optimization
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Priority support
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black bg-brand-white">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Enterprise</CardTitle>
                <CardDescription className="text-brand-gray-dark">
                  Custom solutions for complex organizations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-brand-black">Custom</div>
                  <p className="text-brand-gray-dark text-sm">Tailored to your specific requirements</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Full-scale transformation
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Dedicated team
                    </div>
                    <div className="flex items-center text-sm text-brand-gray-dark">
                      <CheckCircle className="h-4 w-4 text-brand-yellow mr-2" />
                      Executive reporting
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="px-6 py-20 bg-brand-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-brand-white mb-4">Let's Architect Your Growth System</h2>
          <p className="text-xl text-brand-gray-light mb-8">
            Choose the area where you need the biggest lift — or bring us in across the stack.
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
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 border-2 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black bg-transparent"
              asChild
            >
              <Link href="/contact">
                <Target className="mr-2 h-5 w-5" />
                Get Custom Quote
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
