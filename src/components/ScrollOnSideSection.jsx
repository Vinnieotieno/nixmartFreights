import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import whatsapp from "@/assets/whatsapp.svg";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="flex flex-col space-y-5 items-center fixed bottom-10 left-2 z-[9999]">
      <a 
        href="https://wa.me/254797398004" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="rounded-full hover:opacity-80 transition-opacity"
        aria-label="Contact us on WhatsApp"
      >
        <img 
          src={whatsapp} 
          width={70} 
          height={70} 
          alt="WhatsApp Link" 
          onError={(e) => {
            console.error("Error loading WhatsApp icon");
            e.target.style.display = 'none';
          }} 
        />
      </a>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="p-2 rounded-full bg-green-500 hover:bg-green-500 transition-colors"
          aria-label="Back to Top"
        >
          <ChevronUp className="text-green w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;