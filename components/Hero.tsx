import React from 'react'

const Hero = () => {
  return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="bg.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Gallery LDR First Meet</h1>
      <p className="py-6">
        Galeri Bima Adam & Ririn Setiawati pasangan LDR yang sangat mengagumkan
      </p>
      <a href="#pertame">

      <button className="btn btn-primary">Get Started</button>
      </a>
    </div>
  </div>
</div>
  )
}

export default Hero