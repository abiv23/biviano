"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // If not visible, don't render anything to avoid taking up space
  if (!isVisible) {
    return null;
  }

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 animate-fade-in-down backdrop-blur-md bg-white/10 dark:bg-gray-900/30 border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span 
              className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent" 
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              BIV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 cursor-auto">
            <Link 
                href="/about" 
                className="text-white hover:text-indigo-300 transition-colors text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
                >
                About
            </Link>
            <Link 
                href="/web-design" 
                className="text-white hover:text-indigo-300 transition-colors text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
                >
                Design
            </Link>
            <Link 
                href="/seo" 
                className="text-white hover:text-indigo-300 transition-colors text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
                >
                SEO
            </Link>
            <Link 
                href="/contact" 
                className="text-white hover:text-indigo-300 transition-colors text-sm cursor-pointer"
                style={{ fontFamily: "var(--font-inter)" }}
                >
                <Button 
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white cursor-pointer"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Contact
                </Button>
            </Link>

          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 space-y-4 backdrop-blur-md bg-white/20 dark:bg-gray-900/50">
          {["Services", "Work", "About", "Blog", "Contact"].map((item, i) => (
            <Link 
              key={i}
              href="#" 
              className="block text-white hover:text-indigo-300 transition-colors py-2 text-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {item}
            </Link>
          ))}
          <Button 
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header