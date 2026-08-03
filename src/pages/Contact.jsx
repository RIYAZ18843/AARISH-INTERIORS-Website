import React from 'react';
import PageHeader from '../components/PageHeader';
import EstimateSection from '../components/EstimateSection';
import FinalCTA from '../components/FinalCTA';

const Contact = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Contact Us" 
        subtitle="We would love to hear from you. Let's start the conversation."
        imagePath="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
      />
      <EstimateSection />
      <FinalCTA />
    </div>
  );
};

export default Contact;
