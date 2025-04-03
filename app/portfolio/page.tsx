"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

// Import projects data
import projectsData from "@/data/projects.json"

export default function PortfolioPage() {
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

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
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#FFFFFF] text-shadow-medium drop-shadow-sm mb-6 group hero-headline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Selected Work
                <span className="block w-0 h-[2px] bg-[#EDC87C] mx-auto mt-4 group-hover:w-40 transition-all duration-700"></span>
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
                A glimpse into our most intricate restoration and replication projects.
              </motion.p>
            </motion.div>
          </div>

          {/* Diagonal separator */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <div className="diagonal-separator-light"></div>
          </div>
        </section>

        {/* Project Grid Section */}
        <section className="py-32 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.slug}`}
                  className="group block transition-all duration-500 relative"
                >
                  <div className="overflow-hidden relative">
                    {/* Project Image */}
                    <div className="relative h-[400px] overflow-hidden">
                      <Image
                        src={project.mainImage || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E]/80 via-[#0F1C2E]/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90"></div>
                    </div>

                    {/* Gold border that appears on hover */}
                    <div className="absolute inset-0 border-2 border-[#EDC87C]/0 group-hover:border-[#EDC87C]/40 transition-all duration-700 pointer-events-none"></div>

                    {/* Project Info */}
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <span
                        className="text-xs uppercase tracking-[0.2em] text-[#EDC87C] font-light block mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ transitionDelay: "100ms" }}
                      >
                        {project.category}
                      </span>
                      <h2 className="font-serif text-2xl font-light text-white mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        {project.title}
                      </h2>
                      <p
                        className="text-white/70 font-light text-sm max-w-md leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ transitionDelay: "200ms" }}
                      >
                        {project.shortDescription.substring(0, 100)}...
                      </p>
                      <div className="mt-4 overflow-hidden h-[1px]">
                        <div
                          className="w-12 h-[1px] bg-[#EDC87C] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"
                          style={{ transitionDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

