import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import handshakeBg from '../assets/handshake-bg.png';

const FinalCTA = () => {
  return (
    <section className="relative w-full min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-white py-20 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={handshakeBg} 
          alt="Partnership Handshake" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Glassy Centered Card - Light Theme */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl mx-auto bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-10 md:p-16 lg:p-20 text-center shadow-2xl"
      >
        <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif font-medium text-heading mb-6 leading-tight">
          Ready to Design Your <br className="hidden md:block" /> Dream Space?
        </h2>
        
        <p className="text-base md:text-lg lg:text-xl text-text mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Let's work together to create an interior that perfectly matches your lifestyle and aspirations.
        </p>

        <div className="flex items-center justify-center">
          <a href="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-full shadow-lg hover:-translate-y-1 transition-all duration-300 text-lg">
            Start Your Project <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
