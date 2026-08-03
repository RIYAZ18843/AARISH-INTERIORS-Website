import React from 'react';

const SectionTitle = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-heading'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-200' : 'text-text'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
