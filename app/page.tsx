"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import AnimatedHero from "@/components/AnimatedHero"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const secondSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSecondSection = () => {
    secondSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  if (!mounted) {
    return null
  }

  return (
    <main className="flex flex-col min-h-screen">
      <AnimatedHero onScrollToSection={scrollToSecondSection} />

      {/* Services Section */}
      <section className="py-32 bg-white">
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
      </section>
    </main>
  )
}

