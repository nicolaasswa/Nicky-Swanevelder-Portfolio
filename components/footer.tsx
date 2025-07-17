import Image from "next/image"
import Link from "next/link"
import { Users, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="px-6 py-12 bg-brand-gray-dark text-brand-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/logos/blackrocket-logo-footer.png"
                  alt="Black Rocket Consult"
                  width={200}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
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
                className="flex items-center text-brand-gray-light hover:text-brand-yellow transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                hello@blackrocket.co.za
              </a>
              <a
                href="tel:+27726992437"
                className="flex items-center text-brand-gray-light hover:text-brand-yellow transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                +27 72 699 2437
              </a>
              <a
                href="https://www.linkedin.com/company/black-rocket-consult/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-brand-gray-light hover:text-brand-yellow transition-colors"
              >
                <Users className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-gray-light pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-gray-light text-sm mb-4 md:mb-0">
            © 2024 Black Rocket Consult. All rights reserved.
          </p>
          <Link href="/privacy" className="text-brand-gray-light hover:text-brand-yellow text-sm transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
