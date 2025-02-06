'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const relationshipInfo = [
  {
    name: "Kenya Revenue Authority",
    logo: "/kra-logo.png",
    description: "Globeflight Kenya works closely with KRA to ensure compliance with all tax and customs regulations.",
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
];

export default function Component() {
  const [expandedInfo, setExpandedInfo] = useState(false);

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 text-center md:text-left mb-6 md:mb-0">
            GLOBEFLIGHT KENYA&apos;S
            <br className="hidden md:block" />
            RELATIONSHIPS
          </h2>
          
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 text-center md:text-left">
              Globeflight Kenya prides itself on building strong relationships and engaging with various authorising bodies to ensure smooth operations and compliance.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {relationshipInfo.map((org, index) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="relative w-full h-40 mb-4">
                    <img
                      src={org.logo}
                      alt={`${org.name} logo`}
                      className="object-contain w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-green-600 mb-2">{org.name}</h3>
                  <p className="text-gray-600 mb-4">{org.description}</p>
                  <Button variant="outline" className="w-full" onClick={() => window.open(org.link, '_blank')}>
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            variant="ghost"
            className="w-full text-green-600 hover:text-green-700"
            onClick={() => setExpandedInfo(!expandedInfo)}
          >
            {expandedInfo ? 'Less Info' : 'More Info'}
            {expandedInfo ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
          </Button>
          
          {expandedInfo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-green-600 mb-4">Why These Relationships Matter</h3>
              <p className="text-gray-700 mb-4">
                Our strong relationships with these key organizations allow us to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Ensure compliance with all relevant regulations and standards</li>
                <li>Streamline customs clearance processes for faster delivery</li>
                <li>Stay updated on the latest industry developments and requirements</li>
                <li>Provide our clients with expert advice on import/export procedures</li>
                <li>Maintain the highest quality standards in all our operations</li>
              </ul>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}