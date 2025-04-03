"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ServicesPage() {
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-32 md:py-40 overflow-hidden pt-16">
          {/* Gradient background with parallax effect */}
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

          <div className="container relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div
              className="hero-text-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.span
                className="text-xs uppercase tracking-[0.4em] text-[#EDC87C] font-medium block mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                PERPETUA ATELIER
              </motion.span>

              <motion.h1
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight mb-6 hero-headline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="text-[#FFFFFF] text-shadow-medium drop-shadow-sm">Artisanal </span>
                <span className="text-[#EDC87C] text-shadow-light drop-shadow-sm">Restoration</span>
              </motion.h1>

              <motion.div
                className="w-20 h-px bg-[#EDC87C]/30 mx-auto mb-10"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 80 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              ></motion.div>

              <motion.p
                className="text-lg text-[#FDFDFD] font-light tracking-wide max-w-3xl mx-auto leading-relaxed text-shadow-light hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                At PERPETUA, we offer a suite of end-to-end services for exquisite replication — from industrial CT
                scanning to 4D printing and white-glove delivery.
              </motion.p>
            </motion.div>
          </div>

          {/* Diagonal separator */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <div className="diagonal-separator-light"></div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Industrial CT Scanning */}
              <div className="group">
                <Link
                  href="/services/ct-scanning"
                  className="block p-10 bg-white border border-[#E5E7EB] rounded-sm shadow-sm transition-all duration-500 hover:shadow-md relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#EDC87C]/0 via-[#EDC87C] to-[#EDC87C]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F9FAFB] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-[1px] bg-[#EDC87C]/50 mb-8"></div>
                    <h3 className="font-serif text-2xl font-light text-[#444444] mb-4">Industrial CT Scanning</h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Non-destructive digital capture with micron-level precision, creating perfect digital twins of
                      irreplaceable artifacts.
                    </p>
                  </div>
                </Link>
              </div>

              {/* 4D Printing Technology */}
              <div className="group">
                <Link
                  href="/services/4d-printing"
                  className="block p-10 bg-white border border-[#E5E7EB] rounded-sm shadow-sm transition-all duration-500 hover:shadow-md relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#EDC87C]/0 via-[#EDC87C] to-[#EDC87C]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F9FAFB] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-[1px] bg-[#EDC87C]/50 mb-8"></div>
                    <h3 className="font-serif text-2xl font-light text-[#444444] mb-4">4D Printing Technology</h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Advanced manufacturing that recreates not just form, but function and material behavior over time.
                    </p>
                  </div>
                </Link>
              </div>

              {/* White Glove Delivery */}
              <div className="group">
                <Link
                  href="/services/white-glove"
                  className="block p-10 bg-white border border-[#E5E7EB] rounded-sm shadow-sm transition-all duration-500 hover:shadow-md relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#EDC87C]/0 via-[#EDC87C] to-[#EDC87C]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F9FAFB] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-[1px] bg-[#EDC87C]/50 mb-8"></div>
                    <h3 className="font-serif text-2xl font-light text-[#444444] mb-4">White Glove Delivery</h3>
                    <p className="text-[#6B7280] font-light leading-relaxed">
                      Concierge-level care from initial consultation through final installation, ensuring perfection at
                      every step.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details Sections */}
        <section id="ct-scanning" className="py-32 bg-[#F9FAFB]">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#A7C7E7] font-light block mb-6">
                  Core Service
                </span>
                <h2 className="font-serif text-4xl font-light tracking-tight text-[#444444] mb-6">
                  Industrial CT Scanning
                </h2>
                <div className="w-20 h-px bg-[#EDC87C] mb-10"></div>
                <p className="text-[#4B5563] font-light leading-relaxed mb-8">
                  Our industrial CT scanners capture every detail of your original part with micron-level accuracy,
                  creating a perfect digital model that preserves even the most intricate features.
                </p>
                <p className="text-[#4B5563] font-light leading-relaxed mb-8">
                  This non-destructive process allows us to analyze both external surfaces and internal structures,
                  revealing hidden features and material variations that would be impossible to detect through
                  conventional methods.
                </p>
                <div className="p-6 bg-white border-l-2 border-[#EDC87C] shadow-sm">
                  <h4 className="text-lg font-medium text-[#444444] mb-2">Technical Specifications</h4>
                  <ul className="space-y-2 text-[#4B5563] font-light">
                    <li>Resolution: Down to 5 microns (0.005mm)</li>
                    <li>Maximum part size: Up to 1m × 1m × 1m</li>
                    <li>Material compatibility: All metals, composites, polymers</li>
                    <li>Output formats: STL, STEP, IGES, and proprietary formats</li>
                  </ul>
                </div>
              </div>
              <div className="relative h-[500px] bg-[#E5E7EB] rounded-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-[#9CA3AF] font-light">
                  CT Scanning Image
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="4d-printing" className="py-32 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative h-[500px] bg-[#E5E7EB] rounded-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-[#9CA3AF] font-light">
                  4D Printing Image
                </div>
              </div>
              <div className="order-1 md:order-2">
                <span className="text-xs uppercase tracking-[0.3em] text-[#A7C7E7] font-light block mb-6">
                  Advanced Manufacturing
                </span>
                <h2 className="font-serif text-4xl font-light tracking-tight text-[#444444] mb-6">
                  4D Printing Technology
                </h2>
                <div className="w-20 h-px bg-[#EDC87C] mb-10"></div>
                <p className="text-[#4B5563] font-light leading-relaxed mb-8">
                  Our proprietary 4D printing technology goes beyond traditional manufacturing, creating parts that not
                  only match the original's form but also its functional properties and material behavior over time.
                </p>
                <p className="text-[#4B5563] font-light leading-relaxed mb-8">
                  The "4D" refers to the fourth dimension: time. Our parts can adapt to environmental conditions, just
                  like the originals, ensuring authentic performance in all situations.
                </p>
                <div className="p-6 bg-white border-l-2 border-[#EDC87C] shadow-sm">
                  <h4 className="text-lg font-medium text-[#444444] mb-2">Key Capabilities</h4>
                  <ul className="space-y-2 text-[#4B5563] font-light">
                    <li>Multi-material integration in a single process</li>
                    <li>Programmable material properties and behaviors</li>
                    <li>Precise replication of complex geometries</li>
                    <li>Optional functional improvements while maintaining aesthetics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="white-glove" className="py-32 bg-[#F9FAFB]">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#A7C7E7] font-light block mb-6">
                  Exclusive Experience
                </span>
                <h2 className="font-serif text-4xl font-light tracking-tight text-[#444444] mb-6">
                  White Glove Delivery
                </h2>
                <div className="w-20 h-px bg-[#EDC87C] mb-10"></div>
                <p className="text-[#4B5563] font-light leading-relaxed mb-8">
                  From initial consultation to final installation, our white glove service ensures that every aspect of
                  your experience with PERPETUA meets the highest standards of luxury and attention to detail.
                </p>
                <p className="text-[#4B5563] font-light leading-relaxed mb-8">
                  Your valuable originals are transported in custom-designed, climate-controlled cases with GPS tracking
                  and security protocols. Our specialists can travel worldwide to ensure proper installation and
                  integration of your replicated parts.
                </p>
                <div className="p-6 bg-white border-l-2 border-[#EDC87C] shadow-sm">
                  <h4 className="text-lg font-medium text-[#444444] mb-2">Service Elements</h4>
                  <ul className="space-y-2 text-[#4B5563] font-light">
                    <li>Private consultation at our atelier or your location</li>
                    <li>Secure, climate-controlled transportation</li>
                    <li>Expert installation by our specialists</li>
                    <li>Comprehensive documentation and care instructions</li>
                  </ul>
                </div>
              </div>
              <div className="relative h-[500px] bg-[#E5E7EB] rounded-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-[#9CA3AF] font-light">
                  White Glove Service Image
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

