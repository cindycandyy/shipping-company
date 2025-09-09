"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Anchor } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Anchor className="h-8 w-8 text-accent" />
            <span className="font-serif font-bold text-xl text-foreground">OceanLink Maritime</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/services" className="text-foreground hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="/fleet" className="text-foreground hover:text-accent transition-colors">
              Fleet
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Get Quote</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <Link href="/" className="block px-3 py-2 text-foreground hover:text-accent">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-foreground hover:text-accent">
                About
              </Link>
              <Link href="/services" className="block px-3 py-2 text-foreground hover:text-accent">
                Services
              </Link>
              <Link href="/fleet" className="block px-3 py-2 text-foreground hover:text-accent">
                Fleet
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-foreground hover:text-accent">
                Contact
              </Link>
              <Button className="w-full mt-2 bg-accent hover:bg-accent/90 text-accent-foreground">Get Quote</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
