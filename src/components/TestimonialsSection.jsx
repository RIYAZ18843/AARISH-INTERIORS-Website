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
          subtitle="Hear what our clients have to say about their experience working with Aarish Interiors to create their dream spaces."
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {siteData.testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TestimonialCard 
                name={testimonial.name}
                review={testimonial.review}
                youtubeId={testimonial.youtubeId}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mb-10">
          {[0, 1, 2].map((_, index) => (
            <button 
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-primary w-8' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" className="px-10 py-3 tracking-wide">View All Videos</Button>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
