import React from 'react';
import PageHeader from '../components/PageHeader';
import PortfolioGallery from '../components/PortfolioGallery';

const Portfolio = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Client Projects" 
        subtitle="A showcase of our most exquisite interior design transformations."
        imagePath="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
      />
      <PortfolioGallery />
    </div>
  );
};

export default Portfolio;
