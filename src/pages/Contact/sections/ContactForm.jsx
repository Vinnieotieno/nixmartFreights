"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Loader2, Send, MapPin, Phone, Mail, Globe, Truck, Ship, Plane } from "lucide-react"

// Form validation schema
const contactFormSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobileNumber: yup.string().required("Mobile number is required"),
  serviceType: yup.string().required("Service type is required"),
  message: yup.string().required("Message is required"),
})

const contactCards = [
  {
    icon: MapPin,
    title: "Our Office",
    desc: "Visit our main logistics hub",
    location: "Donholm Business Center, Nairobi, Kenya",
  },
  {
    icon: Phone,
    title: "Phone",
    desc: "24/7 Customer Support",
    contact: "+254 704 428 003",
  },
  {
    icon: Mail,
    title: "Email",
    desc: "Get in touch for inquiries",
    contact: "info@nixmart.co.ke",
  },
  {
    icon: Globe,
    title: "Global Network",
    desc: "Our worldwide presence",
    locations: ["East Africa", "Europe", "Asia", "Americas"],
  },
]

const serviceTypes = [
  { icon: Truck, label: "Road Freight" },
  { icon: Ship, label: "Sea Freight" },
  { icon: Plane, label: "Air Freight" },
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const form = useForm({
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      serviceType: "",
      message: "",
    },
    mode: "onSubmit",
  })

  async function onSubmit(values) {
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulating an API call
      console.log(values)
      toast({
        title: "Message Sent!",
        description: "Our team will contact you shortly about your " + values.serviceType + " inquiry.",
      })
      form.reset()
      setSelectedService(null)
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-br from-blue-50 to-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-4 text-blue-600"
      >
        Connect with Nixmart
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xl text-center text-gray-600 mb-12"
      >
        Let's discuss how we can optimize your Supply Chain.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-700">Request a Quote</CardTitle>
            <CardDescription>
              Tell us about your freight forwarding needs and we'll get back to you promptly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mobileNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+254 700 000 000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Type</FormLabel>
                      <div className="flex space-x-4">
                        {serviceTypes.map((service, index) => (
                          <Button
                            key={index}
                            type="button"
                            variant={field.value === service.label ? "default" : "outline"}
                            className={`flex-1 ${field.value === service.label ? "bg-blue-600 text-white" : "text-blue-600"}`}
                            onClick={() => {
                              field.onChange(service.label)
                              setSelectedService(service.label)
                            }}
                          >
                            {React.createElement(service.icon, { className: "mr-2 h-4 w-4" })}
                            {service.label}
                          </Button>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your shipment needs"
                          className="resize-none"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Request Quote
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {contactCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-blue-100">
                      {React.createElement(card.icon, { className: "h-6 w-6 text-blue-600" })}
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-blue-700">{card.title}</CardTitle>
                      <CardDescription>{card.desc}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {card.location && <p className="text-sm text-gray-600">{card.location}</p>}
                  {card.contact && (
                    <a
                      href={card.title === "Email" ? `mailto:${card.contact}` : `tel:${card.contact}`}
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      {card.contact}
                    </a>
                  )}
                  {card.locations && (
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {card.locations.map((location, idx) => (
                        <li key={idx}>{location}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

