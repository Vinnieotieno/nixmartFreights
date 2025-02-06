import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Loader2, Send, MapPin, Phone, Mail, Globe } from "lucide-react"

// Form validation schema
const contactFormSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobileNumber: yup.string().required("Mobile number is required"),
  message: yup.string().required("Message is required"),
})

const contactCards = [
  {
    icon: MapPin,
    title: "Our Office",
    desc: "Visit us at our main office",
    location: "123 Business Avenue, Tech City, TC 12345",
  },
  {
    icon: Phone,
    title: "Phone",
    desc: "Mon-Fri from 8am to 5pm",
    contact: "+1 (555) 000-0000",
  },
  {
    icon: Mail,
    title: "Email",
    desc: "Our friendly team is here to help",
    contact: "hello@example.com",
  },
  {
    icon: Globe,
    title: "Social Media",
    desc: "Follow us on social media",
    socials: [
      { name: "Twitter", url: "https://twitter.com" },
      { name: "Facebook", url: "https://facebook.com" },
      { name: "Instagram", url: "https://instagram.com" },
    ],
  },
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm({
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      message: "",
    },
    mode: "onSubmit",
  })

  async function onSubmit(values) {
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating an API call
      console.log(values)
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      })
      form.reset()
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
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-green-600">Get in Touch</h1>
      <p className="text-xl text-center text-muted-foreground mb-12">We'd love to hear from you. Let us know how we can help.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
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
                          <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can we help you?" className="resize-none" rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
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
            <Card key={idx}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    {React.createElement(card.icon, { className: "h-6 w-6 text-primary" })}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold">{card.title}</CardTitle>
                    <CardDescription>{card.desc}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {card.location && <p className="text-sm text-muted-foreground">{card.location}</p>}
                {card.contact && (
                  <a href={card.title === "Email" ? `mailto:${card.contact}` : `tel:${card.contact}`} className="text-sm font-medium text-primary hover:underline">
                    {card.contact}
                  </a>
                )}
                {card.socials && (
                  <div className="flex space-x-4">
                    {card.socials.map((social, idx) => (
                      <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
                        {social.name}
                      </a>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
