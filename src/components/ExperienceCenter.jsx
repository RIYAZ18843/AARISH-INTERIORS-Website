import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';
import Container from './Common/Container';
import SectionTitle from './Common/SectionTitle';
import Button from './Common/Button';
import { motion, AnimatePresence } from 'framer-motion';

const ExperienceCenter = () => {
  const [index2, setIndex2] = useState(0);
  const images2 = siteData.experienceCenter.images[1];

  useEffect(() => {
    const timer2 = setInterval(() => {
      setIndex2((prev) => (prev + 1) % images2.length);
    }, 7000);

    return () => {
      clearInterval(timer2);
    };
  }, [images2.length]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <SectionTitle title="Visit Our Experience Center" />
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h3 className="text-3xl md:text-4xl font-serif font-medium text-heading mb-6 leading-snug">
              Immerse Yourself in the World of Interior Design
            </h3>
            <p className="text-lg text-text mb-10 leading-relaxed">
              {siteData.experienceCenter.text}
            </p>
            <Button variant="primary" className="px-10 py-3 tracking-wide">
              Book a Visit
            </Button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex"
          >
            <div className="w-full relative group overflow-hidden rounded-2xl shadow-2xl bg-gray-100 aspect-video lg:aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={index2}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  src={images2[index2]} 
                  alt="Experience Center" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceCenter;
