'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { immigrationServices } from '@/constants/servicepage';
import { Search, ArrowRight, Star } from 'lucide-react';

export default function Service() {
  const [services, setServices] = useState(immigrationServices);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [featuredService, setFeaturedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const featured = immigrationServices.find(service => service.featured);
    setFeaturedService(featured);
  }, []);

  useEffect(() => {
    let filteredServices = immigrationServices;
    if (searchTerm) {
      filteredServices = filteredServices.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory !== 'all') {
      filteredServices = filteredServices.filter(service => service.category === selectedCategory);
    }
    setServices(filteredServices);
  }, [searchTerm, selectedCategory]);

  const categories = ['all', ...new Set(immigrationServices.map(service => service.category || 'Uncategorized'))];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore our <span className="text-green-500">Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock the potential of global opportunities with our Logistics Services. We take pride in facilitating and fast-tracking the following services:
          </p>
        </div>

        {/* Featured Service */}
        {featuredService && (
          <div className="mb-16">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredService.img}
                    alt={featuredService.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <Star className="text-yellow-400 mr-2" />
                      <h3 className="text-2xl font-bold">Featured Service</h3>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{featuredService.title}</h4>
                    <p className="text-gray-600 mb-4">{featuredService.desc}</p>
                  </div>
                  <Link to={`/services/${featuredService.id}`}>
                    <Button className="w-full text-green-600 hover:bg-green-700">
                      Learn More <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category ? category.charAt(0).toUpperCase() + category.slice(1) : "Uncategorized"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-semibold">
                  {React.createElement(service.icon, { className: "mr-2" })}
                  {service.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">{service.desc}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <Button variant="outline" onClick={() => openModal(service)}>Quick View</Button>
                <Link to={`/services/${service.id}`}>
                  <Button className="text-green-600 hover:bg-green-700">Read More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="mt-12 text-center">
          <Link to="/services">
            <Button size="lg">
              View All Services <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* Service Preview Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          {selectedService && (
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{selectedService.title}</DialogTitle>
                <DialogDescription>
                  {React.createElement(selectedService.icon, { className: "mb-2" })}
                  {selectedService.desc}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={selectedService.img}
                  alt={selectedService.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <DialogFooter className="mt-4">
                <Button onClick={closeModal} variant="outline">Close</Button>
                <Link to={`/services/${selectedService.id}`}>
                  <Button>Learn More</Button>
                </Link>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </div>
  );
}
