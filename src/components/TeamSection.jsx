import React from 'react';
import Container from './Common/Container';
import SectionTitle from './Common/SectionTitle';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Aarish Kumar",
    role: "Founder & Lead Designer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Priya Sharma",
    role: "Senior Interior Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Rahul Verma",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
  }
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-lightBeige overflow-hidden">
      <Container>
        <SectionTitle 
          title="Meet the Visionaries" 
          subtitle="Our team of passionate designers and architects dedicated to bringing your dreams to life."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6 shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkGreen/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-serif font-medium text-heading mb-1">{member.name}</h4>
                <p className="text-primary font-medium tracking-wide">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
