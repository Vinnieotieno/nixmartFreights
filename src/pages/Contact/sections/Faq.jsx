"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { Card, CardHeader } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Search, Truck, Ship, Plane } from "lucide-react";

const faqs = [
  {
    question: "What freight forwarding services does Nixmart offer?",
    answer:
      "Nixmart offers comprehensive freight forwarding services including air freight, sea freight, road transport, customs clearance, warehousing, and supply chain solutions across East Africa and globally.",
  },
  {
    question: "How does Nixmart ensure the safety of goods during transportation?",
    answer:
      "We prioritize cargo safety through advanced tracking systems, secure packaging, and partnerships with reliable carriers. Our team is trained in handling various types of goods, and we offer cargo insurance for additional peace of mind.",
  },
  {
    question: "Can Nixmart handle customs clearance for international shipments?",
    answer:
      "Yes, Nixmart provides expert customs clearance services. Our team is well-versed in international trade regulations and can efficiently manage documentation, duties, and taxes to ensure smooth cross-border transactions.",
  },
  {
    question: "What tracking options are available for my shipments?",
    answer:
      "Nixmart offers real-time tracking for all shipments. Clients can access our online portal or mobile app to view live updates, estimated arrival times, and any relevant documentation for their cargo.",
  },
  {
    question: "Does Nixmart offer warehousing and distribution services?",
    answer:
      "Yes, we provide comprehensive warehousing and distribution services. Our state-of-the-art facilities offer secure storage, inventory management, and efficient distribution to support your supply chain needs.",
  },
  {
    question: "How does Nixmart handle time-sensitive or urgent shipments?",
    answer:
      "We offer express and time-critical logistics solutions for urgent shipments. Our team can arrange expedited air freight, dedicated road transport, or other specialized services to meet tight deadlines.",
  },
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [helpfulFeedback, setHelpfulFeedback] = useState({});

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFeedback = (idx, isHelpful) => {
    setHelpfulFeedback((prev) => ({
      ...prev,
      [idx]: isHelpful,
    }));
  };

  return (
    <div className="py-16 bg-gradient-to-b from-blue-100 to-white">
      <Helmet>
        <title>Nixmart Logistics FAQ | Your Questions Answered</title>
        <meta name="description" content="Find answers to common questions about Nixmart's logistics and freight forwarding services." />
        <meta name="keywords" content="freight forwarding, logistics, shipping services, Nixmart" />
      </Helmet>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold text-center text-blue-900">Frequently Asked Questions</h1>
          <p className="text-lg text-center text-gray-600 mt-4">Everything you need to know about our logistics solutions.</p>
          <div className="mt-6 max-w-xl mx-auto relative">
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border-blue-200 focus:border-blue-500 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
          </div>
        </motion.div>

        <motion.div className="mt-10 max-w-4xl mx-auto">
          <Card className="shadow-lg border-blue-100">
            <CardHeader>
              <Accordion type="single" collapsible className="w-full">
                <AnimatePresence>
                  {filteredFaqs.map((faq, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                      <AccordionItem value={`item-${idx}`}>
                        <AccordionTrigger className="text-lg font-semibold text-blue-800 hover:text-blue-600">{faq.question}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-600 mb-4">{faq.answer}</p>
                          <div className="flex justify-between mt-4">
                            <span className="text-sm text-gray-500">Was this helpful?</span>
                            <div className="space-x-2">
                              <Button variant="outline" size="sm" onClick={() => handleFeedback(idx, true)} className={`border-blue-200 hover:bg-blue-50 ${helpfulFeedback[idx] === true ? "bg-blue-100 text-blue-700" : ""}`}>
                                <ThumbsUp className="h-4 w-4 mr-2" /> Yes
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => handleFeedback(idx, false)} className={`border-blue-200 hover:bg-blue-50 ${helpfulFeedback[idx] === false ? "bg-blue-100 text-blue-700" : ""}`}>
                                <ThumbsDown className="h-4 w-4 mr-2" /> No
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
  );
};

export default FAQ;
