import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group perspective-1000 h-[260px] w-full cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
        
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center text-left">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary transition-transform duration-300 group-hover:scale-110">
            <Icon size={26} strokeWidth={1.5} />
          </div>
          <h4 className="text-xl font-serif font-medium text-heading mb-3">{title}</h4>
          {/* A small hint text so users know to hover */}
          <div className="text-primary text-sm font-medium opacity-80 mt-auto flex items-center gap-1">
            <span>Hover to reveal</span>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-primary p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center text-white">
          <Icon size={32} strokeWidth={1.5} className="mb-4 text-white/90" />
          <h4 className="text-lg font-bold mb-3">{title}</h4>
          <p className="text-white/90 leading-relaxed font-light text-sm md:text-base">{description}</p>
        </div>

      </div>
    </div>
  );
};

export default FeatureCard;
