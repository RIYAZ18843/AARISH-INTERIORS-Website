import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import Container from './Common/Container';

import heroVideo from '../assets/Aarish_Interiors_sign_in_living_202608161741.mp4';

const HeroSection = () => {

  return (
    <section className="relative flex flex-col min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-white md:bg-darkGreen">
      {/* Mobile Banner Video / Desktop Full Background */}
      <div className="relative md:absolute inset-0 z-0 w-full h-[35vh] md:h-full flex-shrink-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover object-top"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-darkGreen/90 via-darkGreen/40 to-transparent"></div>
        <div className="hidden md:block absolute inset-0 bg-black/20"></div> {/* Extra dimming for text readability */}
      </div>

      {/* Hero Content Overlay */}
      <Container className="relative z-10 w-full flex-grow flex flex-col justify-center md:justify-end pt-10 md:pt-0 md:pb-12">
        <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.2
                }
              }
            }}
            className="mb-6 flex flex-wrap justify-center md:justify-start"
          >
            {siteData.hero.headline.split(" ").map((word, index) => (
              <span key={index} className="inline-block mr-3 overflow-hidden">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={{
                      hidden: { y: "100%", opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { ease: [0.215, 0.610, 0.355, 1.000], duration: 0.8 } }
                    }}
                    className="inline-block text-4xl md:text-5xl lg:text-7xl font-serif text-heading md:text-white font-medium leading-tight"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-text md:text-white/90 mb-10 font-light max-w-2xl mx-auto md:mx-0"
          >
            {siteData.hero.subheading}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium hover:bg-primary/90 transition-colors rounded-none shadow-lg">
              Book a Consultation
            </a>
            <a href="/portfolio" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-primary border border-primary md:text-white md:border-white hover:bg-primary hover:text-white md:hover:bg-white md:hover:text-darkGreen transition-colors rounded-none">
              View Our Work
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
