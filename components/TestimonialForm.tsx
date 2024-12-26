import React, { useState } from 'react';
import { addTestimonial } from '@/lib/firebase'; // Sesuaikan jalur impor sesuai kebutuhan

const TestimonialForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset feedback sebelum mencoba mengirim
    setFeedback(null);
    setLoading(true);

    try {
      await addTestimonial(name, message);
      setFeedback({ type: 'success', message: 'Ucapan berhasil terkirim! Terima kasih 😊' });
      setName('');
      setMessage('');
    } catch (error) {
      setFeedback({ type: 'error', message: 'Gagal mengirim ucapan. Silakan coba lagi.' });
      console.error('Error saat mengirim ucapan:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id='testi' onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-base-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Kirim Ucapan</h2>

      {/* Input nama */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nama Anda"
        required
        className="input input-bordered w-full mb-2"
        disabled={loading}
      />

      {/* Input ucapan */}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ucapan Anda"
        required
        className="textarea textarea-bordered w-full mb-2"
        disabled={loading}
      />

      {/* Tombol submit */}
      <button
        type="submit"
        className={`btn ${loading ? 'btn-disabled' : 'btn-primary'} w-full`}
        disabled={loading}
      >
        {loading ? 'Mengirim...' : 'Kirim Ucapan'}
      </button>

      {/* Feedback */}
      {feedback && (
        <div
          className={`mt-4 p-2 rounded-lg ${
            feedback.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}
        >
          {feedback.message}
        </div>
      )}
    </form>
  );
};

export default TestimonialForm;
