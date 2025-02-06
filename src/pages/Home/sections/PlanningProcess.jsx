import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import planning from '@/assets/planning.png'

const PlanningProcess = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <motion.div 
            className="md:w-5/12 lg:w-4/12 md:sticky md:top-28 z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-3 bg-white shadow-lg rounded-lg">
              <CardContent className="space-y-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-brandBluish bg-brandBluish/10 rounded-full">
                  How it Works
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-brandRed tracking-tight">
                  Planning & Process
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Proper logistic planning entails considering logistical aspects throughout the various stages of the procurement process. It contributes
                  to efficient procurement processes and reduces the risk of incurring problems that may lead to additional cost and delay.
                </p>
                <Button className="mt-4 bg-brandRed hover:bg-brandRed/90 text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div 
            className="md:w-7/12 lg:w-8/12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden rounded-lg shadow-xl">
              <img 
                src={planning} 
                alt="Logistics Planning Process" 
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PlanningProcess