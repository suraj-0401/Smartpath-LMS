import React from 'react';

const HeroSection = () => {
  return (
    // Hero Section
    <div className="relative min-h-screen bg-[#faf8ff] grid place-items-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEgTCAyMCAxIiBzdHJva2U9IiNlM2UzZTMiIHN0cm9rZS13aWR0aD0iMC41Ii8+PHBhdGggZD0iTSAxIDAgTCAxIDIwIiBzdHJva2U9IiNlM2UzZTMiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[64px] font-bold leading-tight mb-6">
            Transform Your
            <br />
            Learning Journey
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Experience personalized learning with AI-powered insights and expert guidance. Join us to unlock your full potential.
          </p>

          <button className="bg-[#8B5CF6] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#7C3AED] transition-colors flex items-center gap-2 mx-auto">
            Start Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <p className="mt-12 text-[#8B5CF6] font-medium">
            20+ students already learning
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
