"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CallToActionSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const ctaImages = [
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80",
    
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ctaImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ctaImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + ctaImages.length) % ctaImages.length)
  }

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 md:p-12 lg:p-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Streamline Your <span className="text-blue-600">Global Logistics</span> with Nixmart Freight forwarding Services
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Leverage our expertise in international freight forwarding to optimize your supply chain and expand your
                global reach.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Get a Custom Quote
                <ChevronRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-96 lg:h-full"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={ctaImages[currentImageIndex]}
                  alt={`Nixmart freight forwarding services ${currentImageIndex + 1}`}
                  className="object-cover w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={prevImage}
                  className="p-2 rounded-full bg-white bg-opacity-50 text-blue-600 hover:bg-opacity-75 transition duration-300 ease-in-out"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 rounded-full bg-white bg-opacity-50 text-blue-600 hover:bg-opacity-75 transition duration-300 ease-in-out"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

