import React from 'react';
import { siteData } from '../data/siteData';
import Container from './Common/Container';
import SectionTitle from './Common/SectionTitle';
import ServiceCard from './Common/ServiceCard';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-lightBeige">
      <Container>
        <SectionTitle 
          title="Complete Interior Design Services" 
          subtitle="From concept to completion, we offer a full spectrum of interior design services to transform your spaces."
        />
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {siteData.services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard 
                image={service.image}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesSection;
