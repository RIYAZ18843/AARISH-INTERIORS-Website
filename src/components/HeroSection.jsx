import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import Container from './Common/Container';

const heroImages = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop", // Elegant living room
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop", // Luxury modern kitchen
  "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=2000&auto=format&fit=crop"  // Premium bedroom
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 8000); // Increased wait time so users can see the image
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] flex items-center pt-32 overflow-hidden bg-darkGreen">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode='wait'>
          <motion.img 
            key={currentIndex}
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={heroImages[currentIndex]} 
            alt="Luxury Interior" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-darkGreen/90 via-darkGreen/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div> {/* Extra dimming for text readability */}
      </div>

      {/* Hero Content Overlay */}
      <Container className="relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-white font-medium leading-tight mb-6"
          >
            {siteData.hero.headline}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-2xl"
          >
            {siteData.hero.subheading}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium hover:bg-primary/90 transition-colors rounded-none shadow-lg">
              Book a Consultation
            </a>
            <a href="/portfolio" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border border-white hover:bg-white hover:text-darkGreen transition-colors rounded-none">
              View Our Work
            </a>
          </motion.div>
        </div>
      </Container>
      
      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        href="https://wa.me/919876543210?text=Hello%20Aarish%20Interiors!%20%F0%9F%91%8B%0AI%20am%20looking%20for%20interior%20design%20services%20for%20my%20property%3A%0A%0A%5B%20%5D%201%20BHK%0A%5B%20%5D%202%20BHK%0A%5B%20%5D%203%20BHK%2B%0A%5B%20%5D%20Villa%0A%0APlease%20share%20more%20details." 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        <FaWhatsapp className="w-8 h-8 text-white" />
      </motion.a>

      {/* Hidden preloader to cache images for smooth transitions */}
      <div className="hidden">
        {heroImages.map((src, idx) => (
          <img key={`preload-${idx}`} src={src} alt="" aria-hidden="true" />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
