import React from 'react';
import { FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-500 text-sm pt-6 pb-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
        </div>
        
        {/* Copyright text */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2024 Café Otočka. Všechna práva vyhrazena.</p>
        </div>
        
        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a href="https://maps.app.goo.gl/EzQKgwxrFgV72ti26" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaMapMarkerAlt size={20} />
          </a>
          <a href="https://www.instagram.com/cafeotocka" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
