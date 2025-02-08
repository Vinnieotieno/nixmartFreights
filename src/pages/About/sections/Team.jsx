"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { Linkedin, Mail, GraduationCap, Briefcase, Award, ExternalLink, MapPin, ChevronRight, X } from "lucide-react"

const director = {
  name: "Mr. Nickson Mwikya",
  position: "Founder & Director",
  location: "Nairobi, Kenya",
  image: "/nick.png",
  description:
    "Founder and director of Nixmart Freight Forwarding Services Ltd, bringing over 15 years of experience in international logistics and freight forwarding. Specialized in managing complex supply chains and delivering exceptional customer service.",
  education: [
    {
      degree: "Bachelor's Degree in Business Management (Procurement & Logistics)",
      institution: "Moi University",
      year: "2008",
    },
    {
      degree: "Higher Diploma in International Shipping Business",
      institution: "Institute of Chartered Shipbrokers (London, UK)",
      year: "2010",
    },
    {
      degree: "Foundation Diploma in Port Agency and International Shipping",
      institution: "Institute of Chartered Shipbrokers (London, UK)",
      year: "2009",
    },
    {
      degree: "Certificate in Port Operations and Local Clearance Processes",
      institution: "Bandari College, Mombasa",
      year: "2007",
    },
  ],
  experience: [
    {
      company: "Hillebrand Gori (DHL Group)",
      position: "Operations Team Lead & Commercial Manager (East Africa Region)",
      period: "2018 - Present",
      description:
        "Leading operations team and managing air/sea shipments across East Africa. Overseeing P&L and maintaining global account relationships.",
    },
    {
      company: "Agility Logistics Ltd",
      position: "Sea Imports Coordinator & Sea Freight Supervisor",
      period: "2015 - 2018",
      description: "Coordinated sea freight operations and supervised import processes for major clients.",
    },
    {
      company: "MSC (Mediterranean Shipping Company)",
      position: "Imports Documentation Officer",
      period: "2012 - 2015",
      description: "Managed import documentation and clearance procedures for container shipments.",
    },
    {
      company: "Mombasa Coffee Ltd",
      position: "Shipping Clerk",
      period: "2010 - 2012",
      description: "Handled tea and coffee exports documentation and logistics coordination.",
    },
  ],
  achievements: [
    "Successfully managed over 1000+ international shipments",
    "Implemented cost-saving measures resulting in 25% reduction in operational costs",
    "Developed and maintained relationships with key global logistics partners",
    "Certified member of the Institute of Chartered Shipbrokers",
  ],
}

export default function TeamSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("about")

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Leadership Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Guided by expertise, driven by excellence in global logistics and freight forwarding
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <Card className="overflow-hidden bg-white/70 backdrop-blur-md border-0 shadow-2xl rounded-3xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 p-6 sm:p-8">
              {/* Photo and Basic Info Column */}
              <div className="md:col-span-1 lg:col-span-2">
                <motion.div className="relative group" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
                    <img
                      src={director.image || "/nick.png"}
                      alt={director.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{director.name}</h3>
                    <p className="text-blue-200 text-lg sm:text-xl mb-2">{director.position}</p>
                    <div className="flex items-center text-gray-300 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {director.location}
                    </div>
                  </div>
                </motion.div>
                <div className="flex gap-3 mt-6">
                  <Button
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => setIsDialogOpen(true)}
                  >
                    View Full Profile
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="bg-white hover:bg-blue-50">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </Button>
                  <Button size="icon" variant="outline" className="bg-white hover:bg-blue-50">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </Button>
                </div>
              </div>

              {/* Details Column */}
              <div className="md:col-span-1 lg:col-span-3 space-y-6 sm:space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="text-2xl font-semibold text-blue-800 mb-4">About</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">{director.description}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 className="text-2xl font-semibold text-blue-800 mb-4">Key Achievements</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {director.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 bg-blue-50 rounded-lg p-4"
                      >
                        <Award className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h4 className="text-2xl font-semibold text-blue-800 mb-4">Recent Experience</h4>
                  <div className="space-y-4">
                    {director.experience.slice(0, 2).map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="flex items-start gap-3 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <Briefcase className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-semibold text-gray-900 text-lg">{exp.company}</h5>
                          <p className="text-blue-600 font-medium">{exp.position}</p>
                          <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl max-h-[90vh] overflow-y-auto mt-16 p-0 bg-gradient-to-br from-blue-50 to-white rounded-2xl">
            <DialogHeader className="p-4 sm:p-6 sticky mt-12 top-0 bg-white/80 backdrop-blur-md z-10 flex flex-row items-center justify-between">
              <div>
                <DialogTitle className="text-2xl sm:text-3xl mt-16 font-bold text-blue-800">{director.name}</DialogTitle>
                <DialogDescription className="text-lg sm:text-xl text-blue-600">{director.position}</DialogDescription>
              </div>
              <DialogClose asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <X className="h-6 w-6" />
                </Button>
              </DialogClose>
            </DialogHeader>

            <div className="p-4 sm:p-6">
              <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sticky top-24 bg-white/80 backdrop-blur-md z-10 py-4">
                {["about", "experience", "education"].map((tab) => (
                  <Button
                    key={tab}
                    variant={activeTab === tab ? "default" : "outline"}
                    onClick={() => setActiveTab(tab)}
                    className="capitalize text-sm sm:text-base"
                  >
                    {tab === "about" && <ExternalLink className="w-4 h-4 mr-2" />}
                    {tab === "experience" && <Briefcase className="w-4 h-4 mr-2" />}
                    {tab === "education" && <GraduationCap className="w-4 h-4 mr-2" />}
                    {tab}
                  </Button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {activeTab === "about" && (
                    <div className="grid gap-6">
                      <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{director.description}</p>
                      <div>
                        <h4 className="font-semibold text-blue-600 text-lg sm:text-xl mb-4">Key Achievements</h4>
                        <ul className="space-y-3">
                          {director.achievements.map((achievement, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-3 text-gray-700 bg-blue-50 p-3 rounded-lg text-sm sm:text-base"
                            >
                              <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === "education" && (
                    <div className="grid gap-4">
                      {director.education.map((edu, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Card className="overflow-hidden">
                            <CardContent className="p-4 bg-gradient-to-r from-blue-50 to-white">
                              <h4 className="font-semibold text-blue-700 text-base sm:text-lg">{edu.degree}</h4>
                              <p className="text-gray-700 text-sm sm:text-base">{edu.institution}</p>
                              <p className="text-sm text-gray-500 mt-1">{edu.year}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {activeTab === "experience" && (
                    <div className="grid gap-4">
                      {director.experience.map((exp, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Card className="overflow-hidden">
                            <CardContent className="p-4 bg-gradient-to-r from-blue-50 to-white">
                              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                                <h4 className="font-semibold text-blue-700 text-base sm:text-lg">{exp.company}</h4>
                                <span className="text-sm text-gray-500">{exp.period}</span>
                              </div>
                              <p className="font-medium text-gray-800 text-sm sm:text-base">{exp.position}</p>
                              <p className="text-gray-600 mt-2 text-sm sm:text-base">{exp.description}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

