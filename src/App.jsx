import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LenisProvider from './components/LenisProvider';
import AIChatbot from './components/AIChatbot';
import WhatsAppButton from './components/WhatsAppButton';

// Pages Lazy Loaded for Performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const GetEstimate = lazy(() => import('./pages/GetEstimate'));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const App = () => {
  return (
    <LenisProvider>
      <Router>
        <ScrollToTop />
        <div className="font-sans text-text antialiased min-h-screen flex flex-col bg-lightBeige">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/get-estimate" element={<GetEstimate />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <AIChatbot />
          <WhatsAppButton />
        </div>
      </Router>
    </LenisProvider>
  );
}

export default App;
