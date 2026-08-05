import React, { useRef, useState } from 'react';
import Container from './Common/Container';
import Button from './Common/Button';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const EstimateSection = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // REPLACE THESE PLACEHOLDERS WITH YOUR ACTUAL KEYS!
    const SERVICE_ID = 'service_ltlwp4w'; // From your screenshot
    const TEMPLATE_ID = 'template_mhyvami'; // Inserted from your screenshot!
    const PUBLIC_KEY = 'q3kILXJuNLcLxXviW'; // Inserted from your screenshot!

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          form.current.reset();
          
          // Clear success message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000);
      }, (error) => {
          setIsSubmitting(false);
          setSubmitStatus('error');
          console.error(error.text);
      });
  };

  return (
    <section className="py-24 bg-lightBeige relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 lg:pr-12"
          >
            <h2 className="text-4xl lg:text-6xl font-serif font-medium text-heading mb-6 leading-tight">
              Get an estimate for your <span className="text-primary italic">Living Room</span>
            </h2>
            <p className="text-lg text-text mb-8 leading-relaxed font-light">
              Provide us with a few details about your space and requirements, and our experts will get back to you with a tailored estimate.
            </p>
            <div className="hidden lg:block w-full h-72 bg-gray-200 rounded-3xl mt-12 overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop" alt="Estimate Design" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-heading mb-8">Fill the details below</h3>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name*</label>
                    <input type="text" name="first_name" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name*</label>
                    <input type="text" name="last_name" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address*</label>
                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number*</label>
                    <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type*</label>
                  <select name="property_type" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none bg-white">
                    <option value="">Select Property Type</option>
                    <option value="Apartment (1BHK)">Apartment (1BHK)</option>
                    <option value="Apartment (2BHK)">Apartment (2BHK)</option>
                    <option value="Apartment (3BHK+)">Apartment (3BHK+)</option>
                    <option value="Villa / Independent House">Villa / Independent House</option>
                    <option value="Commercial Space">Commercial Space</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Scope / Message</label>
                  <textarea name="message" rows="4" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none" placeholder="Tell us a bit about what you are looking for..."></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full py-4 text-lg mt-4" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending Request...' : 'Get Free Estimate'}
                </Button>

                {submitStatus === 'success' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-50 text-green-700 rounded-xl mt-4 border border-green-200">
                    <p className="font-medium text-center">✅ Thank you! Your estimate request has been sent.</p>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-50 text-red-700 rounded-xl mt-4 border border-red-200">
                    <p className="font-medium text-center">❌ Oops! Something went wrong. Please check your EmailJS keys or try again.</p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default EstimateSection;
