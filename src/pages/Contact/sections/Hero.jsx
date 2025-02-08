"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Nixmart - Freight Forwarding Solutions</title>
        <meta name="description" content="Optimize your supply chain with Nixmart's expert international freight forwarding services, including air and sea freight and customs clearance." />
        <meta name="keywords" content="Freight Forwarding, Logistics, Supply Chain, Air Freight, Sea Freight, Customs Clearance, Nixmart, Kenya" />
      </Helmet>
      <div className="relative min-h-screen mt-16 overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 container mt-16 mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Freight Forwarding Solutions with <span className="text-yellow-400">Nixmart</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Optimize your supply chain with our expert international freight forwarding services, including air and sea freight and customs clearance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 shadow-lg transform hover:scale-105 transition">
                <Link to="/services">Explore Our Services</Link>
              </Button>
              {/*<Button
                asChild
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-900 shadow-lg transform hover:scale-105 transition"
              >
                <Link to="/contact">Get a Quote</Link>
              </Button>*/}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-blue-900">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <Phone className="w-6 h-6 mr-3 text-blue-600" />
                <span>+254 704 428 003</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="w-6 h-6 mr-3 text-blue-600" />
                <span>info@nixmart.co.ke</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="w-6 h-6 mr-3 text-blue-600" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2 text-blue-900">Our Commitment</h3>
              <p className="text-gray-600">
                At Nixmart, we are dedicated to optimizing your supply chain with tailored logistics solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Floating Element */}
        <motion.div
          className="absolute bottom-10 right-10 z-20 hidden lg:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="bg-yellow-400 text-blue-900 p-4 rounded-full shadow-lg transform hover:scale-110 transition">
            <TrendingUp size={32} />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
