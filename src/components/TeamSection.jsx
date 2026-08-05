import React from 'react';
import Container from './Common/Container';
import SectionTitle from './Common/SectionTitle';
import { motion } from 'framer-motion';
import { Phone, Award, Clock, Users } from 'lucide-react';

const ceoData = {
  name: "Azhar",
  role: "CEO & Founder",
  description: "Design your home today. Expert in Home Decor, Residential & Commercial interiors, and 2D & 3D Modeling.",
  contact: "+91 9010952596",
  image: "/ceo-photo.png" // Updated to .png based on the uploaded file
};

const TeamSection = () => {
  return (
    <section className="py-24 bg-lightBeige overflow-hidden">
      <Container>
        <SectionTitle 
          title="Meet Our Founder" 
          subtitle="Passionate about bringing your dream spaces to life with quality, creativity, and dedication."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
          {/* Image Card (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md mx-auto group"
          >
            <div className="relative overflow-hidden rounded-3xl aspect-[3/4] shadow-2xl">
              <div className="absolute inset-0 bg-gray-200 animate-pulse -z-10"></div>
              <img 
                src={ceoData.image} 
                alt={ceoData.name} 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkGreen/90 via-darkGreen/40 to-transparent opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                 <h4 className="text-4xl font-serif font-medium mb-1">{ceoData.name}</h4>
                 <p className="text-primary font-medium tracking-wide text-lg mb-6">{ceoData.role}</p>
                 
                 <a 
                   href={`https://wa.me/919010952596`} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-3 text-white font-medium bg-white/20 hover:bg-primary px-5 py-3 rounded-full backdrop-blur-md transition-all duration-300"
                 >
                   <Phone size={18} />
                   <span>{ceoData.contact}</span>
                 </a>
              </div>
            </div>
          </motion.div>

          {/* Experience Details (Right Side) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-serif font-medium text-heading mb-6">
              A Legacy of Excellence in Design
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {ceoData.description} With years of expertise in transforming ordinary spaces into luxurious habitats, Azhar has led Aarish Interiors to become a trusted name in the industry. His visionary approach blends modern aesthetics with unparalleled functionality.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-heading mb-1">9+ Years of Experience</h4>
                  <p className="text-gray-600">Delivering high-end interior and architectural design solutions across residential and commercial sectors.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-heading mb-1">300+ Happy Homes</h4>
                  <p className="text-gray-600">Successfully crafted personalized spaces for hundreds of satisfied families and businesses.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-heading mb-1">Expert Craftsmanship</h4>
                  <p className="text-gray-600">Leading a team of 200+ experts to ensure every detail is executed with precision and premium quality.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
