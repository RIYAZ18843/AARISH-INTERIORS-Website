import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out rounded-full px-8 py-3";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-[#b06a44] shadow-md hover:shadow-lg",
    secondary: "bg-white text-darkGreen hover:bg-gray-100 shadow-md hover:shadow-lg",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
