import React from 'react';
import PageHeader from '../components/PageHeader';
import EstimateSection from '../components/EstimateSection';
import { siteData } from '../data/siteData';

const GetEstimate = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Get Your Free Estimate" 
        subtitle="Take the first step towards your dream space."
        imagePaths={siteData.pageBanners.estimate}
      />
      <EstimateSection />
    </div>
  );
};

export default GetEstimate;
