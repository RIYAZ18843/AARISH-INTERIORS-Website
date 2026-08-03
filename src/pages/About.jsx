import React from 'react';
import PageHeader from '../components/PageHeader';
import OurMission from '../components/OurMission';
import TeamSection from '../components/TeamSection';
import LuxurySection from '../components/LuxurySection';
import ExperienceCenter from '../components/ExperienceCenter';

const About = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="About Aarish Interiors" 
        subtitle="Discover our passion for creating extraordinary living spaces."
        imagePath="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
      />
      <OurMission />
      <TeamSection />
    </div>
  );
};

export default About;
