import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      href="https://wa.me/919010952596?text=Hello%20Aarish%20Interiors!%20%E2%9C%A8%0A%0AI%20was%20visiting%20your%20website%20(aarishinteriors.in)%20and%20looking%20at%20your%20beautiful%20portfolio.%20I%20am%20interested%20in%20interior%20design%20and%20custom%20cupboard%20%2F%20woodwork%20for%20my%20property.%0A%0AMy%20property%20type%20is%3A%0A%5B%20%5D%201%20BHK%0A%5B%20%5D%202%20BHK%0A%5B%20%5D%203%20BHK%2B%0A%5B%20%5D%20Villa%20%2F%20Independent%20House%0A%0ACould%20you%20please%20share%20more%20details%20about%20your%20design%20process%2C%20packages%2C%20and%20consultation%3F%20Looking%20forward%20to%20hearing%20from%20you!" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </motion.a>
  );
};

export default WhatsAppButton;
