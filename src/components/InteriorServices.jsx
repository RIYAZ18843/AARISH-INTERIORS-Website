import React from 'react';
import { siteData } from '../data/siteData';
import Container from './Common/Container';
import SectionTitle from './Common/SectionTitle';
import ServiceCard from './Common/ServiceCard';
import { motion } from 'framer-motion';
import Button from './Common/Button';

const InteriorServices = () => {
  // Taking the first 3 services for this specific section based on the design
  const servicesToShow = siteData.services.slice(0, 3);

  return (
    <section className="py-24 bg-lightBeige overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3 lg:pr-8 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-heading mb-6 leading-tight">
              Aarish Interiors Design Services
            </h2>
            <p className="text-text mb-10 text-lg leading-relaxed font-light">
              We specialize in creating bespoke interior designs that perfectly blend aesthetics and functionality, tailored to your unique lifestyle.
            </p>
            <div>
              <Button variant="primary" className="px-10 py-3 tracking-wide">
                View All Services
              </Button>
            </div>
          </motion.div>

          {/* Right Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesToShow.slice(0, 2).map((service, index) => (
                <ServiceCard 
                  key={index}
                  image={service.image}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
            {/* Dots for carousel indication */}
            <div className="flex justify-center mt-10 gap-3">
              <div className="w-3 h-3 rounded-full bg-primary shadow-md"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default InteriorServices;
