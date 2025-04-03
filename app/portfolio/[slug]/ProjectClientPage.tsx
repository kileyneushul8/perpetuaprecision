"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import BackToPortfolio from "@/components/back-to-portfolio"
import { notFound } from "next/navigation"

// Import projects data
import projectsData from "@/data/projects.json"

interface ProjectParams {
  params: {
    slug: string
  }
}

export default function ProjectClientPage({ params }: ProjectParams) {
  const { slug } = params
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  // Find the project with the matching slug
  const project = projectsData.find((p) => p.slug === slug)

  // If project not found, return 404
  if (!project) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <BackToPortfolio />

        {/* Hero Section */}
        <section ref={heroRef} className="relative py-20 md:py-28 overflow-hidden pt-16">
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

          <div className="container relative z-20">
            <motion.div
              className="max-w-3xl space-y-6 p-6 md:p-8 hero-text-container md:bg-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.span
                className="text-xs uppercase tracking-widest text-[#EDC87C] mb-4 block font-medium letter-spacing-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {project.category}
              </motion.span>

              <motion.h1
                className="hero-headline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="text-5xl md:text-6xl font-normal tracking-tight text-[#FFFFFF] text-shadow-medium drop-shadow-sm">
                  {project.title}
                </span>
              </motion.h1>

              <motion.p
                className="text-lg text-[#FDFDFD] font-light tracking-wide max-w-xl leading-relaxed text-shadow-light hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {project.shortDescription}
              </motion.p>
            </motion.div>
          </div>

          {/* Diagonal separator */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <div className="diagonal-separator-light"></div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Left Column - Description and Story */}
              <div>
                <div className="mb-12">
                  <span className="text-xs uppercase tracking-widest text-[#A7C7E7] mb-4 block font-light">
                    The Project
                  </span>
                  <h2 className="text-3xl font-light tracking-tight sm:text-4xl text-[#444444] mb-6">Overview</h2>
                  <div className="w-20 h-px bg-[#EDC87C] mb-8"></div>
                  <div className="prose prose-slate max-w-none">
                    {project.fullDescription.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="text-[#444444] font-light leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  <div className="p-6 bg-[#F5F7F9] border-l-2 border-[#A7C7E7]">
                    <h3 className="text-xl font-medium text-[#444444] mb-3">The Challenge</h3>
                    <p className="text-[#444444] font-light leading-relaxed">{project.challenge}</p>
                  </div>

                  <div className="p-6 bg-[#F5F7F9] border-l-2 border-[#EDC87C]">
                    <h3 className="text-xl font-medium text-[#444444] mb-3">Our Solution</h3>
                    <p className="text-[#444444] font-light leading-relaxed">{project.solution}</p>
                  </div>

                  <div className="p-6 bg-[#F5F7F9] border-l-2 border-[#EDC87C]">
                    <h3 className="text-xl font-medium text-[#444444] mb-3">The Result</h3>
                    <p className="text-[#444444] font-light leading-relaxed">{project.result}</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Gallery and Specs */}
              <div>
                <div className="mb-12">
                  <span className="text-xs uppercase tracking-widest text-[#A7C7E7] mb-4 block font-light">
                    Gallery
                  </span>
                  <h2 className="text-3xl font-light tracking-tight sm:text-4xl text-[#444444] mb-6">
                    Project Details
                  </h2>
                  <div className="w-20 h-px bg-[#EDC87C] mb-8"></div>

                  <div className="space-y-6">
                    <div className="relative h-[400px] w-full overflow-hidden rounded-sm shadow-lg">
                      <Image
                        src={project.mainImage || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {project.galleryImages.slice(0, 4).map((image, index) => (
                        <div key={index} className="relative h-[200px] w-full overflow-hidden rounded-sm shadow-md">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${project.title} Detail ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#F5F7F9] border-l-2 border-[#EDC87C]">
                  <h3 className="text-xl font-medium text-[#444444] mb-4">Technical Specifications</h3>
                  <ul className="space-y-2">
                    {project.specs.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#EDC87C] mr-2">•</span>
                        <span className="text-[#444444] font-light">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

