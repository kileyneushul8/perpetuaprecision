"use client"

import { useRef } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

// Import services data
import servicesData from "@/data/services.json"

interface ServiceParams {
  params: {
    slug: string
  }
}

export default function ServiceDetailPageClient({ params }: ServiceParams) {
  const { slug } = params
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  // Find the service with the matching slug
  const service = servicesData.find((s) => s.slug === slug)

  // If service not found, return 404
  if (!service) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section with integrated back navigation */}
        <section ref={heroRef} className="relative py-32 md:py-40 overflow-hidden pt-20">
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

          <div className="container relative z-10 max-w-5xl mx-auto px-4">
            {/* Elegant back navigation */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Link
                href="/services"
                className="inline-flex items-center text-white hover:text-[#EDC87C] transition-colors duration-300 group"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm mr-3 group-hover:bg-[#EDC87C]/20 transition-all duration-300">
                  <ChevronLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                </div>
                <span className="text-sm tracking-wide font-light relative overflow-hidden">
                  <span className="relative z-10">Return to Services</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#EDC87C] group-hover:w-full transition-all duration-500"></span>
                </span>
              </Link>
            </motion.div>

            <motion.div
              className="text-center md:text-left"
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
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#FFFFFF] text-shadow-medium drop-shadow-sm mb-6 hero-headline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {service.title}
              </motion.h1>

              <motion.div
                className="w-20 h-px bg-[#EDC87C]/30 mx-auto md:mx-0 mb-10"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 80 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              ></motion.div>

              <motion.p
                className="text-lg text-[#FDFDFD] font-light tracking-wide max-w-3xl mx-auto md:mx-0 leading-relaxed text-shadow-light hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                dangerouslySetInnerHTML={{ __html: service.subtitle }}
              ></motion.p>
            </motion.div>
          </div>

          {/* Diagonal separator */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <div className="diagonal-separator-light"></div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 bg-white">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-4">
                <span className="text-xs uppercase tracking-[0.3em] text-[#1C2B39] font-medium block mb-6">
                  OVERVIEW
                </span>
                <div className="w-20 h-px bg-[#EDC87C] mb-10"></div>
              </div>

              <div className="md:col-span-8">
                <div className="prose prose-lg max-w-none">
                  {service.overview.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-[#4B5563] font-light leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Section - Compact Grid Layout */}
        <section className="py-24 bg-[#F9FAFB]">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-12 gap-16 mb-12">
              <div className="md:col-span-4">
                <span className="text-xs uppercase tracking-[0.3em] text-[#A7C7E7] font-light block mb-6">
                  SPECIFICATIONS
                </span>
                <div className="w-20 h-px bg-[#EDC87C] mb-10"></div>
              </div>

              <div className="md:col-span-8">
                <p className="text-[#4B5563] font-light leading-relaxed">
                  Our {service.title.toLowerCase()} service is defined by exacting standards and meticulous attention to
                  detail. Each specification has been refined through years of experience and technological advancement.
                </p>
              </div>
            </div>

            {/* Compact Grid Layout for Specifications */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {service.specifications.map((spec, index) => (
                <div key={index} className="bg-white p-6 shadow-sm border-l-2 border-[#EDC87C] h-full flex flex-col">
                  <h3 className="text-lg font-medium text-[#1C2B39] mb-3">{spec.title}</h3>
                  <p className="text-[#4B5563] font-light leading-relaxed text-sm flex-grow">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with light blue background */}
        <section className="py-24 relative overflow-hidden">
          {/* Light blue background similar to hero section */}
          <div className="absolute inset-0 bg-[#93B1C7] z-0"></div>

          {/* Subtle texture overlay */}
          <div className="absolute inset-0 bg-paper-texture opacity-[0.08] z-0"></div>

          {/* Subtle radial gradient for depth */}
          <div className="absolute inset-0 bg-radial-gradient opacity-30 z-0"></div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 floating-particles-light z-0"></div>

          <div className="container relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-white text-shadow-light mb-6">
              Experience Our {service.title}
            </h2>
            <p className="text-white/90 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              We invite you to discover how our {service.title.toLowerCase()} service can preserve and enhance your most
              valuable artifacts.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-none bg-transparent border border-[#EDC87C] px-10 text-sm font-light tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#EDC87C]/20 focus-visible:outline-none"
            >
              SCHEDULE A CONSULTATION
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

