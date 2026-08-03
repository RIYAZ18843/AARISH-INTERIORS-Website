import React from 'react';
import { siteData } from '../data/siteData';
import Container from './Common/Container';
import SectionTitle from './Common/SectionTitle';
import Button from './Common/Button';
import { motion } from 'framer-motion';

const ExperienceCenter = () => {
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

          {/* Right Images */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex gap-6"
          >
            <div className="w-1/2 mt-12 relative group overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={siteData.experienceCenter.images[0]} 
                alt="Experience Center 1" 
                className="w-full h-auto object-cover aspect-[4/5] transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="w-1/2 mb-12 relative group overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={siteData.experienceCenter.images[1]} 
                alt="Experience Center 2" 
                className="w-full h-auto object-cover aspect-[4/5] transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceCenter;
