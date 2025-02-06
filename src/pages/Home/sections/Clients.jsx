import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

const clients = [
  { name: "M-KOPA", logo: "/client1.png", website: "https://m-kopa.com" },
  { name: "ALLPARK INDUSTRIES", logo: "/client2.png", website: "https://allparkindustries.com" },
  { name: "GIZA SYSTEMS", logo: "/client3.png", website: "https://gizasystems.com" },
  { name: "KASHA", logo: "/client4.png", website: "https://kasha.co" },
  { name: "MFI", logo: "/client5.png", website: "https://mfi.co.ke" },
  { name: "SYBYL", logo: "/client6.png", website: "https://sybyl.com" },
  { name: "RIANA", logo: "/client7.png", website: "https://riana.co.ke" },
  { name: "NOKIA SIEMENS", logo: "/client8.png", website: "https://www.nokia.com" },
]

export default function OurClients() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 16 },
      },
    },
    slides: { perView: 1 },
    loop: true,
  })

  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-1200 mb-4">Our Trusted Clients</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're proud to work with industry leaders who trust our services
          </p>
        </motion.div>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {clients.map((client, index) => (
              <div key={index} className="keen-slider__slide">
                <Card className="h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-36 h-20 object-contain mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{client.name}</h3>
                    <Button variant="outline" size="sm" asChild>
                      <a href={client.website} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Visit Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          {loaded && instanceRef.current && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2"
                onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2"
                onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>

        {loaded && instanceRef.current && (
          <div className="flex justify-center mt-8">
            {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`h-2 w-2 rounded-full mx-1 transition-all ${
                  currentSlide === idx ? "bg-blue-500 w-4" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}