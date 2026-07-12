import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-card py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-textSecondary text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Shreya Gurbas Patil. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm">
          <a href="#home" className="text-textSecondary hover:text-accent transition-colors">Home</a>
          <a href="#about" className="text-textSecondary hover:text-accent transition-colors">About</a>
          <a href="#projects" className="text-textSecondary hover:text-accent transition-colors">Projects</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
