import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import homeImage from '../home.jpeg';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${homeImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            Distribute Your
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block sm:inline">
              {" "}Music{" "}
            </span>
            Globally
          </h1>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Amplify your sound across 200+ platforms worldwide. 
            From bedroom producers to chart-toppers, we make your music heard everywhere.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Distributing
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </button>
            
            <button className="w-full sm:w-auto border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
              <Play size={18} className="sm:w-5 sm:h-5" />
              Watch Demo
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-400 mb-4 text-sm sm:text-base">Trusted by thousands of artists worldwide</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
              <span className="text-white font-semibold text-lg sm:text-xl">500K+</span>
              <span className="text-gray-400 text-sm sm:text-base">Songs</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white font-semibold text-lg sm:text-xl">200+</span>
              <span className="text-gray-400 text-sm sm:text-base">Platforms</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white font-semibold text-lg sm:text-xl">150+</span>
              <span className="text-gray-400 text-sm sm:text-base">Countries</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
//hello guysss