"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { ChevronDown, ArrowRight, Truck, Box, ShieldCheck, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const backgroundImages = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070",
  "https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=2070",
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 150]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
      <Helmet>
        <title>Nixmart Freight Forwarding Services | Leading Logistics Solutions</title>
        <meta name="description" content="Experience top-tier freight and logistics solutions with Nixmart. Reliable, fast, and efficient shipping worldwide." />
        <meta name="keywords" content="freight forwarding, logistics, shipping, global supply chain, Nixmart transport" />
      </Helmet>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
            style={{ backgroundImage: `url('${backgroundImages[currentImageIndex]}')` }}
          />
          <div className="absolute inset-0 bg-blue-900/80" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-30 flex flex-col mt-14 items-center justify-center px-6 text-white h-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl mt-16 font-bold mb-4"
        >
          NIXMART FREIGHT FORWARDING SERVICES
        </motion.h1>
        <p className="text-xl md:text-2xl font-light mb-6 text-blue-200 max-w-2xl">
          Reliable Global Logistics Solutions Tailored to Your Needs
        </p>

        <motion.div className="flex flex-wrap gap-4 mb-8">
          <Button size="lg" className="group bg-green-600 hover:bg-green-700 text-white px-6 py-3">
            Our Services <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white px-6 py-3 hover:bg-white hover:text-blue-900">
            Contact Us
          </Button>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-blue-200 text-sm mb-2">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 text-blue-200" />
      </motion.button>
    </div>
  );
};

export default Hero;
