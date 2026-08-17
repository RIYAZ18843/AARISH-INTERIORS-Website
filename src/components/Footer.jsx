import React from 'react';
import { siteData } from '../data/siteData';
import Container from './Common/Container';
import { MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Common/Logo';

const Footer = () => {
  return (
    <footer className="bg-darkGreen text-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Logo className="h-12 w-12" light={true} />
              <span className="font-serif tracking-wide text-3xl font-medium">Aarish Interiors</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Creating luxurious and functional spaces tailored to your unique lifestyle. Transform your home with Aarish Interiors.
            </p>
            <div className="flex gap-4">
              {siteData.social.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a key={index} href={social.link} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors duration-300">
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {siteData.navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {siteData.services.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                <span>{siteData.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-primary shrink-0" size={20} />
                <a href="https://wa.me/919010952596?text=Hello%20Aarish%20Interiors!%20%F0%9F%91%8B%0AI%20am%20looking%20for%20interior%20design%20services%20for%20my%20property%3A%0A%0A%5B%20%5D%201%20BHK%0A%5B%20%5D%202%20BHK%0A%5B%20%5D%203%20BHK%2B%0A%5B%20%5D%20Villa%0A%0APlease%20share%20more%20details." target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {siteData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-primary shrink-0" size={20} />
                <span>{siteData.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Aarish Interiors. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
