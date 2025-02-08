"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Truck, Ship, Plane, Package, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"

const services = [
  { icon: Truck, name: "Road Freight", description: "Efficient ground transportation solutions" },
  { icon: Ship, name: "Sea Freight", description: "Global maritime shipping services" },
  { icon: Plane, name: "Air Freight", description: "Fast and reliable air cargo solutions" },
  { icon: Package, name: "Warehousing", description: "Secure storage and distribution" },
]

export default function ServiceHero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hoveredService, setHoveredService] = useState(null)

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
            animate={{
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
            }}
            transition={{ duration: 10 + Math.random() * 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 h-full flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          Innovative Freight <br />
          <span className="text-blue-300">Forwarding Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-2xl"
        >
          Nixmart: Your trusted partner in global logistics, delivering efficiency and reliability across continents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <Button
            size="lg"
            className="bg-white text-blue-800 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
            onClick={() => setIsModalOpen(true)}
          >
            Explore Services <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-blue-800 transition-all duration-300 transform hover:scale-105"
          >
            Get a Quote
          </Button>
        </motion.div>

        {/* Service Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-center overflow-hidden group"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <motion.div
                animate={{
                  scale: hoveredService === index ? 1.1 : 1,
                  y: hoveredService === index ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-sm text-blue-100">{service.description}</p>
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                initial={false}
                animate={{ scale: hoveredService === index ? 1.5 : 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>

      {/* Services Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-blue-50 to-white p-0">
              <DialogHeader className="p-6 sticky top-0 bg-white/80 backdrop-blur-md z-10">
                <div className="flex justify-between items-center">
                  <DialogTitle className="text-3xl font-bold text-blue-800">Our Comprehensive Services</DialogTitle>
                  <DialogClose asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <X className="h-6 w-6" />
                    </Button>
                  </DialogClose>
                </div>
                <DialogDescription className="text-lg text-gray-600 mt-2">
                  Nixmart offers a wide range of freight forwarding and logistics services tailored to meet your
                  specific needs.
                </DialogDescription>
              </DialogHeader>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-blue-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                      <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                      <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.name}</h3>
                      <p className="text-gray-600">{service.description}</p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center text-sm text-gray-600">
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                          Door-to-door delivery
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                          Custom clearance assistance
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                          Real-time shipment tracking
                        </li>
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  )
}

