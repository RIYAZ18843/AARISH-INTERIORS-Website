import React from 'react';
import PageHeader from '../components/PageHeader';
import EstimateSection from '../components/EstimateSection';
import FinalCTA from '../components/FinalCTA';
import { siteData } from '../data/siteData';

const Contact = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Contact Us" 
        subtitle="We would love to hear from you. Let's start the conversation."
        imagePaths={siteData.pageBanners.contact}
      />
      <EstimateSection />
      <FinalCTA />
    </div>
  );
};

export default Contact;
