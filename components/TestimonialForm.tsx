// components/TestimonialForm.tsx
import React, { useState } from 'react';
import { addTestimonial } from '@/lib/firebase'; // Sesuaikan jalur impor sesuai kebutuhan

const TestimonialForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addTestimonial(name, message);
    setName('');
    setMessage('');
  };

  return (
    <form id='testi' onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-base-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Kirim Ucapan</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nama Anda"
        required
        className="input input-bordered w-full mb-2"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ucapan Anda"
        required
        className="textarea textarea-bordered w-full mb-2"
      />
      <button type="submit" className="btn btn-primary w-full">Kirim Ucapan</button>
    </form>
  );
};

export default TestimonialForm;