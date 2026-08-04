import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import Container from './Common/Container';
import SectionTitle from './Common/SectionTitle';
import TestimonialCard from './Common/TestimonialCard';
import Button from './Common/Button';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
    <section className="py-24 bg-white relative">
      <Container>
        <SectionTitle 
          title="Client Testimonials" 
          subtitle="See what our valued clients have to say about their journey with Aarish Interiors. Every project reflects our commitment to quality, creativity, and customer satisfaction."
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 mb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {siteData.testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="min-w-[85vw] sm:min-w-[350px] md:min-w-[400px] flex-shrink-0 snap-center"
            >
              <TestimonialCard 
                name={testimonial.name}
                project={testimonial.project}
                youtubeId={testimonial.youtubeId}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button variant="primary" className="px-10 py-3 tracking-wide">View All Videos</Button>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
