import servicesData from "@/data/services.json"
import ServiceDetailPageClient from "./ServiceDetailPageClient"

interface ServiceParams {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServiceDetailPage({ params }: ServiceParams) {
  return <ServiceDetailPageClient params={params} />
}

