// components/TestimonialsList.tsx
import React, { useEffect, useState } from 'react';
import TestimonialCard from './Testimonialcard';


const TestimonialsList = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <p>Loading testimonials...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex overflow-x-auto space-x-4 p-4"> {/* Flexbox untuk looping horizontal */}
      {testimonials.length === 0 ? (
        <p>Tidak ada testimonial yang tersedia.</p>
      ) : (
        testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} name={testimonial.name} message={testimonial.message} />
        ))
      )}
    </div>
  );
};

export default TestimonialsList;