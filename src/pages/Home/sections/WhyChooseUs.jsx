import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import Slider from "react-slick"
import Container from "@/components/Container"
import FeaturedButton from "@/components/FeaturedButton"
import { Card, CardContent } from "@/components/ui/card"
import { Ship, Globe, Clock, Shield, TrendingUp, Users } from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const WhyChooseUs = () => {
  const whyChooseUsData = {
    subTitle: "Unparalleled Expertise",
    title: "Why Nixmart Leads in Global Freight Forwarding",
    desc: "At Nixmart, we don't just move cargo; we orchestrate seamless global logistics solutions. Our commitment to excellence, cutting-edge technology, and deep industry knowledge make us the preferred choice for businesses worldwide.",
    cards: [
      {
        icon: Ship,
        title: "Global Reach, Local Touch",
        desc: "Worldwide shipping solutions with personalized service.",
      },
     {
        icon: Clock,
        title: "Time-Critical Logistics",
        desc: "We make sure that your cargo reaches its destination on time.",
      },
      {
        icon: Shield,
        title: "Uncompromising Security",
        desc: "State-of-the-art measures to safeguard your cargo.",
      },
      {
        icon: TrendingUp,
        title: "Cost-Effective Solutions",
        desc: "Competitive rates without compromising quality of work.",
      },
      {
        icon: Users,
        title: "Expert Team",
        desc: "Seasoned professionals for complex logistics challenges.",
      },
      {
        icon: Globe,
        title: "Sustainable Practices",
        desc: "Eco-friendly shipping to reduce carbon footprint.",
      },
    ],
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nixmart Freight Forwarding",
    description:
      "Nixmart is a leading global freight forwarding company offering seamless logistics solutions with a focus on excellence, technology, and customer satisfaction.",
    url: "https://www.nixmart.com",
    sameAs: [
      "https://www.facebook.com/nixmart",
      "https://www.linkedin.com/company/nixmart",
      "https://twitter.com/nixmart",
    ],
    areaServed: "Worldwide",
    serviceType: ["Freight Forwarding", "Global Logistics", "Supply Chain Management"],
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-24 md:py-32 overflow-hidden">
      <Helmet>
        <title>Why Choose Nixmart for Global Freight Forwarding | Nixmart Logistics</title>
        <meta
          name="description"
          content="Discover why Nixmart leads in global freight forwarding. Unparalleled expertise, worldwide reach, time-critical logistics, and cost-effective solutions for your business."
        />
        <meta
          name="keywords"
          content="freight forwarding, global logistics, supply chain management, time-critical shipping, cargo security, cost-effective logistics, sustainable shipping"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-xl md:text-2xl font-semibold text-blue-600 bg-blue-100 px-4 py-2 rounded-full inline-block mb-4">
            {whyChooseUsData.subTitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">{whyChooseUsData.title}</h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mb-8">{whyChooseUsData.desc}</p>
          <Link to="/contact-us">
            <FeaturedButton className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Get Your Tailored Quote
            </FeaturedButton>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Slider {...sliderSettings}>
            {whyChooseUsData.cards.map((card, idx) => (
              <div key={idx} className="px-2">
                <Card className="h-full bg-gradient-to-br from-white to-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-shrink-0 h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white flex items-center justify-center mb-4 group-hover:animate-pulse">
                      {React.createElement(card.icon, { size: "32" })}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-lg flex-grow">{card.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </motion.div>
      </Container>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-2000"></div>
    </section>
  )
}

export default WhyChooseUs

