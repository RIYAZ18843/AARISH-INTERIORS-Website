import React from 'react';
import SectionTitle from './Common/SectionTitle';

const LogoItem = ({ client }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div className="flex items-center justify-center px-10 py-6 mx-4 border border-gray-200 rounded-lg shadow-sm bg-white min-w-[220px] h-[120px] group cursor-pointer transition-colors hover:border-primary/30">
      {!imgError ? (
        <img 
          src={`https://logo.clearbit.com/${client.domain}`} 
          alt={client.name} 
          className="max-h-14 max-w-[150px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-xl font-serif text-heading font-medium whitespace-nowrap text-gray-500 group-hover:text-primary transition-colors">
          {client.name}
        </span>
      )}
    </div>
  );
};

const ClientLogos = () => {
  const clients = [
    { name: "My Home", domain: "myhomeconstructions.com" },
    { name: "Aparna", domain: "aparnaconstructions.com" },
    { name: "Rajapushpa", domain: "rajapushpa.in" },
    { name: "Vasavi", domain: "vasavigroup.com" },
    { name: "GHR Titania", domain: "ghrinfra.com" },
    { name: "Hallmarks", domain: "hallmarkbuilders.in" },
    { name: "Shriram Properties", domain: "shriramproperties.com" },
    { name: "KMV Vivan", domain: "kmvgroup.com" }
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
