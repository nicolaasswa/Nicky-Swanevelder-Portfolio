"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { BackToTop } from "@/components/back-to-top"
import Image from "next/image"
import { ArrowRight, Mail, Phone, Clock, MapPin, Calendar, MessageSquare, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement("script")
    script.charset = "utf-8"
    script.type = "text/javascript"
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js"
    document.body.appendChild(script)

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "145549190",
          formId: "ab6be9b7-6ff7-448e-8928-8a51ea2a0dd0",
          region: "eu1",
          target: "#hubspot-form-container",
        })
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-brand-white">
      <Navigation />

      <section className="px-6 py-20 lg:py-32 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                Let's Build Your <span className="text-brand-yellow">Growth Engine</span>
              </h1>
              <p className="text-xl text-brand-gray-dark leading-relaxed max-w-4xl mx-auto">
                Ready to systemize your operations, supercharge your marketing, or implement AI that actually works?
                Let's start the conversation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-yellow hover:bg-yellow-400 text-brand-black font-semibold px-8 py-4 border-2 border-brand-black"
                onClick={() => {
                  const element = document.getElementById("contact-form")
                  element?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Send Us a Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 border-2 border-brand-black text-brand-black hover:bg-brand-gray-light bg-transparent"
                onClick={() => (window.location.href = "tel:+27726992437")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-black mb-4">Get In Touch</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              Multiple ways to connect with our team. Choose what works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark mb-4">Send us a detailed message</p>
                <a
                  href="mailto:hello@blackrocket.co.za"
                  className="text-brand-yellow font-semibold hover:text-yellow-600 transition-colors"
                >
                  hello@blackrocket.co.za
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Call or WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark mb-4">Speak directly with our team</p>
                <a
                  href="tel:+27726992437"
                  className="text-brand-yellow font-semibold hover:text-yellow-600 transition-colors"
                >
                  +27 72 699 2437
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark mb-2">Monday to Friday</p>
                <p className="text-brand-yellow font-semibold">9:00 AM – 5:00 PM</p>
                <p className="text-brand-gray-dark text-sm mt-2">SAST (UTC+2)</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark mb-2">Pretoria, South Africa</p>
                <p className="text-brand-yellow font-semibold text-sm">
                  210 Amarand Avenue
                  <br />
                  Pegasus Menlyn
                  <br />
                  Pretoria 0181
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact-form" className="px-6 py-20 bg-brand-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-black mb-4">Connect With Our Growth Experts</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              Fill out the form below and let's start a conversation about systemizing your growth.
            </p>
          </div>

          <Card className="border-2 border-brand-black bg-brand-white">
            <CardContent className="p-8">
              <div id="hubspot-form-container"></div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-20 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-black mb-4">What Happens Next?</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              Our proven process ensures you get the clarity and direction you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">1. We Review Your Submission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark">
                  Within 24 hours, we'll review your message and prepare a tailored response based on your specific
                  challenges and goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">2. Discovery Call</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark">
                  We'll schedule a 30-45 minute discovery call to dive deeper into your business, understand your
                  current systems, and identify growth opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black bg-brand-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-yellow border-2 border-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-8 w-8 text-brand-black" />
                </div>
                <CardTitle className="text-brand-black">3. Custom Proposal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray-dark">
                  Based on our conversation, we'll create a custom proposal outlining exactly how we can help you
                  systemize and scale your operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-black mb-4">Prefer a Different Approach?</h2>
            <p className="text-xl text-brand-gray-dark max-w-3xl mx-auto">
              We're flexible. Choose the communication method that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-brand-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-brand-black mb-2">Direct Call or WhatsApp</h3>
                    <p className="text-brand-gray-dark mb-4">
                      Sometimes a quick conversation is all you need. Call or WhatsApp us directly for immediate
                      assistance.
                    </p>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        className="w-full border-2 border-brand-black text-brand-black hover:bg-brand-yellow bg-transparent"
                        onClick={() => (window.location.href = "tel:+27726992437")}
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Call +27 72 699 2437
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-brand-black text-brand-black hover:bg-brand-yellow bg-transparent"
                        onClick={() => (window.location.href = "https://wa.me/27726992437")}
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        WhatsApp Us
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-brand-black hover:border-brand-yellow transition-all duration-300 bg-brand-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-yellow border-2 border-brand-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-brand-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-brand-black mb-2">Email Us Directly</h3>
                    <p className="text-brand-gray-dark mb-4">
                      Prefer email? Send us a detailed message about your business challenges and we'll respond with
                      insights and next steps.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-brand-black text-brand-black hover:bg-brand-yellow bg-transparent"
                      onClick={() => (window.location.href = "mailto:hello@blackrocket.co.za")}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email hello@blackrocket.co.za
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
