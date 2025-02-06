'use client'

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, BookOpen } from "lucide-react"

export default function LearnMoreSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    // Here you would typically send the email and message to your backend
    console.log("Submitted:", { email, message })
    setIsSubmitting(false)
    setIsModalOpen(false)
    setEmail("")
    setMessage("")
  }

  return (
    <div className="my-16">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-white font-bold text-3xl mb-4 flex items-center justify-center md:justify-start">
              <BookOpen className="mr-2 h-8 w-8" />
              Dive Deeper into This Topic
            </h2>
            <p className="text-green-100 text-lg mb-6">
              Our expert authors are ready to share more insights. Connect with us to explore this subject further and get your questions answered.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white bg-opacity-20 text-white placeholder-green-200 border-green-300 focus:border-white"
              />
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-green-600 hover:bg-green-100 font-semibold py-2 px-6 rounded-md flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto">
            <img 
              src="/profile2.jpg?height=200&width=200" 
              alt="Learn More" 
              className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Get in Touch</DialogTitle>
            <DialogDescription>
              Send us your questions or comments about this topic. We'll get back to you soon!
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="message" className="text-right">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="col-span-3"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}