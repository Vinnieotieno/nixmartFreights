'use client'

import React, { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Lightbulb, Heart, Building2, Laptop, Users, Wallet, Star, Globe2, Shield, Clock } from 'lucide-react'
import { motion, useScroll, useTransform } from "framer-motion"

const philosophyImages = [
  "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070", // Global logistics
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070", // Cargo aircraft
  "https://images.unsplash.com/photo-1616432043562-3e369b11b8b6?q=80&w=2069", // Container port
]

export default function AboutSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  const fadeInUpVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }
  }

  const values = [
    { icon: Star, text: "Commitment", color: "from-blue-500 to-indigo-500" },
    { icon: Shield, text: "Integrity", color: "from-indigo-500 to-purple-500" },
    { icon: Users, text: "Professionalism", color: "from-purple-500 to-pink-500" },
    { icon: Heart, text: "Customer Service", color: "from-pink-500 to-rose-500" }
  ]

  const chooseus = [
    { 
      icon: Clock, 
      title: "Professionalism", 
      description: "Over 15 years of industry experience",
      gradient: "from-blue-50 to-indigo-50"
    },
    { 
      icon: Globe2, 
      title: "Global Reach", 
      description: "Strong partnerships with carriers and agents worldwide",
      gradient: "from-indigo-50 to-purple-50"
    },
    { 
      icon: Wallet, 
      title: "Competitive Rates", 
      description: "Transparent and cost-effective pricing",
      gradient: "from-purple-50 to-pink-50"
    },
    { 
      icon: Users, 
      title: "Tailored Solutions", 
      description: "Customized services for every client's unique needs",
      gradient: "from-pink-50 to-rose-50"
    },
    { 
      icon: Building2, 
      title: "Commitment to Excellence", 
      description: "Building long-term partnerships by addressing logistics challenges at both global and local levels",
      gradient: "from-rose-50 to-orange-50"
    }
  ]

  return (
    <div ref={containerRef} className="relative bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-50" />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-24 space-y-32 relative">
        {/* About Us Section */}
        <section className="relative">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: {},
              animate: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div 
              className="space-y-6"
              variants={fadeInUpVariants}
            >
              <div className="inline-block">
                <h2 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ABOUT US
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600" />
              </div>
              <p className="text-lg leading-relaxed text-gray-600">
                Nixmart Freight Forwarding Services Ltd, established in 2024, is a dynamic logistics provider offering trusted global cargo and shipping solutions. Based in Nairobi, Kenya, Nixmart delivers seamless shipment coordination for international clients, ensuring cost-effective and reliable services.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                With an expert team, backed by qualifications from the Institute of Chartered Shipbrokers, London, UK, Nixmart strives to streamline supply chain processes. Our Director, Mr. Nickson Mwikya, brings unmatched experience in multinational logistics, pricing strategy, and commercial operations to guarantee exceptional service to our clients.
              </p>
            </motion.div>

            <motion.div 
              className="relative h-[500px]"
              style={{ y }}
            >
              <div className="absolute inset-0 grid grid-cols-2 gap-4">
                {philosophyImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    className={`relative rounded-2xl overflow-hidden shadow-lg ${
                      idx === 2 ? "col-span-2" : ""
                    }`}
                    variants={fadeInUpVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt="Logistics operations"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Our Philosophies Section */}
        <section className="space-y-16">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: {},
              animate: { transition: { staggerChildren: 0.2 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Vision */}
            <motion.div
              variants={fadeInUpVariants}
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white
                      transform group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Our Vision
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        To become the leading global provider of innovative logistics solutions, ensuring superior customer satisfaction through efficient supply chain management and competitive pricing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={fadeInUpVariants}
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-xl border-0 bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white
                      transform group-hover:scale-110 transition-transform duration-300">
                      <Lightbulb className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Our Mission
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        To provide seamless, cost-effective, and reliable freight forwarding solutions through our global network, industry expertise, and customer-centric approach. We aim to optimize logistics operations and contribute to our clients' growth by providing unparalleled value, driving excellence in every shipment.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: {},
              animate: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUpVariants}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl border-0">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${value.color} text-white
                        transform group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="w-6 h-6" />
                      </div>
                      <span className="text-lg font-semibold text-gray-800">{value.text}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section className="space-y-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: {},
              animate: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div
              variants={fadeInUpVariants}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Why Choose Us?
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chooseus.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUpVariants}
                  className="group"
                >
                  <Card className={`h-full transition-all duration-300 hover:shadow-xl border-0 bg-gradient-to-br ${item.gradient}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-white shadow-md group-hover:shadow-xl
                          transform group-hover:scale-110 transition-all duration-300">
                          <item.icon className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Partnerships Section */}
        <section className="relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="group"
          >
            <Card className="transition-all duration-300 hover:shadow-xl border-0 bg-gradient-to-br from-gray-50 to-blue-50">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Partnerships and Global Coverage
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Nixmart has partnered directly with shipping lines and airlines to ensure competitive rates for their customers. Additionally, Nixmart has an agency network globally, ensuring worldwide coverage.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section> 
      </div>
    </div>
  )
}