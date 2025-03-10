import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const features = [
    'AI-Powered Attendance Tracking',
    'Intelligent Performance Insights',
    'Automated Parent Updates',
    'Adaptive Digital Learning'
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/50 to-white" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(128, 0, 255, 0.05) 2%, transparent 0%)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-[#4A4A4A]">Transform Your</span>
              <br />
              <span className="bg-gradient-to-r from-[#8000FF] to-[#9747FF] bg-clip-text text-transparent">
                School Management
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Revolutionize education with our advanced LMS—integrate cutting-edge tools, 
              optimize administration, and enhance learning outcomes.
            </motion.p>

            {/* Feature List */}
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8000FF]/10 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-[#8000FF]" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="px-8 py-4 bg-[#8000FF] text-white rounded-full font-medium 
                         hover:bg-[#6700D1] transition-all duration-300 shadow-lg 
                         hover:shadow-[#8000FF]/25 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Now
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Smart Path Platform"
                className="rounded-2xl shadow-2xl object-cover h-[600px] w-full"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8000FF]/10 to-transparent rounded-2xl" />
            </div>

            {/* Background Decorations */}
            <div className="absolute -z-10 top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#8000FF]/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 bottom-0 left-0 transform -translate-x-1/2 w-72 h-72 bg-[#9747FF]/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;