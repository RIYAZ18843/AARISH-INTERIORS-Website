import React from 'react';
import Container from './Common/Container';
import SectionTitle from './Common/SectionTitle';
import { motion } from 'framer-motion';

const imageModules = import.meta.glob('../assets/client-images/*.jpeg', { eager: true, import: 'default' });
const portfolioImages = Object.values(imageModules);

const PortfolioGallery = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <SectionTitle 
          title="Client Projects" 
          subtitle="A curated selection of our finest interior design projects, showcasing our commitment to luxury and detail."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {portfolioImages.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative view-fourth rounded-2xl aspect-[4/3] shadow-lg"
            >
              <img 
                src={img} 
                alt={`Portfolio Project ${index + 1}`} 
              />
              <div className="mask rounded-2xl">
                <h2 className="text-white font-serif text-2xl tracking-widest uppercase mb-4 text-center">Project {index + 1}</h2>
                <p className="text-white/90 text-sm font-light text-center mb-6 max-w-[80%]">Luxury residential interior design</p>
                <a href="#" className="info inline-block text-white font-serif tracking-widest uppercase border border-white/50 px-6 py-2 hover:bg-white hover:text-darkGreen transition-colors">View Details</a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PortfolioGallery;
