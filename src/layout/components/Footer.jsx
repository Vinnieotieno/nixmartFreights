"use client"

import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { X, Send, MapPin, Phone, Mail, ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Footer = ({ data }) => {
  const [showFeedback, setShowFeedback] = useState(true)
  const [email, setEmail] = useState("")
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribed with email:", email)
    setEmail("")
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-br from-blue-600 to-blue-800 text-white relative">
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="fixed bottom-4 right-4 z-50 w-full max-w-sm bg-white text-blue-800 shadow-xl rounded-lg overflow-hidden">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">We Value Your Opinion</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFeedback(false)}
                    className="text-blue-800 hover:text-blue-600 transition-colors duration-300"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm mb-4">What do you think of Nixmart?</p>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
                  onClick={() => (window.location.href = "/contact-us")}
                >
                  Give Feedback Now!
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src={data.brand || "/placeholder.svg"} className="w-40 h-20 object-contain" alt="Nixmart" />
            </Link>
            <p className="text-sm">{data.text1}</p>
            <p className="text-sm">&copy; {data.text2}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="hover:text-yellow-300 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-yellow-300 transition-colors duration-300">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-yellow-300 transition-colors duration-300">
                  Updates
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-300 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-yellow-300" />
                <span>Donholm Business Center</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-yellow-300" />
                <span>+254704428003</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-yellow-300" />
                <span>sales@nixmart.co.ke</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-sm">Stay updated with our latest news and offers!</p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md bg-white text-blue-800"
                required
              />
              <Button
                type="submit"
                className="bg-yellow-400 text-blue-800 hover:bg-yellow-300 transition-colors duration-300"
              >
                Subscribe <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              {data.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 hover:bg-yellow-300 hover:text-blue-800 p-2 rounded-full transition-colors duration-300"
                >
                  {React.createElement(social.icon, { size: "20" })}
                </a>
              ))}
            </div>
            <p className="text-sm text-center md:text-right">Designed and developed by Vigilux</p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-yellow-400 text-blue-800 p-2 rounded-full shadow-lg hover:bg-yellow-300 transition-colors duration-300"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Footer

