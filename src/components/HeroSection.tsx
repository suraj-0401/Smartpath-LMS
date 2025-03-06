import React from 'react';

// Placeholder for the progress bar data
const progressData = [
  { name: 'Introduction', type: 'MP3', size: '400Mb', progress: 100 },
  { name: 'Workspace', type: 'PDF', size: '400Mb', progress: 100 },
  { name: 'Panels & Tools', type: 'MP4', size: '400Mb', progress: 100 },
  { name: 'Customization', type: 'MP4', size: '400Mb', progress: 100 },
];

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Section: Text, Logos, and Buttons */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-blue-600">Revolutionize Education</span>
            <br />
            <span className="text-black">with our LMS</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Revolutionize education with our advanced LMS—integrate cutting-edge tools, optimize administration, and enhance learning outcomes in a single, scalable platform built for growth.
          </p>
          
          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
              Book a demo →
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Start free trial
            </button>
          </div>
        </div>

        {/* Right Section: Image, Progress Circle, and Floating Card */}
        <div className="lg:w-1/2 relative flex justify-center">
          {/* Background Image (Replace with actual image URL) */}
          <img
            src="https://images.prismic.io/thinkific/Z6zCI5bqstJ9-iQD_GTM-3273Plus-ifiedHomepageImage.jpg?auto=format,compress"
            alt="Smiling Woman"
            className="rounded-3xl shadow-lg w-full max-w-md"
          />
          {/* Progress Circle */}
          <div className="absolute top-0 left-0 bg-white p-4 rounded-xl shadow-lg transform -translate-x-1/4 -translate-y-1/4">
            <div className="relative w-20 h-20">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  className="text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="83, 100"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20" className="text-blue-600 text-sm font-bold text-center" textAnchor="middle">
                  83%
                </text>+
              </svg>
            </div>
            <p className="text-center text-gray-600 mt-2">Enrollments Started</p>
          </div>
          {/* Floating Card with Progress Bars */}
          <div className="absolute bottom-0 right-0 bg-white p-4 rounded-xl shadow-lg transform translate-x-1/4 translate-y-1/4 w-64">
            {progressData.map((item, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-700 font-semibold">{item.name}</span>
                  <span className="text-gray-500 text-sm">{item.type} • {item.size}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;