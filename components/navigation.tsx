"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement | null>, targetId: string) => {
    // Only handle smooth scroll if we're on the home page
    if (pathname === "/") {
      e?.preventDefault()
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
  }

  return (
    <header className="w-full px-6 py-4 bg-brand-white border-b-2 border-brand-black fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logos/blackrocket-logo.png"
              alt="Black Rocket Consult"
              width={200}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {pathname === "/" ? (
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, "services")}
              className="text-sm font-medium text-brand-black hover:text-brand-yellow transition-colors uppercase tracking-wide"
            >
              Services
            </a>
          ) : (
            <Link
              href="/services"
              className={`text-sm font-medium transition-colors uppercase tracking-wide ${
                pathname === "/services" ? "text-brand-yellow" : "text-brand-black hover:text-brand-yellow"
              }`}
            >
              Services
            </Link>
          )}
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors uppercase tracking-wide ${
              pathname === "/about" ? "text-brand-yellow" : "text-brand-black hover:text-brand-yellow"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors uppercase tracking-wide ${
              pathname === "/contact" ? "text-brand-yellow" : "text-brand-black hover:text-brand-yellow"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Button
            className="bg-brand-yellow hover:bg-yellow-400 text-brand-black font-semibold border-2 border-brand-black"
            onClick={() => {
              if (pathname === "/contact") {
                const element = document.getElementById("contact-form")
                element?.scrollIntoView({ behavior: "smooth" })
              } else if (pathname === "/") {
                handleSmoothScroll(null, "contact")
              } else {
                window.location.href = "/contact"
              }
            }}
          >
            Get Started
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden text-brand-black">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>
    </header>
  )
}
