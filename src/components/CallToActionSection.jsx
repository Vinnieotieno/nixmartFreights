import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function CallToActionSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const ctaImages = [
    '/cta1.jpg?height=300&width=600',
    '/Air.jpg?height=300&width=600',
    '/Sea.jpg?height=30000&width=600',
    '/Ecommerce.jpg?height=300&width=600',
    '/Consolidation.jpg?height=300&width=600',
    '/Warehouse.jpg?height=300&width=600',
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
    <section className="relative overflow-hidden mt-6 bg-gray-200 py-12 sm:py-18">
      <div className="container mx-auto px-6 sm:px-6 lg:px-8">
        <div className="bg-gray-300 rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Let us help you find a solution that meets your{' '}
                <span className="text-green-600">Logistic needs</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Take advantage of our extensive experience and let Globeflight find the right solution that fits your pocket as well
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-150 ease-in-out"
              >
                Get in Touch with us Today
                <ChevronRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-6 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={ctaImages[currentImageIndex]}
                  alt={`Globeflight services ${currentImageIndex + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={prevImage}
                  className="p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition duration-150 ease-in-out"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition duration-150 ease-in-out"
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