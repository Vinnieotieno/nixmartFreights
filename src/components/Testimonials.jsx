import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Container from "@/components/Container"
import RatingStars from "@/components/ui/rating-stars"
import { testimonials } from "@/constants/homepage"
import { Quote } from "lucide-react"

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const carouselRef = useRef(null)

  useEffect(() => {
    let interval
    if (isAutoPlay) {
      interval = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollNext()
        }
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const handleSlideChange = (index) => {
    setActiveIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }

  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our clients are thrilled with our service, allowing them to easily book appointments and acquire rates.
          </p>
        </motion.div>

        <div className="relative">
          <Carousel
            ref={carouselRef}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-full"
            onSelect={(index) => handleSlideChange(index)}
          >
            <CarouselContent>
              {testimonials.map((testimonial, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex === idx ? "active" : "inactive"}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-lg bg-white p-6 shadow-lg border border-gray-200 h-full flex flex-col"
                    >
                      <Quote className="text-green-500 mb-4 h-8 w-8" />
                      <div className="mb-4">
                        <RatingStars rating={testimonial.rating} size="xl" className="fill-yellow-400" />
                      </div>
                      <p className="text-gray-700 mb-6 flex-grow">{testimonial.review}</p>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.title}</div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center mt-8 space-x-4">
              <CarouselPrevious aria-label="Previous testimonial" />
              <button
                onClick={toggleAutoPlay}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isAutoPlay ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                {isAutoPlay ? "Auto-play On" : "Auto-play Off"}
              </button>
              <CarouselNext aria-label="Next testimonial" />
            </div>
          </Carousel>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center justify-center space-x-2">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "bg-green-500 w-4" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Testimonials