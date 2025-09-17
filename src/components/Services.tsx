import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Music, Mic, Radio, TrendingUp, Users, Award } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Music size={48} />,
      title: 'Music Distribution',
      description: 'Distribute your tracks to all major streaming platforms and digital stores worldwide with just one upload.',
      direction: 'left'
    },
    {
      icon: <Mic size={48} />,
      title: 'Playlist Pitching',
      description: 'Get your music heard by playlist curators and increase your chances of being featured on popular playlists.',
      direction: 'right'
    },
    {
      icon: <Radio size={48} />,
      title: 'Radio Promotion',
      description: 'Submit your tracks to radio stations globally and expand your reach to traditional broadcast media.',
      direction: 'left'
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Marketing & Promotion',
      description: 'Comprehensive marketing campaigns including social media promotion, PR, and targeted advertising.',
      direction: 'right'
    },
    {
      icon: <Users size={48} />,
      title: 'Artist Development',
      description: 'Professional guidance on branding, image development, and career strategy from industry experts.',
      direction: 'left'
    },
    {
      icon: <Award size={48} />,
      title: 'Rights Management',
      description: 'Protect your intellectual property with comprehensive rights management and royalty collection services.',
      direction: 'right'
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Our
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block sm:inline">
              {" "}Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Comprehensive solutions to take your music career to the next level
          </p>
        </motion.div>

        <div ref={ref} className="space-y-12 sm:space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12"
              initial={{ 
                opacity: 0, 
                x: service.direction === 'left' ? -50 : 50 
              }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <div className={`flex-1 w-full ${service.direction === 'right' ? 'lg:order-2' : ''}`}>
                <div className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border border-gray-700">
                  <div className="text-purple-600 mb-4 sm:mb-6 flex justify-center lg:justify-start">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                      {React.cloneElement(service.icon, { size: 40 })}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center lg:text-left">{service.title}</h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center lg:text-left">{service.description}</p>
                </div>
              </div>
              
              <div className={`flex-1 w-full ${service.direction === 'right' ? 'lg:order-1' : ''}`}>
                <motion.div
                  className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 sm:p-8 rounded-2xl h-48 sm:h-64 flex items-center justify-center border border-gray-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-purple-400 opacity-50">
                    {React.cloneElement(service.icon, { size: 80 })}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;