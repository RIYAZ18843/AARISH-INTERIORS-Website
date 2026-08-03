import React from 'react';
import { siteData } from '../data/siteData';
import Container from './Common/Container';
import Button from './Common/Button';
import { motion } from 'framer-motion';

const AboutFlowInterio = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          src={siteData.aboutImage} 
          alt="About Aarish Interiors" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/60"></div>
      </div>
      
      <Container className="relative z-10 text-center text-white">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto backdrop-blur-sm bg-white/5 p-12 rounded-2xl border border-white/10 shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8">
            About Aarish Interiors
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
            With a passion for design and a commitment to excellence, Aarish Interiors has been transforming spaces into extraordinary environments. Our comprehensive approach ensures every project is a masterpiece of form and function.
          </p>
          <Button variant="primary" className="px-10 py-4 text-lg tracking-wide">
            Read Our Story
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutFlowInterio;
