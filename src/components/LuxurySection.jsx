import React from 'react';
import { siteData } from '../data/siteData';
import Container from './Common/Container';
import Button from './Common/Button';
import { motion } from 'framer-motion';

const LuxurySection = () => {
  return (
    <section className="py-24 bg-lightBeige overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-heading mb-6 leading-tight">
              {siteData.luxurySection.headline}
            </h2>
            <p className="text-lg text-text mb-10 leading-relaxed">
              {siteData.luxurySection.text}
            </p>
            <Button variant="primary" className="px-10 py-3 tracking-wide">
              Explore Our Process
            </Button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img 
                src={siteData.luxurySection.image} 
                alt="Luxury Interior" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default LuxurySection;
