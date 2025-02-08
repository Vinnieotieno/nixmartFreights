'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const partnerInfo = [
  {
    name: "Kenya Revenue Authority",
    logo: "/kra-logo.png",
    description: "Nixmart works closely with KRA to ensure compliance with all tax and customs regulations.",
    link: "https://www.kra.go.ke/"
  },
  {
    name: "Kenya Ports Authority",
    logo: "/kpa-logo.png",
    description: "Our partnership with KPA allows for efficient handling of sea freight and port operations.",
    link: "https://www.kpa.co.ke/"
  },
  {
    name: "Kenya Bureau of Standards",
    logo: "/kebs-logo.png",
    description: "Collaboration with KEBS ensures all goods meet the required quality standards for import and export.",
    link: "https://www.kebs.org/"
  },
  {
    name: "Kenya Trade Network Agency",
    logo: "/kentrade.png",
    description: "Partnering with KenTrade for streamlined trade facilitation and customs processes.",
    link: "https://www.kentrade.go.ke/"
  },
  {
    name: "Consolidation Shipping Services L.L.C",
    logo: "/consolidated.png",
    description: "Strategic partnership for efficient consolidation and shipping services.",
    link: "https://www.cssuae.com/"
  },
  {
    name: "MAERSK",
    logo: "/maersk.png",
    description: "Collaboration with MAERSK for global container shipping and logistics.",
    link: "https://www.maersk.com/"
  },
  {
    name: "W.E.C LINES",
    logo: "/wec.png",
    description: "Partnership for specialized container shipping services.",
    link: "https://www.weclines.com/"
  },
  {
    name: "CMA CGM",
    logo: "/cma.png",
    description: "Collaboration for comprehensive maritime transport and logistics solutions.",
    link: "https://www.cma-cgm.com/"
  },
  {
    name: "Evergreen Marine Corp",
    logo: "/evergreen.png",
    description: "Partnership for global container transportation services.",
    link: "https://www.evergreen-line.com/"
  },
  {
    name: "COSCO Shipping",
    logo: "/cosco.png",
    description: "Strategic alliance for comprehensive shipping and logistics services.",
    link: "https://www.coscoshipping.com/"
  },
  {
    name: "Ocean Network Express",
    logo: "/one.png",
    description: "Collaboration for innovative and efficient container shipping solutions.",
    link: "https://www.one-line.com/"
  },
  {
    name: "Air France KLM Martinair Cargo",
    logo: "/airfrance.jpeg",
    description: "Partnership for global air freight solutions.",
    link: "https://www.afklcargo.com/"
  },
  
  {
    name: "Emirates SkyCargo",
    logo: "/emirates.jpg",
    description: "Strategic partnership for global air freight and logistics services.",
    link: "https://www.skycargo.com/"
  },
  {
    name: "Britam",
    logo: "/britam.jpg",
    description: "Collaboration for comprehensive insurance solutions in logistics.",
    link: "https://www.britam.com/"
  },
  {
    name: "Diamond Trust Bank (DTB)",
    logo: "/dtb.png",
    description: "Financial partnership for seamless transactions and trade finance.",
    link: "https://dtbk.dtbafrica.com/"
  },
  {
    name: "Kenya National Chamber of Commerce and Industry (KNCCI)",
    logo: "/kncci.png",
    description: "Membership for networking and business development opportunities.",
    link: "https://www.kenyachamber.or.ke/"
  },
  {
    name: "SGS",
    logo: "/sgs.jpeg",
    description: "Collaboration for inspection, verification, testing and certification services.",
    link: "https://www.sgs.com/"
  }
];

export default function PartnershipSection() {
  const [expandedInfo, setExpandedInfo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (partnerInfo.length - 4));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const featuredPartners = partnerInfo.slice(0, 4);
  const carouselPartners = partnerInfo.slice(4);

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4 sm:px-6 mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">Our Trusted Partnerships</h2>
          <p className="text-lg text-gray-700 mt-4">Building strong relationships for seamless logistics operations.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredPartners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <img src={partner.logo || "/placeholder.svg"} alt={`${partner.name} logo`} className="max-h-full max-w-full object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-600 text-center mb-2">{partner.name}</h3>
                  <p className="text-sm text-gray-600 text-center mb-4">{partner.description}</p>
                  <Button variant="outline" className="w-full" onClick={() => window.open(partner.link, '_blank')}>
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="relative overflow-hidden w-full max-w-4xl mx-auto mb-12">
          <motion.div
            ref={carouselRef}
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {carouselPartners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-full px-4">
                <div className="h-24 flex items-center justify-center mb-4">
                  <img src={partner.logo || "/placeholder.svg"} alt={`${partner.name} logo`} className="max-h-full max-w-full object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-blue-600 text-center mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600 text-center">{partner.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            variant="ghost"
            className="w-full text-blue-600 hover:text-blue-700"
            onClick={() => setExpandedInfo(!expandedInfo)}
          >
            {expandedInfo ? 'Less Info' : 'More Info'}
            {expandedInfo ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
          </Button>
          <AnimatePresence>
            {expandedInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-6 bg-white rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Why These Partnerships Matter</h3>
                <p className="text-gray-700 mb-4">Our strong partnerships with these key organizations allow us to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Ensure compliance with all regulations</li>
                  <li>Streamline customs clearance</li>
                  <li>Provide expert logistics advice</li>
                  <li>Offer top-tier logistics solutions</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}