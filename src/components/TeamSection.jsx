import React from 'react';
import Container from './Common/Container';
import SectionTitle from './Common/SectionTitle';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const teamMembers = [
  {
    name: "Azhar",
    role: "CEO & Founder",
    description: "Design your home today. Expert in Home Decor, Residential & Commercial interiors, and 2D & 3D Modeling.",
    contact: "+91 9010952596",
    image: "/ceo-photo.jpg" // The user needs to place their image in public/ceo-photo.jpg
  }
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-lightBeige overflow-hidden">
      <Container>
        <SectionTitle 
          title="Meet Our Founder" 
          subtitle="Passionate about bringing your dream spaces to life with quality, creativity, and dedication."
        />
        
        <div className="flex justify-center mt-16">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-md w-full group"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-8 shadow-2xl">
                {/* Fallback background in case image is missing */}
                <div className="absolute inset-0 bg-gray-200 animate-pulse -z-10"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to a placeholder if the user hasn't added the image yet
                    e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkGreen/90 via-darkGreen/40 to-transparent opacity-90 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                   <h4 className="text-4xl font-serif font-medium mb-1">{member.name}</h4>
                   <p className="text-primary font-medium tracking-wide text-lg mb-6">{member.role}</p>
                   
                   <p className="text-gray-200 text-base leading-relaxed mb-6 font-light">
                     {member.description}
                   </p>
                   
                   <a 
                     href={`https://wa.me/919010952596`} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-3 text-white font-medium bg-white/20 hover:bg-primary px-5 py-3 rounded-full backdrop-blur-md transition-all duration-300"
                   >
                     <Phone size={18} />
                     <span>{member.contact}</span>
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
