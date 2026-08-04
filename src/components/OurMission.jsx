import React, { useState, useEffect } from 'react';
import Container from './Common/Container';
import { motion, AnimatePresence } from 'framer-motion';

const images1 = [
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=600&auto=format&fit=crop"
];

const images2 = [
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop"
];

const images3 = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687126-8a3414349a51?q=80&w=600&auto=format&fit=crop"
];

const images4 = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop"
];

const OurMission = () => {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [index4, setIndex4] = useState(0);

  useEffect(() => {
    // Different intervals so they don't all change at exactly the same time, looking more organic
    const t1 = setInterval(() => setIndex1((prev) => (prev + 1) % images1.length), 4000);
    const t2 = setInterval(() => setIndex2((prev) => (prev + 1) % images2.length), 5000);
    const t3 = setInterval(() => setIndex3((prev) => (prev + 1) % images3.length), 6000);
    const t4 = setInterval(() => setIndex4((prev) => (prev + 1) % images4.length), 4500);
    
    return () => { 
      clearInterval(t1); 
      clearInterval(t2); 
      clearInterval(t3); 
      clearInterval(t4); 
    };
  }, []);
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
              <div className="relative w-full h-64 overflow-hidden rounded-2xl shadow-lg bg-gray-100">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={index1}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    src={images1[index1]} 
                    alt="Interior Detail 1" 
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </AnimatePresence>
              </div>
              <div className="relative w-full h-48 overflow-hidden rounded-2xl shadow-lg bg-gray-100">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={index2}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    src={images2[index2]} 
                    alt="Interior Detail 2" 
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </AnimatePresence>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative w-full h-48 overflow-hidden rounded-2xl shadow-lg bg-gray-100">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={index3}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    src={images3[index3]} 
                    alt="Interior Detail 3" 
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </AnimatePresence>
              </div>
              <div className="relative w-full h-64 overflow-hidden rounded-2xl shadow-lg bg-gray-100">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={index4}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    src={images4[index4]} 
                    alt="Interior Detail 4" 
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default OurMission;
