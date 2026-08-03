import React from 'react';
import Container from './Common/Container';
import { motion } from 'framer-motion';

const OurMission = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-primary font-serif italic text-xl mb-4">Our Mission & Vision</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-heading mb-8 leading-tight">
              Crafting Spaces That Tell Your Unique Story
            </h2>
            <div className="space-y-6 text-lg text-text font-light leading-relaxed">
              <p>
                At Aarish Interiors, our mission is to redefine luxury living through innovative design, meticulous craftsmanship, and an unwavering commitment to our clients' unique visions. We believe that your home should be the ultimate reflection of your personality and lifestyle.
              </p>
              <p>
                Our vision is to be the premier interior design firm recognized for transforming ordinary spaces into extraordinary masterpieces. We strive to set new standards in the industry by blending timeless elegance with modern functionality, ensuring every project we deliver is a testament to our passion for perfection.
              </p>
            </div>
          </motion.div>

          {/* Right Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop" 
                alt="Interior Detail 1" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop" 
                alt="Interior Detail 2" 
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop" 
                alt="Interior Detail 3" 
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop" 
                alt="Interior Detail 4" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default OurMission;
