import React from 'react';
import SectionTitle from './Common/SectionTitle';

const ClientLogos = () => {
  const clients = [
    "My Home",
    "Aparna",
    "Rajapushpa",
    "Vasavi",
    "GHR Titania",
    "Hallmarks",
    "Sriram Chirping (Bangalore)",
    "KMV Vivan (Vijayawada)"
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="py-16 border-t border-b border-gray-100 bg-white overflow-hidden">
      <SectionTitle title="Our Esteemed Clients" subtitle="We are proud to have worked with some of the best brands." />
      
      <div className="relative mt-10 max-w-[100vw] overflow-hidden flex">
        {/* Fading Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        {/* Pure CSS Continuous Marquee Track */}
        <div className="flex w-max animate-marquee">
          {marqueeItems.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center px-10 py-6 mx-4 border border-gray-200 rounded-lg shadow-sm bg-white min-w-[200px]"
            >
              <span className="text-xl font-serif text-heading font-medium whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
