// pages/index.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import TestimonialsList from '@/components/TestimonialsList'; // Impor komponen untuk menampilkan testimonial
import TestimonialForm from '@/components/TestimonialForm'; // Impor komponen formulir testimonial

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      
      {/* Bagian untuk menampilkan testimonial */}
      <section className="bg-base-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Ucapan Teman dan Keluarga</h2>
          <TestimonialsList /> {/* Menampilkan testimonial dari Firestore */}
        </div>
      </section>

      {/* Bagian untuk formulir testimonial */}
      <section className=" bg-base-200 py-12">
        <div className="container mx-auto">
          <TestimonialForm /> {/* Menampilkan formulir untuk menambahkan testimonial */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;