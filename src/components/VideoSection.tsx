import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VideoSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, purple 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            See How We Make
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Music Magic
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Watch how thousands of artists are building their careers with AA Music Distribution
          </p>

          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 p-1 rounded-2xl">
              <div className="bg-gray-800 rounded-xl aspect-video overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23111111'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-family='Arial' font-size='48'%3ELoading Video...%3C/text%3E%3C/svg%3E"
                >
                  <source src="/sample.mp4" type="video/mp4" />
                  <div className="flex items-center justify-center h-full bg-gray-800 text-white">
                    <p>Video not supported. Please check your internet connection.</p>
                  </div>
                </video>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-500/20 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.8, 0.5, 0.8],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <div className="text-3xl font-bold text-white mb-2">2M+</div>
              <div className="text-gray-400">Tracks Distributed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Active Artists</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">$10M+</div>
              <div className="text-gray-400">Royalties Paid</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
