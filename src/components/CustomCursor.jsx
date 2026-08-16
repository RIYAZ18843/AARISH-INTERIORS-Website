import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check if it's a touch device, don't show cursor on touch
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const isClickable = 
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('cursor-pointer');
        
      setIsHovered(!!isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Hide on mobile/touch devices entirely via CSS class as well
  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[999999] mix-blend-difference hidden md:block"
      animate={{
        x: mousePosition.x - 16, // Center the cursor (32px width / 2)
        y: mousePosition.y - 16,
        scale: isHovered ? 1.5 : 1,
        backgroundColor: isHovered ? 'rgba(212, 175, 55, 1)' : 'transparent',
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
    />
  );
};

export default CustomCursor;
