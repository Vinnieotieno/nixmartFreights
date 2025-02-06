import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { MapPin, Globe, ArrowRight } from 'lucide-react'

const WhereWeShip = ({ title, data, styles }) => {
  const [selectedCard, setSelectedCard] = useState(null)

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-2xl text-blue-600 font-bold mb-2">Global Reach</h1>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our extensive shipping network spanning across continents
          </p>
        </motion.div>

        <div className={`grid gap-8 ${styles}`}>
          {data.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img src={card.img} alt={card.title} className="h-48 w-full object-cover" />
                  <div className="absolute top-0 left-0 m-4 bg-white rounded-full p-2 shadow-md">
                    <img src={card.flag} alt={`${card.title} flag`} className="w-8 h-8 rounded-full object-cover" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{card.title}</CardTitle>
                  <CardDescription>{card.desc}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" onClick={() => setSelectedCard(card)}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>{selectedCard?.title}</DialogTitle>
                        <DialogDescription>Shipping details for {selectedCard?.title}</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="flex items-center gap-4">
                          <MapPin className="h-5 w-5 text-blue-500" />
                          <p>Main shipping hubs in {selectedCard?.title}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <Globe className="h-5 w-5 text-blue-500" />
                          <p>International and domestic shipping available</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhereWeShip