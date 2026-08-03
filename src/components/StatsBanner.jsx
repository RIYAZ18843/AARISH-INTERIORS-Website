import React from 'react';
import { siteData } from '../data/siteData';
import Container from './Common/Container';
import StatCard from './Common/StatCard';
import Button from './Common/Button';
import { motion } from 'framer-motion';

const StatsBanner = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-darkGreen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Interior Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20"></div>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-white text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-8 leading-tight">
              Transform Your Space With Aarish Interiors
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              With years of expertise and a passion for design, we create environments that inspire and elevate your lifestyle.
            </p>
            <Button variant="secondary" className="px-10 py-4 text-primary bg-white hover:bg-gray-100 font-bold tracking-wide">
              Get in Touch
            </Button>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-6 md:gap-8"
          >
            {siteData.stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <StatCard value={stat.value} label={stat.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default StatsBanner;
