import React from 'react';
import { siteData } from '../data/siteData';
import Container from './Common/Container';
import SectionTitle from './Common/SectionTitle';
import FeatureCard from './Common/FeatureCard';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <Container>
        <SectionTitle 
          title="Why Choose Aarish Interiors" 
          subtitle="We bring expertise, creativity, and dedication to every project, ensuring results that exceed expectations."
        />
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          {siteData.features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard 
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
