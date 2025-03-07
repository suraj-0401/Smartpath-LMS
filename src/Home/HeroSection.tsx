import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-blue-600">Revolutionize Education</span>
            <br />
            <span className="text-black">with our LMS</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl">
            Revolutionize education with our advanced LMS—integrate cutting-edge tools, optimize administration, and enhance learning outcomes in a single, scalable platform built for growth.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <button 
              className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 text-sm sm:text-base"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a demo →
            </button>
            <button 
              className="border border-gray-300 text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 text-sm sm:text-base"
            >
              Start free trial
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 relative flex justify-center mt-6 lg:mt-0">
          <img
            src="https://images.prismic.io/thinkific/Z6zCI5bqstJ9-iQD_GTM-3273Plus-ifiedHomepageImage.jpg?auto=format,compress"
            alt="Smiling Woman"
            className="rounded-3xl shadow-lg w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-md object-cover"
          />          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;