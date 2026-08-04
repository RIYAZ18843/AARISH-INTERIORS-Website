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

  // Duplicate for seamless infinite loop
  const marqueeItems = [...siteData.testimonials, ...siteData.testimonials];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        <SectionTitle 
          title="Client Testimonials" 
          subtitle="See what our valued clients have to say about their journey with Aarish Interiors. Every project reflects our commitment to quality, creativity, and customer satisfaction."
        />
      </Container>
        
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative mt-8 max-w-[100vw] overflow-hidden flex group"
      >
        {/* Fading Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Pure CSS Continuous Marquee Track */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {marqueeItems.map((testimonial, index) => (
            <div 
              key={index} 
              className="w-[85vw] sm:w-[320px] md:w-[340px] flex-shrink-0 mx-3 md:mx-4"
            >
              <TestimonialCard 
                name={testimonial.name}
                project={testimonial.project}
                youtubeId={testimonial.youtubeId}
              />
            </div>
          ))}
        </div>
      </motion.div>

      <Container>
        <div className="text-center mt-12">
          <Button variant="primary" className="px-10 py-3 tracking-wide">View All Videos</Button>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
