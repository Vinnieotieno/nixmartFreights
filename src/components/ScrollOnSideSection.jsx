"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, X } from "lucide-react"
import whatsapp from "@/assets/whatsapp.svg"

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [isVisible]) // Added isVisible to dependencies

  return (
    <div className="fixed bottom-10 right-5 z-[9999] flex flex-col items-end space-y-4">
      <AnimatePresence>
        {showWelcomeMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-4 max-w-xs"
          >
            <button
              onClick={() => setShowWelcomeMessage(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close welcome message"
            >
              <X size={16} />
            </button>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Welcome to Nixmart!</h3>
            <p className="text-sm text-gray-600">
              We're here to assist you with all your freight forwarding needs. How can we help you today?
            </p>
            <a
              href="https://wa.me/254704428003"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <button
          onClick={() => setShowWelcomeMessage(!showWelcomeMessage)}
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          aria-label={showWelcomeMessage ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        >
          {showWelcomeMessage ? (
            <X size={24} />
          ) : (
            <img
              src={whatsapp || "/placeholder.svg"}
              width={24}
              height={24}
              alt="WhatsApp"
              onError={(e) => {
                console.error("Error loading WhatsApp icon")
                e.target.src =
                  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>'
              }}
            />
          )}
        </button>
      </motion.div>

      {/*<AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={scrollToTop}
              className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
              aria-label="Back to Top"
            >
              <ChevronUp size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>*/}
    </div>
  )
}

export default BackToTopButton

