'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Truck, Ship, Plane, FileText, Clock, Globe } from 'lucide-react';

const planningSteps = [
  { icon: FileText, title: "Documentation", description: "Prepare and verify all necessary shipping documents" },
  { icon: Globe, title: "Route Planning", description: "Determine the most efficient and cost-effective shipping routes" },
  { icon: Truck, title: "Transportation Mode", description: "Select the appropriate mode(s) of transport for the cargo" },
  { icon: Clock, title: "Scheduling", description: "Coordinate pickup, transit, and delivery timelines" },
  { icon: Ship, title: "Customs Clearance", description: "Manage customs procedures and compliance requirements" },
  { icon: Plane, title: "Risk Assessment", description: "Identify and mitigate potential risks in the shipping process" }
];

const PlanningProcess = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Planning Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Nixmart, we ensure seamless freight forwarding through our meticulous planning process, 
            designed to optimize every step of your shipment's journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {planningSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <step.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Global Freight Forwarding" 
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </Card>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-semibold">Efficient & Reliable</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">
            Start Your Shipment <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PlanningProcess;