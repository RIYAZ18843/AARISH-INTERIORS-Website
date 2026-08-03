import React from 'react';
import { siteData } from '../data/siteData';
import Container from './Common/Container';
import SectionTitle from './Common/SectionTitle';
import SolutionCard from './Common/SolutionCard';
import Button from './Common/Button';
import { motion } from 'framer-motion';

const SolutionsGrid = () => {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <SectionTitle 
          title="Our End to End Solutions" 
          subtitle="Comprehensive design and execution for every part of your home."
        />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-6 mt-16 mb-16"
        >
          {siteData.solutions.map((solution, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
              }}
            >
              <SolutionCard 
                icon={solution.icon}
                label={solution.label}
                image={solution.image}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button variant="primary" className="px-10">
            View All Solutions
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default SolutionsGrid;
