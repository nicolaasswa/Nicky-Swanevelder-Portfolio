"use client"

import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export function Navigation() {
  const pathname = usePathname()

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

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/services"
            className={`text-sm font-medium transition-colors uppercase tracking-wide ${
              pathname.startsWith("/services") ? "text-brand-yellow" : "text-brand-black hover:text-brand-yellow"
            }`}
          >
            Services
          </Link>
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

        {/* CTA Button & Mobile Nav */}
        <div className="flex items-center space-x-2">
          <Button
            className="hidden sm:inline-flex bg-brand-yellow hover:bg-yellow-400 text-brand-black font-semibold border-2 border-brand-black"
            asChild
          >
            <Link href="/contact">Get Started</Link>
          </Button>
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}
