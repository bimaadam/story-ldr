// lib/firebase.ts
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Cek apakah aplikasi sudah diinisialisasi
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

const testimonialsCollection = collection(db, "testimonials");

export const addTestimonial = async (name: string, message: string) => {
  try {
    const docRef = await addDoc(testimonialsCollection, {
      name,
      message,
      createdAt: new Date(),
    });
    console.log("Testimonial ditambahkan dengan ID: ", docRef.id);
  } catch (e) {
    console.error("Error menambahkan testimonial: ", e);
  }
};

export { db };