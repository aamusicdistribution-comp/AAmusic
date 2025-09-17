import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PlatformLogos from '../components/PlatformLogos';
import Services from '../components/Services';
import VideoSection from '../components/VideoSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <Features />
      <PlatformLogos />
      <Services />
      <VideoSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;