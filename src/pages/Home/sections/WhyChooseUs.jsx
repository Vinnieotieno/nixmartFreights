import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Container from '@/components/Container'
import FeaturedButton from '@/components/FeaturedButton'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { whychooseus, whychooseusCards } from '@/constants/homepage'

const WhyChooseUs = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <span className="text-lg md:text-xl font-semibold text-green-600">{whychooseus.subTitle}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">{whychooseus.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{whychooseus.desc}</p>
            <Link to="contact-us" className="inline-block mt-4">
              <FeaturedButton>Get Quote</FeaturedButton>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-6"
          >
            {whychooseusCards.map((card, idx) => (
              <Card key={idx} className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-500 text-white flex items-center justify-center">
                      {React.createElement(card.icon, { size: "24" })}
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-xl font-semibold mb-2">{card.title}</CardTitle>
                      <CardDescription className="text-gray-600">{card.desc}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseUs