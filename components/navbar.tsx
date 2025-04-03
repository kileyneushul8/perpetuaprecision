"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Set initial state
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/process", label: "Process" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? "bg-[#1C2B39]/80 shadow-lg" : "bg-[#93B1C7]"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-bold text-xl tracking-wider uppercase"
            style={{
              color: "#EDC87C",
              textShadow: "0 0 10px rgba(237, 200, 124, 0.3), 0px 1px 3px rgba(0, 0, 0, 0.2)",
            }}
          >
            Perpetua
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors relative group ${
                pathname === link.href ? "text-[#EDC87C]" : "text-[#FFFFFF]"
              }`}
              style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.3)" }}
            >
              {link.label}
              {pathname === link.href ? (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#EDC87C]"></span>
              ) : (
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#EDC87C] transition-all duration-300 group-hover:w-full"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#FFFFFF]"
          style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.3)" }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-sm" style={{ background: "rgba(28, 43, 57, 0.9)" }}>
          <div className="container py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm font-medium tracking-wide transition-colors ${
                  pathname === link.href ? "text-[#EDC87C] border-l-2 border-[#EDC87C] pl-2" : "text-[#FFFFFF]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

