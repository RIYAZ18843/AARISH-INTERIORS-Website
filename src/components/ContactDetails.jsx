import React from 'react';
import Container from './Common/Container';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteData } from '../data/siteData';
import Button from './Common/Button';

const ContactDetails = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Details & Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl font-serif font-medium text-heading mb-8">Get In Touch</h2>
            <p className="text-lg text-text font-light mb-10 leading-relaxed">
              Whether you have a clear vision or need guidance starting out, we're here to help. Reach out to discuss your next project.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-lightBeige flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-heading mb-1">Our Studio</h4>
                  <p className="text-text font-light">{siteData.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-lightBeige flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-heading mb-1">Phone</h4>
                  <p className="text-text font-light">{siteData.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-lightBeige flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-heading mb-1">Email</h4>
                  <p className="text-text font-light">{siteData.contact.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-lightBeige flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-heading mb-1">Business Hours</h4>
                  <p className="text-text font-light">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors bg-lightBeige" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors bg-lightBeige" />
              </div>
              <textarea placeholder="How can we help you?" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors bg-lightBeige resize-none"></textarea>
              <Button variant="primary" className="w-full py-4 tracking-wide text-lg">Send Message</Button>
            </form>
          </motion.div>

          {/* Right Map */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 min-h-[500px]"
          >
            {/* Using an image placeholder for the map to match the aesthetic */}
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative bg-gray-200">
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
                 alt="Location Map Placeholder" 
                 className="w-full h-full object-cover grayscale opacity-80" 
               />
               <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
               {/* Map Pin Marker Overlay */}
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl relative">
                   <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
                   <MapPin size={32} className="text-primary" />
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactDetails;
