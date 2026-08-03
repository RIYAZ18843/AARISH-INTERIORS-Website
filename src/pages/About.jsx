import React from 'react';
import PageHeader from '../components/PageHeader';
import OurMission from '../components/OurMission';
import TeamSection from '../components/TeamSection';
import LuxurySection from '../components/LuxurySection';
import ExperienceCenter from '../components/ExperienceCenter';
import { siteData } from '../data/siteData';

const About = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="About Aarish Interiors" 
        subtitle="Discover our passion for creating extraordinary living spaces."
        imagePaths={siteData.pageBanners.about}
      />
      <OurMission />
      <TeamSection />
    </div>
  );
};

export default About;
