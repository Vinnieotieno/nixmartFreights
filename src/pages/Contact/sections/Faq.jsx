'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Search } from 'lucide-react';
import { faqs } from "@/constants/contactpage";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [helpfulFeedback, setHelpfulFeedback] = useState({});

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFeedback = (idx, isHelpful) => {
    setHelpfulFeedback(prev => ({
      ...prev,
      [idx]: isHelpful
    }));
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="md:flex w-full items-start lg:space-x-10">
          {/* Sticky FAQ Search Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:sticky md:top-28 md:w-4/12 mb-8 md:mb-0 z-40"  // Adjusted z-index for FAQ section
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-brandRed">Questions</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Get the answers to the most common questions about our services.
            </p>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Showing {filteredFaqs.length} of {faqs.length} questions
            </div>
          </motion.div>

          {/* FAQ Accordion Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-8/12 w-full z-10" // Lower z-index to respect navbar
          >
            <Card className="shadow-lg">
              <CardHeader>
                <Accordion type="single" collapsible className="w-full">
                  <AnimatePresence>
                    {filteredFaqs.map((faq, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <AccordionItem value={`item-${idx}`}>
                          <AccordionTrigger className="text-lg font-semibold">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-gray-600 mb-4">{faq.answer}</p>
                            <div className="flex items-center justify-between mt-4">
                              <div className="text-sm text-gray-500">Was this answer helpful?</div>
                              <div className="space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleFeedback(idx, true)}
                                  className={helpfulFeedback[idx] === true ? 'bg-green-100' : ''}
                                >
                                  <ThumbsUp className="h-4 w-4 mr-2" />
                                  Yes
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleFeedback(idx, false)}
                                  className={helpfulFeedback[idx] === false ? 'bg-red-100' : ''}
                                >
                                  <ThumbsDown className="h-4 w-4 mr-2" />
                                  No
                                </Button>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </Accordion>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
