import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../logo.png';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="AA Music Logo" 
              className="h-24 w-24 sm:h-20 sm:w-20 mr-4 object-contain bg-transparent"
              style={{ 
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                mixBlendMode: 'multiply'
              }}
            />
            <span className="font-bold text-lg sm:text-xl text-white">
              <span className="hidden sm:inline">AA Music Distribution</span>
              <span className="sm:hidden">AA Music</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-purple-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-gray-800/95 backdrop-blur-md shadow-lg rounded-lg mt-2 p-4 mx-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left py-3 px-2 text-gray-300 hover:text-purple-400 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left py-3 px-2 text-gray-300 hover:text-purple-400 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left py-3 px-2 text-gray-300 hover:text-purple-400 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-3 px-2 text-gray-300 hover:text-purple-400 hover:bg-gray-700/50 rounded-lg transition-colors"
              >
                Contact
              </button>
              <div className="pt-2 border-t border-gray-700">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
