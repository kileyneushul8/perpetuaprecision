"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ProjectCardProps {
  id: number
  title: string
  category: string
  description: string
  image: string
  slug: string
}

export default function ProjectCard({ id, title, category, description, image, slug }: ProjectCardProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden mb-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C2B39]/50 group-hover:to-[#1C2B39]/60 transition-colors duration-500 z-10" />
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 p-6 z-20">
          <span className="text-xs uppercase tracking-widest text-[#EDC87C] mb-2 block">{category}</span>
          <h3 className="text-xl font-medium text-white">{title}</h3>
        </div>
      </div>
      <p className="text-[#444444] font-light">{description}</p>
      <Link
        href={`/portfolio/${slug}`}
        className="inline-flex items-center mt-4 text-[#A9C4D4] hover:text-[#EDC87C] transition-colors group-hover:font-medium relative overflow-hidden"
        scroll={false} // Remove scroll={true} to use our global scroll behavior
      >
        <span className="relative z-10">View Details</span>
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#EDC87C] group-hover:w-full transition-all duration-300"></span>
        <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  )
}

