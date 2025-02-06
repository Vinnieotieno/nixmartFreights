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
      link: "https://www.facebook.com/share/nTLPNRVhhM3pYzgS/?mibextid=qi2Omg",
    },
    
    {
      icon: Twitter,
      link: "https://www.instagram.com/worldwings609?igsh=c2wyNjg4NGxpb3Nx",
    },
    {
      icon: Linkedin,
      link: "https://www.instagram.com/worldwings609?igsh=c2wyNjg4NGxpb3Nx",
    
    },
    {
      icon: Youtube,
      link: "https://www.instagram.com/worldwings609?igsh=c2wyNjg4NGxpb3Nx",
    },
  ],
};