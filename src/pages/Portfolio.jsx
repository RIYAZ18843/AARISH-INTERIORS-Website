import React from 'react';
import PageHeader from '../components/PageHeader';
import PortfolioGallery from '../components/PortfolioGallery';
import { siteData } from '../data/siteData';

const Portfolio = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Client Projects" 
        subtitle="A showcase of our most exquisite interior design transformations."
        imagePaths={siteData.pageBanners.portfolio}
      />
      <PortfolioGallery />
    </div>
  );
};

export default Portfolio;
