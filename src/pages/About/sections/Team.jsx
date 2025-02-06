import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { ourTeam } from '@/constants/aboutpage';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-100">
      <motion.h1 
        className="text-3xl md:text-5xl text-brandRed font-bold text-center mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        MEET THE TEAM
      </motion.h1>

      <motion.p 
        className="text-gray-600 text-lg text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Our experienced team is always ready to serve and innovate.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {ourTeam.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="overflow-hidden group cursor-pointer" onClick={() => setSelectedMember(member)}>
              <div className="relative overflow-hidden">
                <img 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
                  src={member.img} 
                  alt={member.name} 
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">Click to view details</p>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-1 text-gray-800">{member.name}</h3>
                <CardDescription className="text-sm uppercase text-brandRed mb-3">{member.position}</CardDescription>
                <p className="text-gray-600 line-clamp-3">{member.desc}</p>
              </CardContent>
              <CardFooter className="bg-gray-50 p-4">
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Twitter className="h-5 w-5 text-blue-400" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5 text-gray-600" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedMember && (
          <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{selectedMember.name}</DialogTitle>
                <DialogDescription>{selectedMember.position}</DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img 
                  src={selectedMember.img} 
                  alt={selectedMember.name} 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600">{selectedMember.desc}</p>
              </div>
              <div className="mt-6 flex justify-center space-x-4">
                <Button variant="outline">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Team;