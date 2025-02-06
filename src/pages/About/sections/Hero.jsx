import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Globe, Users, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const [isClient, setIsClient] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 150])

  useEffect(() => {
    setIsClient(true)
  }, [])

  const stats = [
    { icon: Globe, value: '175+', label: 'Countries Served' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Clock, value: '25+ Years', label: 'Industry Experience' },
  ]

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      {isClient && (
        <motion.div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/profile2.jpg')",
            y
          }}
        />
      )}
      {/* Reduced Overlay Transparency */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
      
      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 text-white h-full pt-28 sm:pt-32">
        {/* Heading */}
        <motion.h1 
          className="text-2xl sm:text-2xl mt-16 md:text-2xl lg:text-4xl font-bold tracking-wide text-center max-w-4xl leading-tight mb-4 sm:mb-6 z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          DISCOVER THE GLOBEFLIGHT ADVANTAGE
        </motion.h1>
        
        {/* Subheading */}
        <motion.p 
          className="text-sm sm:text-xl md:text-2xl text-center max-w-2xl mb-6 sm:mb-8 px-4 z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your trusted partner in global logistics and supply chain solutions
        </motion.p>
        
        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-8 sm:mb-12 w-full px-4 z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/*<Button size="lg" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white">
            Our Services
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-black">
            Contact Us
          </Button> */}
        </motion.div>
        
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-4xl px-4 z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center bg-black bg-opacity-50 p-4 rounded-lg text-center">
              <stat.icon className="w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-2" />
              <span className="text-lg sm:text-2xl lg:text-3xl font-bold">{stat.value}</span>
              <span className="text-xs sm:text-sm lg:text-base uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Chevron Icon */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </motion.div>
    </div>
  )
}

export default Hero
