import logo from '@/assets/logo.png'
import { Facebook, Instagram, Twitter, Linkedin, Youtube,  } from 'lucide-react';

export const navbaritems = {
  logo: logo,
  navItems: [
    { link: 'Home', path: '/' },
    { link: 'Services', path: '/services', dropdown: true },
    { link: 'About', path: '/about-us' },
    { link: 'Contact', path: '/contact-us' },
    
    


  ],
};


export const footerItems = {
  brand: logo,
  text1: "We are Nixmart Freight Forwarding.",
  text2: " 2025. All rights reserved.",
  socials: [
    {
      icon: Facebook,
      link: "",
    },
    
    {
      icon: Twitter,
      link: "",
    },
    {
      icon: Linkedin,
      link: "",
    
    },
    {
      icon: Youtube,
      link: "",
    },
  ],
};