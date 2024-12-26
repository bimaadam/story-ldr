// components/TestimonialCard.tsx
import React from 'react';

type TestimonialCardProps = {
  name: string;
  message: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, message }) => {
  return (
    <div className="card bg-base-100 shadow-lg p-4 m-2 rounded-lg min-w-[250px] max-w-[300px]"> {/* Gaya untuk kartu */}
      <h3 className="font-bold text-lg text-primary">{name}</h3>
      <p className="text-white">-{message}</p>
    </div>
  );
};

export default TestimonialCard;