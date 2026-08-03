import React from 'react';
import PageHeader from '../components/PageHeader';
import DetailedServicesList from '../components/DetailedServicesList';
import { siteData } from '../data/siteData';

const Services = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive interior solutions designed to elevate your lifestyle."
        imagePaths={siteData.pageBanners.services}
      />
      <DetailedServicesList />
    </div>
  );
};

export default Services;
