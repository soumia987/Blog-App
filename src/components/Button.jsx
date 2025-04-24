import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`btn bg-gradient-to-r from-[#FDCB82] via-[#F9D1D1] to-[#E0C3FC] ${className} py-2 px-4 rounded-full text-white font-medium transition-all duration-300 hover:bg-gradient-to-l hover:from-[#FF7AD1] hover:to-[#FF5EFA]`}
    >
      {children}
    </button>
  );
};

export default Button;
