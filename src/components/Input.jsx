import React from 'react';

const Input = ({ type, placeholder, value, onChange, className = '' }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-[#E0C3FC] rounded-full p-3 w-full ${className} focus:outline-none focus:ring-2 focus:ring-[#FDCB82]`}
    />
  );
};

export default Input;
