import React, { useState, useEffect } from 'react';
import Container from './Common/Container';
import { motion, AnimatePresence } from 'framer-motion';

const defaultImages = [
  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2000&auto=format&fit=crop"
];

const PageHeader = ({ title, subtitle, imagePaths = defaultImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = Array.isArray(imagePaths) ? imagePaths : [imagePaths];

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-darkGreen">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode='wait'>
          <motion.img 
            key={currentIndex}
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={images[currentIndex]}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
      </div>

      <Container>
        <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-block px-8 py-10 md:px-16 md:py-12 bg-black/40 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-medium mb-6"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
            
            {/* Decorative line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)]"
            ></motion.div>
          </div>
        </div>
      </Container>

      {/* Hidden preloader to cache images for smooth transitions */}
      <div className="hidden">
        {imagePaths.map((src, idx) => (
          <img key={`preload-${idx}`} src={src} alt="" aria-hidden="true" />
        ))}
      </div>
    </section>
  );
};

export default PageHeader;
