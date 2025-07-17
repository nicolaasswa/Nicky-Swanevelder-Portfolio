"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-brand-black">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-xs bg-brand-white p-6">
        <div className="flex flex-col h-full">
          <div className="mb-8">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <Image
                src="/logos/blackrocket-logo.png"
                alt="Black Rocket Consult"
                width={200}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <nav className="flex flex-col space-y-4 text-lg">
            <Link
              href="/services"
              className={`font-medium transition-colors ${
                pathname.startsWith("/services") ? "text-brand-yellow" : "text-brand-black hover:text-brand-yellow"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors ${
                pathname === "/about" ? "text-brand-yellow" : "text-brand-black hover:text-brand-yellow"
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors ${
                pathname === "/contact" ? "text-brand-yellow" : "text-brand-black hover:text-brand-yellow"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="mt-auto">
            <Button
              className="w-full bg-brand-yellow hover:bg-yellow-400 text-brand-black font-semibold border-2 border-brand-black"
              asChild
            >
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
