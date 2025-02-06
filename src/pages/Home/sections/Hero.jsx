'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Volume2, VolumeX, ChevronDown } from 'lucide-react'
import aeroplane from "@/assets/aeroplane.png"
import video from "@/assets/herovid.mp4"

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true)
  const [showValues, setShowValues] = useState(false)
  const videoRef = useRef(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Video Background Section */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-center mb-6"
        >
          LOGISTICS 24.SEVEN.365
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-xl sm:text-2xl md:text-3xl font-medium text-center mb-10 max-w-3xl"
        >
          Your Trusted & Credible Logistics, Warehousing & Fulfillment Partner
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Button 
            size="lg" 
            variant="secondary"
            onClick={scrollToServices}
            className="w-full sm:w-auto text-lg"
          >
            Explore Logistics
          </Button>
          <Button 
            size="lg" 
            variant="default"
            asChild
            className="w-full sm:w-auto text-lg"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowValues(!showValues)}
            className="text-white hover:text-green-400 transition-colors"
          >
            <ChevronDown className="h-8 w-8" />
          </Button>
          <span className="text-white text-sm mt-2">Our Values</span>
        </motion.div>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMute}
          className="absolute top-4 right-4 text-white hover:text-green-400 transition-colors"
        >
          {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
        </Button>
      </div>

      {/* Values Card Section */}
      <AnimatePresence>
        {showValues && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="absolute bottom-0 left-0 right-0 z-20"
          >
            <Card className="bg-green-500 text-white shadow-xl p-6 mx-auto w-[90%] sm:w-[85%] md:w-[75%] lg:w-[60%] xl:w-[55%]">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <Button variant="secondary" className="bg-white text-green-500 font-bold">
                    OUR VALUES
                  </Button>
                  <img
                    src={aeroplane}
                    alt="Aeroplane"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="text-center sm:text-left text-lg sm:text-xl md:text-2xl font-bold">
                  Reliability, Integrity, Efficiency, Innovation & Professionalism
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Hero