// pages/api/testimonials.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/firebase'; // Sesuaikan jalur impor sesuai kebutuhan
import { collection, getDocs } from 'firebase/firestore';

type Testimonial = {
  id: string;
  name: string;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Testimonial[] | { error: string }>) {
  try {
    const testimonialsCollection = collection(db, "testimonials");
    const querySnapshot = await getDocs(testimonialsCollection);
    const testimonials: Testimonial[] = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Testimonial[];

    res.status(200).json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials: ", error);
    res.status(500).json({ error: "Failed to fetch testimonials" });
  }
}