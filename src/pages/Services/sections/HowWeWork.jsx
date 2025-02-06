'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, Truck, Clipboard, Globe, CheckCircle } from 'lucide-react'

const logisticsSteps = [
  { 
    icon: Package, 
    title: "Order Placement", 
    description: "Client submits order details and requirements through our user-friendly platform."
  },
  { 
    icon: Clipboard, 
    title: "Order Processing", 
    description: "Our team reviews and confirms order details, prepares necessary documentation."
  },
  { 
    icon: Truck, 
    title: "Pickup & Transportation", 
    description: "Goods are collected and transported using our optimized logistics network."
  },
  { 
    icon: Globe, 
    title: "Global Tracking", 
    description: "Real-time tracking and updates provided throughout the shipping process."
  },
  { 
    icon: CheckCircle, 
    title: "Delivery & Confirmation", 
    description: "Goods are delivered to the destination, and delivery confirmation is obtained."
  }
]

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">How We Work</h2>
          <p className="text-xl text-gray-600">Our streamlined logistics process ensures efficient and reliable delivery</p>
        </motion.div>

        <div className="lg:flex lg:gap-16 lg:items-stretch">
          {/* Left Image Container with object-contain to fit the entire image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 min-h-full rounded-lg overflow-hidden relative"
          >
            <img
              src="/info.jpg"
              alt="Logistics Process"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
          </motion.div>

          {/* Right Process Steps */}
          <div className="mt-10 lg:mt-0 flex-1 space-y-6">
            {logisticsSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 ${activeStep === index ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'}`}
                  onClick={() => setActiveStep(index)}
                >
                  <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                    <div className={`p-2 rounded-full ${activeStep === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Start Your Shipment
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default HowWeWork
