import React from 'react';
import SectionTitle from './Common/SectionTitle';

// Import local client logos
import logo1 from '../assets/client-logos/client1.webp';
import logo2 from '../assets/client-logos/New-logo-1.webp';
import logo3 from '../assets/client-logos/aparna-logo.svg';
import logo4 from '../assets/client-logos/hallmark-builders.webp';
import logo5 from '../assets/client-logos/image.webp';
import logo6 from '../assets/client-logos/logo (2).webp';

const LogoItem = ({ client }) => {
  return (
    <div className="flex items-center justify-center px-10 py-6 mx-4 border border-gray-200 rounded-lg shadow-sm bg-white min-w-[220px] h-[120px] group cursor-pointer transition-colors hover:border-primary/30">
      <img 
        src={client.logo} 
        alt={client.name} 
        className="max-h-16 max-w-[160px] object-contain transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
};

const ClientLogos = () => {
  const clients = [
    { name: "My Home Group", logo: logo2 },
    { name: "Aparna Constructions", logo: logo3 },
    { name: "Hallmark Builders", logo: logo4 },
    { name: "Rajapushpa", logo: logo5 },
    { name: "Shriram Properties", logo: logo6 },
    { name: "Vasavi", logo: logo1 }
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="py-16 border-t border-b border-gray-100 bg-white overflow-hidden">
      <SectionTitle title="Our Esteemed Clients" subtitle="We are proud to have worked with some of the best brands." />
      
      <div className="relative mt-10 max-w-[100vw] overflow-hidden flex">
        {/* Fading Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Pure CSS Continuous Marquee Track */}
        <div className="flex w-max animate-marquee">
          {marqueeItems.map((client, index) => (
            <LogoItem key={index} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
