import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PlatformLogos: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const platforms = [
    { name: 'Spotify', logo: '🎵' },
    { name: 'Apple Music', logo: '🍎' },
    { name: 'YouTube Music', logo: '▶️' },
    { name: 'TikTok', logo: '🎶' },
    { name: 'Amazon Music', logo: '📦' },
    { name: 'Deezer', logo: '🎧' },
    { name: 'Tidal', logo: '🌊' },
    { name: 'SoundCloud', logo: '☁️' },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Available on All Major Platforms
          </h2>
          <p className="text-lg text-gray-300">
            Your music will be distributed to 200+ streaming platforms worldwide
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300 border border-gray-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-2">{platform.logo}</div>
              <span className="text-sm font-medium text-gray-300">{platform.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformLogos;