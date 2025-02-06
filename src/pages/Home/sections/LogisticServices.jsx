import React from 'react';
import { Plane, Ship, Warehouse, FileCheck, ShoppingCart, Package, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const ServiceCard = ({ Icon, label }) => (
  <Card className="flex items-center gap-4 p-4 transition-all hover:shadow-lg hover:-translate-y-1">
    <div className="bg-green-400 p-2 rounded-full">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <div className="text-sm font-medium text-gray-800">{label}</div>
  </Card>
);

const ShippingServices = () => {
  const services = [
    { Icon: Plane, label: "Air Freight" },
    { Icon: Ship, label: "Sea Freight" },
    { Icon: Warehouse, label: "Warehouse" },
    { Icon: FileCheck, label: "Custom Clearance" },
    { Icon: ShoppingCart, label: "E-commerce" },
    { Icon: Package, label: "Consolidation" },
    { Icon: MoreHorizontal, label: "More" }
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100 -mt-12 relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-red-600">
                FOR ALL YOUR SHIPMENT SERVICES
              </h2>
              <p className="text-gray-600 md:text-lg">
                Learn about Globeflight – the undisputed global leader in international express shipping.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="font-semibold text-xl text-red-600">Services Available</h3>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {services.map((service, index) => (
                  <ServiceCard key={index} Icon={service.Icon} label={service.label} />
                ))}
              </div>
            </div>
            <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white">
              Explore Globeflight Service
            </Button>
          </div>
          <div className="relative">
            <Card className="overflow-hidden">
              <img
                alt="Globeflight courier delivering a package to a customer"
                className="w-full h-full object-cover"
                src="/globe1.jpg?height=720&width=1280"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-red-800/20 to-green-400/20"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingServices;