"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { ChevronDown, Truck, Shield, Users, HeartHandshake, X } from "lucide-react"

const Hero = () => {
  const [showValues, setShowValues] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2070&q=80",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full min-h-screen mt-12 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${images[currentImageIndex]})`,
          }}
        />
      </AnimatePresence>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide"
        >
          NIXMART LOGISTICS
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-xl md:text-2xl lg:text-3xl font-medium mt-4 max-w-3xl"
        >
          Your Trusted & Credible Freight Forwarding Partner
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Button
            size="lg"
            variant="secondary"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            Explore Our Services
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-500 transition-all"
          >
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </motion.div>
      </div>

      {/* Values Section Toggle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowValues(!showValues)}
          className="text-white hover:text-blue-400 transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </Button>
        <span className="text-white text-sm mt-2 block">Our Core Values</span>
      </motion.div>

      {/* Values Section */}
      <AnimatePresence>
        {showValues && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed left-0 right-0 top-1/2 transform -translate-y-1/2 z-50 flex items-center justify-center p-4"
          >
            <Card className="bg-blue-800 bg-opacity-90 text-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-4xl">
              <div className="relative p-6 md:p-8">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowValues(false)}
                  className="absolute top-2 right-2 text-white hover:text-blue-200 transition-colors"
                >
                  <X className="h-6 w-6" />
                </Button>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Core Values</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <ValueItem icon={Shield} text="Commitment" />
                  <ValueItem icon={HeartHandshake} text="Integrity" />
                  <ValueItem icon={Users} text="Professionalism" />
                  <ValueItem icon={Truck} text="Customer Service" />
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const ValueItem = ({ icon: Icon, text }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center justify-center bg-blue-700 bg-opacity-50 rounded-lg shadow-md p-4 aspect-square"
  >
    <Icon className="h-12 w-12 mb-3 text-blue-200" />
    <h4 className="font-semibold text-lg text-center">{text}</h4>
  </motion.div>
)

export default Hero

