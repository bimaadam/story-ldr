// firebase.ts
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNCKFR8CXooANYeHyGndgbV3Ih7KX3DXw",
    authDomain: "testi-fe1d0.firebaseapp.com",
    projectId: "testi-fe1d0",
    storageBucket: "testi-fe1d0.firebasestorage.app",
    messagingSenderId: "863476470181",
    appId: "1:863476470181:web:9d5e0bd3028f6149d1984c",
    measurementId: "G-9ZPBXDBW1D"
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