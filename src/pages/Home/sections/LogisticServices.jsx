import { motion } from "framer-motion"
import { Helmet } from "react-helmet"
import { Warehouse, FileCheck, Truck, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const ServiceCard = ({ Icon, title, description }) => (
  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
    <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-500 text-white flex items-center justify-center mb-4">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
)

const ShippingServices = () => {
  const services = [
    {
      Icon: Globe,
      title: "International Freight Forwarding",
      description: "Comprehensive air and sea freight solutions for your import and export needs.",
    },
    {
      Icon: FileCheck,
      title: "Customs Brokerage",
      description: "Expert handling of export customs clearance and compliance with local regulations.",
    },
    {
      Icon: Warehouse,
      title: "Warehousing Services",
      description: "Bonded and non-bonded storage options with advanced inventory management.",
    },
    {
      Icon: Truck,
      title: "Cross-border Transport",
      description: "Reliable road transport across the East Africa Community region with secure and timely delivery.",
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <Helmet>
        <title>Nixmart Freight Forwarding Services | Comprehensive Logistics Solutions</title>
        <meta
          name="description"
          content="Discover Nixmart's comprehensive freight forwarding services including international shipping, customs brokerage, warehousing, and cross-border transport across East Africa."
        />
        <meta
          name="keywords"
          content="freight forwarding, international shipping, customs brokerage, warehousing, cross-border transport, East Africa logistics, supply chain management, import export services"
        />
        <link rel="canonical" href="https://www.nixmart.com/services" />
      </Helmet>

      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-blue-600 mb-4">
            Comprehensive Freight Forwarding Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover Nixmart's range of services designed to streamline your global logistics and supply chain
            management.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} Icon={service.Icon} title={service.title} description={service.description} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Explore Nixmart Services
          </Button>
        </motion.div>

        <div className="mt-24 grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80"
              alt="Cargo ship at a busy port terminal"
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
              alt="Modern warehouse interior with stacked packages"
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1570449942860-bb66578b3ddd?auto=format&fit=crop&w=800&q=80"
              alt="Cargo plane being loaded on runway"
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </section>
  )
}

export default ShippingServices

