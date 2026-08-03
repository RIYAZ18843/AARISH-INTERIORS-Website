import React from 'react';
import PageHeader from '../components/PageHeader';
import DetailedServicesList from '../components/DetailedServicesList';

const Services = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive interior solutions designed to elevate your lifestyle."
        imagePath="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
      />
      <DetailedServicesList />
    </div>
  );
};

export default Services;
