import React from 'react';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ClientLogos from '../components/ClientLogos';
import StatsBanner from '../components/StatsBanner';
import WhyChooseUs from '../components/WhyChooseUs';
import LuxurySection from '../components/LuxurySection';
import AboutAarish from '../components/AboutAarish';
import ExperienceCenter from '../components/ExperienceCenter';
import InteriorServices from '../components/InteriorServices';
import SolutionsGrid from '../components/SolutionsGrid';
import EstimateSection from '../components/EstimateSection';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ClientLogos />
      <StatsBanner />
      <WhyChooseUs />
      <LuxurySection />
      <AboutAarish />
      <ExperienceCenter />
      <InteriorServices />
      <SolutionsGrid />
      <EstimateSection />
      <FinalCTA />
    </>
  );
};

export default Home;
