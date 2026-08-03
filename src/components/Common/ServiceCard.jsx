import React from 'react';
import Button from './Button';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full group border border-gray-100">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-8 flex flex-col flex-grow text-center">
        <h3 className="text-2xl font-serif font-medium text-heading mb-4">{title}</h3>
        <p className="text-text mb-8 flex-grow text-sm leading-relaxed">{description}</p>
        <div className="mt-auto">
          <Button variant="primary" className="w-full sm:w-auto px-8 py-3 text-sm tracking-wide">
            Discover More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
