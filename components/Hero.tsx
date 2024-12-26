import React from 'react'

const Hero = () => {
  return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="bg.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Happy Anniversary 3 Years</h1>
      <p className="py-6">
      Selamat Anniversary ke-3 Tahun untuk Bima Adam & Ririn Setiawati! 🎉✨ Kalian berdua adalah bukti hidup bahwa cinta bisa menembus jarak, waktu, dan tantangan. Pasangan LDR paling solid yang selalu bikin iri karena chemistry-nya luar biasa! 💕 Semoga hubungan ini terus langgeng, penuh kebahagiaan, dan makin banyak momen indah yang kalian ciptakan bersama. Cheers untuk cinta sejati kalian! 🥂❤️
      </p>
      <a href="#pertame">

      <button className="btn btn-primary m-1 rounded-lg">Mulai</button></a>
      <a href="#testi">
      <button
      className="btn btn-primary m-1">Kirim Ucapan</button>
      </a>
      
    </div>
  </div>
</div>
  )
}

export default Hero