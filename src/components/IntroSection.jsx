import React from 'react';
import { siteData } from '../data/siteData';
import Container from './Common/Container';
import { motion } from 'framer-motion';

const IntroSection = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-2xl md:text-3xl text-heading leading-relaxed font-serif font-medium">
            &quot;{siteData.intro.text}&quot;
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default IntroSection;
