import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';
import Button from './Common/Button';
import Container from './Common/Container';
import { Menu, X } from 'lucide-react';
import Logo from './Common/Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'} bg-white/80 backdrop-blur-lg shadow-sm border-b border-white/20`}>
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Logo className="h-10 w-10 md:h-12 md:w-12" light={false} />
            <span className="font-serif tracking-wide text-2xl md:text-3xl text-heading font-medium">Aarish Interiors</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-8">
            {siteData.navLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.href}
                className="font-medium transition-colors hover:text-primary text-text hover:scale-105 transform whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden xl:block">
            <Link to="/get-estimate">
              <Button variant="primary" className="whitespace-nowrap">
                Get Estimate
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="xl:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={28} className="text-heading" />
            ) : (
              <Menu size={28} className="text-heading" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
            {siteData.navLinks.map((link, index) => (
              <Link 
                key={index} 
                to={link.href}
                className="font-medium text-text hover:text-primary py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/get-estimate" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full mt-4">
                Get Estimate
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
