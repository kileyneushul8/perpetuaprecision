"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useRef } from "react"

interface AnimatedHeroProps {
  onScrollToSection: () => void
}

export default function AnimatedHero({ onScrollToSection }: AnimatedHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
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
            <a
              href="/services"
              className="group inline-flex h-14 items-center justify-center rounded-none bg-transparent border border-[#EDC87C] px-10 text-sm font-medium tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#EDC87C] hover:text-[#1C2B39] focus-visible:outline-none relative overflow-hidden"
            >
              <span className="relative z-10">EXPLORE OUR SERVICES</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#EDC87C] group-hover:w-full transition-all duration-700"></span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={onScrollToSection}
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
  )
} 