import React from 'react';

const StatCard = ({ value, label }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center text-white flex flex-col items-center justify-center h-full">
      <div className="text-4xl md:text-5xl font-bold mb-2">{value}</div>
      <div className="text-sm uppercase tracking-wider text-white/80">{label}</div>
    </div>
  );
};

export default StatCard;
