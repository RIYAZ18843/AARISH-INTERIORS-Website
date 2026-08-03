import React from 'react';

const SolutionCard = ({ icon: Icon, label, image }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-2">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-5 shadow-md border-[3px] border-white group-hover:border-primary transition-colors duration-300 relative">
        <img 
          src={image} 
          alt={label} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>
      <span className="text-sm md:text-base font-medium text-heading text-center group-hover:text-primary transition-colors duration-300">{label}</span>
    </div>
  );
};

export default SolutionCard;
