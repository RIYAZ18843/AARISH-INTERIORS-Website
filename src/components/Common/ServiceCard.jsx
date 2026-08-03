import React, { useState, useEffect } from 'react';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceCard = ({ images, title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageArray = Array.isArray(images) ? images : [images];

  useEffect(() => {
    if (imageArray.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 4000); // 4 seconds per slide for cards
    return () => clearInterval(timer);
  }, [imageArray.length]);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full group border border-gray-100">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            src={imageArray[currentIndex]} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      </div>
      <div className="p-8 flex flex-col flex-grow text-center">
        <h3 className="text-2xl font-serif font-medium text-heading mb-4">{title}</h3>
        <p className="text-text mb-8 flex-grow text-sm leading-relaxed">{description}</p>
        <div className="mt-auto">
          <Button variant="primary" className="w-full sm:w-auto px-8 py-3 text-sm tracking-wide">
            Discover More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
