'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MapPin, Globe, ArrowRight, Truck, Ship, Plane, Package } from 'lucide-react';

const WhereWeShip = ({ title, data, styles }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const iconMap = {
    truck: Truck,
    ship: Ship,
    plane: Plane
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-lg font-semibold text-blue-600 uppercase tracking-wide mb-2">Global Reach</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover Nixmart's extensive freight forwarding network, connecting businesses across continents with efficient and reliable shipping solutions.
          </p>
        </motion.div>

        <div className={`grid gap-8 ${styles}`}>
          {data.map((card, idx) => {
            const Icon = iconMap[card.icon] || Package;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-none">
                  <div className="relative h-48 overflow-hidden">
                    <img src={card.img || "/placeholder.svg"} alt={card.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                      <img src={card.flag || "/placeholder.svg"} alt={`${card.title} flag`} className="w-8 h-8 rounded-full object-cover border-2 border-white" />
                      <h3 className="text-xl font-bold text-white">{card.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Icon className="w-6 h-6 text-blue-500" />
                      <CardDescription className="text-sm font-medium text-blue-500">{card.transportMode}</CardDescription>
                    </div>
                    <p className="text-gray-600">{card.desc}</p>
                  </CardContent>
                  <CardFooter className="bg-gray-50 p-6">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
                          onClick={() => setSelectedCard(card)}
                        >
                          Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-blue-600">{selectedCard?.title}</DialogTitle>
                          <DialogDescription>Freight forwarding services in {selectedCard?.title}</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="flex items-start gap-4">
                            <MapPin className="h-5 w-5 text-blue-500 mt-1" />
                            <div>
                              <h4 className="font-semibold">Key Shipping Hubs</h4>
                              <p className="text-sm text-gray-600">{selectedCard?.hubs.join(', ')}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <Globe className="h-5 w-5 text-blue-500 mt-1" />
                            <div>
                              <h4 className="font-semibold">Services Offered</h4>
                              <ul className="text-sm text-gray-600 list-disc list-inside">
                                {selectedCard?.services.map((service, index) => (
                                  <li key={index}>{service}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhereWeShip;