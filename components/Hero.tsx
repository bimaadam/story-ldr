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
        Selamat Anniversarry yang ke-3 Tahun untuk Bima Adam & Ririn Setiawati pasangan LDR yang sangat mengagumkan
      </p>
      <a href="#pertame">

      <button className="btn btn-primary m-1">Mulai</button>
      <button className="btn btn-primary m-1">Made with Love By Bima Adam Nugraha ❤️ Ririn Setiawati</button>
      </a>
    </div>
  </div>
</div>
  )
}

export default Hero