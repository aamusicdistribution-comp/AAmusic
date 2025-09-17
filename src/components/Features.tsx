import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, DollarSign, BarChart3, Headphones, Shield, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Globe size={40} />,
      title: 'Global Distribution',
      description: 'Distribute your music to 200+ platforms including Spotify, Apple Music, and more across 150+ countries worldwide.',
    },
    {
      icon: <DollarSign size={40} />,
      title: 'Keep 100% Royalties',
      description: 'You keep 100% of your royalties. No hidden fees, no revenue sharing. Your music, your money.',
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'Real-time Analytics',
      description: 'Track your performance with detailed analytics, streaming data, and revenue reports in real-time.',
    },
    {
      icon: <Headphones size={40} />,
      title: '24/7 Support',
      description: 'Get expert support from our music industry professionals whenever you need assistance.',
    },
    {
      icon: <Shield size={40} />,
      title: 'Content Protection',
      description: 'Advanced content ID and copyright protection to safeguard your intellectual property.',
    },
    {
      icon: <Zap size={40} />,
      title: 'Fast Release',
      description: 'Get your music live on all platforms in 24-48 hours with our lightning-fast distribution system.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block sm:inline">
              {" "}Succeed
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            From distribution to promotion, we provide all the tools you need to build a successful music career.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
              variants={itemVariants}
            >
              <div className="text-purple-600 mb-4 flex justify-center sm:justify-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  {React.cloneElement(feature.icon, { size: 32 })}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 text-center sm:text-left">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base text-center sm:text-left">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;