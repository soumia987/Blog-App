import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#FDCB82] via-[#F9D1D1] to-[#E0C3FC] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-white">Blog</h1>
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-[#FF7AD1]">Home</Link>
          <Link to="/login" className="text-white hover:text-[#FF7AD1]">Login</Link>
          <Link to="/register" className="text-white hover:text-[#FF7AD1]">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
