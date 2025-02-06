// pages/services/[id].js
import React from 'react'
import { useRouter } from 'next/router'
import { Card, CardDescription, CardHeader } from "@/components/ui/card"
import { immigrationServices } from "@/constants/servicepage"
import Layout from "@/components/Layout"  // Assuming a layout with sidebar and hero section

export default function ServiceDetail({ service, previousService, nextService }) {
  const router = useRouter()

  // Show loading while the page is being generated
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // Check if the service data is available, otherwise show an error
  if (!service) {
    return <div className="text-center text-red-500">Service not found</div>
  }

  return (
    <Layout>
      <div className="py-10">
        {/* Service Detail Section */}
        <div className="flex flex-col space-y-4">
          <h1 className="md:text-3xl text-xl font-bold">{service.title}</h1>
          <p className="text-justify">{service.fullDesc || service.desc}</p>
        </div>

        {/* Related Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
          {previousService && (
            <Card key={previousService.id} className="shadow-xl flex flex-col h-full">
              <div className="relative h-40">
                <img
                  src={previousService.img}
                  alt={previousService.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardHeader className="py-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-brandBluish">
                    {React.createElement(previousService.icon, { size: 20 })}
                    <h4 className="text-base ml-3 font-medium">{previousService.title}</h4>
                  </div>
                  <CardDescription>{previousService.desc}</CardDescription>
                </div>
                <div className="mt-4">
                  <a 
                    href={`/services/${previousService.id}`} 
                    className="bg-green-500 text-white text-xs font-medium px-4 py-2 rounded-md w-full text-center hover:bg-green-600 transition-colors inline-block"
                  >
                    Previous Service
                  </a>
                </div>
              </CardHeader>
            </Card>
          )}
          {nextService && (
            <Card key={nextService.id} className="shadow-xl flex flex-col h-full">
              <div className="relative h-40">
                <img
                  src={nextService.img}
                  alt={nextService.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardHeader className="py-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-brandBluish">
                    {React.createElement(nextService.icon, { size: 20 })}
                    <h4 className="text-base ml-3 font-medium">{nextService.title}</h4>
                  </div>
                  <CardDescription>{nextService.desc}</CardDescription>
                </div>
                <div className="mt-4">
                  <a 
                    href={`/services/${nextService.id}`} 
                    className="bg-green-500 text-white text-xs font-medium px-4 py-2 rounded-md w-full text-center hover:bg-green-600 transition-colors inline-block"
                  >
                    Next Service
                  </a>
                </div>
              </CardHeader>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = immigrationServices.map(service => ({
    params: { id: service.id },
  }))
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const service = immigrationServices.find(s => s.id === params.id)

  // Add console log for debugging
  console.log("Fetching service for ID:", params.id)
  console.log("Service found:", service)

  if (!service) {
    return { notFound: true }
  }

  const index = immigrationServices.indexOf(service)
  const previousService = immigrationServices[index - 1] || null
  const nextService = immigrationServices[index + 1] || null

  return { props: { service, previousService, nextService } }
}
