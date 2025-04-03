"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const secondSectionRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSecondSection = () => {
    secondSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center pt-16">
        {/* Background gradient with parallax effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#93B1C7] via-[#93B1C7] to-[#F9F6F1] z-0"
          style={{ y }}
        />

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-paper-texture opacity-[0.08] z-0"></div>

        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-radial-gradient opacity-30 z-0"></div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 floating-particles-light z-0"></div>

        {/* Hero content */}
        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto space-y-8 text-center hero-text-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block text-xs uppercase tracking-[0.4em] text-[#EDC87C] font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              PERPETUA ATELIER
            </motion.span>

            <motion.h1
              className="font-serif text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-[#FFFFFF] block mb-2 drop-shadow-sm text-shadow-medium">Timeless</span>
              <span className="text-[#EDC87C] block drop-shadow-sm text-shadow-light">Preservation</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-[#FDFDFD] font-light tracking-wide max-w-2xl mx-auto leading-relaxed text-shadow-light hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Where heritage craftsmanship meets cutting-edge innovation, preserving the irreplaceable for generations.
            </motion.p>

            <motion.div
              className="pt-10 hero-cta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link
                href="/services"
                className="group inline-flex h-14 items-center justify-center rounded-none bg-transparent border border-[#EDC87C] px-10 text-sm font-medium tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#EDC87C] hover:text-[#1C2B39] focus-visible:outline-none relative overflow-hidden"
              >
                <span className="relative z-10">EXPLORE OUR SERVICES</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#EDC87C] group-hover:w-full transition-all duration-700"></span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            onClick={scrollToSecondSection}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center cursor-pointer group"
            aria-label="Scroll down"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{ opacity }}
          >
            <ChevronDown className="h-6 w-6 text-white/60 animate-bounce group-hover:text-white/80 transition-colors duration-300" />
          </motion.button>
        </div>

        {/* Diagonal separator */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <div className="diagonal-separator-light"></div>
        </div>
      </section>

      {/* Second Section */}
      <section ref={secondSectionRef} className="py-32 md:py-40 bg-white relative">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A7C7E7] font-light block mb-6">
              Our Philosophy
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-[#444444] mb-10">
              The Art of Preservation
            </h2>
            <div className="w-20 h-px bg-[#EDC87C] mx-auto mb-10"></div>
            <p className="text-lg text-[#4B5563] font-light max-w-3xl mx-auto leading-relaxed">
              PERPETUA stands at the intersection of heritage preservation and cutting-edge innovation. We employ
              proprietary technologies to recreate what was once considered irreplaceable, ensuring that legacies endure
              for generations to come.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div
              className="text-center opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="mb-6 h-[1px] w-12 bg-[#EDC87C]/50 mx-auto"></div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#444444] font-medium mb-4">
                Industrial CT Scanning
              </h3>
              <p className="text-[#4B5563] font-light leading-relaxed">
                Capturing every detail with micron-level precision, creating perfect digital twins of irreplaceable
                artifacts.
              </p>
            </div>

            <div
              className="text-center opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="mb-6 h-[1px] w-12 bg-[#EDC87C]/50 mx-auto"></div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#444444] font-medium mb-4">
                4D Printing Technology
              </h3>
              <p className="text-[#4B5563] font-light leading-relaxed">
                Advanced manufacturing that recreates not just form, but function and material behavior over time.
              </p>
            </div>

            <div
              className="text-center opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="mb-6 h-[1px] w-12 bg-[#EDC87C]/50 mx-auto"></div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#444444] font-medium mb-4">
                White Glove Service
              </h3>
              <p className="text-[#4B5563] font-light leading-relaxed">
                Concierge-level care from initial consultation through final installation, ensuring perfection at every
                step.
              </p>
            </div>
          </div>

          <div className="mt-32 text-center">
            <Link
              href="/services"
              className="group inline-flex h-14 items-center justify-center rounded-none bg-transparent border border-[#EDC87C] px-10 text-sm font-light tracking-[0.2em] text-[#444444] transition-all duration-500 hover:bg-[#EDC87C]/5 focus-visible:outline-none relative overflow-hidden"
            >
              <span className="relative z-10">DISCOVER OUR SERVICES</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#EDC87C] group-hover:w-full transition-all duration-700"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-32 md:py-40 bg-[#F9FAFB] relative">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="text-xs uppercase tracking-[0.3em] text-[#A7C7E7] font-light block mb-6">
                Featured Project
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-[#444444] mb-6">
                Vintage Aston Martin DB5
              </h2>
              <div className="w-20 h-px bg-[#EDC87C] mb-10"></div>
              <p className="text-lg text-[#4B5563] font-light leading-relaxed mb-10">
                When a renowned collector approached us with a seemingly impossible challenge—to recreate the valve
                covers and intake manifold for his classic Aston Martin DB5—we embraced the opportunity. These
                components, no longer in production and virtually unobtainable, were essential to completing the
                restoration of one of the world's most valuable automobiles.
              </p>
              <Link
                href="/portfolio/aston-martin-db5-engine-components"
                className="group inline-flex items-center text-[#444444] hover:text-[#EDC87C] transition-colors relative overflow-hidden"
              >
                <span className="relative z-10 text-sm tracking-[0.2em] uppercase font-light">View Project</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#EDC87C] group-hover:w-full transition-all duration-500"></span>
              </Link>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] md:h-[600px]">
              <Image
                src="/placeholder.svg?height=1200&width=800&text=Aston+Martin"
                alt="Aston Martin DB5 Engine Components"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* No footer content here - the global Footer component will handle this */}
    </main>
  )
}

