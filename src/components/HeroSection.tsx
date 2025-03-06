import React from 'react';
const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-blue-600">Revolutionize Education</span>
            <br />
            <span className="text-black">with our LMS</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Revolutionize education with our advanced LMS—integrate cutting-edge tools, optimize administration, and enhance learning outcomes in a single, scalable platform built for growth.
          </p>
          
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Book a demo →
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Start free trial
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 relative flex justify-center">
          <img
            src="https://images.prismic.io/thinkific/Z6zCI5bqstJ9-iQD_GTM-3273Plus-ifiedHomepageImage.jpg?auto=format,compress"
            alt="Smiling Woman"
            className="rounded-3xl shadow-lg w-full max-w-md"
          />          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;