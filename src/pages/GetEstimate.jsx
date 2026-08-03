import React from 'react';
import PageHeader from '../components/PageHeader';
import EstimateSection from '../components/EstimateSection';

const GetEstimate = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Get Your Free Estimate" 
        subtitle="Take the first step towards your dream space."
        imagePath="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
      />
      <EstimateSection />
    </div>
  );
};

export default GetEstimate;
