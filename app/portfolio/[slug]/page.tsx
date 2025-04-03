import type { Metadata } from "next"

// Import projects data
import projectsData from "@/data/projects.json"
import ProjectClientPage from "./ProjectClientPage"

interface ProjectParams {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectParams): Promise<Metadata> {
  const { slug } = params
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found | PRIMA Luxury",
    }
  }

  return {
    title: `${project.title} | PRIMA Luxury`,
    description: project.shortDescription,
  }
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: ProjectParams) {
  return <ProjectClientPage params={params} />
}

