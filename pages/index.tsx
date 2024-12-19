import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Footer />
    </div>
  );
};

export default HomePage;